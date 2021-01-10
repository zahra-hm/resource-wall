/*

DROP TABLE IF EXISTS categories CASCADE;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  background_image TEXT
);

Categories:
- Sports 1
- Education 2
- Business 3
- Food 4
- Travel 5
*/
INSERT INTO categories (
    id, title, background_image)
    VALUES (
    1, 'SPORTS', 'https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190756');

INSERT INTO categories (
    id, title, background_image)
    VALUES (
    2, 'EDUCATION', 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

INSERT INTO categories (
    id, title, background_image)
    VALUES (
    3, 'BUSINESS', 'https://cdn.mos.cms.futurecdn.net/fsNPJTMDjxhPimeLCjihyh-970-80.jpg.webp');

INSERT INTO categories (
    id, title, background_image)
    VALUES (
    4, 'FOOD', 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

INSERT INTO categories (
    id, title, background_image)
    VALUES (
    5, 'TRAVEL', 'https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

