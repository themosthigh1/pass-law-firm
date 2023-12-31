import PageTitle from "@/app/components/PageTitle/PageTitle";
import Link from "next/link";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const page = () => {
  return (
    <div>
      <PageTitle title="Going to Court" />
      <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto pb-8 text-black mb-28">
        <p className="mb-5">
          Preparing for your court date is a crucial step in securing the best
          possible outcome for your case. At Pass Law Firm, we understand that
          facing legal proceedings can be stressful, and we are here to guide
          you every step of the way. To ensure you are ready for your court
          appearance, start by carefully reviewing all the documents and
          information related to your case. It is essential to know the charges
          against you, understand the evidence, and be clear on your rights.
        </p>
        <p>
          Consider meeting with your attorney to discuss your defense strategy
          and any questions or concerns you may have. Dress appropriately and
          professionally for your court appearance to make a favorable
          impression. Arrive at the courthouse well in advance to allow for
          unexpected delays. Throughout the process, maintain open communication
          with your legal team, and stay calm and respectful in court. Remember,
          you have a dedicated support system here to help you navigate the
          legal process and secure the best possible outcome for your case.
        </p>
        <Link href="https://www1.aoc.state.nc.us/www/calendars/CriminalQuery.html">
          <div className="mt-5 flex justify-center">
            <button className="flex items-center space-x-2 hover:bg-[#36454f] border-[#36454f] hover:border[#99272D] bg-[#99272D] text-white w-50 py-2 px-8 mt-5 ease-in-out duration-300">
              <span>Find my Date</span>
              <BiLinkExternal />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
