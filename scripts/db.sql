create database assignment_global_move;

use assignment_global_move;

drop table if exists users;
create table users (
    user_id int auto_increment primary key,
    full_name varchar(200),
    email varchar(200) not null unique,
    username varchar(200) not null unique,
    password varchar(200) not null,
    role_code enum('user', 'admin') default 'user',
    create_dt timestamp default current_timestamp
);

drop table if exists players;
create table players (
    player_id int auto_increment primary key,
    user_id int references users(user_id),
    name varchar(255) not null,
    age int not null,
    rating int not null,
    country varchar(255) not null,
    created_at timestamp default current_timestamp
);

drop table if exists tournaments;
create table tournaments (
    id int auto_increment primary key,
    name varchar(255) not null unique,
    start_date date not null,
    end_date date not null,
    created_at timestamp default current_timestamp
);
