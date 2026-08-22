select p.name
from sales_person p
where not exists (
    select 1 from orders o
    join company c on o.com_id = c.com_id
    where p.sales_id = o.sales_id
    and c.name = 'CRIMSON'
);