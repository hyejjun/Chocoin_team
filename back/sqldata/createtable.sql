DROP DATABASE IF EXISTS chocoin_db;
CREATE DATABASE IF NOT EXISTS chocoin_db;

use chocoin_db;

CREATE TABLE IF NOT EXISTS usertable(
    userid INT NOT NULL,
    userpw VARCHAR(255) NOT NULL
)   default charset=utf8mb4;
 
CREATE TABLE IF NOT EXISTS asset(
    pk int NOT NULL,
    userid VARCHAR(50) NOT NULL,
    input int NOT NULL,
    output int NOT NULL,
    regdate DATE NOT NULL
)   default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS ordertable(
    pk INT NOT NULL PRIMARY KEY,
    userid VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    qty INT NOT NULL,
    ordertype BOOLEAN,
    active BOOLEAN,
    index(pk)
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS transactions(
    a_orderid INT NOT NULL primary key,
    a_amount INT NOT NULL,
    a_commision INT NOT NULL,
    b_orderid INT NOT NULL,
    b_amount INT NOT NULL,
    b_commision INT NOT NULL
)   engine=innoDB default charset=utf8mb4;