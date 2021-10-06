ALTER TABLE assetrecord add FOREIGN KEY (useridx) REFERENCES usertable(id);
ALTER TABLE ordertable add FOREIGN KEY (useridx) REFERENCES usertable(id);
ALTER TABLE cointable add FOREIGN KEY (holder) REFERENCES usertable(id);
ALTER TABLE transactions add FOREIGN KEY (useridx) REFERENCES ordertable(useridx);
