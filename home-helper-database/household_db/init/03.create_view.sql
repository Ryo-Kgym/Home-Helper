drop view if exists daily_total_view cascade;
create view daily_total_view as
select
    d.date,
    g.iocome_type,
    sum(d.amount) as total
from
    daily_detail d
    inner join category c
        on d.category_id = c.category_id
    inner join genre g
        on c.genre_id = g.genre_id
group by
    d.date,
    g.iocome_type;