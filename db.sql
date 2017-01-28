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
    points INTEGER DEFAULT 1,
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
    correct BOOLEAN,
    _question INTEGER
);
  
INSERT INTO answers ( content, _question, correct )
VALUES ('6', 1, false);
INSERT INTO answers ( content, _question, correct )
VALUES ('4', 1, true);
INSERT INTO answers ( content, _question, correct )
VALUES ('28', 1, false);
INSERT INTO answers ( content, _question, correct )
VALUES ('1232423', 1, false);

INSERT INTO answers ( content, _question, correct )
VALUES ('23', 2, false);
INSERT INTO answers ( content, _question, correct )
VALUES ('232234', 2, false);
INSERT INTO answers ( content, _question, correct )
VALUES ('10', 2, true);
INSERT INTO answers ( content, _question, correct )
VALUES ('345657', 2, false);

INSERT INTO answers ( content, _question, correct )
VALUES ('45', 3, false);
INSERT INTO answers ( content, _question, correct )
VALUES ('26', 3, false);
INSERT INTO answers ( content, _question, correct )
VALUES ('16', 3, true);
INSERT INTO answers ( content, _question, correct )
VALUES ('3453', 3, false);

INSERT INTO answers ( content, _question, correct )
VALUES ('67', 4, false);
INSERT INTO answers ( content, _question, correct )
VALUES ('14', 4, false);
INSERT INTO answers ( content, _question, correct )
VALUES ('12', 4, false);
INSERT INTO answers ( content, _question, correct )
VALUES ('21', 4, true);

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
    points INTEGER DEFAULT 1,
    _quiz INTEGER
);

CREATE TABLE answers (
  ID SERIAL PRIMARY KEY,
    content VARCHAR,
    correct BOOLEAN,
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
    points INTEGER DEFAULT 1,
    _quiz INTEGER
);

CREATE TABLE answers (
  ID SERIAL PRIMARY KEY,
    content VARCHAR,
    correct BOOLEAN,
    _question INTEGER
);