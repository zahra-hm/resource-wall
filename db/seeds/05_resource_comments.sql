/*
CREATE TABLE resource_comments (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  created_at DATE NOT NULL,
  comment TEXT NOT NULL
);
*/


/*resource id : 1*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    1, 1,'1999-01-08 04:05:06','Hello there Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES(
    3, 1,'2004-10-19 10:23:54','Welcome to Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 2*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    11, 2,'2008-01-05 07:05:06','Basketball is Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    13, 2,'2017-01-03 04:45:06','Wow, wow Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 3*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    4, 3,'2017-01-08 08:33:06','Home Rome Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    7, 3,'2002-03-11 2:05:06','Bala Bala Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 4*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    8, 4,'2001-01-08 01:03:22','Demo Day Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    4, 4,'2019-03-07 05:35:06','Hi Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 5*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    9, 5,'1996-04-08 03:05:06','Blue sky Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    10, 5,'1998-03-02 02:05:06','James Bond Lorem ipsum dolor sit amet, consectetur adipiscing elit.');



/*resource id : 6*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    3, 6,'2001-01-08 04:05:06','Hello there Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES(
    5, 6,'2007-01-08 04:05:06','Welcome to Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 7*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    7, 7,'2018-01-08 04:05:06','Basketball is Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    11, 7,'2019-01-08 04:05:06','Wow, wow Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 8*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    10, 8,'2016-01-08 04:05:06','Home Rome Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    12, 8,'2012-01-08 04:05:06','Bala Bala Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 9*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    4, 9,'2011-01-08 04:05:06','Demo Day Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    5, 9,'2010-01-08 04:05:06','Hi Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 10*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    8, 10,'2013-01-08 04:05:06','Blue sky Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    5, 10,'2007-01-08 04:05:06','James Bond Lorem ipsum dolor sit amet, consectetur adipiscing elit.');



/*resource id : 11*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    1, 11,'2004-01-10 04:05:06','Hello there Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES(
    4, 11,'2000-03-10 04:05:06','Welcome to Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 12*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    7, 12,'2003-03-10 04:05:06','Basketball is Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    8, 12,'2013-03-11 04:05:06','Wow, wow Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 13*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    12, 13,'2011-03-06 04:05:06','Home Rome Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    13, 13,'1994-04-22 04:05:06','Bala Bala Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 14*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    6, 14,'2018-11-22 04:05:06','Demo Day Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    4, 14,'2007-02-04 04:05:06','Hi Hello Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

/*resource id : 15*/

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    7, 15,'2009-01-21 04:05:06','Blue Blue sky Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

INSERT INTO resource_comments (
    user_id, resource_id, created_at, comment)
    VALUES (
    1, 15,'2015-07-14 04:05:06','McDonalds Lorem ipsum dolor sit amet, consectetur adipiscing elit.');


