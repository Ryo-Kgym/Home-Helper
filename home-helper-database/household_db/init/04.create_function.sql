drop function if exists daily_detail_by_date cascade;
create function daily_detail_by_date(group_id uuid, from_date date, to_date date) returns setof daily_detail as
$$
select *
from
    daily_detail
where
    daily_detail.group_id = daily_detail_by_date.group_id
    and date between from_date and to_date
order by
    date,
    id;
$$ language sql stable;

drop function if exists category_total_by_month cascade;
create function category_total_by_month(group_id uuid, from_date date, to_date date)
    returns setof total_by_category_view as
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
from
    total_by_category_view t
where
    t.group_id = category_total_by_month.group_id
    and t.date between from_date and to_date
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

drop function if exists genre_total_by_month cascade;
create function genre_total_by_month(group_id uuid, from_date date, to_date date)
    returns setof total_by_genre_view as
$$
select
    current_date as date,
    t.iocome_type,
    t.genre_id,
    t.genre_name,
    sum(t.total) as total,
    t.group_id
from
    total_by_genre_view t
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
