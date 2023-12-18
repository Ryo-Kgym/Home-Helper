create schema if not exists helper_kids;

create table helper_kids.helper_kid (
    id          varchar(26) primary key not null,
    name        varchar(32)             not null,
    name_suffix varchar(8)              not null default 'さん',
    group_id    varchar(26)             not null references public."group" (id)
);

create table helper_kids.helper_kid_parent (
    id             varchar(26) primary key not null,
    helper_kid_id  varchar(26)             not null references helper_kids.helper_kid (id),
    parent_user_id varchar(26)             not null references public.user (id)
);

create table helper_kids.exchange_item (
    id       varchar(26) primary key not null,
    name     varchar(32)             not null,
    point    integer                 not null,
    memo     varchar(1024),
    group_id varchar(26)             not null references public."group" (id)
);

create table helper_kids.help_item (
    id       varchar(26) primary key not null,
    name     varchar(32)             not null,
    point    integer                 not null,
    memo     varchar(1024),
    group_id varchar(26)             not null references public."group" (id)
);

create table helper_kids.help_point_earned_achievement (
    id              varchar(26) primary key     not null,
    helper_kid_id   varchar(26)                 not null references helper_kids.helper_kid (id),
    earned_datetime timestamp without time zone not null,
    earned_point    integer                     not null,
    group_id        varchar(26)                 not null references public."group" (id)
);

create table helper_kids.help_point_earned_detail (
    id             varchar(26) primary key not null,
    achievement_id varchar(26)             not null references helper_kids.help_point_earned_achievement (id),
    help_item_id   varchar(26)             not null references helper_kids.help_item (id),
    count          integer                 not null,
    total_point    integer                 not null,
    group_id       varchar(26)             not null references public."group" (id)
);

create table helper_kids.help_point_exchanged_achievement (
    id                 varchar(26) primary key     not null,
    helper_kid_id      varchar(26)                 not null references helper_kids.helper_kid (id),
    exchange_item_id   varchar(26)                 not null references helper_kids.exchange_item (id),
    count              integer                     not null,
    total_point        integer                     not null,
    exchanged_datetime timestamp without time zone not null,
    group_id           varchar(26)                 not null references public."group" (id)
);
