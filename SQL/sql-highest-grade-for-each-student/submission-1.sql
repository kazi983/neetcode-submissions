-- LATERAL JOIN

SELECT s.student_id, exam_id, score
FROM (SELECT DISTINCT student_id FROM exam_results) s
CROSS JOIN LATERAL (
    SELECT exam_id, score
    FROM exam_results er
    WHERE er.student_id = s.student_id
    ORDER BY score DESC, exam_id ASC
    LIMIT 1
) 