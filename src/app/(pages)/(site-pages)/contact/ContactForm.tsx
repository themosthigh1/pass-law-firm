"use client";
import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import { client } from "../../../../../sanity/lib/client";

interface Contact {
  firstName: string;
  lastName: string;
  message: string;
}

const ContactForm: FC = () => {
  const [contact, setContact] = useState<Contact>({
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Save the contact data to Sanity
      const result = await client.create({
        _type: "contacts", // Specify the Sanity document type
        firstName: contact.firstName,
        lastName: contact.lastName,
        message: contact.message,
      });

      console.log("Contact saved, added to the database", result);

      // Reset the form after successful submission
    } catch (error) {
      console.error("Error saving contact:", error);
      // Handle the error as needed (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mt-16">
        <label htmlFor="firstName" className={inputClassNames.label}>
          First Name
        </label>
        <input
          className={inputClassNames.inputfield}
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          required
        />
        <label htmlFor="lastName" className={inputClassNames.label}>
          Last Name
        </label>
        <input
          className={inputClassNames.inputfield}
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          required
        />
        <label htmlFor="message" className={inputClassNames.label}>
          Message
        </label>
        <textarea
          className={inputClassNames.messageField}
          name="message"
          value={contact.message}
          onChange={handleChange}
          required
        />
        <div>
          <button
            className="bg-[#99272D] hover:bg-[#36454f] py-2 px-8 text-white ease-in-out duration-300"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

const inputClassNames = {
  inputfield:
    "border border-slate-300 h-10 px-3 py-2 mb-8 rounded-sm ring-color-yellow-500",
  messageField:
    "border border-slate-300 px-3 py-2 mb-8 h-40 rounded-sm ring-color-yellow-500",
  label: "block text-sm font-semibold text-gray-700 mb-2",
};
