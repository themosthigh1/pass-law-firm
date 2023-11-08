import PageTitle from "@/app/components/PageTitle/PageTitle";

const AboutPage = ({ title, content, slug }: IPageProps) => {
  return (
    <div>
      <PageTitle title="About" />
      <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto pb-8 text-black mb-28">
        <p>
          At Pass Law Firm, we are dedicated to providing strong and unwavering
          legal representation for individuals facing criminal charges. We have
          the experience and commitment to safeguard your rights and interests.
          We offer a comprehensive range of services, including expert legal
          counsel, strategic defense planning, and aggressive advocacy in and
          out of the courtroom. Whether you are facing charges related to theft,
          drug offenses, DUI, assault, or any other criminal matter, we will
          tirelessly work to build a solid defense, challenge evidence,
          negotiate with prosecutors, and strive for the best possible outcome
          in your case. Your future and reputation are of paramount importance
          to us, and we are here to stand by your side, ensuring that you
          receive the fair and just treatment you deserve throughout the legal
          process.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
