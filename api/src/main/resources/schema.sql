-- CREATE TABLE list ( 
--    id INTEGER  PRIMARY KEY AUTO_INCREMENT,
--    `name` VARCHAR(200) NOT NULL, 
--    userToken VARCHAR(200) NOT NULL 
-- );

CREATE TABLE item ( 
   id INTEGER  PRIMARY KEY AUTO_INCREMENT,
   `name` VARCHAR(200) NOT NULL, 
   listId INT NOT NULL
);