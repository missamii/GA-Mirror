CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  date_of_birth DATE,
  age INTEGER NOT NULL,
  cohort INTEGER NOT NULL,
  gender CHAR(1),
  relationship_status TEXT NOT NULL,
  interested_in TEXT NOT NULL,
  hometown TEXT NOT NULL,
  email TEXT NOT NULL,
  password VARCHAR(32),
);

CREATE TABLE posts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL,
  time_created TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES user(id)
);

CREATE TABLE comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  time_created TIMESTAMP,
  likes INTEGER,
  content TEXT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id),
  FOREIGN KEY(post_id) REFERENCES post(id)
);

CREATE TABLE likes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  FOREIGN KEY(user_id) REFERENCES user(id),
  FOREIGN KEY(post_id) REFERENCES posts(id),
  FOREIGN KEY(comments_id) REFERENCES comments(id)
);
