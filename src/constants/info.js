import instationImg from "../assets/images/instation_1.png";
import equranImg from "../assets/images/equran.jpg";
import gbuilderImg from "../assets/images/gbuilder.jpg";

import { equranss1, equranss2 } from "../assets/images";

export const projectInfo = [
  {
    name: "Instation",
    slug: "instation",
    stack: [
      "React",
      "Tailwind",
      "NodeJS",
      "Express",
      "MongoDB",
      "mongoose",
      "Socket.io",
    ],
    imagePreview: instationImg,
    description:
      "instation is an instagram clone with some its functionality, built with mern stack along with some packages",
    code: "https://www.google.com",
    live: "https://instation.herokuapp.com",
    type: "Full Stack App",
  },
  {
    name: "E-quran",
    slug: "e-quran",
    stack: ["NextJS", "Tailwind"],
    imagePreview: equranImg,
    description:
      "E-quran is an online quran, where you can read or even play ayah quran",
    code: "https://github.com/Hanip56/e-quran",
    live: "https://e-quran-rouge.vercel.app/",
    type: "API Project",
    imageScreenshoot: [equranss1, equranss2],
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
  },
];

export const expertiseList = [
  {
    name: "Front End",
    description:
      "Make beautiful with the front end technology, fast, scalable, and responsive. With great ui and ux",
    badgeColor: "red",
    tech: [
      {
        name: "React",
        icon: require("../assets/logo/react.png"),
      },
      {
        name: "Javascript",
        icon: require("../assets/logo/js.png"),
      },
      {
        name: "Tailwind",
        icon: require("../assets/logo/tailwind.png"),
      },
      {
        name: "Css",
        icon: require("../assets/logo/css.png"),
      },
      {
        name: "Html",
        icon: require("../assets/logo/html.png"),
      },
    ],
  },
  {
    name: "Front End",
    description:
      "Make beautiful with the front end technology, fast, scalable, and responsive. With great ui and ux",
    badgeColor: "green",
    tech: [
      {
        name: "React",
        icon: require("../assets/logo/react.png"),
      },
      {
        name: "Javascript",
        icon: require("../assets/logo/js.png"),
      },
      {
        name: "Tailwind",
        icon: require("../assets/logo/tailwind.png"),
      },
      {
        name: "Css",
        icon: require("../assets/logo/css.png"),
      },
      {
        name: "Html",
        icon: require("../assets/logo/html.png"),
      },
    ],
  },
  {
    name: "Front End",
    description:
      "Make beautiful with the front end technology, fast, scalable, and responsive. With great ui and ux",
    badgeColor: "blue",
    tech: [
      {
        name: "React",
        icon: require("../assets/logo/react.png"),
      },
      {
        name: "Javascript",
        icon: require("../assets/logo/js.png"),
      },
      {
        name: "Tailwind",
        icon: require("../assets/logo/tailwind.png"),
      },
      {
        name: "Css",
        icon: require("../assets/logo/css.png"),
      },
      {
        name: "Html",
        icon: require("../assets/logo/html.png"),
      },
    ],
  },
];
