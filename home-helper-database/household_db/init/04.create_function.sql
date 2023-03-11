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

drop function if exists daily_total_view_by_date_iocome_type cascade;
create function daily_total_view_by_date_iocome_type(iocome_type iocome_type, date date)
    returns setof daily_total_view as
$$
select *
from
    daily_total_view d
where d.date = daily_total_view_by_date_iocome_type.date
  and d.iocome_type = daily_total_view_by_date_iocome_type.iocome_type;
$$ language sql stable;

drop function if exists total_by_account_id cascade;
create function total_by_account_id(account_id text)
    returns setof total_by_account_view as
$$
select *
from
    total_by_account_view t
where t.account_id = total_by_account_id.account_id;
$$ language sql stable;

drop function if exists category_total_by_month cascade;
create function category_total_by_month(from_date date, to_date date)
    returns setof total_by_category_view as
$$
select
    (to_char(t.date, 'YYYY-MM') || '-01') :: date as date,
    t.iocome_type,
    t.genre_name,
    t.category_name,
    t.total
from
    total_by_category_view t
where t.date between from_date and to_date
group by
    to_char(t.date, 'YYYY-MM'),
    t.iocome_type,
    t.genre_name,
    t.category_name,
    t.total
order by
    t.total desc;
$$ language sql stable;
