"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  hide?: boolean; 
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ hide = true }) => {
  const { changeLanguage, language } = useLanguage();

  return (
    <div className={`grid w-fit top-[3.6rem] absolute bg-white ${hide ? "hidden" : ""}`}>
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="flex flex-col items-start"
      >
        <option className="p-2" value="en">English</option>
        <option className="p-2" value="fr">Français</option>
        <option className="p-2" value="ar">العربية</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
