import instationImg from "../assets/images/instation_1.png";
import equranImg from "../assets/images/equran.jpg";
import gbuilderImg from "../assets/images/gbuilder.jpg";

export const projectInfo = [
  {
    name: "Instation",
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
  },
  {
    name: "E-quran",
    stack: ["NextJS", "Tailwind"],
    imagePreview: equranImg,
    description:
      "E-quran is an online quran, where you can read or even play ayah quran",
    code: "https://github.com/Hanip56/e-quran",
    live: "https://e-quran-rouge.vercel.app/",
  },
  {
    name: "GBuilder",
    stack: ["React", "Tailwind", "Framer motion"],
    imagePreview: gbuilderImg,
    description: "Gbuilder is a simple logo maker",
    code: "https://github.com/Hanip56/GBuilder",
    live: "https://g-builder.vercel.app/",
  },
];
