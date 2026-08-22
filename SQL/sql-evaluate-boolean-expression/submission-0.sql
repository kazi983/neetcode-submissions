select 
    e.left_operand,
    e.operator, 
    e.right_operand,
    CASE e.operator 
        when '>' 
            then  left_value.value > right_value.value
        when '<' 
            then  left_value.value < right_value.value
        else
            left_value.value = right_value.value
    end as value
from expressions e
cross join lateral 
    (
        select value from variables v
        where v.name = e.left_operand
    ) as left_value
cross join lateral 
    (
        select value from variables v
        where v.name = e.right_operand
    ) as right_value
;