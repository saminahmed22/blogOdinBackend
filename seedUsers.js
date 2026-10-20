import { createUserDB } from "./models/userModel.js";

const dummyUsers = [
  {
    firstName: "Elena",
    lastName: "Marchetti",
    username: "elena",
    bio: "Travel writer and amateur photographer chasing good light across Europe.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#FFD6E0",
  },
  {
    firstName: "Rahim",
    lastName: "Chowdhury",
    username: "rahim",
    bio: "Backend developer who loves clean APIs, strong coffee, and late night debugging.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#D6F0FF",
  },
  {
    firstName: "Sofia",
    lastName: "Andersson",
    username: "sofia",
    bio: "Home cook, sourdough enthusiast, and collector of old recipe books.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#FFF3C4",
  },
  {
    firstName: "Marcus",
    lastName: "Oyelaran",
    username: "marcus",
    bio: "Weekend marathoner writing about training, recovery, and learning to rest.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#D4F5D6",
  },
  {
    firstName: "Priya",
    lastName: "Raman",
    username: "priya",
    bio: "Book lover and part time poet who reviews one novel every week.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#E6D6FF",
  },
  {
    firstName: "Lucas",
    lastName: "Moreau",
    username: "lucas",
    bio: "Indie game designer sharing prototypes, failures, and small victories.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#FFE0CC",
  },
  {
    firstName: "Aiko",
    lastName: "Tanaka",
    username: "aiko",
    bio: "Product designer who sketches in notebooks before touching a screen.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#D0F4F0",
  },
  {
    firstName: "Daniel",
    lastName: "Kowalski",
    username: "daniel",
    bio: "History teacher, podcast addict, and reluctant weekend gardener.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#F5E6D3",
  },
  {
    firstName: "Fatima",
    lastName: "Al-Sayed",
    username: "fatima",
    bio: "Freelance journalist covering culture, food, and everyday city life.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#FFD6EB",
  },
  {
    firstName: "Tomas",
    lastName: "Herrera",
    username: "tomas",
    bio: "Trail guide and camping nerd who believes every problem needs a long walk.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#E4F7C8",
  },
  {
    firstName: "Noor",
    lastName: "Rahman",
    username: "noor",
    bio: "Marine biologist documenting coral reefs and the people who protect them.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#CFEDFC",
  },
  {
    firstName: "Mateo",
    lastName: "Silva",
    username: "mateo",
    bio: "Street food hunter who travels for tacos and stays for the stories behind them.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#FEDFC8",
  },
  {
    firstName: "Ingrid",
    lastName: "Larsen",
    username: "ingrid",
    bio: "Environmental scientist writing about climate, fjords, and small habits that add up.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#D8F8F3",
  },
  {
    firstName: "Kofi",
    lastName: "Mensah",
    username: "kofi",
    bio: "Startup founder sharing honest lessons from building, breaking, and rebuilding.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#FFF6CC",
  },
  {
    firstName: "Yuki",
    lastName: "Nakamura",
    username: "yuki",
    bio: "Fashion stylist and thrift store regular who thinks every outfit tells a story.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#FAD6E2",
  },
  {
    firstName: "Zara",
    lastName: "Hussain",
    username: "zara",
    bio: "AI researcher who explains machine learning with kitchen metaphors and bad puns.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#EACEF8",
  },
  {
    firstName: "Omar",
    lastName: "Khalil",
    username: "omar",
    bio: "Personal finance nerd breaking down budgets, investing basics, and money myths.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#CDDDF4",
  },
  {
    firstName: "Hana",
    lastName: "Kim",
    username: "hana",
    bio: "Urban gardener growing herbs on a tiny balcony and writing about slow living.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#D6FADC",
  },
  {
    firstName: "Liam",
    lastName: "O'Connor",
    username: "liam",
    bio: "Football fan and amateur coach who overanalyzes every match and every pass.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#E0F5D6",
  },
  {
    firstName: "Amara",
    lastName: "Okafor",
    username: "amara",
    bio: "Mental health advocate and therapist-in-training writing about calm, one day at a time.",
    passwordHash:
      "$argon2id$v=19$m=65536,p=4,t=3$Rw9vySyrEs4N/eiiccdtPw$CeSdiFB9xgaHtl09eJwiV1L62mD2FdOMDv4n4aQL+oM",
    theme_color: "#FCDFD9",
  },
];

dummyUsers.map((user) => createUserDB(user));
