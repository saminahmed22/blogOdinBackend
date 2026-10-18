// import { createCommentDB } from "./models/commentModel.js";

// const dummyComments = [
//   {
//     authorId: "01a14b42-9025-7317-9d95-7ffa49cec67b",
//     content:
//       "Ericeira is such a great spot for learning! Which surf school did you go with?",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "Glad you asked about the school. It was a small local one run by two brothers, with never more than six people per instructor. That made a huge difference for a total beginner like me.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9024-7100-b0f7-8ec51239660f",
//     content:
//       "The line about swallowing more seawater than you care to admit made me laugh out loud. Standing up on day four is impressive, it took me a whole month when I started.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "A month is nothing to be ashamed of, and honestly I think I got lucky with calm conditions that week. Thanks for the kind words about the seawater, I have never swallowed so much salt in my life.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9026-72bf-97f7-e54404762cee",
//     content:
//       "How cold was the water in July? I am wondering whether I would need a wetsuit or if I can get away without one.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "I would definitely bring or rent a wetsuit. The water felt cold to me, somewhere around 17 or 18 degrees Celsius, and a thin 3/2 suit was plenty. You get wet constantly when you are learning, so staying warm keeps you in the water longer.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "I forgot to mention something in the post. On the third evening a few dolphins showed up just beyond the break while we were sitting on the sand after our lesson. Nobody said a word for about five minutes.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-7493c51d5ba0",
//     content:
//       "Dolphins?! I would have forgotten about surfing completely and just stared at the water all week.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "That is almost exactly what happened to me. The next morning I was so distracted looking for them that I missed my first wave of the session and got flattened by the second one.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9027-765e-a6dd-8f6f5e553028",
//     content:
//       "Did you rent a board or bring your own? I have no idea what size a beginner should even look for.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "Good question about the board. I rented a big soft foam board, about nine feet long, which the school included in the lesson price. Longer and wider boards are far more stable, so they are the best choice for beginners and also hurt less when they smack you.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14ac9-70f3-754a-93d2-27a36624ad34",
//     content:
//       "Falling is how you learn applies to almost everything, not just surfing. Great title and a lovely read.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-82c97930f7e6",
//     content:
//       "Please tell me you wore sunscreen on your back. Surf sunburn is no joke, I peeled for two weeks after my first trip.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "I did wear it on my back, but I completely forgot the tops of my feet. I spent the rest of the week walking around like a very sore flamingo. Lesson learned, and I will bring a rash guard next time.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "Another thing I left out of the post is the food. After lessons we ate at a tiny place near the harbor that served grilled sardines and a big pot of seafood rice for a very small price. It was the best reward after a morning of being tossed around by the sea.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-7911a41609d7",
//     content:
//       "Adding the seafood rice to my list immediately. Ericeira sounds like the perfect mix of sport and good eating.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9027-765e-a6dd-8bb2fd740397",
//     content:
//       "How fit do you need to be for a surf week? I am not very athletic and I worry I would be the slowest person in the group.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "Please do not worry about that. I am not very athletic either. The tiring part is paddling, and my shoulders were sore by day three, but the instructors let us rest between waves and adjusted the pace for everyone. Nobody was keeping score.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-8450224d582f",
//     content:
//       "I am planning to go next summer. Do you know which month is best for beginners?",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "I only went in July, and it was lively but a bit crowded in the water. A couple of locals told me September tends to be quieter with warmer water, though I cannot say that from experience. Whichever month you pick, book your lessons early.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9024-7100-b0f7-8ec51239660f",
//     content:
//       "Please tell me someone filmed your first standing wave. That is a moment you want on video.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "One of the instructors did film it from the beach. I look like a startled giraffe trying to balance on a moving table, but I have watched it more times than I would like to admit.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "One last thing about the trip. On the final afternoon, everyone in the group got up on a wave in the same session, and the whole beach cheered like we had won a world title. Nobody on that beach was a professional, and that is exactly why it felt so good.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-7ffa49cec67b",
//     content:
//       "I love that ending. Cheering for strangers is the best part of any beginner group.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-7493c51d5ba0",
//     content:
//       "Were you ever scared out there? Getting held underwater is my biggest fear when it comes to trying surfing.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "Honestly, yes, a little. On day two a wave held me under for what felt like forever and I panicked. The instructors taught us to relax, cover our heads, and let the water do its thing, and once I trusted that, the fear shrank a lot. Starting in the shallow white water helps too.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9026-72bf-97f7-e54404762cee",
//     content:
//       "Thanks for the wetsuit advice, that settles it. I am booking my trip this weekend.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9027-765e-a6dd-8f6f5e553028",
//     content:
//       "Stories like this make me want to quit my desk job and move to the coast. Congratulations on getting hooked, it sounds like the best kind of addiction.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9027-765e-a6dd-8bb2fd740397",
//     content:
//       "Did you travel solo or with friends? I would love to try something like this but I do not know anyone who would come along.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
//   {
//     authorId: "01a14b42-9025-7317-9d95-70e6444d6fdc",
//     content:
//       "I went solo, and it turned out to be great. The lessons are in small groups, so by the second day I had a few people to share lunch and sore muscles with. If you are nervous about going alone, a surf week is one of the easiest ways to make friends.",
//     postId: "01a14b45-bc25-77ff-b289-b42386f1eb47",
//   },
// ];

// dummyComments.map((comment) => createCommentDB(comment));
