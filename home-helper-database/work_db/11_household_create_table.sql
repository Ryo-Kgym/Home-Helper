drop schema if exists tmp_household cascade;
create schema tmp_household;

create type tmp_household.genre_type as enum ('FIXED', 'FLUCTUATION');
create type tmp_household.iocome_type as enum ('INCOME', 'OUTCOME');

create table tmp_household.account (
    account_id    uuid primary key      not null,
    account_name  character varying(50) not null,
    valid_flag    boolean default true,
    display_order integer               not null,
    group_id      uuid                  not null
);

create table tmp_household.genre (
    genre_id      uuid primary key          not null,
    genre_name    character varying(50)     not null,
    genre_type    tmp_household.genre_type  not null,
    iocome_type   tmp_household.iocome_type not null,
    valid_flag    boolean default true,
    display_order integer                   not null,
    group_id      uuid                      not null
);

create table tmp_household.category (
    category_id   uuid primary key      not null,
    category_name character varying(50) not null,
    genre_id      uuid                  not null,
    valid_flag    boolean default true,
    display_order integer               not null,
    group_id      uuid                  not null
);

create table tmp_household.import_file_history (
    id              uuid primary key            not null,
    file_name       character varying(128)      not null,
    file_type       character varying(16)       not null,
    import_datetime timestamp without time zone not null,
    import_user_id  uuid                        not null,
    group_id        uuid                        not null
);
create index import_file_history_group_id_idx on tmp_household.import_file_history using btree (group_id);

create table tmp_household.credit_card_summary (
    id              uuid primary key      not null,
    credit_card     character varying(16) not null,
    withdrawal_date date                  not null,
    account_id      uuid                  not null,
    total_amount    numeric(10, 0)        not null,
    count           integer               not null,
    group_id        uuid                  not null
);

create index credit_card_summary_group_id_idx on tmp_household.credit_card_summary using btree (group_id);

create table tmp_household.credit_card_detail (
    id          uuid primary key          not null,
    date        date                      not null,
    category_id uuid                      not null,
    amount      numeric(10, 0)            not null,
    memo        character varying(64),
    summary_id  uuid                      not null,
    user_id     uuid                      not null,
    group_id    uuid                      not null,
    genre_id    uuid                      not null,
    iocome_type tmp_household.iocome_type not null
);

create index credit_card_detail_date_index on tmp_household.credit_card_detail using btree (date);
create index credit_card_detail_summary_id_index on tmp_household.credit_card_detail using btree (summary_id);
create index credit_card_detail_user_id_index on tmp_household.credit_card_detail using btree (user_id);
create index credit_card_detail_group_id_index on tmp_household.credit_card_detail using btree (group_id);
create index credit_card_detail_iocome_type_index on tmp_household.credit_card_detail using btree (iocome_type);

create table tmp_household.daily_detail (
    id          uuid primary key          not null,
    date        date                      not null,
    category_id uuid                      not null,
    account_id  uuid                      not null,
    user_id     uuid                      not null,
    amount      numeric(10, 0)            not null,
    memo        character varying(64),
    group_id    uuid                      not null,
    genre_id    uuid                      not null,
    iocome_type tmp_household.iocome_type not null
);

create index daily_detail_date_idx on tmp_household.daily_detail using btree (date);
create index daily_detail_group_id_idx on tmp_household.daily_detail using btree (group_id);
create index daily_detail_iocome_type_idx on tmp_household.daily_detail using btree (iocome_type);

create table tmp_household.summary_category_by_group (
    id            uuid primary key not null,
    category_id   uuid             not null,
    display_order integer          not null,
    group_id      uuid             not null
);
create index summary_category_by_group_group_id_idx on tmp_household.summary_category_by_group using btree (group_id);

create table tmp_household.transfer_category (
    group_id            uuid primary key not null, -- グループID
    income_category_id  uuid             not null, -- 収入カテゴリID
    outcome_category_id uuid             not null  -- 支出カテゴリID
);

create table tmp_household.deposit_category (
    category_id uuid primary key not null, -- カテゴリID
    group_id    uuid             not null  -- グループID
);
