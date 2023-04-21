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

drop function if exists account_total cascade;
create function account_total(group_id uuid, from_date date, to_date date) returns setof total_by_account_view as
$$
select
    current_date                                                     as date,
    u.account_id,
    u.account_name,
    u.display_order,
    'INCOME'::iocome_type                                            as iocome_type,
    sum(case u.iocome_type when 'INCOME' then 1 else -1 end * total) as total,
    u.group_id
from
    (select
         account_id,
         account_name,
         display_order,
         iocome_type,
         total,
         tbav.group_id
     from
         total_by_account_view tbav
     where
         tbav.group_id = account_total.group_id
         and tbav.date between from_date and to_date
     union all
     select
         account_id,
         account_name,
         display_order,
         iocome_type,
         total,
         stbav.group_id
     from
         credit_card_summary_total_by_account_view stbav
     where
         stbav.group_id = account_total.group_id
         and stbav.date between from_date and to_date) as u
group by
    u.account_id,
    u.account_name,
    u.display_order,
    u.group_id
order by
    u.display_order,
    u.account_id;
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
