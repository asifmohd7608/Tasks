USE sql_store;

SELECT c.customer_id,c.first_name,c.last_name,o.order_id 
FROM orders o
RIGHT JOIN customers c
		ON c.customer_id=o.customer_id