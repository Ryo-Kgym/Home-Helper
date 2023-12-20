create schema if not exists household;

create table household.account (
    id            varchar(26) primary key not null,
    name          character varying(50)   not null,
    valid_flag    boolean default true,
    display_order integer                 not null,
    group_id      varchar(26)             not null references public."group" (id)
);

create table household.genre (
    id            varchar(26) primary key not null,
    name          character varying(50)   not null,
    genre_type    varchar(16)             not null,
    iocome_type   varchar(8)              not null,
    valid_flag    boolean default true,
    display_order integer                 not null,
    group_id      varchar(26)             not null references public."group" (id)
);
create policy genre_genre_type_policy on household.genre for select using (genre_type in ('FIXED', 'FLUCTUATION'));
create policy genre_iocome_type_policy on household.genre for select using (iocome_type in ('INCOME', 'OUTCOME'));

create table household.category (
    id            varchar(26) primary key not null,
    name          character varying(50)   not null,
    genre_id      varchar(26)             not null references household.genre (id),
    valid_flag    boolean default true,
    display_order integer                 not null,
    group_id      varchar(26)             not null references public."group" (id)
);

create table household.import_file_history (
    id              varchar(26) primary key     not null,
    file_name       character varying(128)      not null,
    file_type       character varying(16)       not null,
    import_datetime timestamp without time zone not null,
    import_user_id  varchar(26)                 not null,
    group_id        varchar(26)                 not null references public."group" (id)
);

create table household.credit_card_summary (
    id              varchar(26) primary key not null,
    credit_card     character varying(16)   not null,
    withdrawal_date date                    not null,
    account_id      varchar(26)             not null references household.account (id),
    total_amount    numeric(10, 0)          not null,
    count           integer                 not null,
    group_id        varchar(26)             not null references public."group" (id)
);

create table household.credit_card_detail (
    id          varchar(26) primary key not null,
    date        date                    not null,
    genre_id    varchar(26)             not null references household.genre (id),
    iocome_type varchar(8)              not null,
    category_id varchar(26)             not null references household.category (id),
    amount      numeric(10, 0)          not null,
    memo        character varying(64),
    summary_id  varchar(26)             not null references household.credit_card_summary (id),
    user_id     varchar(26)             not null references public."user" (id),
    group_id    varchar(26)             not null references public."group" (id)
);
create policy credit_card_detail_iocome_type_policy on household.credit_card_detail for select using (iocome_type in ('INCOME', 'OUTCOME'));

create table household.daily_detail (
    id          varchar(26) primary key not null,
    date        date                    not null,
    genre_id    varchar(26)             not null references household.genre (id),
    iocome_type varchar(8)              not null,
    category_id varchar(26)             not null references household.category (id),
    account_id  varchar(26)             not null references household.account (id),
    user_id     varchar(26)             not null references public."user" (id),
    amount      numeric(10, 0)          not null,
    memo        character varying(64),
    group_id    varchar(26)             not null references public."group" (id)
);
create policy daily_detail_iocome_type_policy on household.daily_detail for select using (iocome_type in ('INCOME', 'OUTCOME'));

create table household.summary_category (
    id            varchar(26) primary key not null,
    category_id   varchar(26)             not null references household.category (id),
    display_order integer                 not null,
    group_id      varchar(26)             not null references public."group" (id)
);

create table household.transfer_category (
    group_id            varchar(26) primary key not null references public."group" (id),
    income_category_id  varchar(26)             not null,
    outcome_category_id varchar(26)             not null
);
alter table household.transfer_category
    add constraint transfer_category_income_category_id_fk foreign key (income_category_id) references household.category (id);
alter table household.transfer_category
    add constraint transfer_category_outcome_category_id_fk foreign key (outcome_category_id) references household.category (id);

create table household.deposit_category (
    category_id varchar(26) primary key not null references household.category (id),
    group_id    varchar(26)             not null references public."group" (id)
);
