USE sql_store;

SELECT p.product_id,name,oi.quantity
FROM products p
LEFT JOIN order_items oi
	ON p.product_id=oi.product_id