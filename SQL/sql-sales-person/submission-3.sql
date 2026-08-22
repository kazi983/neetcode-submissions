-- The reusability is there, but there's a performance drawback: it materializes all distinct pairs before filtering, which is wasteful.

WITH sales_company as (
    select distinct c.name as com_name, o.sales_id
    from orders o
    join company c on c.com_id = o.com_id
)

select name 
from sales_person p
where not exists (
    select 1 from sales_company sc
    where 
        p.sales_id = sc.sales_id
        and com_name = 'CRIMSON'
)
