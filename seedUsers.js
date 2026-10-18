// import { createUserDB } from "./models/userModel.js";

// const dummyUsers = [
//   {
//     firstName: "Elena",
//     lastName: "Marchetti",
//     username: "elena_marchetti",
//     bio: "Travel writer and amateur photographer chasing good light across Europe.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#FFD6E0",
//   },
//   {
//     firstName: "Rahim",
//     lastName: "Chowdhury",
//     username: "rahim_codes",
//     bio: "Backend developer who loves clean APIs, strong coffee, and late night debugging.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#D6F0FF",
//   },
//   {
//     firstName: "Sofia",
//     lastName: "Andersson",
//     username: "sofia_a",
//     bio: "Home cook, sourdough enthusiast, and collector of old recipe books.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#FFF3C4",
//   },
//   {
//     firstName: "Marcus",
//     lastName: "Oyelaran",
//     username: "marcus_runs",
//     bio: "Weekend marathoner writing about training, recovery, and learning to rest.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#D4F5D6",
//   },
//   {
//     firstName: "Priya",
//     lastName: "Raman",
//     username: "priya_reads",
//     bio: "Book lover and part time poet who reviews one novel every week.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#E8DAFF",
//   },
//   {
//     firstName: "Lucas",
//     lastName: "Moreau",
//     username: "lucas_m",
//     bio: "Indie game designer sharing prototypes, failures, and small victories.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#FFE0CC",
//   },
//   {
//     firstName: "Aiko",
//     lastName: "Tanaka",
//     username: "aiko_tanaka",
//     bio: "Product designer who sketches in notebooks before touching a screen.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#D0F4F0",
//   },
//   {
//     firstName: "Daniel",
//     lastName: "Kowalski",
//     username: "dan_kowalski",
//     bio: "History teacher, podcast addict, and reluctant weekend gardener.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#F5E6D3",
//   },
//   {
//     firstName: "Fatima",
//     lastName: "Al-Sayed",
//     username: "fatima_writes",
//     bio: "Freelance journalist covering culture, food, and everyday city life.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#FFD9EC",
//   },
//   {
//     firstName: "Tomas",
//     lastName: "Herrera",
//     username: "tomas_outdoors",
//     bio: "Trail guide and camping nerd who believes every problem needs a long walk.",
//     passwordHash:
//       "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
//     theme_color: "#E4F7C8",
//   },
// ];

// dummyUsers.map((user) => createUserDB(user));
