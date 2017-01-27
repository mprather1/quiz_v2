DROP DATABASE IF EXISTS api_development;
CREATE DATABASE api_development;

\c api_development;

CREATE TABLE quizzes (
  ID SERIAL PRIMARY KEY,
    title VARCHAR
);
  
INSERT INTO quizzes ( title )
VALUES ('Test Number 1');

CREATE TABLE questions (
  ID SERIAL PRIMARY KEY,
    content VARCHAR,
    _quiz INTEGER
);
  
INSERT INTO questions ( content, _quiz )
VALUES ('2 + 2 = ?', 1);
INSERT INTO questions ( content, _quiz )
VALUES ('2 + 8 = ?', 1);
INSERT INTO questions ( content, _quiz )
VALUES ('12 + 4 = ?', 1);
INSERT INTO questions ( content, _quiz )
VALUES ('3 + 18 = ?', 1);

CREATE TABLE answers (
  ID SERIAL PRIMARY KEY,
    content VARCHAR,
    _question INTEGER
);
  
INSERT INTO answers ( content, _question )
VALUES ('6', 1);
INSERT INTO answers ( content, _question )
VALUES ('4', 1);
INSERT INTO answers ( content, _question )
VALUES ('28', 1);
INSERT INTO answers ( content, _question )
VALUES ('1232423', 1);

INSERT INTO answers ( content, _question )
VALUES ('23', 2);
INSERT INTO answers ( content, _question )
VALUES ('232234', 2);
INSERT INTO answers ( content, _question )
VALUES ('10', 2);
INSERT INTO answers ( content, _question )
VALUES ('345657', 2);

INSERT INTO answers ( content, _question )
VALUES ('45', 3);
INSERT INTO answers ( content, _question )
VALUES ('26', 3);
INSERT INTO answers ( content, _question )
VALUES ('16', 3);
INSERT INTO answers ( content, _question )
VALUES ('3453', 3);

INSERT INTO answers ( content, _question )
VALUES ('67', 4);
INSERT INTO answers ( content, _question )
VALUES ('14', 4);
INSERT INTO answers ( content, _question )
VALUES ('12', 4);
INSERT INTO answers ( content, _question )
VALUES ('21', 4);

DROP DATABASE IF EXISTS api_test;
CREATE DATABASE api_test;

\c api_test;

CREATE TABLE quizzes (
  ID SERIAL PRIMARY KEY,
    title VARCHAR
);

CREATE TABLE questions (
  ID SERIAL PRIMARY KEY,
    content VARCHAR,
    _quiz INTEGER
);

CREATE TABLE answers (
  ID SERIAL PRIMARY KEY,
    content VARCHAR,
    _question INTEGER
);

DROP DATABASE IF EXISTS api_production;
CREATE DATABASE api_production;

\c api_production;

CREATE TABLE quizzes (
  ID SERIAL PRIMARY KEY,
    title VARCHAR
);

CREATE TABLE questions (
  ID SERIAL PRIMARY KEY,
    content VARCHAR,
    _quiz INTEGER
);

CREATE TABLE answers (
  ID SERIAL PRIMARY KEY,
    content VARCHAR,
    _question INTEGER
);