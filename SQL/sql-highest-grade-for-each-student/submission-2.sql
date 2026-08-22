-- LATERAL JOIN

select s.id student_id, top1.exam_id, top1.score
from (select distinct student_id id from exam_results) as s
cross join lateral (
    select s.id, e.exam_id, e.score
    from exam_results e
    where s.id = e.student_id
    order by e.score desc, e.exam_id asc
    limit 1
) as top1;