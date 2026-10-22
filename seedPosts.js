import { createPostDB } from "./models/postModel.js";

// Add posts
const dummyPosts = [
  {
    title: "A Weekend in Lisbon on a Small Budget",
    description:
      "In early June 2026 I spent three days in Lisbon with only a modest budget, and it turned out to be one of the best trips I have taken. I stayed in a small guesthouse in Alfama and walked almost everywhere.\n\nThe highlights were riding tram 28 early in the morning, eating pasteis de nata at a neighborhood bakery, and watching the sunset from the Miradouro da Graca. Total spending for the weekend, including food, was less than a single night in a fancy hotel.\n\n",
    authorId: "01a16126-f976-712d-a5c0-4eac0be4d65c",
    categoryId: 18,
    published: true,
  },
  {
    title: "Five Habits That Made My Mornings Calmer",
    description:
      "For years my mornings were chaotic, so in July I decided to change a few small things and see what happened. I did not try to overhaul my whole life, just a handful of tiny habits.\n\nI now prepare my clothes the night before, drink a full glass of water before touching my phone, and take ten minutes to stretch. I also write down three tasks for the day and leave the house five minutes earlier than I need to. The difference in my stress level has been surprising.\n\n",
    authorId: "01a16126-f977-7411-a856-95df161d1fa5",
    categoryId: 36,
    published: true,
  },
  {
    title: "Cycling the Danube from Passau to Vienna",
    description:
      "Last August my brother and I cycled the Danube Cycle Path from Passau to Vienna over six days. The route is almost entirely flat and follows the river, which makes it perfect for anyone who wants a long trip without brutal climbs.\n\nOur favorite stretch was the Wachau Valley, with its apricot orchards, vineyards, and tiny medieval towns. We rested every evening in a different village and ate far too much schnitzel, and I would happily do it all again.\n\n",
    authorId: "01a16126-f977-7411-a856-9a10a35ad0ee",
    categoryId: 28,
    published: true,
  },
  {
    title: "Why I Switched to a Paper Notebook for Planning",
    description:
      "After years of juggling apps, I went back to a simple paper notebook in January 2026. The apps were powerful, but I spent more time organizing tasks than actually doing them.\n\nNow I use one page per week and one page per project. Writing by hand slows me down just enough to think about what really matters. I still use a digital calendar for meetings, but everything else lives in the notebook.\n\n",
    authorId: "01a16126-f977-7411-a856-9dd258d0a9af",
    categoryId: 35,
    published: true,
  },
  {
    title: "Finding the Best Street Food in Hanoi",
    description:
      "During a ten day trip to Vietnam in March 2026, I spent two full days eating my way through Hanoi's Old Quarter. A local friend took me to tiny stalls that I would never have found on my own.\n\nMy top three were bun cha at lunchtime, egg coffee in a hidden second floor cafe, and a bowl of pho eaten on a plastic stool at six in the morning. Everything was cheap, fresh, and unforgettable.\n\n",
    authorId: "01a16126-f977-7411-a856-9dd258d0a9af",
    categoryId: 16,
    published: true,
  },
  {
    title: "A Beginner's Guide to Birdwatching in City Parks",
    description:
      "I started birdwatching this spring with a secondhand pair of binoculars and a free identification app. I assumed I would need to travel to wild places, but my local park turned out to be full of surprises.\n\nIn the first month I spotted herons, kingfishers, and a pair of nesting woodpeckers. My advice for beginners is to go early, stay quiet, and keep a small list of every species you identify. The list grows faster than you would expect.\n\n",
    authorId: "01a16126-f977-7411-a856-a0ac2fc22b33",
    categoryId: 51,
    published: true,
  },
  {
    title: "Camping Under the Stars in the Scottish Highlands",
    description:
      "In late May 2026 three friends and I carried our tents into Glen Coe for a two night wild camping trip. The weather was unpredictable, with sunshine, hail, and rainbows all within a single afternoon.\n\nOn the second night the clouds cleared and the whole sky filled with stars. We sat in silence for almost an hour, wrapped in sleeping bags, with a flask of tea passing between us. It was simple, cold, and perfect.\n\n",
    authorId: "01a16126-f978-74f8-af68-74bb508f7343",
    categoryId: 51,
    published: true,
  },
  {
    title: "Rediscovering My Hometown on a Slow Walking Tour",
    description:
      "Last weekend I decided to be a tourist in my own city. I picked a route I had never walked, left my phone in my pocket, and paid attention to buildings I had passed a thousand times without noticing.\n\nI found a hidden courtyard garden, a century old bookshop, and a mural that had apparently been there for years. Slowing down made the familiar feel new again, and I plan to do a walk like this once a month.\n\n",
    authorId: "01a16126-f978-74f8-af68-7a7e127e00e1",
    categoryId: 42,
    published: true,
  },
  {
    title: "Following the Coastal Path from Polperro to Looe",
    description:
      "On a bright Saturday in October 2026, I walked the cliff path between Polperro and Looe in Cornwall. The route is about five miles, with steady ups and downs and views of the sea around nearly every corner.\n\nWe stopped halfway at a tiny cove to eat sandwiches on the rocks, then finished in Looe with fish and chips by the harbor. The tide was out, so the whole town smelled of salt and seaweed.\n\n",
    authorId: "01a16126-f978-74f8-af68-74bb508f7343",
    categoryId: 18,
    published: true,
  },
  {
    title: "Why I Finally Started Learning the Cello at 34",
    description:
      "In February 2026 I rented a cello and booked my first lesson, mostly out of stubbornness. I had always wanted to play, and I was tired of saying it was too late.\n\nThe first month sounded like a cat in distress, but my teacher kept reminding me that every cellist starts there. I now practice twenty minutes a day, and last week I played a full simple melody without stopping.\n\n",
    authorId: "01a16126-f976-712d-a5c0-4eac0be4d65c",
    categoryId: 22,
    published: true,
  },
  {
    title: "A Rainy Day Guide to the Museums of Amsterdam",
    description:
      "It rained for three days straight during my trip to Amsterdam in September 2026, so I turned the weather into an excuse to visit museums. The Rijksmuseum was crowded but worth it, and the Van Gogh Museum was calmer in the late afternoon.\n\nMy surprise favorite was the small Hermitage branch, which had a quiet exhibition on Dutch silverwork. I recommend buying tickets online and arriving right at opening time.\n\n",
    authorId: "01a16126-f977-7411-a856-a0ac2fc22b33",
    categoryId: 21,
    published: true,
  },
  {
    title: "Building a Small Herb Garden on a Sunny Balcony",
    description:
      "This spring I turned my tiny balcony into a herb garden using nothing but a few clay pots and a bag of good soil. Basil, mint, parsley, and thyme all took root within a couple of weeks.\n\nThe biggest lesson was not to overwater. Once I started checking the soil with my finger before pouring, everything grew faster. Now my pasta nights taste noticeably better.\n\n",
    authorId: "01a16126-f979-714d-91cc-1b4a4afb0371",
    categoryId: 47,
    published: true,
  },
  {
    title: "Training for My First 10K Without Getting Injured",
    description:
      "In May 2026 I signed up for a local 10K, even though I had not run since school. I followed a gentle plan with three short runs a week and one long run on weekends.\n\nThe key was keeping the pace slow enough to hold a conversation. I also added two days of stretching and strength work, which kept my knees happy. I crossed the finish line in just under sixty five minutes and felt great.\n\n",
    authorId: "01a16126-f979-714d-91cc-1b4a4afb0371",
    categoryId: 11,
    published: true,
  },
  {
    title: "Homemade Ramen from Scratch: A Long Sunday Project",
    description:
      "Last month I spent an entire Sunday making ramen from scratch, including the broth, the noodles, and the soft boiled eggs. The pork bone broth simmered for eight hours and filled the apartment with a rich, savory smell.\n\nThe noodles were the hardest part, since the dough is stiff and needs a lot of kneading. The final bowl was not restaurant quality, but it was the most satisfying meal I have cooked this year.\n\n",
    authorId: "01a16126-f97a-710d-b367-ee241dd5419d",
    categoryId: 17,
    published: true,
  },
  {
    title: "Photographing the Northern Lights in Tromso",
    description:
      "In late February 2026 I traveled to Tromso, Norway, hoping to see the aurora. We joined a small group tour that drove out of the city to find clear skies, and after two cloudy nights the lights finally appeared on the third.\n\nThe green curtains rippled across the sky for almost two hours. I learned to use a tripod, a wide lens, and a long exposure, and I also learned to bring far more layers than I thought I needed.\n\n",
    authorId: "01a16126-f97a-710d-b367-f0d3a4a0cf7e",
    categoryId: 19,
    published: true,
  },
  {
    title: "What I Learned from a Month Without Social Media",
    description:
      "In August 2026 I deleted every social media app from my phone for thirty days. The first week was strange, and I kept reaching for my pocket out of habit.\n\nBy week three I was reading more, sleeping better, and calling friends instead of scrolling past their posts. I have since returned to a couple of platforms, but with strict time limits and no notifications.\n\n",
    authorId: "01a16126-f97a-710d-b367-f73ac04913bd",
    categoryId: 13,
    published: true,
  },
  {
    title: "A Slow Train Journey Through the Swiss Alps",
    description:
      "Early in July 2026 I rode the Bernina Express from Chur to Tirano, one of the most scenic rail routes in Europe. The train climbs through tunnels, spiral viaducts, and high mountain passes with glaciers visible from the window.\n\nI sat on the left side of the carriage for the best views and brought a thermos of coffee. The whole trip took about four hours and felt like watching a documentary in real life.\n\n",
    authorId: "01a16126-f97a-710d-b367-f9da89511e9b",
    categoryId: 18,
    published: true,
  },
  {
    title: "Restoring an Old Wooden Chair I Found on the Street",
    description:
      "Two months ago I spotted a battered oak chair left on the curb and carried it home. It had a wobbly leg, peeling varnish, and a cracked seat, but the frame was solid.\n\nI sanded it down, re-glued the joints, and applied a coat of natural oil finish. It now sits by my desk and looks better than half the furniture in the shop windows. Total cost was about twelve dollars in supplies.\n\n",
    authorId: "01a16126-f97a-710d-b367-fd296f50dda2",
    categoryId: 46,
    published: true,
  },
  {
    title: "Kayaking Through the Mangroves at Dawn",
    description:
      "During a short coastal trip in April 2026, I joined a guided kayak tour through a mangrove forest just after sunrise. The water was perfectly still, and the roots arched overhead like a green tunnel.\n\nWe spotted kingfishers, a monitor lizard sunning on a branch, and a family of otters near the end. Paddling quietly in the early light was one of the most peaceful mornings I can remember.\n\n",
    authorId: "01a16126-f977-7411-a856-9a10a35ad0ee",
    categoryId: 51,
    published: true,
  },
  {
    title: "My Favorite Used Bookstores and How I Hunt for Treasures",
    description:
      "I have a small ritual of visiting a used bookstore every other Saturday. There is something magical about not knowing what you will find, and I have picked up first editions for the price of a coffee.\n\nMy tip is to start at the back shelves, where the odd and forgotten titles live. I also ask the owner what they have read recently, because the best recommendations often come from the person behind the counter.\n\n",
    authorId: "01a16126-f977-7411-a856-95df161d1fa5",
    categoryId: 25,
    published: true,
  },
  {
    title: "Learning Basic Italian Before a Summer Trip",
    description:
      "Three months before my June trip to Rome, I started studying Italian for fifteen minutes each morning. I used a mix of a language app, a podcast for beginners, and flashcards on the kitchen table.\n\nBy the time I landed I could order food, ask for directions, and make small talk with shopkeepers. Even my clumsy attempts were met with warm smiles, which made the whole trip friendlier.\n\n",
    authorId: "01a16126-f97a-710d-b367-f73ac04913bd",
    categoryId: 52,
    published: true,
  },
  {
    title: "A Winter Weekend in a Cabin with No Wi-Fi",
    description:
      "In January 2026 a few friends and I rented a small cabin in the mountains with no internet and barely any phone signal. We brought board games, books, and far too much cheese.\n\nWe spent the days snowshoeing and the evenings cooking by the fireplace. By Sunday afternoon nobody wanted to leave, and we are already planning to book the same cabin next winter.\n\n",
    authorId: "01a16126-f97a-710d-b368-014d1118c61f",
    categoryId: 13,
    published: true,
  },
  {
    title: "How I Organized My Finances with a Simple Spreadsheet",
    description:
      "At the start of 2026 I finally got serious about tracking my money. I skipped the fancy apps and built a simple spreadsheet with four tabs: income, fixed costs, daily spending, and savings goals.\n\nSpending ten minutes each Sunday to update it has changed how I think about purchases. I have already cut my takeout budget in half and saved enough for a small emergency fund.\n\n",
    authorId: "01a16126-f97a-710d-b367-f0d3a4a0cf7e",
    categoryId: 31,
    published: true,
  },
  {
    title: "Volunteering at a Community Garden: What I Gained",
    description:
      "Since March 2026 I have spent Saturday mornings volunteering at a community garden near my home. I started out knowing nothing, and a retired neighbor patiently taught me how to plant, prune, and compost.\n\nThe best part is the sense of belonging. We share the harvest, swap stories, and eat lunch together under an old pear tree. It has become the highlight of my week.\n\n",
    authorId: "01a16126-f977-7411-a856-a0ac2fc22b33",
    categoryId: 47,
    published: true,
  },
  {
    title: "Exploring the Markets of Marrakech Without Getting Lost",
    description:
      "In November 2025 I spent four days wandering the souks of Marrakech, a maze of narrow lanes packed with spices, lanterns, leather goods, and rugs. I got lost on the first morning, and honestly that was part of the fun.\n\nMy advice is to bargain politely, carry small bills, and take a guide for the first hour to learn the layout. The rooftop terraces make a great place to rest with mint tea.\n\n",
    authorId: "01a16126-f97a-710d-b367-f9da89511e9b",
    categoryId: 42,
    published: true,
  },
  {
    title: "Why Board Game Nights Became My Favorite Social Ritual",
    description:
      "Every other Thursday, a group of friends and I gather for a board game night. It started with a single copy of Catan and has grown into a shelf filled with strategy games, card games, and cooperative puzzles.\n\nWe rotate hosts, and whoever hosts picks the snacks. The games give us a reason to put away our phones and actually laugh together, and I look forward to it more than almost anything else.\n\n",
    authorId: "01a16126-f97a-710d-b368-0490e69afad5",
    categoryId: 27,
    published: true,
  },
  {
    title: "A Day Trip to the Ancient Ruins of Ephesus",
    description:
      "During a trip to Turkey in September 2026, I took an early morning bus from Izmir to Ephesus. Arriving before the tour groups meant we had the marble streets almost to ourselves.\n\nThe Library of Celsus was the highlight, glowing in the soft morning light. I recommend bringing a hat, plenty of water, and a good audio guide, since the history behind each ruin makes the walk far more meaningful.\n\n",
    authorId: "01a16126-f97a-710d-b367-ee241dd5419d",
    categoryId: 41,
    published: true,
  },
  {
    title: "Learning to Surf in Portugal: Falling Off Is the Whole Point",
    description:
      "In July 2026 I signed up for a week of surf lessons in Ericeira, a small coastal town north of Lisbon. I spent most of the first two days underwater, swallowing more seawater than I care to admit.\n\nBy day four I stood up on a wave and rode it all the way to the beach. The instructors kept telling us that falling is how you learn, and they were right. I came home sunburned, sore, and completely hooked.\n\n",
    authorId: "01a16126-f97a-710d-b368-0ae746c4d952",
    categoryId: 28,
    published: true,
  },
  {
    title: "Turning a Raspberry Pi into a Tiny Home Server",
    description:
      "In April 2026 I dug an old Raspberry Pi out of a drawer and decided to turn it into a small home server. It now stores my photo backups, streams music to the living room, and blocks ads across the whole house network.\n\nThe project taught me more about networking than any tutorial had. It draws almost no power, runs silently on a shelf, and cost me nothing except a weekend of patient tinkering and a few cups of tea.\n\n",
    authorId: "01a16126-f97a-710d-b368-0e3e992f38f9",
    categoryId: 1,
    published: true,
  },
  {
    title: "Why I Finally Learned TypeScript After Years of Avoiding It",
    description:
      "For a long time I told myself that plain JavaScript was enough, but in June 2026 a confusing bug finally pushed me to try TypeScript. I started by adding it to one small side project instead of rewriting everything.\n\nWithin two weeks the editor was catching mistakes I used to find only at runtime. The learning curve is real, especially around generics, but I now feel more confident every time I change a piece of code I wrote months ago.\n\n",
    authorId: "01a16126-f97a-710d-b368-014d1118c61f",
    categoryId: 2,
    published: true,
  },
  {
    title: "Small CSS Habits That Made My Layouts Less Painful",
    description:
      "After a year of fighting with layouts, I collected a handful of habits that now save me hours. I start every project with a simple reset, use flexbox for one dimensional rows, and reach for grid whenever a page needs real structure.\n\nI also stopped hardcoding pixel sizes and began using relative units and a small set of spacing values. My pages now adapt to phones and wide monitors without a pile of special cases, and my stylesheets are much easier to read.\n\n",
    authorId: "01a16126-f977-7411-a856-a0ac2fc22b33",
    categoryId: 3,
    published: true,
  },
  {
    title: "Using an AI Assistant as a Study Partner, Not a Shortcut",
    description:
      "During my exam season in May 2026 I experimented with using an AI assistant as a study partner. Instead of asking for answers, I asked it to quiz me, explain concepts in different ways, and point out gaps in my notes.\n\nThe results were mixed but encouraging. It sometimes made confident mistakes, so I learned to double check everything against my textbook. Used carefully, it felt like a patient tutor available at any hour, and my retention improved noticeably.\n\n",
    authorId: "01a16126-f97a-710d-b368-12da3981cf3c",
    categoryId: 4,
    published: true,
  },
  {
    title: "A Simple Weekend Security Checkup for Your Online Accounts",
    description:
      "Last month I spent one Saturday morning tightening the security of my online life. I started by switching to a password manager and replacing every reused password, beginning with email and banking.\n\nNext I turned on two factor authentication wherever it was offered and removed old apps that still had access to my accounts. The whole job took about two hours, and I now sleep better knowing a single leaked password cannot unlock everything.\n\n",
    authorId: "01a16126-f97a-710d-b367-f0d3a4a0cf7e",
    categoryId: 5,
    published: true,
  },
  {
    title: "Three Months with an E-Ink Tablet: Is It Worth It?",
    description:
      "In July 2026 I bought an e-ink tablet to replace my paper notebooks and a stack of printed articles. The screen is easy on the eyes, the battery lasts weeks, and writing with the pen feels surprisingly close to real paper.\n\nIt is not perfect, since the refresh rate is slow and the apps are limited. Still, I read more and get distracted less, which is exactly what I wanted, and I would happily buy it again.\n\n",
    authorId: "01a16126-f979-714d-91cc-1b4a4afb0371",
    categoryId: 6,
    published: true,
  },
  {
    title: "Watching the Perseid Meteor Shower from a Dark Field",
    description:
      "On a warm night in August 2026 a few friends and I drove an hour out of the city to watch the Perseid meteor shower. We spread blankets in an open field, switched off our phones, and let our eyes adjust to the dark.\n\nAfter about twenty minutes the first bright streak crossed the sky, followed by dozens more. We counted until after midnight, and I came home reminded of how small and wonderful the universe feels when you finally look up.\n\n",
    authorId: "01a16126-f977-7411-a856-95df161d1fa5",
    categoryId: 8,
    published: true,
  },
  {
    title: "Small Kitchen Changes That Cut My Food Waste in Half",
    description:
      "Since February 2026 I have been trying to waste less food, and a few simple changes made a big difference. I plan meals before shopping, keep a visible list of what is already in the fridge, and freeze leftovers the same day.\n\nStale bread becomes breadcrumbs, vegetable scraps become stock, and overripe fruit goes into smoothies. My bin is noticeably lighter, my grocery bill dropped, and cooking feels more creative than it ever did before.\n\n",
    authorId: "01a16126-f97a-710d-b368-159223f3338d",
    categoryId: 9,
    published: true,
  },
  {
    title: "What a Month of Better Sleep Habits Taught Me",
    description:
      "In September 2026 I decided to treat sleep like a priority instead of a leftover. I fixed my bedtime, stopped using screens an hour before bed, and kept my bedroom cool and dark.\n\nThe first week was frustrating, but by week three I was waking up before my alarm and feeling clear headed. My afternoon slump disappeared, and I realized how much of my tiredness had come from small evening habits.\n\n",
    authorId: "01a16126-f978-74f8-af68-7a7e127e00e1",
    categoryId: 10,
    published: true,
  },
  {
    title: "How Five Minutes of Journaling Changed My Evenings",
    description:
      "In March 2026 I started writing in a small journal for five minutes every night. I do not try to write beautifully, I just list what went well, what worried me, and one thing I am grateful for.\n\nOver time I noticed my racing thoughts slowing down before bed. Seeing worries on paper made them feel smaller and more manageable, and flipping back through old pages reminds me of how many problems I have already solved.\n\n",
    authorId: "01a16126-f97a-710d-b367-ee241dd5419d",
    categoryId: 12,
    published: true,
  },
  {
    title: "Building a Capsule Wardrobe from Thrifted Finds",
    description:
      "In April 2026 I challenged myself to build a small wardrobe of about thirty pieces, mostly from thrift stores. I focused on a few neutral colors, good fabrics, and clothes that fit well instead of chasing trends.\n\nThe result is that getting dressed takes two minutes and nothing in my closet feels like a mistake. I spent far less than I would have in regular shops, and every piece now has a small story behind it.\n\n",
    authorId: "01a16126-f97a-710d-b368-0490e69afad5",
    categoryId: 14,
    published: true,
  },
  {
    title: "The Great Chocolate Chip Cookie Experiment",
    description:
      "Last month I baked six batches of chocolate chip cookies in one weekend, changing just one thing each time. I tried browned butter, a longer rest in the fridge, different sugar ratios, and a sprinkle of flaky salt on top.\n\nThe winner was the batch with browned butter and a full day of chilled dough, which tasted deeply of caramel and toffee. My neighbors were thrilled to help with the testing, and I now have a recipe I will never change.\n\n",
    authorId: "01a16126-f97a-710d-b368-12da3981cf3c",
    categoryId: 17,
    published: true,
  },
  {
    title: "Lessons from Redesigning My Portfolio Website Three Times",
    description:
      "My portfolio site went through three complete redesigns in 2026, and each one taught me something different. The first was too crowded, the second was too clever, and the third finally put my best work front and center.\n\nI learned to start with content, limit myself to two fonts and a few colors, and test the layout on a real phone early. Visitors now tell me they find what they need within seconds, which is the best compliment I could ask for.\n\n",
    authorId: "01a16126-f97a-710d-b368-1ad0a08fc90e",
    categoryId: 20,
    published: true,
  },
  {
    title: "Rediscovering Classic Cinema at a Tiny Repertory Theater",
    description:
      "This summer I started attending Wednesday night screenings at a tiny repertory theater near my home. It has just forty seats, creaky floors, and a programmer who introduces every film with a few warm words.\n\nSeeing old movies on the big screen with strangers is completely different from watching them alone on a laptop. I have discovered directors I had never heard of, and I now plan my whole week around those quiet evenings.\n\n",
    authorId: "01a16126-f97a-710d-b368-0e3e992f38f9",
    categoryId: 23,
    published: true,
  },
  {
    title: "The Best Books I Read This Year, So Far",
    description:
      "By the end of September 2026 I had finished thirty one books, and a handful of them stayed with me long after the last page. A quiet novel about a lighthouse keeper, a memoir about growing up between two countries, and a surprisingly funny history of salt were my favorites.\n\nMy reading improved once I stopped forcing myself to finish books I disliked. Giving myself permission to quit freed up time for the ones I truly loved, and I now keep a short list of what to read next.\n\n",
    authorId: "01a16126-f97a-710d-b367-fd296f50dda2",
    categoryId: 25,
    published: true,
  },
  {
    title: "What Our First Ten Customers Taught Us About Our Product",
    description:
      "When we launched our small startup in January 2026, we thought we knew exactly what people wanted. Our first ten customers proved us wrong within a month, and we are grateful for every piece of honest feedback.\n\nThey ignored the features we were proudest of and loved a tiny tool we had built almost as an afterthought. We rebuilt our roadmap around that tool, and the lesson was simple: talk to customers early and listen more than you speak.\n\n",
    authorId: "01a16126-f97a-710d-b368-0ae746c4d952",
    categoryId: 30,
    published: true,
  },
  {
    title: "How I Prepared for Asking for a Raise and What Worked",
    description:
      "In June 2026 I finally asked my manager for a raise after two years of avoiding the conversation. I spent a week collecting concrete examples of my work, the results it produced, and what similar roles pay in my area.\n\nI kept the meeting calm and focused on the value I had delivered rather than on my needs. It did not end with an instant yes, but within a month I received a meaningful increase and a clearer path to promotion.\n\n",
    authorId: "01a16126-f979-714d-91cc-1b4a4afb0371",
    categoryId: 33,
    published: true,
  },
  {
    title: "Screen Time Rules That Actually Survived My Toddler",
    description:
      "After months of arguments over tablets, we sat down in August 2026 and wrote a few simple screen rules for our family. No screens at meals, none in the bedroom, and a short window of cartoons after dinner.\n\nWhat made them stick was that the adults follow them too. Our toddler still complains sometimes, but evenings are calmer, and we spend more time building block towers and reading the same picture book for the hundredth time.\n\n",
    authorId: "01a16126-f97a-710d-b367-f0d3a4a0cf7e",
    categoryId: 38,
    published: true,
  },
  {
    title: "Walking the Medieval Walls and Streets of York",
    description:
      "During a long weekend in York in May 2026, I walked the entire circuit of the old city walls in just under two hours. The views over the minster and the rooftops were wonderful, especially in the soft evening light.\n\nI also wandered through the narrow lanes of the Shambles and visited a small museum about the Viking past of the city. Few places let you feel so many layers of history within a single afternoon.\n\n",
    authorId: "01a16126-f97a-710d-b368-159223f3338d",
    categoryId: 41,
    published: true,
  },
  {
    title: "Adopting a Retired Racing Greyhound: The First Month",
    description:
      "In September 2026 we adopted a retired racing greyhound, and she has completely changed our home. Despite her speed, she turned out to be a gentle couch potato who sleeps for most of the day.\n\nThe first weeks were about patience, since she had never seen stairs or glass doors. We introduced everything slowly and kept routines steady, and now she greets us at the door with a wagging tail and a goofy leaning hug.\n\n",
    authorId: "01a16126-f97a-710d-b368-1ad0a08fc90e",
    categoryId: 49,
    published: true,
  },
];

dummyPosts.map((post) => createPostDB(post));
