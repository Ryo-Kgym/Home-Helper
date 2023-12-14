drop schema if exists tmp_public cascade;
create schema tmp_public;

create table tmp_public."group" (
    group_id   uuid primary key      not null,
    group_name character varying(50) not null
);

create table tmp_public.group_role (
    group_role_id uuid primary key      not null,
    role          character varying(32) not null
);

create table tmp_public."user" (
    user_id       uuid primary key not null,
    user_name     character varying,
    display_order integer,
    email         character varying
);
create unique index user_email_key on tmp_public."user" using btree (email);

create table tmp_public.application (
    application_id uuid primary key       not null,
    application    character varying(50)  not null,
    valid_flag     boolean default true,
    top_url        character varying(128) not null
);

create table tmp_public.group_application (
    group_application_id uuid primary key not null,
    group_id             uuid             not null,
    application_id       uuid             not null
);

create table tmp_public.affiliation (
    affiliation_id uuid primary key not null,
    user_id        uuid             not null,
    group_id       uuid             not null,
    group_role_id  uuid             not null
);
