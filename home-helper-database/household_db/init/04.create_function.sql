drop function if exists daily_total_view_by_date_iocome_type cascade;
create function daily_total_view_by_date_iocome_type(iocome_type iocome_type, date date) returns setof daily_total_view as
$$
select *
from
    daily_total_view d
where d.date = daily_total_view_by_date_iocome_type.date
  and d.iocome_type = daily_total_view_by_date_iocome_type.iocome_type;
$$ language sql stable;