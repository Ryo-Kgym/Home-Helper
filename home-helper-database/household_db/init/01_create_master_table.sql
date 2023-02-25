drop type if exists iocome_type cascade;
create type iocome_type as enum ( 'INCOME', 'OUTCOME' );

drop type if exists genre_type cascade;
create type genre_type as enum ( 'FIXED', 'FLUCTUATION' );

drop table if exists "user" cascade;
create table "user" (
    user_id       varchar(8)  not null primary key,
    user_name     varchar(50) not null,
    display_order int         not null
);

drop table if exists genre cascade;
create table genre (
    genre_id      varchar(8)  not null primary key,
    genre_name    varchar(50) not null,
    genre_type    genre_type  not null,
    iocome_type   iocome_type not null,
    valid_flag    boolean default true,
    display_order int         not null
);

drop table if exists "category" cascade;
create table "category" (
    category_id   varchar(8)  not null primary key,
    category_name varchar(50) not null,
    genre_id      varchar(8)  not null,
    valid_flag    boolean default true,
    display_order int         not null,
    constraint category_genre_id_fk foreign key (genre_id) references genre (genre_id)
);

drop table if exists account cascade;
create table account (
    account_id    varchar(8)  not null primary key,
    account_name  varchar(50) not null,
    valid_flag    boolean default true,
    display_order int         not null,
    owner_user_id varchar(8)  not null,
    constraint account_owner_user_id foreign key (owner_user_id) references "user" (user_id)
);
