-- create table
CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" text,
	"description" text,
	"likes" numeric default 0
);

-- Add some data
INSERT INTO gallery ("path", "description", "likes") VALUES 
('images/twins-game.jpg', 'My wife and I watching Joe Nathan go into the HOF at our first Twins game in August of 2019 before we got married.', 0),
('images/all-kids.jpg', 'Best picture that I have of our kids.', 0),
('images/mila-shoes.jpg', 'My daughter Mila wearing daddy''s shoes. She is a beautiful little girl who has one heck of a personality and loves to be outside.', 0),
('images/twins-birth.jpg', 'The day the twins were born, Madden and Reya McCarthy. My wife did amazing! This was also my first class day at Prime.', 0),
('images/wedding.jpg', 'This was our wedding day at my father-in-laws house down by the river with all her family. Can you tell we got married around Halloween?', 0),
('images/brenda.jpg', 'This is my second mom, Brenda. Can''t explain in words what this woman has done for me.', 0),
('images/mom.jpg', 'This is my mom ash she is about to take on the adventure of puting Mila to sleep.', 0),
('images/dad.jpg', 'A nice picture with my father. He used to be taller than me!', 0),
('images/siblings.jpg', 'These are my two sisters. We are all grown up now!', 0),
('images/mila-door.jpg', 'Mila is trying to get out the dog door at our old house. She saw the puppies do it.', 0),
('images/state-fair.jpg', 'State Fair at the top of the ferris wheel with my wife and daughter.', 0),
('images/chip.jpg', 'This is Chip and he is always cheerful and loving.', 0),
('images/taz.jpg', 'This is Taz and she will let you rub her stomache all day.', 0),
('images/roscoe.jpg', 'This is Roscoe and he is a sucker for food scraps.', 0),
('images/remy.jpg', 'This is Remy and she bathes in the sun whenever she finds it.', 0),
('images/all-nephews.jpg', 'These four good looking dudes are my nephews. They are each so different and very smart. It''s fun watching them play sports together.', 0),
('images/jet-ski.jpg', 'The old 1976 Kawasaki JS400 that we got from my Great Uncles garage. Road this thing for years after my brother and I got it started.', 0),
('images/motorcycle.jpg', 'This was my third motorcycle. An old 1988 Roadster that I enjoyed taking trips to Taylors Falls on.', 0),
('images/boy-band.jpg', 'The best picture I have of some of my best friends. Trying to be N''Sync.', 0),
('images/siblings-christmas.jpg', 'My sisters and I when we were very young at Christmas. This one is a gem.', 0),
('images/10k.jpg', 'Mila getting ready to cheer on her dad doing his first 10k. It was cold and she didn''t want to be outside for very long.' , 0),
('images/newspaper.jpg', 'Made it in the newspaper for football and almost won play of the week for Channel 5 news sports.', 0),
('images/jet-car.jpg', 'Elko New Market Speedway had a car with a jet engine mounted on the back.', 0),
('images/wayne-brady.jpg', 'Saw Wayne Brady off the Las Vegas strip just hanging out talking to people. It was an old camera. Whose line is it?', 0),
('images/hidden-beach.jpg', 'My favorite place along the St. Croix river. It''s a hidden beach that no one seems to go to or know about.', 0),
('images/moose-colorado.jpg','Saw a moose in Rocky Mountain National Park. Just on the outside of the gate rail. There was a line of cars behind us.', 0),
('images/grand-lake.jpg', 'A beautiful city in Colorado with a campground and many bears. Up in the hills past the town.', 0),
('images/utah.jpg', 'Scenic Route 12 through Utah with the colors reflecting off the landscape.', 0),
('images/badlands.jpg', 'The Badlands is one of the weirdest places. It''s like an alien planet.', 0),
('images/bryce-canyon.jpg', 'Bryce Canyon National Park in Utah. Another weird landscape, but nice colors.', 0);

-- GET
SELECT * FROM gallery ORDER BY id ASC;

-- POST
UPDATE gallery SET likes = 5 WHERE id = 1;