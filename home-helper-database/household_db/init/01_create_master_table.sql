drop type if exists iocome_type cascade;
create type iocome_type as enum ( 'INCOME', 'OUTCOME' );

drop type if exists genre_type cascade;
create type genre_type as enum ( 'FIXED', 'FLUCTUATION' );

drop table if exists m_user cascade;
create table m_user (
    user_id       varchar(8)  not null primary key,
    user_name     varchar(50) not null,
    display_order int         not null
);

drop table if exists m_genre cascade;
create table m_genre (
    genre_id      varchar(8)  not null primary key,
    genre_name    varchar(50) not null,
    genre_type    genre_type  not null,
    iocome_type   iocome_type not null,
    valid_flag    boolean default true,
    display_order int         not null
);

drop table if exists m_category cascade;
create table m_category (
    category_id   varchar(8)  not null primary key,
    category_name varchar(50) not null,
    genre_id      varchar(8)  not null,
    valid_flag    boolean default true,
    display_order int         not null,
    constraint category_genre_id_fk foreign key (genre_id) references m_genre (genre_id)
);

drop table if exists m_account cascade;
create table m_account (
    account_id    varchar(8)  not null primary key,
    account_name  varchar(50) not null,
    valid_flag    boolean default true,
    display_order int         not null,
    owner_user_id varchar(8)  not null,
    constraint account_owner_user_id foreign key (owner_user_id) references m_user (user_id)
);
