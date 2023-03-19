drop table if exists daily_detail cascade;
create table daily_detail (
    serial_no   serial      not null primary key,
    date        date        not null,
    category_id varchar(8)  not null,
    account_id  varchar(8)  not null,
    user_id     varchar(8)  not null,
    amount      numeric(10) not null,
    memo        varchar(64) null,
    constraint daily_detail_category foreign key (category_id) references "category" (category_id),
    constraint daily_detail_account foreign key (account_id) references account (account_id),
    constraint daily_detail_user foreign key (user_id) references "user" (user_id)
);

create index daily_detail_date_index on daily_detail (date);

drop table if exists import_file_history cascade;
create table import_file_history (
    id uuid not null primary key,
    file_name varchar(128) not null,
    file_type varchar(16) not null,
    import_datetime timestamp not null,
    import_user_id varchar(8) not null
);

drop table if exists credit_card_summary cascade;
create table credit_card_summary (
    id uuid not null primary key,
    credit_card varchar(16) not null,
    withdrawal_date date not null,
    account_id varchar(8) not null,
    total_amount numeric(10) not null,
    count integer not null,
    constraint credit_card_summary_import_file_history foreign key (id) references import_file_history (id),
    constraint credit_card_summary_account foreign key (account_id) references account (account_id)
);

drop table if exists credit_card_detail cascade;
create table credit_card_detail (
    serial_no   serial      not null primary key,
    date        date        not null,
    category_id varchar(8)  not null,
    amount      numeric(10) not null,
    memo        varchar(64) null,
    summary_id  uuid        not null,
    constraint credit_card_detail_credit_card_summary foreign key (summary_id) references credit_card_summary (id),
    constraint credit_card_detail_category foreign key (category_id) references "category" (category_id)
);

create index credit_card_detail_date_index on credit_card_detail (date);
create index credit_card_detail_summary_id_index on credit_card_detail (summary_id);
