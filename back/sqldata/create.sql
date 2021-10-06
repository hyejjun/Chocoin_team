DROP DATABASE IF EXISTS chocoin_db;
CREATE DATABASE IF NOT EXISTS chocoin_db;

use chocoin_db;

CREATE TABLE IF NOT EXISTS usertable(
    id INT NOT NULL primary key AUTO_INCREMENT,
    userid VARCHAR(50) NOT NULL UNIQUE,
    userpw VARCHAR(50) NOT NULL,
    usertel INT
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS assetrecord(
    pk INT NOT NULL,
    useridx int NOT NULL,
    input INT NOT NULL,
    output INT NOT NULL,
    totalasset INT NOT NULL,
    regdate DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS cointable(
    coinname VARCHAR(30) NOT NULL,
    qty INT NOT NULL,
    holder int NOT NULL
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS ordertable(
    useridx int NOT NULL,
    pk varchar(255) not null,
    price INT NOT NULL,
    qty INT NOT NULL,
    ordertype VARCHAR(10) NOT NULL,
    active BOOLEAN NOT NULL,
    ordertime DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    coinname VARCHAR(30) NOT NULL
)   engine=innoDB default charset=utf8mb4;

CREATE TABLE IF NOT EXISTS transactions(
    useridx int not null,
    a_orderid INT NOT NULL,
    a_amount INT NOT NULL,
    a_commision INT NOT NULL,
    b_orderid INT NOT NULL,
    b_amount INT NOT NULL,
    b_commision INT NOT NULL,
    contracttime DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
)   engine=innoDB default charset=utf8mb4;


