CREATE TABLE koalas (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	gender VARCHAR(120) NOT NULL, 
	age VARCHAR(2)NOT NULL,
	ready_for_transfer VARCHAR(120) NOT NULL,
	notes VARCHAR(250) NOT NULL
	);	
	
	INSERT INTO koalas(name,gender,age,ready_for_transfer,notes)
	VALUES ('Scotty', 'M', '4','Y','Born in Guatemala'),
('Jean',	'F',	'5',	'Y',	'Allergic to lots of lava'),
('Ororo',	'F',	'7',	'N',	'loves listening to Paula (Abdul)'),
('Logan',	'M',	'15',	'N',	'Love the sauna'),
('Charlie',	'M',	'9',	'Y',	'Favorite band is Nirvana'),
('Betsy',	'F',	'4',	'Y',	'Has a pet iguana');
