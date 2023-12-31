import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Backgroud from "../../../public/images/Background.png";

import heroClassNames from "./heroClassNames";

const heroText = "Keesta Pass - Attorney at Law";
const HeroSection: FC = () => {
  return (
    <div
      className="h-screen flex"
      style={{
        backgroundImage: `url('/images/Backdrop.png')`, // Replace with your image source
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="text-white container mx-auto px-10 my-auto">
        <div className="flex flex-col bg-gradient-to-r from-[#36454f]">
          <div className="py-10 px-auto px-10">
            <h1 className="text-3xl lg:text-5xl mb-2 uppercase">
              Reliable Representation
            </h1>
            <h2 className="text-1xl lg:text-3xl mb-4 uppercase">
              For Your Legal Needs
            </h2>
            <p className="text-sm md:text-2xl mb-8 text-white">{heroText}</p>
            <Link href="/contact">
              <button className="hover:bg-[#36454f] border bg-[#99272D] text-white w-50 py-2 px-8 mt-5 ease-in-out duration-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
