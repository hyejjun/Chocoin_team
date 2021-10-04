DROP DATABASE IF EXISTS chocoin_db;
CREATE DATABASE IF NOT EXISTS chocoin_db;

use chocoin_db;

CREATE TABLE IF NOT EXISTS usertable(
    userid VARCHAR(50) NOT NULL PRIMARY KEY,
    userpw VARCHAR(50) NOT NULL,
    usertel INT
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS assetrecord(
    pk INT NOT NULL,
    userid VARCHAR(50) NOT NULL PRIMARY KEY,
    input INT NOT NULL,
    output INT NOT NULL,
    totalasset INT NOT NULL,
    regdate DATETIME NOT NULL,
    index(userid)
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS cointable(
    coinname VARCHAR(30) NOT NULL,
    qty INT NOT NULL,
    holder VARCHAR(50) NOT NULL,
    index(holder)
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS ordertable(
    pk INT NOT NULL PRIMARY KEY,
    userid VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    qty INT NOT NULL,
    ordertype VARCHAR(10) NOT NULL,
    active BOOLEAN NOT NULL,
    ordertime DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    coinname VARCHAR(30) NOT NULL,
    index(userid)
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS transactions(
    a_orderid INT NOT NULL,
    a_amount INT NOT NULL,
    a_commision INT NOT NULL,
    b_orderid INT NOT NULL,
    b_amount INT NOT NULL,
    b_commision INT NOT NULL,
    contracttime DATETIME NOT NULL,
    index(a_orderid)
)   engine=innoDB default charset=utf8mb4;


