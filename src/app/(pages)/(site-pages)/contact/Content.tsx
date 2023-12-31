"use client";
import ContactForm from "./ContactForm";

const Content = () => {
  return (
    <div>
      <div>
        <h1 className="mb-5">
          We would love to hear from you! If you have any questions, inquiries,
          or would like to request further information, please feel free to get
          in touch with us using the contact form below.
        </h1>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Content;
