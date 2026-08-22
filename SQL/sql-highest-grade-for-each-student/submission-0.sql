WITH ranked_exam_results AS (
    SELECT 
        student_id, 
        exam_id, 
        score,
        ROW_NUMBER() OVER (
            PARTITION BY student_id 
            ORDER BY score DESC, exam_id ASC
        ) AS rn
    FROM 
        exam_results
)

SELECT 
    student_id, 
    exam_id, 
    score
FROM 
    ranked_exam_results
WHERE
    rn = 1;