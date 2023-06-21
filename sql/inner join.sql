USE sql_invoicing;

SELECT p.payment_id,p.client_id,c.name,p.date,pm.name AS status
FROM payments p
JOIN clients c ON p.client_id=c.client_id
JOIN payment_methods pm ON pm.payment_method_id=p.payment_method