import PageTitle from "@/app/components/PageTitle/PageTitle";
import Content from "./Content";

const ContactPage = () => {
  return (
    <div>
      <PageTitle title="Contact" />
      <div className="px-6 sm:px-12 md:px-20 lg:px-36 mx-auto pb-8 text-black mb-28">
        <Content />
      </div>
    </div>
  );
};

export default ContactPage;
