drop table if exists account_balance cascade;
create table account_balance (
    account_id varchar(8) not null primary key,
    balance    numeric(10) default 0,
    constraint account_balance_account foreign key (account_id) references m_account (account_id)
);
