
drop view if exists vw_leaderboard;
create view vw_leaderboard as
with cte_rival as (
    select tournament_id, player_id, JSON_ARRAYAGG(r.rival) as player_rival
    from (
    select tournament_id, player1_id as player_id, player2_id as rival from matches
      union all
    select tournament_id, player2_id, player1_id from matches
   ) as r
   group by tournament_id, player_id
), cte_current as (
    select
        tournament_id, player_id, sum(current_score) as current_score, max(skip) as skip
    from (
    select
        tournament_id,
        player1_id as player_id,
        case
             when result = 'player1' then 1
             when result = 'draw' then 0.5
             else 0
        end as current_score,
        skip
    from matches
    union all
    select
        tournament_id,
        player2_id player_id,
        case
             when result = 'player2' then 1
             when result = 'draw' then 0.5
             else 0
        end as current_score,
        skip
    from matches
    ) as t
    group by tournament_id, player_id
)

select
     t.tournament_id,
     p.player_id,
     p.full_name,
     p.rating as score,
     coalesce(c.current_score, 0) as current_score,
     coalesce(c.skip, false) as skip,
     coalesce(r.player_rival, '[]') as player_rival
from tournament_participants t
inner join players p on t.player_id = p.player_id
left join cte_current c on c.player_id = t.player_id and c.tournament_id = t.tournament_id
left join cte_rival r on r.player_id = t.player_id and r.tournament_id = t.tournament_id
order by  current_score desc, score desc, p.age

