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
