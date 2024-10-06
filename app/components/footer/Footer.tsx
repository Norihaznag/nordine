"use client" ;
import React from "react";
import content from "@/app/content/home.json";
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { Github01Icon } from "hugeicons-react";
import { useParams } from "next/navigation";



const Footer = () => {
  const { lang = "en" } = useParams();
  const { contact, footer } = content[lang as keyof typeof content];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'ar', name: 'العربية' }
  ];

  return (
    <footer className="border-t">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">{contact.title}</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>
            </li>
            <li className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+212688616579" className="hover:underline">+212 688 616 579</a>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Social</h2>
          <div className="flex gap-4">
            <Link href={contact.socialLinks.linkedin} className="hover:text-blue-500 transition-colors">
              <Linkedin className="w-8 h-8" />
            </Link>
            <Link href={contact.socialLinks.github} className="hover:text-gray-600 transition-colors">
              <Github01Icon className="w-8 h-8" />
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Language</h2>
          <ul className="space-y-2">
            {languages.map((language) => (
              <li key={language.code}>
                <Link 
                  href={`/${language.code}`}
                  className={`block rounded-md  hover:underline transition-colors ${
                    lang === language.code ? 'font-bold  dark:text-blue-800' : ''
                  }`}
                >
                  {language.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;