import Image from "next/image";
import HeroSection from "../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <div className="my-20 px-6 sm:px-12 md:px-20 lg:px-36 mx-auto text-black flex justify-center">
          <h1 className="text-2xl text-center">
            The experience and commitment to safeguard your rights and
            interests.
          </h1>
        </div>
      </main>
    </>
  );
}
