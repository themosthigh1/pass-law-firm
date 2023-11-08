import Link from "next/link";

import footerClassNames from "./footerClassNames";
import { FaFacebook } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { headerMenuLinks } from "../Header/headerMenuLinks";

const footerText = '"Defending Your Rights, Delivering Justice."';

const footerLinks = [
  { name: "About", link: "/about" },
  { name: "Practice Areas", link: "/practice-areas" },
  { name: "Contact", link: "/contact" },
];

const contactLinks = [
  {
    link: "https://www.facebook.com/profile.php?id=100090843807874",
    icon: <FaFacebook size={20} />,
  },
  {
    link: "/contact",
    icon: <GrMail size={20} />,
  },
];

const Footer = () => {
  const {
    container,
    footer,
    section,
    section1,
    section1Content,
    section1Heading,
    section2,
    sectionLink,
    section2Content,
    section2Heading,
    section2ul,
    section3,
    section3Content,
    section3Heading,
  } = footerClassNames;

  return (
    <footer className="bg-[#36454f] py-10 text-white">
      <div className="container mx-auto py-8 px-6">
        <div className="flex justify-center">
          <h1 className="text-lg">
            Defending Your Rights, Delivering Justice.
          </h1>
        </div>
        <div className="border-b mt-5 mx-40"></div>
        <div className="flex mt-5 justify-center ">
          {headerMenuLinks.map((link, i) => (
            <Link
              href={link.linkPath}
              className="mx-5 uppercase hover:text-[#99272D]"
              key={i}
            >
              <p>{link.linkName}</p>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
