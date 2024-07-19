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
    updated_dt timestamp default current_timestamp,
    created_dt timestamp default current_timestamp
);

drop table if exists tournaments;
create table tournaments (
    tournament_id int auto_increment primary key,
    name varchar(255) not null unique,
    start_date datetime not null,
    end_date datetime not null,
    updated_dt timestamp default current_timestamp,
    created_at timestamp default current_timestamp
);

drop table if exists tournament_participants;
create table tournament_participants (
    uid int auto_increment primary key,
    tournament_id INT NOT NULL,
    player_id INT NOT NULL,
    updated_dt timestamp default current_timestamp,
    created_at timestamp default current_timestamp,
    foreign key (tournament_id) references tournaments(tournament_id),
    foreign key (player_id) references players(player_id),
    unique key (tournament_id, player_id)
);






