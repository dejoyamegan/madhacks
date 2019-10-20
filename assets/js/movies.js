var movies = [
  {
    "Title": "Avengers: Endgame",
    "Genre": "Action",
    "Ranking": 1,
    "Description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    "Rating": "PG-13",
    "Year": 2019,
    "Image": "action1.jpg"
  },
  {
    "Title": "Avatar",
    "Genre": "Action",
    "Ranking": 2,
    "Description": "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Rating": "PG-13",
    "Year": 2009,
    "Image": "action2.jpg"
  },
  {
    "Title": "Avengers: Infinity War",
    "Genre": "Action",
    "Ranking": 3,
    "Description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    "Rating": "PG-13",
    "Year": 2018,
    "Image": "action3.jpg"
  },
  {
    "Title": "Black Panther",
    "Genre": "Adventure",
    "Ranking": 1,
    "Description": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
    "Rating": "PG-13",
    "Year": 2018,
    "Image": "adventure1.jpg"
  },
  {
    "Title": "Mad Max: Fury Road",
    "Genre": "Adventure",
    "Ranking": 2,
    "Description": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    "Rating": "R",
    "Year": 2015,
    "Image": "adventure2.jpg"
  },
  {
    "Title": "Wonder Woman",
    "Genre": "Adventure",
    "Ranking": 3,
    "Description": "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
    "Rating": "PG-13",
    "Year": 2017,
    "Image": "adventure3.jpg"
  },
  {
    "Title": "Inside Out",
    "Genre": "Animation",
    "Ranking": 1,
    "Description": "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    "Rating": "PG",
    "Year": 2015,
    "Image": "animation1.jpg"
  },
  {
    "Title": "Coco",
    "Genre": "Animation",
    "Ranking": 2,
    "Description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
    "Rating": "PG",
    "Year": 2017,
    "Image": "animation2.jpg"
  },
  {
    "Title": "Snow White and the Seven Dwarfs",
    "Genre": "Animation",
    "Ranking": 3,
    "Description": "Exiled into the dangerous forest by her wicked stepmother, a princess is rescued by seven dwarf miners who make her part of their household.",
    "Rating": "G",
    "Year": 1937,
    "Image": "animation3.jpg"
  },
  {
    "Title": "Lady Bird",
    "Genre": "Comedy",
    "Ranking": 1,
    "Description": "In 2002, an artistically inclined seventeen-year-old girl comes of age in Sacramento, California.",
    "Rating": "R",
    "Year": 2017,
    "Image": "comedy1.jpg"
  },
  {
    "Title": "BlacKkKlansman",
    "Genre": "Comedy",
    "Ranking": 2,
    "Description": "Ron Stallworth, an African American police officer from Colorado Springs, CO, successfully manages to infiltrate the local Ku Klux Klan branch with the help of a Jewish surrogate who eventually becomes its leader.",
    "Rating": "R",
    "Year": 2018,
    "Image": "comedy2.jpg"
  },
  {
    "Title": "Modern Times",
    "Genre": "Comedy",
    "Ranking": 3,
    "Description": "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    "Rating": "G",
    "Year": 1936,
    "Image": "comedy3.jpg"
  },
  {
    "Title": "Internal Affairs",
    "Genre": "Crime",
    "Ranking": 1,
    "Description": "A story between a mole in the police department and an undercover cop. Their objectives are the same: to find out who is the mole, and who is the cop.",
    "Rating": "R",
    "Year": 2002,
    "Image": "crime1.jpg"
  },
  {
    "Title": "A History of Violence",
    "Genre": "Crime",
    "Ranking": 2,
    "Description": "A mild-mannered man becomes a local hero through an act of violence, which sets off repercussions that will shake his family to its very core in this action thriller.",
    "Rating": "R",
    "Year": 2005,
    "Image": "crime2.jpg"
  },
  {
    "Title": "Sicario",
    "Genre": "Crime",
    "Ranking": 3,
    "Description": "An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.",
    "Rating": "R",
    "Year": 2015,
    "Image": "crime3.jpg"
  },
  {
    "Title": "Won't You Be My Neighbor?",
    "Genre": "Documentary",
    "Ranking": 1,
    "Description": "An exploration of the life, lessons, and legacy of iconic children's television host, Fred Rogers.",
    "Rating": "PG-13",
    "Year": 2018,
    "Image": "documentary1.jpg"
  },
  {
    "Title": "I Am Not Your Negro",
    "Genre": "Documentary",
    "Ranking": 2,
    "Description": "Writer James Baldwin tells the story of race in modern America with his unfinished novel, Remember This House.",
    "Rating": "PG-13",
    "Year": 2017,
    "Image": "documentary2.jpg"
  },
  {
    "Title": "Man on Wire",
    "Genre": "Documentary",
    "Ranking": 3,
    "Description": "A look at tightrope walker Philippe Petit's daring, but illegal, high-wire routine performed between New York City's World Trade Center's twin towers in 1974, what some consider, \"the artistic crime of the century\".",
    "Rating": "PG-13",
    "Year": 2008,
    "Image": "documentary3.jpg"
  },
  {
    "Title": "Citizen Kane",
    "Genre": "Drama",
    "Ranking": 1,
    "Description": "Following the death of publishing tycoon, Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud'.",
    "Rating": "PG",
    "Year": 1941,
    "Image": "drama1.jpg"
  },
  {
    "Title": "Moonlight",
    "Genre": "Drama",
    "Ranking": 2,
    "Description": "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
    "Rating": "R",
    "Year": 2016,
    "Image": "drama2.jpg"
  },
  {
    "Title": "Casablanca",
    "Genre": "Drama",
    "Ranking": 3,
    "Description": "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
    "Rating": "PG",
    "Year": 1942,
    "Image": "drama3.jpg"
  },
  {
    "Title": "The Wizard of Oz",
    "Genre": "Family",
    "Ranking": 1,
    "Description": "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home to Kansas and help her friends as well.",
    "Rating": "PG",
    "Year": 1939,
    "Image": "family1.jpg"
  },
  {
    "Title": "E.T. The Extra-Terrestrial",
    "Genre": "Family",
    "Ranking": 2,
    "Description": "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    "Rating": "PG",
    "Year": 1982,
    "Image": "family2.jpg"
  },
  {
    "Title": "Paddington 2",
    "Genre": "Family",
    "Ranking": 3,
    "Description": "Paddington, now happily settled with the Brown family and a popular member of the local community, picks up a series of odd jobs to buy the perfect present for his Aunt Lucy's 100th birthday, only for the gift to be stolen.",
    "Rating": "PG",
    "Year": 2017,
    "Image": "family3.jpg"
  },
  {
    "Title": "The Lord of the Rings: The Fellowship of the Ring",
    "Genre": "Fantasy",
    "Ranking": 1,
    "Description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    "Rating": "PG-13",
    "Year": 2001,
    "Image": "fantasy1.jpg"
  },
  {
    "Title": "The Green Mile",
    "Genre": "Fantasy",
    "Ranking": 2,
    "Description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    "Rating": "R",
    "Year": 1999,
    "Image": "fantasy2.jpg"
  },
  {
    "Title": "The Curious Case of Benjamin Button",
    "Genre": "Fantasy",
    "Ranking": 3,
    "Description": "Tells the story of Benjamin Button, a man who starts aging backwards with bizarre consequences.",
    "Rating": "PG-13",
    "Year": 2008,
    "Image": "fantasy3.jpg"
  },
  {
    "Title": "Oldboy",
    "Genre": "Foreign",
    "Ranking": 1,
    "Description": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    "Rating": "R",
    "Year": 2003,
    "Image": "foreign1.jpg"
  },
  {
    "Title": "Metropolis",
    "Genre": "Foreign",
    "Ranking": 2,
    "Description": "In a futuristic city sharply divided between the working class and the city planners, the son of the city's mastermind falls in love with a working class prophet who predicts the coming of a savior to mediate their differences.",
    "Rating": "NR",
    "Year": 1927,
    "Image": "foreign2.jpg"
  },
  {
    "Title": "The Intouchables",
    "Genre": "Foreign",
    "Ranking": 3,
    "Description": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    "Rating": "R",
    "Year": 2011,
    "Image": "foreign3.jpg"
  },
  {
    "Title": "Schindler's List",
    "Genre": "History",
    "Ranking": 1,
    "Description": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "Rating": "R",
    "Year": 1993,
    "Image": "history1.jpg"
  },
  {
    "Title": "Downfall",
    "Genre": "History",
    "Ranking": 2,
    "Description": "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
    "Rating": "R",
    "Year": 2004,
    "Image": "history2.jpg"
  },
  {
    "Title": "Braveheart",
    "Genre": "History",
    "Ranking": 3,
    "Description": "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
    "Rating": "R",
    "Year": 1995,
    "Image": "history3.jpg"
  },
  {
    "Title": "Get Out",
    "Genre": "Horror",
    "Ranking": 1,
    "Description": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    "Rating": "R",
    "Year": 2017,
    "Image": "horror1.jpg"
  },
  {
    "Title": "A Quiet Place",
    "Genre": "Horror",
    "Ranking": 2,
    "Description": "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
    "Rating": "PG-13",
    "Year": 2018,
    "Image": "horror2.jpg"
  },
  {
    "Title": "The Babadook",
    "Genre": "Horror",
    "Ranking": 3,
    "Description": "A single mother and her child fall into a deep well of paranoia when an eerie children's book titled \"Mister Babadook\" manifests in their home.",
    "Rating": "NR",
    "Year": 2014,
    "Image": "horror3.jpg"
  },
  {
    "Title": "The Pianist",
    "Genre": "Music",
    "Ranking": 1,
    "Description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "Rating": "R",
    "Year": 2002,
    "Image": "music1.jpg"
  },
  {
    "Title": "The Legend of 1900",
    "Genre": "Music",
    "Ranking": 2,
    "Description": "A baby boy, discovered in 1900 on an ocean liner, grows into a musical prodigy, never setting foot on land.",
    "Rating": "R",
    "Year": 1998,
    "Image": "music2.jpg"
  },
  {
    "Title": "Green Book",
    "Genre": "Music",
    "Ranking": 3,
    "Description": "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
    "Rating": "PG-13",
    "Year": 2018,
    "Image": "music3.jpg"
  },
  {
    "Title": "Ad Astra",
    "Genre": "Mystery",
    "Ranking": 1,
    "Description": "Astronaut Roy McBride undertakes a mission across an unforgiving solar system to uncover the truth about his missing father and his doomed expedition that now, 30 years later, threatens the universe.",
    "Rating": "PG-13",
    "Year": 2019,
    "Image": "mystery1.jpg"
  },
  {
    "Title": "Midsommar (I)",
    "Genre": "Mystery",
    "Ranking": 2,
    "Description": "A couple travels to Sweden to visit a rural hometown's fabled mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
    "Rating": "R",
    "Year": 2019,
    "Image": "mystery2.jpg"
  },
  {
    "Title": "In the Shadow of the Moon",
    "Genre": "Mystery",
    "Ranking": 3,
    "Description": "A Philadelphia police officer struggles with a lifelong obsession to track down a mysterious serial killer whose crimes defy explanation.",
    "Rating": "TV-MA",
    "Year": 2019,
    "Image": "mystery3.jpg"
  },
  {
    "Title": "Passengers (I)",
    "Genre": "Romance",
    "Ranking": 1,
    "Description": "A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.",
    "Rating": "PG-13",
    "Year": 2016,
    "Image": "romance1.jpg"
  },
  {
    "Title": "Titanic",
    "Genre": "Romance",
    "Ranking": 2,
    "Description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "Rating": "PG-13",
    "Year": 1997,
    "Image": "romance2.jpg"
  },
  {
    "Title": "Forrest Gump",
    "Genre": "Romance",
    "Ranking": 3,
    "Description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    "Rating": "PG-13",
    "Year": 1994,
    "Image": "romance3.jpg"
  },
  {
    "Title": "ExistenZ",
    "Genre": "Science Fiction",
    "Ranking": 1,
    "Description": "A game designer on the run from assassins must play her latest virtual reality creation with a marketing trainee to determine if the game has been damaged.",
    "Rating": "R",
    "Year": 1999,
    "Image": "scifi1.jpg"
  },
  {
    "Title": "The Congress",
    "Genre": "Science Fiction",
    "Ranking": 2,
    "Description": "An aging, out-of-work actress accepts one last job, though the consequences of her decision affect her in ways she didn't consider.",
    "Rating": "NR",
    "Year": 2013,
    "Image": "scifi2.jpg"
  },
  {
    "Title": "Dark City",
    "Genre": "Science Fiction",
    "Ranking": 3,
    "Description": "A man struggles with memories of his past, which includes a wife he cannot remember, and a nightmarish world without a sun.",
    "Rating": "R",
    "Year": 1998,
    "Image": "scifi3.jpg"
  },
  {
    "Title": "The Dark Knight",
    "Genre": "Thriller",
    "Ranking": 1,
    "Description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "Rating": "PG-13",
    "Year": 2008,
    "Image": "thriller1.jpg"
  },
  {
    "Title": "Inception",
    "Genre": "Thriller",
    "Ranking": 2,
    "Description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "Rating": "PG-13",
    "Year": 2010,
    "Image": "thriller2.jpg"
  },
  {
    "Title": "The Departed",
    "Genre": "Thriller",
    "Ranking": 3,
    "Description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    "Rating": "R",
    "Year": 2006,
    "Image": "thriller3.jpg"
  },
  {
    "Title": 1917,
    "Genre": "War",
    "Ranking": 1,
    "Description": "Two young British privates during the First World War are given an impossible mission: deliver a message deep in enemy territory that will stop 1,600 men, and one of the soldier's brothers, from walking straight into a deadly trap.",
    "Rating": "R",
    "Year": 2019,
    "Image": "war1.jpg"
  },
  {
    "Title": "Jojo Rabbit",
    "Genre": "War",
    "Ranking": 2,
    "Description": "A young boy in Hitler's army finds out his mother is hiding a Jewish girl in their home.",
    "Rating": "PG-13",
    "Year": 2019,
    "Image": "war2.jpg"
  },
  {
    "Title": "Midway",
    "Genre": "War",
    "Ranking": 3,
    "Description": "The story of the Battle of Midway, told by the leaders and the sailors who fought it.",
    "Rating": "PG-13",
    "Year": 2019,
    "Image": "war3.jpg"
  },
  {
    "Title": "The Good, the Bad and the Ugly",
    "Genre": "Western",
    "Ranking": 1,
    "Description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    "Rating": "R",
    "Year": 1966,
    "Image": "western1.jpg"
  },
  {
    "Title": "Once Upon a Time in the West",
    "Genre": "Western",
    "Ranking": 2,
    "Description": "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    "Rating": "PG-13",
    "Year": 1968,
    "Image": "western2.jpg"
  },
  {
    "Title": "Dances with Wolves",
    "Genre": "Western",
    "Ranking": 3,
    "Description": "Lieutenant John Dunbar, assigned to a remote western Civil War outpost, befriends wolves and Indians, making him an intolerable aberration in the military.",
    "Rating": "PG-13",
    "Year": 1990,
    "Image": "western3.jpg"
  }
]