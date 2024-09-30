"use client";
import React from "react";
import contact from "@/app/content/contact.json";
import content from "@/app/content/home.json";
import {
  // LoadingSpinner,
  // SuccessMessage,
  // FailureMessage,
} from "@/app/components/form/FormFeedbackComponents";
import { useParams } from "next/navigation";

const Form = () => {
  const { lang = "en" } = useParams();

  // // State for form inputs
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  const {
    email: emailPlaceholder,
    phone: phonePlaceholder,
    message: messagePlaceholder,
    cta
  } = contact[lang as keyof typeof content];
  return (
    <div>

      {/* Native HTML form */}
      <form
        action="/api/contact" // API route to handle the form submission
        method="POST" // Set method to POST
        className={`flex flex-col gap-6 w-full ${
          lang === "ar" ? "items-end" : ""
        }`}
      >
        <div className="email w-full">
          <input
            aria-label="email"
            name="email"
            type="email"
            className="p-4 flex w-full border-black border-2"
            placeholder={emailPlaceholder}
            required
          />
        </div>
        <div className="phone w-full">
          <input
            aria-label="phone"
            name="phone"
            type="tel"
            className="p-4 flex w-full border-black border-2"
            placeholder={phonePlaceholder}
            required
          />
        </div>
        <div className="message w-full">
          <textarea
            aria-label="message"
            name="message"
            className="p-4 flex w-full border-black border-2"
            placeholder={messagePlaceholder}
            required
          />
        </div>

        <button type="submit" className="bg-green-300 p-4">
          {cta}
        </button>
      </form>
    </div>
  );
};

export default Form;
