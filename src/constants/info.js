import instationImg from "../assets/images/instation_1.png";
import equranImg from "../assets/images/equran.jpg";
import gbuilderImg from "../assets/images/gbuilder.jpg";

import {
  equranss1,
  equranss2,
  instationss1,
  instationss2,
  instationss3,
  instationss4,
  instationss5,
  gbuilderss1,
  gbuilderss2,
  instationss6,
  MustholahCover1a,
  MustholahCover1b,
  MustholahCover2a,
  MustholahCover2b,
  logoLf1,
  logoLf2,
  logoLf3,
  logoRgUg,
  quizlamUi1,
  quizlamUi2,
  quizlamPreview,
  warungpediass1,
  warungpediass2,
  warungpediass3,
  warungpediass4,
  flyers1,
  flyers2,
} from "../assets/images";

export const projectInfo = [
  {
    name: "Instation",
    slug: "instation",
    stack: [
      "React",
      "Tailwind",
      "Redux",
      "axios",
      "Material UI",
      "React Toastify",
      "NodeJS",
      "Express",
      "MongoDB",
      "mongoose",
      "Socket.io",
    ],
    imagePreview: instationImg,
    description:
      "instation is an instagram clone with some its functionality, built with mern stack along with some packages",
    moreDescription:
      "Instation basically is an instagram you can posting, editing, deleting your post. Like other post, follow other account, explore other post, and even chatting with other account.",
    code: "https://github.com/Hanip56/instation",
    live: "https://instation-2pknrt6ob-hanip56.vercel.app/",
    type: "Full Stack App",
    imageScreenshoot: [
      instationss1,
      instationss2,
      instationss3,
      instationss4,
      instationss5,
      instationss6,
    ],
  },
  {
    name: "E-quran",
    slug: "e-quran",
    stack: ["NextJS", "Tailwind"],
    imagePreview: equranImg,
    description:
      "E-quran is an online quran, where you can read or even play ayah quran",
    moreDescription:
      "E-quran is an online quran, you can navigate to any surah or ayah easily, then read it, bookmark it, or even play the audio.",
    code: "https://github.com/Hanip56/e-quran",
    live: "https://e-quran-rouge.vercel.app/",
    type: "API Project",
    imageScreenshoot: [equranss1, equranss2],
  },
  {
    name: "Quizlam",
    slug: "quizlam",
    stack: ["React Native", "NodeJs", "Express", "axios"],
    imagePreview: quizlamPreview,
    description: "Improve your Islamic knowledge by taking quizzes",
    moreDescription:
      "Quizlam is a mobile app that allows you to improve your Islamic knowledge by taking quizzes on a variety of topics provided by Quizlam, or you can create your own and share it with your friends.",
    code: "https://github.com/Hanip56/quizlam",
    type: "Android App",
    imageScreenshoot: [quizlamUi1, quizlamUi2],
  },
  {
    name: "WarungPedia",
    slug: "warungpedia",
    stack: ["React", "Stripe", "Tailwind", "NodeJS", "express", "MongoDB"],
    imagePreview: warungpediass1,
    description: "E-commerce concept",
    moreDescription:
      "WarungPedia is a place where you can buy some yummiy food especially food from indonesia. Kupat tahu, Pecel Lele, Karedok and more.",
    live: "https://warungpedia-client.vercel.app/",
    code: "https://github.com/Hanip56/warungpedia-client",
    type: "Full Stack App",
    imageScreenshoot: [
      warungpediass1,
      warungpediass2,
      warungpediass3,
      warungpediass4,
    ],
  },
  {
    name: "GBuilder",
    slug: "gbuilder",
    stack: ["React", "Tailwind", "Framer motion"],
    imagePreview: gbuilderImg,
    description: "Gbuilder is a simple logo maker",
    code: "https://github.com/Hanip56/GBuilder",
    live: "https://g-builder.vercel.app/",
    type: "React App",
    imageScreenshoot: [gbuilderss1, gbuilderss2],
  },
];

export const expertiseList = [
  {
    name: "Front End",
    description:
      "Make beautiful and user friendly UI/UX with front end technology, fast, scalable, and responsive.",
    badgeColor: "red",
    tech: [
      {
        name: "Html",
        icon: require("../assets/logo/html.png"),
      },
      {
        name: "Css",
        icon: require("../assets/logo/css.png"),
      },
      {
        name: "Javascript",
        icon: require("../assets/logo/js.png"),
      },
      {
        name: "React",
        icon: require("../assets/logo/react.png"),
      },
      {
        name: "Tailwind",
        icon: require("../assets/logo/tailwind.png"),
      },
      {
        name: "NextJS",
        icon: require("../assets/logo/nextjs.png"),
      },
      {
        name: "Redux",
        icon: require("../assets/logo/redux.png"),
      },
    ],
  },
  {
    name: "Back End",
    description: "Skilled in making REST API with NodeJS and Express",
    badgeColor: "green",
    tech: [
      {
        name: "NodeJS",
        icon: require("../assets/logo/node.png"),
      },
      {
        name: "ExpressJS",
        icon: require("../assets/logo/express.png"),
      },
      {
        name: "MongoDB",
        icon: require("../assets/logo/mongodb.png"),
      },
      {
        name: "Mongoose",
        icon: require("../assets/logo/mongoose.png"),
      },
      {
        name: "MySQL",
        icon: require("../assets/logo/mysql.png"),
      },
    ],
  },
  {
    name: "Design and others",
    description:
      "Experienced Use these tool and Also making Graphic design such as flyer, logo, UI, and more.",
    badgeColor: "blue",
    tech: [
      {
        name: "Git",
        icon: require("../assets/logo/git.png"),
      },
      {
        name: "Postman",
        icon: require("../assets/logo/postman.png"),
      },
      {
        name: "Photoshop",
        icon: require("../assets/logo/ps.png"),
      },
      {
        name: "Illustrator",
        icon: require("../assets/logo/ai.png"),
      },
    ],
  },
];

export const graphicList = [
  {
    id: "graphic-1",
    name: "Logo RijaalulGhad UmmahatulGhad",
    description: "",
    previewImg: logoRgUg,
    className: "lg:col-span-2 lg:row-span-2",
    images: [logoRgUg],
  },
  {
    id: "graphic-2",
    name: "Logo Lensa Firdaus",
    description: "",
    previewImg: logoLf1,
    className: "lg:col-span-2 lg:row-span-2",
    images: [logoLf1, logoLf2, logoLf3],
  },
  {
    id: "graphic-3",
    name: "Flyers",
    description: "",
    previewImg: flyers1,
    className: "lg:col-span-3 lg:row-span-2",
    images: [flyers1, flyers2],
  },
  {
    id: "graphic-4",
    name: "Mustholah Book Covers",
    description: "",
    previewImg: MustholahCover1a,
    className: "lg:col-span-3 lg:row-span-4",
    images: [
      MustholahCover1a,
      MustholahCover1b,
      MustholahCover2a,
      MustholahCover2b,
    ],
  },
  {
    id: "graphic-5",
    name: "UI/UX",
    description: "",
    previewImg: quizlamUi1,
    className: "lg:col-span-4 lg:row-span-3",
    images: [quizlamUi1, quizlamUi2],
  },
];
