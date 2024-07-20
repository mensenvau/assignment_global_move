drop database if exists assignment_global_move1;
create database assignment_global_move1;

use assignment_global_move1;

drop table if exists countries; 
create table countries (
id int auto_increment primary key,
country_code varchar(2) NOT NULL default '',
country_name varchar(100) NOT NULL default ''
);

insert into countries values (null, 'AF', 'Afghanistan');
insert into countries values (null, 'AL', 'Albania');
insert into countries values (null, 'DZ', 'Algeria');
insert into countries values (null, 'AS', 'American Samoa');
insert into countries values (null, 'AD', 'Andorra');
insert into countries values (null, 'AO', 'Angola');
insert into countries values (null, 'AI', 'Anguilla');
insert into countries values (null, 'AQ', 'Antarctica');
insert into countries values (null, 'AG', 'Antigua and Barbuda');
insert into countries values (null, 'AR', 'Argentina');
insert into countries values (null, 'AM', 'Armenia');
insert into countries values (null, 'AW', 'Aruba');
insert into countries values (null, 'AU', 'Australia');
insert into countries values (null, 'AT', 'Austria');
insert into countries values (null, 'AZ', 'Azerbaijan');
insert into countries values (null, 'BS', 'Bahamas');
insert into countries values (null, 'BH', 'Bahrain');
insert into countries values (null, 'BD', 'Bangladesh');
insert into countries values (null, 'BB', 'Barbados');
insert into countries values (null, 'BY', 'Belarus');
insert into countries values (null, 'BE', 'Belgium');
insert into countries values (null, 'BZ', 'Belize');
insert into countries values (null, 'BJ', 'Benin');
insert into countries values (null, 'BM', 'Bermuda');
insert into countries values (null, 'BT', 'Bhutan');
insert into countries values (null, 'BO', 'Bolivia');
insert into countries values (null, 'BA', 'Bosnia and Herzegovina');
insert into countries values (null, 'BW', 'Botswana');
insert into countries values (null, 'BV', 'Bouvet Island');
insert into countries values (null, 'BR', 'Brazil');
insert into countries values (null, 'IO', 'British Indian Ocean Territory');
insert into countries values (null, 'BN', 'Brunei Darussalam');
insert into countries values (null, 'BG', 'Bulgaria');
insert into countries values (null, 'BF', 'Burkina Faso');
insert into countries values (null, 'BI', 'Burundi');
insert into countries values (null, 'KH', 'Cambodia');
insert into countries values (null, 'CM', 'Cameroon');
insert into countries values (null, 'CA', 'Canada');
insert into countries values (null, 'CV', 'Cape Verde');
insert into countries values (null, 'KY', 'Cayman Islands');
insert into countries values (null, 'CF', 'Central African Republic');
insert into countries values (null, 'TD', 'Chad');
insert into countries values (null, 'CL', 'Chile');
insert into countries values (null, 'CN', 'China');
insert into countries values (null, 'CX', 'Christmas Island');
insert into countries values (null, 'CC', 'Cocos (null, Keeling) Islands');
insert into countries values (null, 'CO', 'Colombia');
insert into countries values (null, 'KM', 'Comoros');
insert into countries values (null, 'CD', 'Democratic Republic of the Congo');
insert into countries values (null, 'CG', 'Republic of Congo');
insert into countries values (null, 'CK', 'Cook Islands');
insert into countries values (null, 'CR', 'Costa Rica');
insert into countries values (null, 'HR', 'Croatia (null, Hrvatska)');
insert into countries values (null, 'CU', 'Cuba');
insert into countries values (null, 'CY', 'Cyprus');
insert into countries values (null, 'CZ', 'Czech Republic');
insert into countries values (null, 'DK', 'Denmark');
insert into countries values (null, 'DJ', 'Djibouti');
insert into countries values (null, 'DM', 'Dominica');
insert into countries values (null, 'DO', 'Dominican Republic');
insert into countries values (null, 'TL', 'East Timor');
insert into countries values (null, 'EC', 'Ecuador');
insert into countries values (null, 'EG', 'Egypt');
insert into countries values (null, 'SV', 'El Salvador');
insert into countries values (null, 'GQ', 'Equatorial Guinea');
insert into countries values (null, 'ER', 'Eritrea');
insert into countries values (null, 'EE', 'Estonia');
insert into countries values (null, 'ET', 'Ethiopia');
insert into countries values (null, 'FK', 'Falkland Islands (null, Malvinas)');
insert into countries values (null, 'FO', 'Faroe Islands');
insert into countries values (null, 'FJ', 'Fiji');
insert into countries values (null, 'FI', 'Finland');
insert into countries values (null, 'FR', 'France');
insert into countries values (null, 'FX', 'France, Metropolitan');
insert into countries values (null, 'GF', 'French Guiana');
insert into countries values (null, 'PF', 'French Polynesia');
insert into countries values (null, 'TF', 'French Southern Territories');
insert into countries values (null, 'GA', 'Gabon');
insert into countries values (null, 'GM', 'Gambia');
insert into countries values (null, 'GE', 'Georgia');
insert into countries values (null, 'DE', 'Germany');
insert into countries values (null, 'GH', 'Ghana');
insert into countries values (null, 'GI', 'Gibraltar');
insert into countries values (null, 'GG', 'Guernsey');
insert into countries values (null, 'GR', 'Greece');
insert into countries values (null, 'GL', 'Greenland');
insert into countries values (null, 'GD', 'Grenada');
insert into countries values (null, 'GP', 'Guadeloupe');
insert into countries values (null, 'GU', 'Guam');
insert into countries values (null, 'GT', 'Guatemala');
insert into countries values (null, 'GN', 'Guinea');
insert into countries values (null, 'GW', 'Guinea-Bissau');
insert into countries values (null, 'GY', 'Guyana');
insert into countries values (null, 'HT', 'Haiti');
insert into countries values (null, 'HM', 'Heard and Mc Donald Islands');
insert into countries values (null, 'HN', 'Honduras');
insert into countries values (null, 'HK', 'Hong Kong');
insert into countries values (null, 'HU', 'Hungary');
insert into countries values (null, 'IS', 'Iceland');
insert into countries values (null, 'IN', 'India');
insert into countries values (null, 'IM', 'Isle of Man');
insert into countries values (null, 'ID', 'Indonesia');
insert into countries values (null, 'IR', 'Iran (null, Islamic Republic of)');
insert into countries values (null, 'IQ', 'Iraq');
insert into countries values (null, 'IE', 'Ireland');
insert into countries values (null, 'IL', 'Israel');
insert into countries values (null, 'IT', 'Italy');
insert into countries values (null, 'CI', 'Ivory Coast');
insert into countries values (null, 'JE', 'Jersey');
insert into countries values (null, 'JM', 'Jamaica');
insert into countries values (null, 'JP', 'Japan');
insert into countries values (null, 'JO', 'Jordan');
insert into countries values (null, 'KZ', 'Kazakhstan');
insert into countries values (null, 'KE', 'Kenya');
insert into countries values (null, 'KI', 'Kiribati');
insert into countries values (null, 'KP', 'Korea, Democratic People''s Republic of');
insert into countries values (null, 'KR', 'Korea, Republic of');
insert into countries values (null, 'XK', 'Kosovo');
insert into countries values (null, 'KW', 'Kuwait');
insert into countries values (null, 'KG', 'Kyrgyzstan');
insert into countries values (null, 'LA', 'Lao People''s Democratic Republic');
insert into countries values (null, 'LV', 'Latvia');
insert into countries values (null, 'LB', 'Lebanon');
insert into countries values (null, 'LS', 'Lesotho');
insert into countries values (null, 'LR', 'Liberia');
insert into countries values (null, 'LY', 'Libyan Arab Jamahiriya');
insert into countries values (null, 'LI', 'Liechtenstein');
insert into countries values (null, 'LT', 'Lithuania');
insert into countries values (null, 'LU', 'Luxembourg');
insert into countries values (null, 'MO', 'Macau');
insert into countries values (null, 'MK', 'North Macedonia');
insert into countries values (null, 'MG', 'Madagascar');
insert into countries values (null, 'MW', 'Malawi');
insert into countries values (null, 'MY', 'Malaysia');
insert into countries values (null, 'MV', 'Maldives');
insert into countries values (null, 'ML', 'Mali');
insert into countries values (null, 'MT', 'Malta');
insert into countries values (null, 'MH', 'Marshall Islands');
insert into countries values (null, 'MQ', 'Martinique');
insert into countries values (null, 'MR', 'Mauritania');
insert into countries values (null, 'MU', 'Mauritius');
insert into countries values (null, 'YT', 'Mayotte');
insert into countries values (null, 'MX', 'Mexico');
insert into countries values (null, 'FM', 'Micronesia, Federated States of');
insert into countries values (null, 'MD', 'Moldova, Republic of');
insert into countries values (null, 'MC', 'Monaco');
insert into countries values (null, 'MN', 'Mongolia');
insert into countries values (null, 'ME', 'Montenegro');
insert into countries values (null, 'MS', 'Montserrat');
insert into countries values (null, 'MA', 'Morocco');
insert into countries values (null, 'MZ', 'Mozambique');
insert into countries values (null, 'MM', 'Myanmar');
insert into countries values (null, 'NA', 'Namibia');
insert into countries values (null, 'NR', 'Nauru');
insert into countries values (null, 'NP', 'Nepal');
insert into countries values (null, 'NL', 'Netherlands');
insert into countries values (null, 'AN', 'Netherlands Antilles');
insert into countries values (null, 'NC', 'New Caledonia');
insert into countries values (null, 'NZ', 'New Zealand');
insert into countries values (null, 'NI', 'Nicaragua');
insert into countries values (null, 'NE', 'Niger');
insert into countries values (null, 'NG', 'Nigeria');
insert into countries values (null, 'NU', 'Niue');
insert into countries values (null, 'NF', 'Norfolk Island');
insert into countries values (null, 'MP', 'Northern Mariana Islands');
insert into countries values (null, 'NO', 'Norway');
insert into countries values (null, 'OM', 'Oman');
insert into countries values (null, 'PK', 'Pakistan');
insert into countries values (null, 'PW', 'Palau');
insert into countries values (null, 'PS', 'Palestine');
insert into countries values (null, 'PA', 'Panama');
insert into countries values (null, 'PG', 'Papua New Guinea');
insert into countries values (null, 'PY', 'Paraguay');
insert into countries values (null, 'PE', 'Peru');
insert into countries values (null, 'PH', 'Philippines');
insert into countries values (null, 'PN', 'Pitcairn');
insert into countries values (null, 'PL', 'Poland');
insert into countries values (null, 'PT', 'Portugal');
insert into countries values (null, 'PR', 'Puerto Rico');
insert into countries values (null, 'QA', 'Qatar');
insert into countries values (null, 'RE', 'Reunion');
insert into countries values (null, 'RO', 'Romania');
insert into countries values (null, 'RU', 'Russian Federation');
insert into countries values (null, 'RW', 'Rwanda');
insert into countries values (null, 'KN', 'Saint Kitts and Nevis');
insert into countries values (null, 'LC', 'Saint Lucia');
insert into countries values (null, 'VC', 'Saint Vincent and the Grenadines');
insert into countries values (null, 'WS', 'Samoa');
insert into countries values (null, 'SM', 'San Marino');
insert into countries values (null, 'ST', 'Sao Tome and Principe');
insert into countries values (null, 'SA', 'Saudi Arabia');
insert into countries values (null, 'SN', 'Senegal');
insert into countries values (null, 'RS', 'Serbia');
insert into countries values (null, 'SC', 'Seychelles');
insert into countries values (null, 'SL', 'Sierra Leone');
insert into countries values (null, 'SG', 'Singapore');
insert into countries values (null, 'SK', 'Slovakia');
insert into countries values (null, 'SI', 'Slovenia');
insert into countries values (null, 'SB', 'Solomon Islands');
insert into countries values (null, 'SO', 'Somalia');
insert into countries values (null, 'ZA', 'South Africa');
insert into countries values (null, 'GS', 'South Georgia South Sandwich Islands');
insert into countries values (null, 'SS', 'South Sudan');
insert into countries values (null, 'ES', 'Spain');
insert into countries values (null, 'LK', 'Sri Lanka');
insert into countries values (null, 'SH', 'St. Helena');
insert into countries values (null, 'PM', 'St. Pierre and Miquelon');
insert into countries values (null, 'SD', 'Sudan');
insert into countries values (null, 'SR', 'Suriname');
insert into countries values (null, 'SJ', 'Svalbard and Jan Mayen Islands');
insert into countries values (null, 'SZ', 'Eswatini');
insert into countries values (null, 'SE', 'Sweden');
insert into countries values (null, 'CH', 'Switzerland');
insert into countries values (null, 'SY', 'Syrian Arab Republic');
insert into countries values (null, 'TW', 'Taiwan');
insert into countries values (null, 'TJ', 'Tajikistan');
insert into countries values (null, 'TZ', 'Tanzania, United Republic of');
insert into countries values (null, 'TH', 'Thailand');
insert into countries values (null, 'TG', 'Togo');
insert into countries values (null, 'TK', 'Tokelau');
insert into countries values (null, 'TO', 'Tonga');
insert into countries values (null, 'TT', 'Trinidad and Tobago');
insert into countries values (null, 'TN', 'Tunisia');
insert into countries values (null, 'TR', 'Turkey');
insert into countries values (null, 'TM', 'Turkmenistan');
insert into countries values (null, 'TC', 'Turks and Caicos Islands');
insert into countries values (null, 'TV', 'Tuvalu');
insert into countries values (null, 'UG', 'Uganda');
insert into countries values (null, 'UA', 'Ukraine');
insert into countries values (null, 'AE', 'United Arab Emirates');
insert into countries values (null, 'GB', 'United Kingdom');
insert into countries values (null, 'US', 'United States');
insert into countries values (null, 'UM', 'United States minor outlying islands');
insert into countries values (null, 'UY', 'Uruguay');
insert into countries values (null, 'UZ', 'Uzbekistan');
insert into countries values (null, 'VU', 'Vanuatu');
insert into countries values (null, 'VA', 'Vatican City State');
insert into countries values (null, 'VE', 'Venezuela');
insert into countries values (null, 'VN', 'Vietnam');
insert into countries values (null, 'VG', 'Virgin Islands (null, British)');
insert into countries values (null, 'VI', 'Virgin Islands (null, U.S.)');
insert into countries values (null, 'WF', 'Wallis and Futuna Islands');
insert into countries values (null, 'EH', 'Western Sahara');
insert into countries values (null, 'YE', 'Yemen');
insert into countries values (null, 'ZM', 'Zambia');
insert into countries values (null, 'ZW', 'Zimbabwe');

