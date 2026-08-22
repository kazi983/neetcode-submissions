WITH sales_company as (
    select distinct c.name as com_name, p.sales_id
    from sales_person p
    join orders o on o.sales_id = p.sales_id
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

-- Write a SQL query 
-- to find the names of all salespeople 
-- who have not made any orders with the company 
-- named "CRIMSON".
