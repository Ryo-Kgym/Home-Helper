drop view if exists daily_total_view cascade;
create view daily_total_view as
select
    d.date,
    g.iocome_type,
    sum(d.amount) as total,
    d.group_id
from
    daily_detail d
    inner join category c
        on d.category_id = c.category_id
    inner join genre g
        on c.genre_id = g.genre_id
group by
    d.date,
    g.iocome_type,
    d.group_id;

drop view if exists total_by_account_view cascade;
create view total_by_account_view as
select
    d.date,
    d.account_id,
    a.account_name,
    a.display_order,
    g.iocome_type,
    sum(d.amount) as total,
    d.group_id
from
    daily_detail d
    inner join account a
        on a.account_id = d.account_id
    inner join category c
        on d.category_id = c.category_id
    inner join genre g
        on c.genre_id = g.genre_id
group by
    d.date,
    d.account_id,
    a.account_name,
    a.display_order,
    g.iocome_type,
    d.group_id
order by
    a.display_order,
    d.date,
    d.account_id,
    a.account_name,
    g.iocome_type;
;

drop view if exists total_by_category_view cascade;
create view total_by_category_view as
select
    d.date,
    g.iocome_type,
    g.genre_id,
    g.genre_name,
    c.category_id,
    c.category_name,
    sum(d.amount) as total,
    d.group_id
from
    daily_detail d
    inner join category c
        on d.category_id = c.category_id
    inner join genre g
        on c.genre_id = g.genre_id
group by
    d.date,
    g.iocome_type,
    g.genre_id,
    g.genre_name,
    g.display_order,
    c.category_id,
    c.category_name,
    c.display_order,
    d.group_id
order by
    d.date,
    g.display_order,
    c.display_order
;

drop view if exists total_by_genre_view cascade;
create view total_by_genre_view as
select
    d.date,
    g.iocome_type,
    g.genre_id,
    g.genre_name,
    sum(d.amount) as total,
    d.group_id
from
    daily_detail d
    inner join category c
        on d.category_id = c.category_id
    inner join genre g
        on c.genre_id = g.genre_id
group by
    d.date,
    g.iocome_type,
    g.genre_id,
    g.genre_name,
    g.display_order,
    d.group_id
order by
    d.date,
    g.display_order
;

drop view if exists credit_card_summary_total_by_account_view cascade;
create view credit_card_summary_total_by_account_view as
select
    d.withdrawal_date as date,
    d.account_id,
    a.account_name,
    a.display_order,
    'OUTCOME'::iocome_type as iocome_type,
    sum(d.total_amount) as total,
    d.group_id
from
    credit_card_summary d
    inner join account a
        on a.account_id = d.account_id
group by
    d.withdrawal_date,
    d.account_id,
    a.account_name,
    a.display_order,
    d.group_id
order by
    a.display_order,
    d.account_id,
    d.withdrawal_date
;