drop table if exists users;
create table users (
    user_id int auto_increment primary key,
    full_name varchar(200),
    email varchar(200) not null unique,
    username varchar(200) not null unique,
    password varchar(200) not null,
    role_code enum('user', 'admin') default 'user',
    updated_dt timestamp default current_timestamp on update current_timestamp,
    create_dt timestamp default current_timestamp
);

-- admin default admin (username: admin, password: hi!12345)
insert into users (full_name, email, username, password, role_code) values ('admin', 'admin@mail.ru', 'admin', '4bf1e48a834a30153a7661c71c0a7da1', 'admin');

drop table if exists players;
create table players (
    player_id int auto_increment primary key,
    user_id int unique references users(user_id) ,
    full_name varchar(255) not null,
    age int not null,
    rating int not null,
    country_id int references countries(country_id),
    updated_dt timestamp default current_timestamp on update current_timestamp,
    created_dt timestamp default current_timestamp
);

drop table if exists tournaments;
create table tournaments (
    tournament_id int auto_increment primary key,
    name varchar(255) not null unique,
    start_date datetime not null,
    end_date datetime not null,
    updated_dt timestamp default current_timestamp on update current_timestamp,
    created_at timestamp default current_timestamp
);

drop table if exists tournament_participants;
create table tournament_participants (
    uid int auto_increment primary key,
    tournament_id int not null references tournaments(tournament_id),
    player_id int not null references players(player_id),
    updated_dt timestamp default current_timestamp on update current_timestamp,
    created_at timestamp default current_timestamp,
    unique key (tournament_id, player_id)
);

drop table if exists matches;
create table matches (
    match_id int auto_increment primary key,
    tournament_id int not null references tournaments(tournament_id),
    round int not null,
    player1_id int not null references players(player_id),
    player2_id int not null references players(player_id),
    result enum('player1', 'player2', 'draw') default null,
    skip boolean not null default false,
    updated_at timestamp default current_timestamp on update current_timestamp,
    created_at timestamp default current_timestamp
);



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

