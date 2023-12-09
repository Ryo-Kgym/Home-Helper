create type genre_type as enum ('FIXED', 'FLUCTUATION');
create type iocome_type as enum ('INCOME', 'OUTCOME');

create table public."group" (
    group_id   uuid primary key      not null,
    group_name character varying(50) not null
);

create table public.group_role (
    group_role_id uuid primary key      not null,
    role          character varying(32) not null
);

create table public."user" (
    user_id       uuid primary key not null,
    user_name     character varying,
    display_order integer,
    email         character varying
);
create unique index user_email_key on "user" using btree (email);
comment on table public."user" is 'ユーザ';

create table public.application (
    application_id uuid primary key       not null,
    application    character varying(50)  not null,
    valid_flag     boolean default true,
    top_url        character varying(128) not null
);

create table public.group_application (
    group_application_id uuid primary key not null,
    group_id             uuid             not null,
    application_id       uuid             not null,
    foreign key (application_id) references public.application (application_id) match simple on update no action on delete no action,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action
);

create table public.account (
    account_id    uuid primary key      not null,
    account_name  character varying(50) not null,
    valid_flag    boolean default true,
    display_order integer               not null,
    group_id      uuid                  not null,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action
);

create table public.affiliation (
    affiliation_id uuid primary key not null,
    user_id        uuid             not null,
    group_id       uuid             not null,
    group_role_id  uuid             not null,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action,
    foreign key (group_role_id) references public.group_role (group_role_id) match simple on update no action on delete no action,
    foreign key (user_id) references public."user" (user_id) match simple on update no action on delete no action
);

create table public.genre (
    genre_id      uuid primary key      not null,
    genre_name    character varying(50) not null,
    genre_type    genre_type            not null,
    iocome_type   iocome_type           not null,
    valid_flag    boolean default true,
    display_order integer               not null,
    group_id      uuid                  not null,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action
);

create table public.category (
    category_id   uuid primary key      not null,
    category_name character varying(50) not null,
    genre_id      uuid                  not null,
    valid_flag    boolean default true,
    display_order integer               not null,
    group_id      uuid                  not null,
    foreign key (genre_id) references public.genre (genre_id) match simple on update no action on delete no action,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action
);

create table public.import_file_history (
    id              uuid primary key            not null,
    file_name       character varying(128)      not null,
    file_type       character varying(16)       not null,
    import_datetime timestamp without time zone not null,
    import_user_id  uuid                        not null,
    group_id        uuid                        not null,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action,
    foreign key (import_user_id) references public."user" (user_id) match simple on update no action on delete no action
);
create index import_file_history_group_id_idx on import_file_history using btree (group_id);

create table public.credit_card_summary (
    id              uuid primary key      not null,
    credit_card     character varying(16) not null,
    withdrawal_date date                  not null,
    account_id      uuid                  not null,
    total_amount    numeric(10, 0)        not null,
    count           integer               not null,
    group_id        uuid                  not null,
    foreign key (account_id) references public.account (account_id) match simple on update no action on delete no action,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action,
    foreign key (id) references public.import_file_history (id) match simple on update no action on delete no action
);

create index credit_card_summary_group_id_idx on credit_card_summary using btree (group_id);

create table public.credit_card_detail (
    id          uuid primary key not null,
    date        date             not null,
    category_id uuid             not null,
    amount      numeric(10, 0)   not null,
    memo        character varying(64),
    summary_id  uuid             not null,
    user_id     uuid             not null,
    group_id    uuid             not null,
    genre_id    uuid             not null,
    iocome_type iocome_type      not null,
    foreign key (category_id) references public.category (category_id) match simple on update no action on delete no action,
    foreign key (summary_id) references public.credit_card_summary (id) match simple on update no action on delete no action,
    foreign key (genre_id) references public.genre (genre_id) match simple on update no action on delete no action,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action,
    foreign key (user_id) references public."user" (user_id) match simple on update no action on delete no action
);
create index credit_card_detail_date_index on credit_card_detail using btree (date);
create index credit_card_detail_summary_id_index on credit_card_detail using btree (summary_id);
create index credit_card_detail_user_id_index on credit_card_detail using btree (user_id);
create index credit_card_detail_group_id_index on credit_card_detail using btree (group_id);
create index credit_card_detail_iocome_type_index on credit_card_detail using btree (iocome_type);

create table public.daily_detail (
    id          uuid primary key not null,
    date        date             not null,
    category_id uuid             not null,
    account_id  uuid             not null,
    user_id     uuid             not null,
    amount      numeric(10, 0)   not null,
    memo        character varying(64),
    group_id    uuid             not null,
    genre_id    uuid             not null,
    iocome_type iocome_type      not null,
    foreign key (account_id) references public.account (account_id) match simple on update no action on delete no action,
    foreign key (category_id) references public.category (category_id) match simple on update no action on delete no action,
    foreign key (genre_id) references public.genre (genre_id) match simple on update no action on delete no action,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action,
    foreign key (user_id) references public."user" (user_id) match simple on update no action on delete no action
);
create index daily_detail_date_idx on daily_detail using btree (date);
create index daily_detail_group_id_idx on daily_detail using btree (group_id);

create index daily_detail_iocome_type_idx on daily_detail using btree (iocome_type);

create table public.summary_category_by_group (
    id            uuid primary key not null,
    category_id   uuid             not null,
    display_order integer          not null,
    group_id      uuid             not null,
    foreign key (category_id) references public.category (category_id) match simple on update no action on delete no action,
    foreign key (group_id) references public."group" (group_id) match simple on update no action on delete no action
);
create index summary_category_by_group_group_id_idx on summary_category_by_group using btree (group_id);

create table public.transfer_category (
    group_id            uuid primary key not null, -- グループID
    income_category_id  uuid             not null, -- 収入カテゴリID
    outcome_category_id uuid             not null, -- 支出カテゴリID
    foreign key (group_id) references public."group" (group_id) match simple on update cascade on delete cascade,
    foreign key (income_category_id) references public.category (category_id) match simple on update cascade on delete cascade,
    foreign key (outcome_category_id) references public.category (category_id) match simple on update cascade on delete cascade
);
comment on table public.transfer_category is '振替カテゴリ';
comment on column public.transfer_category.group_id is 'グループID';
comment on column public.transfer_category.income_category_id is '収入カテゴリID';
comment on column public.transfer_category.outcome_category_id is '支出カテゴリID';

create table public.deposit_category (
    category_id uuid primary key not null, -- カテゴリID
    group_id    uuid             not null, -- グループID
    foreign key (category_id) references public.category (category_id) match simple on update cascade on delete cascade,
    foreign key (group_id) references public."group" (group_id) match simple on update cascade on delete cascade
);
comment on table public.deposit_category is '預金カテゴリ';
comment on column public.deposit_category.category_id is 'カテゴリID';
comment on column public.deposit_category.group_id is 'グループID';
