import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const data = [
  { id: 1, icon: <HiOutlineMail />, link: "mailto:iannyfarai@gmail.com" },
  {
    id: 2,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ianmadhara/",
  },
  { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/+19087596760" },
];

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546

export default data;
