DROP TABLE IF EXISTS resource_reviews CASCADE;

CREATE TABLE resource_reviews (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  resource_id INTEGER REFERENCES resources(id) ON DELETE CASCADE,
  rating SMALLINT DEFAULT 0,
  islike BOOLEAN DEFAULT false
);
