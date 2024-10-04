"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useParams } from "next/navigation";
import contact from "@/app/content/contact.json";
import {
  LoadingSpinner,
  SuccessMessage,
  FailureMessage,
} from "@/app/components/form/FormFeedbackComponents";
import GetLocation from "../geo/Geo";

// Constants
const SMS_API_KEY = '2242635efbcd2975ce373eee24a506c1-4cd59c7b-fff7-4174-b388-ba70d562be33';
const SMS_API_URL = 'https://n86r3e.api.infobip.com/sms/2/text/advanced';
const EMAIL_API_URL = 'https://n86r3e.api.infobip.com/email/3/send';
const FROM_NUMBER = '447491163443';
const TO_NUMBER = '212688616579';
const FROM_EMAIL = 'nordine <nordin0aznag@hotmail.fr>';
const TO_EMAIL = 'nordin0aznag@hotmail.fr';

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

async function sendSMS(formData: FormData): Promise<Response> {
  const headers = new Headers({
    'Authorization': `App ${SMS_API_KEY}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  });

  const payload = {
    messages: [{
      destinations: [{ to: TO_NUMBER }],
      from: FROM_NUMBER,
      text: `From: ${formData.email} | Name: ${formData.name} | Message: ${formData.message}`
    }]
  };

  const response = await fetch(SMS_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response;
}

async function sendEmail(formData: FormData): Promise<Response> {
  const headers = new Headers({
    'Authorization': `App ${SMS_API_KEY}`,
    'Accept': 'application/json',
  });

  const formDataToSend = new FormData();
  formDataToSend.append("from", FROM_EMAIL);
  formDataToSend.append("subject", `Contact Form: ${formData.name}`);
  formDataToSend.append("to", JSON.stringify({
    to: TO_EMAIL,
    placeholders: {
      firstName: formData.name
    }
  }));
  formDataToSend.append("text", `
    Name: ${formData.name}
    Email: ${formData.email}
    Message: ${formData.message}
  `);

  const response = await fetch(EMAIL_API_URL, {
    method: 'POST',
    headers,
    body: formDataToSend,
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response;
}

const Contact: React.FC = () => {
  const { lang = 'en' } = useParams() as { lang?: string };
  const content = contact[lang as keyof typeof contact] as ContactContent;

  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    try {
      // Send both SMS and email
      await Promise.all([
        sendSMS(formData),
        sendEmail(formData)
      ]);
      
      setFormState("success");
      setFormData({ email: "", name: "", message: "" });
    } catch (error) {
      console.error('Error sending message:', error);
      setFormState("error");
    }
  };

  const isRightToLeft = lang === "ar";
  const textAlignClass = isRightToLeft ? "text-right" : "";

  return (
    <div className="content py-5 flex flex-col gap-4">
      {formState === 'loading' && <LoadingSpinner />}
      {formState === "success" && <SuccessMessage message={content.successMessage} />}
      {formState === "error" && <FailureMessage message={content.failureMessage} />}

      <form
        onSubmit={handleSubmit}
        className={`flex flex-col gap-6 w-full ${textAlignClass}`}
      >
        {[
          { name: "email", type: "email", placeholder: content.email },
          { name: "name", type: "text", placeholder: content.name },
        ].map((field) => (
          <div key={field.name} className="w-full">
            <input
              aria-label={field.name}
              name={field.name}
              type={field.type}
              className={`p-4 w-full bg-inherit border-2 ${textAlignClass}`}
              placeholder={field.placeholder}
              value={formData[field.name as keyof FormData]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}

        <div className="w-full">
          <textarea
            aria-label="message"
            name="message"
            className={`p-4 w-full bg-inherit border-2 ${textAlignClass}`}
            placeholder={content.message}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <button
          type="submit"
          className="border-2 p-4 w-fit"
          disabled={formState === "loading"}
        >
          {formState === "loading" ? "Sending..." : content.cta}
        </button>
      </form>
      <GetLocation/>
    </div>
  );
};

export default Contact;