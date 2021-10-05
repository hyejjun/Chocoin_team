-- ALTER TABLE usertable add FOREIGN KEY (userid) REFERENCES assetrecord(userid);
-- ALTER TABLE usertable add FOREIGN KEY (userid) REFERENCES ordertable(userid);
-- ALTER TABLE assetrecord add FOREIGN KEY (userid) REFERENCES cointable(holder);
-- ALTER TABLE ordertable add FOREIGN KEY (pk) REFERENCES transactions(a_orderid);

-- alter table 쪽에 index(컬럼)
-- referencs 쪽에 primary KEY

ALTER TABLE assetrecord add FOREIGN KEY (userid) REFERENCES usertable(userid);
ALTER TABLE ordertable add FOREIGN KEY (userid) REFERENCES usertable(userid);
ALTER TABLE cointable add FOREIGN KEY (holder) REFERENCES assetrecord(userid);
ALTER TABLE transactions add FOREIGN KEY (a_orderid) REFERENCES ordertable(pk);



-- 오류
    -- Cannot add or update a child row: a foreign key constraint fails (`chocoin_db`.`ordertable`, CONSTRAINT `ordertable_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `asset` (`userid`))
    -- 참조무결성에 따라 항상 부모키에 해당하는 값만 넣을 수 있음
    -- 부모테이블보다 참조테이블에 데이터를 먼저 넣으면 안 된다.
    -- 즉 usertable -> assetrecord -> cointable
    --    usertable -> ordertable -> transactions 
    -- 위와 같은 순으로 data가 들어가야 한다.
