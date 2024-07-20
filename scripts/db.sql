create database if not exists assignment_global_move;

use assignment_global_move;

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
