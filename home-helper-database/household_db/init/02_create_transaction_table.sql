drop table if exists account_balance cascade;
create table account_balance (
    account_id varchar(8) not null primary key,
    balance    numeric(10) default 0,
    constraint account_balance_account foreign key (account_id) references account (account_id)
);

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

drop function if exists daily_detail_by_date cascade;
create function daily_detail_by_date(from_date date, to_date date) returns setof daily_detail as
$$
select *
from
    daily_detail
where date between from_date and to_date
order by
    serial_no;
$$ language sql stable;
