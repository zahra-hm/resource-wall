
/*
CREATE TABLE resource_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  rating SMALLINT DEFAULT 0,
  islike BOOLEAN DEFAULT false
);
*/
/*resource id : 1*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    1, 1, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    4, 1, 3.5, false);

/*resource id : 2*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    7, 2, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    9, 2, 3.5, false);


/*resource id : 3*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    10, 3, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    11, 3, 3.5, false);


/*resource id : 4*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    12, 4, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    6, 4, 2, false);

/*resource id : 5*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    8, 5, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    9, 5, 2, false);

/*resource id : 6*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    3, 6, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    11, 6, 2, false);


/*resource id : 7*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    10, 7, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    2, 7, 2, false);


/*resource id : 8*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    1, 8, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    3, 8, 2, false);

/*resource id : 9*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    7, 9, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    12, 9, 2, false);



/*resource id : 10*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    4, 10, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    2, 10, 2, false);

/*resource id : 11*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    3, 11, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    6, 11, 2, false);

/*resource id : 12*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    2, 12, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    1, 12, 2, false);

/*resource id : 13*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    12, 13, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    13, 13, 2, false);

/*resource id : 14*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    9, 14, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    6, 14, 2, false);

/*resource id : 15*/
INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    4, 15, 4, true);

INSERT INTO resource_reviews (
    user_id, resource_id, rating, islike)
    VALUES (
    2, 15, 2, false);
