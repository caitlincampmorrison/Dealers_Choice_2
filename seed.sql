
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title TEXT DEFAULT NULL,
  content TEXT DEFAULT NULL,
  weight INTEGER DEFAULT NULL,
  time TEXT DEFAULT NULL
);

INSERT INTO tasks (title, content, weight, time) VALUES ("Take dog out", "Must take dog on a 15-30 min walk around the neighborhood.", 5, "3x a day");
INSERT INTO tasks (title, content, weight, time) VALUES ("Take out trash", "As soon as the kitchen trash get full take it to the trashcan outside.", 2, "2x a week");
INSERT INTO tasks (title, content, weight, time) VALUES ("Do code stretch", "Solve coding problem", 7, "Everyday");
INSERT INTO tasks (title, content, weight, time) VALUES ("Watch and take notes on prelecture videos.  There may be more than one video and each video may be 20 min to a hour.  Make sure to code alongside examples provided.", 8, "Everyday");
