import { FaRobot } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";

const data = [
  {
    id: 1,
    icon: <FaRobot />,
    title: "AI & ML",
    desc: "I will build intelligent systems that will help you make better decisions in your business, and help you automate repetitive tasks, saving you time and money.",
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: "Frontend Development",
    desc: "Your product will look good and will be accessible on all devices, including mobile phones, tablets, and desktop.",
  },
  {
    id: 3,
    icon: <FaServer />,
    title: "Backend Development",
    desc: "The security of your business/product is taken seriously right from the start of the project. I will make sure your website/app is secure from attacks.",
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: "Data Engineering",
    desc: "I will help you collect, store, and analyze data to help you make better decisions in your business, do feature engineering, and build data pipelines.",
  },
];

export default data;
