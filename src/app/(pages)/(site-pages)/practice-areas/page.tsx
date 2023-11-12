import PageTitle from "@/app/components/PageTitle/PageTitle";
import React from "react";
import { practiceAreas } from "./practiceAreas";

const PracticeAreasPage = () => {
  return (
    <div>
      <PageTitle title="Practice Areas" />
      <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto pb-8 text-black mb-28">
        <p>
          Here at Pass Law Firm, personalized legal advocacy meets unwavering
          commitment. As a dedicated practice led by Keesta Pass, a seasoned and
          court-appointed lawyer, we specialize in providing comprehensive legal
          representation. Keesta brings a wealth of experience to a diverse
          range of practice areas, ensuring that each client receives
          individualized attention and tailored solutions. From criminal defense
          to family law matters, Keesta Pass Law Firm is steadfast in its
          commitment to securing justice for every client. Trust us to navigate
          the complexities of the legal system with diligence, compassion, and
          the expertise you deserve.
        </p>
        <div className="my-[5vh]">
          {practiceAreas.map((practiceArea, i) => (
            <>
              <div>
                <div className="flex flex-wrap">
                  <div>{i < 11 && <p key={i}>{practiceArea.name}</p>}</div>
                  <div className="flex">
                    {i > 11 && <p key={i}>{practiceArea.name}</p>}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreasPage;
