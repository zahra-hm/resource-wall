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

/*CATEGORY - SPORTS*/
INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    1, 1, 'How basketball works!', 'https://en.wikipedia.org/wiki/Basketball', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.','2018-09-10');

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    3, 1, 'Football!', 'https://en.wikipedia.org/wiki/Association_football', 'Porta lorem mollis aliquam ut porttitor leo a. Tristique sollicitudin nibh sit amet commodo. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.','2018-06-11');
INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    5, 1, 'Baseball!', 'https://en.wikipedia.org/wiki/Baseball', 'Odio ut enim blandit volutpat. Ut ornare lectus sit amet est placerat in egestas erat. Sed tempus urna et pharetra. Ornare lectus sit amet est.','2014-04-23');

/*CATEGORY - EDUCATION*/
INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    6, 2, 'SCIENCE IS COOL!', 'https://en.wikipedia.org/wiki/Science', 'In ante metus dictum at tempor commodo ullamcorper a. At urna condimentum mattis pellentesque id. Quis lectus nulla at volutpat diam ut venenatis tellus.','2014-04-23');

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    3, 2, 'Mathematics!', 'https://en.wikipedia.org/wiki/Mathematics', 'Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Turpis massa tincidunt dui ut ornare lectus. Etiam sit amet nisl purus in mollis nunc sed. Sit amet facilisis magna etiam tempor orci eu lobortis.','2020-07-06');

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    9, 2, 'Space Shuttle', 'https://en.wikipedia.org/wiki/Space_Shuttle', 'Leo a diam sollicitudin tempor id eu nisl nunc mi. Dignissim sodales ut eu sem integer vitae. Iaculis at erat pellentesque adipiscing commodo.','2012-01-02');

/*CATEGORY - BUSINESS*/

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    10, 3, 'Learn About Business!', 'https://en.wikipedia.org/wiki/Business', 'Risus nec feugiat in fermentum posuere. Cras fermentum odio eu feugiat pretium. Turpis egestas pretium aenean pharetra magna. Lobortis elementum nibh tellus molestie nunc non.','2011-04-22');

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    11, 3, 'How to build a START-UP Company.', 'https://en.wikipedia.org/wiki/Startup_company', 'Dignissim sodales ut eu sem integer vitae. Iaculis at erat pellentesque adipiscing commodo. Phasellus vestibulum lorem sed risus ultricies tristique nulla.','2015-03-19');


INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    11, 3, 'Largest companies by revenue', 'https://en.wikipedia.org/wiki/List_of_largest_companies_by_revenue', 'Lacus sed turpis tincidunt id aliquet risus feugiat in. Leo a diam sollicitudin tempor id eu nisl nunc mi. Dignissim sodales ut eu sem integer vitae.','2015-03-19');

/*CATEGORY - FOOD*/

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    7, 4, 'Pizza Pizza Pizza!', 'https://en.wikipedia.org/wiki/Pizza', 'Porta lorem mollis aliquam ut porttitor leo a. Fringilla urna porttitor rhoncus dolor purus. Ut aliquam purus sit amet luctus venenatis lectus.','2016-02-28');

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    3, 4, 'Origins of Bread.', 'https://en.wikipedia.org/wiki/Bread', 'Consequat nisl vel pretium lectus quam id leo. Consequat mauris nunc congue nisi vitae. Nibh tortor id aliquet lectus proin. Risus at ultrices mi tempus imperdiet.','2013-02-14');

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    12, 4, 'Lets bake Apple Pie.', 'https://en.wikipedia.org/wiki/Apple_pie', 'Varius vel pharetra vel turpis nunc eget lorem. Porta nibh venenatis cras sed. At volutpat diam ut venenatis.','2013-09-07');


/*CATEGORY - TRAVEL*/

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    13, 5, 'Tourism Info', 'https://en.wikipedia.org/wiki/Tourism', 'Quis lectus nulla at volutpat diam ut venenatis tellus. Porttitor rhoncus dolor purus non enim. At consectetur lorem donec massa sapien faucibus.','2016-02-28');

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    4, 5, 'Travel!', 'https://en.wikipedia.org/wiki/Travel', 'Consequat nisl vel pretium lectus quam id leo. Consequat mauris nunc congue nisi vitae. Nibh tortor id aliquet lectus proin. Risus at ultrices mi tempus imperdiet.','2013-06-13');

INSERT INTO resources (
    owner_id, category_id, title, url, description, created_at)
    VALUES (
    8, 5, 'Modes of Transport', 'https://en.wikipedia.org/wiki/Mode_of_transport', 'Varius vel pharetra vel turpis nunc eget lorem. Porta nibh venenatis cras sed. At volutpat diam ut venenatis.','2010-12-14');
