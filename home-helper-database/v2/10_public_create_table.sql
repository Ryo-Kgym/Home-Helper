create schema if not exists public;

create table public."group" (
    id   varchar(26) primary key not null,
    name varchar(50)             not null
);

create table public."user" (
    id            varchar(26) primary key not null,
    name          varchar(32),
    display_order integer,
    email         varchar(64) unique      not null
);

create table public.affiliation (
    id         varchar(26) primary key not null,
    user_id    varchar(26)             not null references public."user" (id),
    group_id   varchar(26)             not null references public."group" (id),
    group_role varchar(16)             not null
);
create policy affiliation_group_role_policy on public.affiliation for select using (group_role in ('MEMBER', 'OWNER'));

create table public.application (
    id         varchar(26) primary key not null,
    name       varchar(50)             not null,
    valid_flag boolean default true,
    top_url    varchar(128)            not null
);

create table public.group_application (
    id             varchar(26) primary key not null,
    group_id       varchar(26)             not null references public."group" (id),
    application_id varchar(26)             not null references public.application (id)
);
