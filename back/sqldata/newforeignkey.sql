ALTER TABLE usertable ADD FOREIGN KEY (userid) REFERENCES assetrecord(userid);
ALTER TABLE usertable ADD FOREIGN KEY (userid) REFERENCES ordertable(userid);
ALTER TABLE assetrecord ADD FOREIGN KEY (userid) REFERENCES cointable(holder);
ALTER TABLE ordertable ADD FOREIGN KEY (pk) REFERENCES transactions(a_orderid);

-- alter table 쪽에 index(컬럼)
-- referencs 쪽에 primary KEY
