import React, { FC } from "react";
import TitleBakground from "../../../../public/images/titleBackground.png";
import Image from "next/image";

interface PageTitleProps {
  title: string;
}

const PageTitle: FC<PageTitleProps> = (props) => {
  const { title } = props;

  return (
    <>
      <div
        className="h-[175px]"
        style={{
          position: "absolute",
          width: "100vw",
          overflow: "hidden",
          zIndex: "-1",
        }}
      >
        <Image
          src={TitleBakground}
          alt={"Title Background"}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="text-white py-[8vh]"
        style={{
          marginBottom: "100px",
          fontSize: "2rem",
          lineHeight: "3rem",
          textAlign: "center",
        }}
      >
        {title}
      </div>
    </>
  );
};

export default PageTitle;

const sectionClassNames = {
  section: "px-6 sm:px-12 md:px-20 lg:px-36 mx-auto py-8 text-black",
  trending: "flex flex-col sm:flex-row items-center justify-between",
  trendingTitle: "margin: 0",
  fontSize: "2rem",
  lineHeight: "3rem",
  textAlign: "center",
  paddingTop: "5vh",
};
