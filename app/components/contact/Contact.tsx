"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import contact from "@/app/content/contact.json";
import {
  LoadingSpinner,
  SuccessMessage,
  FailureMessage,
} from "@/app/components/form/FormFeedbackComponents"
import { useParams } from "next/navigation";
import axios from "axios";

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  email: string;
  name: string;
  message: string;
}

interface ContactContent {
  email: string;
  name: string;
  message: string;
  cta: string;
  successMessage: string;
  failureMessage: string;
}

const Contact: React.FC = () => {
  const { lang = 'en' } = useParams() as { lang?: string };

  const { email, name, message, cta, successMessage, failureMessage } =
    contact[lang as keyof typeof contact] as ContactContent;

  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  


  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    try {
      // Simulate API call
      const response = await axios.post('/api/contact', formData);
  
      // Check if the response status is not in the 2xx range
      if (response.status < 200 || response.status >= 300) {
        setFormState("error");
      } else {
        setFormState("success");
        setFormData({ email: "", name: "", message: "" });
      }
    } catch (err) {
      setFormState("error");
      console.error('Error submitting form:', err);
    }
  };
  


  return (
    <div className="content py-5 flex flex-col gap-4 ">
      {formState === 'loading' && <LoadingSpinner />}

      {formState === "success" && (
        <SuccessMessage message={successMessage} />
      )}
      {formState === "error" && <FailureMessage message={failureMessage} />}

      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-6 w-full ${
          lang === "ar" ? "text-right" : ""
        }`}
      >
        <div className="email w-full">
          <input
            aria-label="email"
            name="email"
            type="email"
            className={`p-4 flex  w-full bg-inherit border-2 ${
          lang === "ar" ? "text-right" : ""
        }`}
            placeholder={email}
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="name w-full">
          <input
            aria-label="name"
            name="name"
            type="text"
            className={`p-4 flex  w-full bg-inherit border-2 ${
                lang === "ar" ? "text-right" : ""
              }`}
            placeholder={name}
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="Message w-full">
          <textarea
            aria-label="message"
            name="message"
            className={`p-4 flex  w-full bg-inherit border-2 ${
                lang === "ar" ? "text-right" : ""
              }`}
            placeholder={message}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button
          type="submit"
          className="border-2 p-4 w-fit px-4"
          disabled={formState === "loading"}
        >
          {formState === "loading" ? "Sending..." : cta}
        </button>
      </form>
    </div>
  );
};

export default Contact;