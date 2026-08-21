SELECT customer_id, customer_name
FROM customers
WHERE customer_id in (
    SELECT customer_id
    FROM orders
    WHERE product_name = 'A' 
) and customer_id in (
    SELECT customer_id
    FROM orders
    WHERE product_name = 'B' 
) and customer_id not in (
    SELECT customer_id
    FROM orders
    WHERE product_name = 'C'
) 
ORDER BY customer_name