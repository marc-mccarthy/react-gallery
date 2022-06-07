-- Create Table
CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" text NOT NULL,
	"description" text NOT NULL,
	"likes" numeric default 0
);

-- Add Some Data
INSERT INTO gallery ("path", "description") VALUES 
('images/first-date.jpg', 'My wife and I on our first date in 2019.'),
('images/all-kids.jpg', 'Best picture that I have of our kids.'),
('images/mila-shoes.jpg', 'My daughter Mila wearing daddy''s shoes. She is a beautiful little girl who has one heck of a personality and loves to be outside.'),
('images/twins-birth.jpg', 'The day the twins were born, Madden and Reya McCarthy. My wife did amazing! This was also my first class day at Prime.'),
('images/twins-game.jpg', 'My wife and I watching Joe Nathan go into the HOF at our first Twins game together.'),
('images/wedding.jpg', 'This was our wedding day at my father-in-laws house down by the river with all her family. Can you tell we got married around Halloween?'),
('images/brenda.jpg', 'This is my second mom, Brenda. Can''t explain in words what this woman has done for me.'),
('images/mom.jpg', 'This is my mom ash she is about to take on the adventure of puting Mila to sleep.'),
('images/dad.jpg', 'A nice picture with my father. He used to be taller than me!'),
('images/siblings.jpg', 'These are my two sisters. We are all grown up now!'),
('images/mila-door.jpg', 'Mila is trying to get out the dog door at our old house. She saw the puppies do it.'),
('images/state-fair.jpg', 'State Fair at the top of the ferris wheel with my wife and daughter.'),
('images/chip.jpg', 'This is Chip and he is always cheerful and loving.'),
('images/taz.jpg', 'This is Taz and she will let you rub her stomache all day.'),
('images/roscoe.jpg', 'This is Roscoe and he is a sucker for food scraps.'),
('images/remy.jpg', 'This is Remy and she bathes in the sun whenever she finds it.'),
('images/all-nephews.jpg', 'These four good looking dudes are my nephews. They are each so different and very smart. It''s fun watching them play sports together.'),
('images/jet-ski.jpg', 'The old 1976 Kawasaki JS400 that we got from my Great Uncles garage. Road this thing for years after my brother and I got it started.'),
('images/motorcycle.jpg', 'This was my third motorcycle. An old 1988 Roadster that I enjoyed taking trips to Taylors Falls on.'),
('images/boy-band.jpg', 'The best picture I have of some of my best friends. Trying to be N''Sync.'),
('images/siblings-christmas.jpg', 'My sisters and I when we were very young at Christmas. This one is a gem.'),
('images/10k.jpg', 'Mila getting ready to cheer on her dad doing his first 10k. It was cold and she didn''t want to be outside for very long.'),
('images/newspaper.jpg', 'Made it in the newspaper for football and almost won play of the week for Channel 5 news sports.'),
('images/jet-car.jpg', 'Elko New Market Speedway had a car with a jet engine mounted on the back.'),
('images/wayne-brady.jpg', 'Saw Wayne Brady off the Las Vegas strip just hanging out talking to people. It was an old camera. Whose line is it?'),
('images/hidden-beach.jpg', 'My favorite place along the St. Croix river. It''s a hidden beach that no one seems to go to or know about.'),
('images/moose-colorado.jpg','Saw a moose in Rocky Mountain National Park. Just on the outside of the gate rail. There was a line of cars behind us.'),
('images/grand-lake.jpg', 'A beautiful city in Colorado with a campground and many bears. Up in the hills past the town.'),
('images/utah.jpg', 'Scenic Route 12 through Utah with the colors reflecting off the landscape.'),
('images/badlands.jpg', 'The Badlands is one of the weirdest places. It''s like an alien planet.'),
('images/bryce-canyon.jpg', 'Bryce Canyon National Park in Utah. Another weird landscape, but nice colors.');

-- POST
INSERT INTO gallery ("path", "description") VALUES ('https://www.majorgeeks.com/images/logos/majorgeeks.gif', 'Where I get my geek on');

-- GET
SELECT * FROM gallery ORDER BY id ASC;

-- PUT
UPDATE gallery SET likes = likes + 1 WHERE id = 2;

-- DELETE
DELETE FROM gallery WHERE id = 14;