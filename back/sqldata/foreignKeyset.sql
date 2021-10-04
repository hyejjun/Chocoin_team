ALTER TABLE ordertable add FOREIGN KEY (pk) REFERENCES transactions(a_orderid);
ALTER TABLE usertable add FOREIGN KEY (userid) REFERENCES asset(userid);
ALTER TABLE ordertable add FOREIGN KEY (userid) REFERENCES asset(userid);

