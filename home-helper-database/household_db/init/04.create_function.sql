drop function if exists daily_detail_by_date cascade;
create function daily_detail_by_date(from_date date, to_date date) returns setof daily_detail as
$$
select *
from
    daily_detail
where date between from_date and to_date
order by
    date,
    serial_no;
$$ language sql stable;

drop function if exists category_total_by_month cascade;
create function category_total_by_month(from_date date, to_date date)
    returns setof total_by_category_view as
$$
select
    current_date as date,
    t.iocome_type,
    t.genre_id,
    t.genre_name,
    t.category_id,
    t.category_name,
    sum(t.total) as total
from
    total_by_category_view t
where t.date between from_date and to_date
group by
    t.iocome_type,
    t.genre_id,
    t.genre_name,
    t.category_id,
    t.category_name
order by
    sum(t.total) desc;
$$ language sql stable;

drop function if exists account_total cascade;
create function account_total(from_date date, to_date date) returns setof total_by_account_view as
$$
select
    current_date as date,
    account_id,
    account_name,
    display_order,
    'INCOME'::iocome_type as iocome_type,
    sum(case iocome_type when 'INCOME' then 1 else -1 end * total) as total
from
    total_by_account_view
where total_by_account_view.date between from_date and to_date
group by
    account_id,
    account_name,
    display_order
order by
    display_order ;
$$ language sql stable;

drop function if exists genre_total_by_month cascade;
create function genre_total_by_month(from_date date, to_date date)
    returns setof total_by_genre_view as
$$
select
    current_date as date,
    t.iocome_type,
    t.genre_id,
    t.genre_name,
    sum(t.total) as total
from
    total_by_genre_view t
where t.date between from_date and to_date
group by
    t.iocome_type,
    t.genre_id,
    t.genre_name
order by
    t.iocome_type,
    sum(t.total) desc;

$$ language sql stable;
