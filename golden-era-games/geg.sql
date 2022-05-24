DROP DATABASE IF EXISTS goldenGames;
CREATE DATABASE goldenGames;
USE goldenGames;

CREATE TABLE dev(
    dev_id TINYINT AUTO_INCREMENT,
    devName VARCHAR(30) NOT NULL,
    CONSTRAINT pk_dev PRIMARY KEY (dev_id)
);

CREATE TABLE pub(
    pub_id TINYINT AUTO_INCREMENT,
    pubName VARCHAR(30) NOT NULL,
    CONSTRAINT pk_pub PRIMARY KEY (pub_id)
);

CREATE TABLE console(
    console_id TINYINT AUTO_INCREMENT,
    console VARCHAR(30) NOT NULL,
    consolePrice DECIMAL (6, 2),
    itemDesc VARCHAR(200) NOT NULL,
    platform ENUM("Nintendo", "Playstation", "Atari", "Sega", "XBox") NOT NULL,
    CONSTRAINT pk_console PRIMARY KEY (console_id)
);

CREATE TABLE games(
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    year YEAR NOT NULL,
    dev_id TINYINT,
    pub_id TINYINT,
    console_id TINYINT,
    img VARCHAR(800) NOT NULL,
    price DECIMAL (5, 2),
    platform ENUM("Nintendo", "Playstation", "Xbox", "Atari", "Sega") NOT NULL,
    rating ENUM( "KA", "E", "E-10", "T", "M") NOT NULL,
    region ENUM("US", "EU", "AU", "JP", "Global"),
    gameDesc VARCHAR(200) NOT NULL,
    amnt TINYINT,
    CONSTRAINT pk_games_id PRIMARY Key (id),
    CONSTRAINT fk_dev_id FOREIGN KEY (dev_id) REFERENCES dev (dev_id),
    CONSTRAINT fk_pub_id FOREIGN KEY (pub_id) REFERENCES pub (pub_id),
    CONSTRAINT fk_console_id FOREIGN KEY (console_id) REFERENCES console (console_id)
);

CREATE TABLE review(
    review_id TINYINT AUTO_INCREMENT,
    f_name VARCHAR(100) NOT NULL,
    l_name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone VARCHAR(12),
    comment VARCHAR(400),
    CONSTRAINT pk_review PRIMARY KEY (review_id)
);

CREATE TABLE questions(
    question_id TINYINT AUTO_INCREMENT,
    f_name VARCHAR(100) NOT NULL,
    l_name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone VARCHAR(12),
    comment VARCHAR(400) NOT NULL,
    CONSTRAINT pk_question PRIMARY KEY (question_id)
);

CREATE TABLE app(
    app_id TINYINT AUTO_INCREMENT,
    f_name VARCHAR(100) NOT NULL,
    l_name VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    phone VARCHAR(12) NOT NULL,
    prev_work VARCHAR(300),
    refrence VARCHAR(300),
    refrence_phone VARCHAR(12),
    comment VARCHAR(400) NOT NULL,
    CONSTRAINT pk_app PRIMARY KEY (app_id)
);

