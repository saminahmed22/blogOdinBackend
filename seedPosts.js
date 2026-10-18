// import { createPostDB } from "./models/postModel.js";

// // Add posts
// const dummyPosts = [
//   {
//     title: "A Weekend in Lisbon on a Small Budget",
//     description:
//       "In early June 2026 I spent three days in Lisbon with only a modest budget, and it turned out to be one of the best trips I have taken. I stayed in a small guesthouse in Alfama and walked almost everywhere.\n\nThe highlights were riding tram 28 early in the morning, eating pasteis de nata at a neighborhood bakery, and watching the sunset from the Miradouro da Graca. Total spending for the weekend, including food, was less than a single night in a fancy hotel.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-7ffa49cec67b",
//     categoryId: 18,
//     published: true,
//   },
//   {
//     title: "Five Habits That Made My Mornings Calmer",
//     description:
//       "For years my mornings were chaotic, so in July I decided to change a few small things and see what happened. I did not try to overhaul my whole life, just a handful of tiny habits.\n\nI now prepare my clothes the night before, drink a full glass of water before touching my phone, and take ten minutes to stretch. I also write down three tasks for the day and leave the house five minutes earlier than I need to. The difference in my stress level has been surprising.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     categoryId: 36,
//     published: true,
//   },
//   {
//     title: "Cycling the Danube from Passau to Vienna",
//     description:
//       "Last August my brother and I cycled the Danube Cycle Path from Passau to Vienna over six days. The route is almost entirely flat and follows the river, which makes it perfect for anyone who wants a long trip without brutal climbs.\n\nOur favorite stretch was the Wachau Valley, with its apricot orchards, vineyards, and tiny medieval towns. We rested every evening in a different village and ate far too much schnitzel, and I would happily do it all again.\n\n",
//     authorId: "01a14b42-9027-765e-a6dd-8f6f5e553028",
//     categoryId: 28,
//     published: true,
//   },
//   {
//     title: "Why I Switched to a Paper Notebook for Planning",
//     description:
//       "After years of juggling apps, I went back to a simple paper notebook in January 2026. The apps were powerful, but I spent more time organizing tasks than actually doing them.\n\nNow I use one page per week and one page per project. Writing by hand slows me down just enough to think about what really matters. I still use a digital calendar for meetings, but everything else lives in the notebook.\n\n",
//     authorId: "01a14ac9-70f3-754a-93d2-27a36624ad34",
//     categoryId: 35,
//     published: true,
//   },
//   {
//     title: "Finding the Best Street Food in Hanoi",
//     description:
//       "During a ten day trip to Vietnam in March 2026, I spent two full days eating my way through Hanoi's Old Quarter. A local friend took me to tiny stalls that I would never have found on my own.\n\nMy top three were bun cha at lunchtime, egg coffee in a hidden second floor cafe, and a bowl of pho eaten on a plastic stool at six in the morning. Everything was cheap, fresh, and unforgettable.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-8450224d582f",
//     categoryId: 16,
//     published: true,
//   },
//   {
//     title: "A Beginner's Guide to Birdwatching in City Parks",
//     description:
//       "I started birdwatching this spring with a secondhand pair of binoculars and a free identification app. I assumed I would need to travel to wild places, but my local park turned out to be full of surprises.\n\nIn the first month I spotted herons, kingfishers, and a pair of nesting woodpeckers. My advice for beginners is to go early, stay quiet, and keep a small list of every species you identify. The list grows faster than you would expect.\n\n",
//     authorId: "01a14b42-9024-7100-b0f7-8ec51239660f",
//     categoryId: 51,
//     published: true,
//   },
//   {
//     title: "Camping Under the Stars in the Scottish Highlands",
//     description:
//       "In late May 2026 three friends and I carried our tents into Glen Coe for a two night wild camping trip. The weather was unpredictable, with sunshine, hail, and rainbows all within a single afternoon.\n\nOn the second night the clouds cleared and the whole sky filled with stars. We sat in silence for almost an hour, wrapped in sleeping bags, with a flask of tea passing between us. It was simple, cold, and perfect.\n\n",
//     authorId: "01a14b42-9026-72bf-97f7-e54404762cee",
//     categoryId: 51,
//     published: true,
//   },
//   {
//     title: "Rediscovering My Hometown on a Slow Walking Tour",
//     description:
//       "Last weekend I decided to be a tourist in my own city. I picked a route I had never walked, left my phone in my pocket, and paid attention to buildings I had passed a thousand times without noticing.\n\nI found a hidden courtyard garden, a century old bookshop, and a mural that had apparently been there for years. Slowing down made the familiar feel new again, and I plan to do a walk like this once a month.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-7911a41609d7",
//     categoryId: 42,
//     published: true,
//   },
//   {
//     title: "Following the Coastal Path from Polperro to Looe",
//     description:
//       "On a bright Saturday in October 2026, I walked the cliff path between Polperro and Looe in Cornwall. The route is about five miles, with steady ups and downs and views of the sea around nearly every corner.\n\nWe stopped halfway at a tiny cove to eat sandwiches on the rocks, then finished in Looe with fish and chips by the harbor. The tide was out, so the whole town smelled of salt and seaweed.\n\n",
//     authorId: "01a14b42-9027-765e-a6dd-8bb2fd740397",
//     categoryId: 18,
//     published: true,
//   },
//   {
//     title: "Why I Finally Started Learning the Cello at 34",
//     description:
//       "In February 2026 I rented a cello and booked my first lesson, mostly out of stubbornness. I had always wanted to play, and I was tired of saying it was too late.\n\nThe first month sounded like a cat in distress, but my teacher kept reminding me that every cellist starts there. I now practice twenty minutes a day, and last week I played a full simple melody without stopping.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-7493c51d5ba0",
//     categoryId: 22,
//     published: true,
//   },
//   {
//     title: "A Rainy Day Guide to the Museums of Amsterdam",
//     description:
//       "It rained for three days straight during my trip to Amsterdam in September 2026, so I turned the weather into an excuse to visit museums. The Rijksmuseum was crowded but worth it, and the Van Gogh Museum was calmer in the late afternoon.\n\nMy surprise favorite was the small Hermitage branch, which had a quiet exhibition on Dutch silverwork. I recommend buying tickets online and arriving right at opening time.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-82c97930f7e6",
//     categoryId: 21,
//     published: true,
//   },
//   {
//     title: "Building a Small Herb Garden on a Sunny Balcony",
//     description:
//       "This spring I turned my tiny balcony into a herb garden using nothing but a few clay pots and a bag of good soil. Basil, mint, parsley, and thyme all took root within a couple of weeks.\n\nThe biggest lesson was not to overwater. Once I started checking the soil with my finger before pouring, everything grew faster. Now my pasta nights taste noticeably better.\n\n",
//     authorId: "01a14b42-9027-765e-a6dd-8f6f5e553028",
//     categoryId: 47,
//     published: true,
//   },
//   {
//     title: "Training for My First 10K Without Getting Injured",
//     description:
//       "In May 2026 I signed up for a local 10K, even though I had not run since school. I followed a gentle plan with three short runs a week and one long run on weekends.\n\nThe key was keeping the pace slow enough to hold a conversation. I also added two days of stretching and strength work, which kept my knees happy. I crossed the finish line in just under sixty five minutes and felt great.\n\n",
//     authorId: "01a14b42-9024-7100-b0f7-8ec51239660f",
//     categoryId: 11,
//     published: true,
//   },
//   {
//     title: "Homemade Ramen from Scratch: A Long Sunday Project",
//     description:
//       "Last month I spent an entire Sunday making ramen from scratch, including the broth, the noodles, and the soft boiled eggs. The pork bone broth simmered for eight hours and filled the apartment with a rich, savory smell.\n\nThe noodles were the hardest part, since the dough is stiff and needs a lot of kneading. The final bowl was not restaurant quality, but it was the most satisfying meal I have cooked this year.\n\n",
//     authorId: "01a14ac9-70f3-754a-93d2-27a36624ad34",
//     categoryId: 17,
//     published: true,
//   },
//   {
//     title: "Photographing the Northern Lights in Tromso",
//     description:
//       "In late February 2026 I traveled to Tromso, Norway, hoping to see the aurora. We joined a small group tour that drove out of the city to find clear skies, and after two cloudy nights the lights finally appeared on the third.\n\nThe green curtains rippled across the sky for almost two hours. I learned to use a tripod, a wide lens, and a long exposure, and I also learned to bring far more layers than I thought I needed.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-8450224d582f",
//     categoryId: 19,
//     published: true,
//   },
//   {
//     title: "What I Learned from a Month Without Social Media",
//     description:
//       "In August 2026 I deleted every social media app from my phone for thirty days. The first week was strange, and I kept reaching for my pocket out of habit.\n\nBy week three I was reading more, sleeping better, and calling friends instead of scrolling past their posts. I have since returned to a couple of platforms, but with strict time limits and no notifications.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-7ffa49cec67b",
//     categoryId: 13,
//     published: true,
//   },
//   {
//     title: "A Slow Train Journey Through the Swiss Alps",
//     description:
//       "Early in July 2026 I rode the Bernina Express from Chur to Tirano, one of the most scenic rail routes in Europe. The train climbs through tunnels, spiral viaducts, and high mountain passes with glaciers visible from the window.\n\nI sat on the left side of the carriage for the best views and brought a thermos of coffee. The whole trip took about four hours and felt like watching a documentary in real life.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     categoryId: 18,
//     published: true,
//   },
//   {
//     title: "Restoring an Old Wooden Chair I Found on the Street",
//     description:
//       "Two months ago I spotted a battered oak chair left on the curb and carried it home. It had a wobbly leg, peeling varnish, and a cracked seat, but the frame was solid.\n\nI sanded it down, re-glued the joints, and applied a coat of natural oil finish. It now sits by my desk and looks better than half the furniture in the shop windows. Total cost was about twelve dollars in supplies.\n\n",
//     authorId: "01a14b42-9026-72bf-97f7-e54404762cee",
//     categoryId: 46,
//     published: true,
//   },
//   {
//     title: "Kayaking Through the Mangroves at Dawn",
//     description:
//       "During a short coastal trip in April 2026, I joined a guided kayak tour through a mangrove forest just after sunrise. The water was perfectly still, and the roots arched overhead like a green tunnel.\n\nWe spotted kingfishers, a monitor lizard sunning on a branch, and a family of otters near the end. Paddling quietly in the early light was one of the most peaceful mornings I can remember.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-7911a41609d7",
//     categoryId: 51,
//     published: true,
//   },
//   {
//     title: "My Favorite Used Bookstores and How I Hunt for Treasures",
//     description:
//       "I have a small ritual of visiting a used bookstore every other Saturday. There is something magical about not knowing what you will find, and I have picked up first editions for the price of a coffee.\n\nMy tip is to start at the back shelves, where the odd and forgotten titles live. I also ask the owner what they have read recently, because the best recommendations often come from the person behind the counter.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-82c97930f7e6",
//     categoryId: 25,
//     published: true,
//   },
//   {
//     title: "Learning Basic Italian Before a Summer Trip",
//     description:
//       "Three months before my June trip to Rome, I started studying Italian for fifteen minutes each morning. I used a mix of a language app, a podcast for beginners, and flashcards on the kitchen table.\n\nBy the time I landed I could order food, ask for directions, and make small talk with shopkeepers. Even my clumsy attempts were met with warm smiles, which made the whole trip friendlier.\n\n",
//     authorId: "01a14b42-9027-765e-a6dd-8bb2fd740397",
//     categoryId: 52,
//     published: true,
//   },
//   {
//     title: "A Winter Weekend in a Cabin with No Wi-Fi",
//     description:
//       "In January 2026 a few friends and I rented a small cabin in the mountains with no internet and barely any phone signal. We brought board games, books, and far too much cheese.\n\nWe spent the days snowshoeing and the evenings cooking by the fireplace. By Sunday afternoon nobody wanted to leave, and we are already planning to book the same cabin next winter.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-7493c51d5ba0",
//     categoryId: 13,
//     published: true,
//   },
//   {
//     title: "How I Organized My Finances with a Simple Spreadsheet",
//     description:
//       "At the start of 2026 I finally got serious about tracking my money. I skipped the fancy apps and built a simple spreadsheet with four tabs: income, fixed costs, daily spending, and savings goals.\n\nSpending ten minutes each Sunday to update it has changed how I think about purchases. I have already cut my takeout budget in half and saved enough for a small emergency fund.\n\n",
//     authorId: "01a14ac9-70f3-754a-93d2-27a36624ad34",
//     categoryId: 31,
//     published: true,
//   },
//   {
//     title: "Volunteering at a Community Garden: What I Gained",
//     description:
//       "Since March 2026 I have spent Saturday mornings volunteering at a community garden near my home. I started out knowing nothing, and a retired neighbor patiently taught me how to plant, prune, and compost.\n\nThe best part is the sense of belonging. We share the harvest, swap stories, and eat lunch together under an old pear tree. It has become the highlight of my week.\n\n",
//     authorId: "01a14b42-9027-765e-a6dd-8f6f5e553028",
//     categoryId: 47,
//     published: true,
//   },
//   {
//     title: "Exploring the Markets of Marrakech Without Getting Lost",
//     description:
//       "In November 2025 I spent four days wandering the souks of Marrakech, a maze of narrow lanes packed with spices, lanterns, leather goods, and rugs. I got lost on the first morning, and honestly that was part of the fun.\n\nMy advice is to bargain politely, carry small bills, and take a guide for the first hour to learn the layout. The rooftop terraces make a great place to rest with mint tea.\n\n",
//     authorId: "01a14b42-9024-7100-b0f7-8ec51239660f",
//     categoryId: 42,
//     published: true,
//   },
//   {
//     title: "Why Board Game Nights Became My Favorite Social Ritual",
//     description:
//       "Every other Thursday, a group of friends and I gather for a board game night. It started with a single copy of Catan and has grown into a shelf filled with strategy games, card games, and cooperative puzzles.\n\nWe rotate hosts, and whoever hosts picks the snacks. The games give us a reason to put away our phones and actually laugh together, and I look forward to it more than almost anything else.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-8450224d582f",
//     categoryId: 27,
//     published: true,
//   },
//   {
//     title: "A Day Trip to the Ancient Ruins of Ephesus",
//     description:
//       "During a trip to Turkey in September 2026, I took an early morning bus from Izmir to Ephesus. Arriving before the tour groups meant we had the marble streets almost to ourselves.\n\nThe Library of Celsus was the highlight, glowing in the soft morning light. I recommend bringing a hat, plenty of water, and a good audio guide, since the history behind each ruin makes the walk far more meaningful.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-7ffa49cec67b",
//     categoryId: 41,
//     published: true,
//   },
//   {
//     title: "Learning to Surf in Portugal: Falling Off Is the Whole Point",
//     description:
//       "In July 2026 I signed up for a week of surf lessons in Ericeira, a small coastal town north of Lisbon. I spent most of the first two days underwater, swallowing more seawater than I care to admit.\n\nBy day four I stood up on a wave and rode it all the way to the beach. The instructors kept telling us that falling is how you learn, and they were right. I came home sunburned, sore, and completely hooked.\n\n",
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     categoryId: 28,
//     published: true,
//   },
// ];

// dummyPosts.map((post) => createPostDB(post));
