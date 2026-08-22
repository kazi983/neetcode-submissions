select s.seller_name
from seller s
where not exists(
    select 1
    from orders o
    where o.seller_id = s.seller_id
    and extract(year from o.sale_date) = 2020
)
order by s.seller_name asc;