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

create OR REPLACE VIEW household.daily_total_view as
select
    d.date,
    g.iocome_type,
    sum(d.amount) as total,
    d.group_id
from
    household.daily_detail d
        inner join household.category c
            on d.category_id = c.id
        inner join household.genre g
            on c.genre_id = g.id
group by
    d.date,
    g.iocome_type,
    d.group_id;

create OR REPLACE view household.total_by_category_view as
select
    d.date,
    g.iocome_type,
    g.id          as genre_id,
    g.name        as genre_name,
    c.id          as category_id,
    c.name        as category_name,
    sum(d.amount) as total,
    d.group_id
from
    household.daily_detail d
        inner join household.category c
            on d.category_id = c.id
        inner join household.genre g
            on c.genre_id = g.id
group by
    d.date,
    g.iocome_type,
    g.id,
    g.name,
    g.display_order,
    c.id,
    c.name,
    c.display_order,
    d.group_id
order by
    d.date,
    g.display_order,
    c.display_order
;

create OR REPLACE VIEW household.total_by_genre_view as
select
    d.date,
    g.iocome_type,
    g.id          as genre_id,
    g.name        as genre_name,
    sum(d.amount) as total,
    d.group_id
from
    household.daily_detail d
        inner join household.category c
            on d.category_id = c.id
        inner join household.genre g
            on c.genre_id = g.id
group by
    d.date,
    g.iocome_type,
    g.id,
    g.name,
    g.display_order,
    d.group_id
order by
    d.date,
    g.display_order
;

create OR REPLACE VIEW household.credit_card_summary_total_by_account_view as
select
    d.withdrawal_date   as date,
    d.account_id,
    a.name,
    a.display_order,
    'OUTCOME'           as iocome_type,
    sum(d.total_amount) as total,
    d.group_id
from
    household.credit_card_summary d
        inner join household.account a
            on a.id = d.account_id
group by
    d.withdrawal_date,
    d.account_id,
    a.name,
    a.display_order,
    d.group_id
order by
    a.display_order,
    d.account_id,
    d.withdrawal_date
;

CREATE OR REPLACE VIEW household.all_detail_view AS
SELECT
    dd.id,
    'daily'                                                            as type,
    dd.date,
    dd.genre_id,
    dd.iocome_type,
    dd.category_id,
    dd.account_id,
    dd.amount                                                          as original_amount,
    case when dd.iocome_type = 'INCOME' then 1 else -1 end * dd.amount as signed_amount,
    dd.memo,
    dd.group_id
FROM household.daily_detail dd
UNION ALL
SELECT
    cd.id,
    'credit_card'                                                      as type,
    cs.withdrawal_date                                                 as date,
    cd.genre_id,
    cd.iocome_type,
    cd.category_id,
    cs.account_id,
    cd.amount                                                          as original_amount,
    case when cd.iocome_type = 'INCOME' then 1 else -1 end * cd.amount as signed_amount,
    cd.memo,
    cd.group_id
FROM
    household.credit_card_detail cd
        inner join household.credit_card_summary cs
            on cd.summary_id = cs.id
order by
    date;

create OR REPLACE function daily_detail_by_date(group_id varchar, from_date date, to_date date) returns setof household.daily_detail as
$$
select *
from household.daily_detail
where
      daily_detail.group_id = daily_detail_by_date.group_id
  and date between daily_detail_by_date.from_date and daily_detail_by_date.to_date
order by
    date,
    id;
$$ language sql stable;

create OR REPLACE function category_total_by_month(group_id varchar, from_date date, to_date date) returns setof household.total_by_category_view as
$$
select
    current_date as date,
    t.iocome_type,
    t.genre_id,
    t.genre_name,
    t.category_id,
    t.category_name,
    sum(t.total) as total,
    t.group_id
from household.total_by_category_view t
where
      t.group_id = category_total_by_month.group_id
  and t.date between category_total_by_month.from_date and category_total_by_month.to_date
group by
    t.iocome_type,
    t.genre_id,
    t.genre_name,
    t.category_id,
    t.category_name,
    t.group_id
order by
    sum(t.total) desc;
$$ language sql stable;

create OR REPLACE function genre_total_by_month(group_id varchar, from_date date, to_date date) returns setof household.total_by_genre_view as
$$
select
    current_date as date,
    t.iocome_type,
    t.genre_id,
    t.genre_name,
    sum(t.total) as total,
    t.group_id
from household.total_by_genre_view t
where
      t.group_id = genre_total_by_month.group_id
  and t.date between from_date and to_date
group by
    t.iocome_type,
    t.genre_id,
    t.genre_name,
    t.group_id
order by
    t.iocome_type,
    sum(t.total) desc;

$$ language sql stable;
