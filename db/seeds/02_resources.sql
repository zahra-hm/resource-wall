/*
  CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  title TEXT NOT NULL,
  background_image TEXT
);

CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at DATE NOT NULL

  13 users:
);


Categories:
- Sports 1
- Education 2
- Business 3
- Food 4
- Travel 5
*/

/*
INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    1, 1, "How basketball works!", 'https://en.wikipedia.org/wiki/Basketball', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",'2018-09-10');
INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    2, 8, "How MARIO game works!", 'https://en.wikipedia.org/wiki/Super_Mario', "Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Turpis massa tincidunt dui ut ornare lectus. Etiam sit amet nisl purus in mollis nunc sed. Sit amet facilisis magna etiam tempor orci eu lobortis.",'2018-07-06');
INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    3, 7, "Football!", 'https://en.wikipedia.org/wiki/Association_football', "Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Turpis massa tincidunt dui ut ornare lectus. Etiam sit amet nisl purus in mollis nunc sed. Sit amet facilisis magna etiam tempor orci eu lobortis.",'2018-06-11');
*/
