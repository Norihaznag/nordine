"use client" ;
import { GameboyIcon, HelpCircleIcon, Home11Icon, Message01Icon } from 'hugeicons-react'
import Link from 'next/link'
import nav  from "@/app/content/nav.json";
import { useParams } from 'next/navigation';
import { useTheme } from "@/app/context/ThemeContext";

const Windoww = ({hide = false , onClick= ()=>{}}) => {
  const {lang = "en" } = useParams();
  const {home , projects , about ,  contact} = nav[lang as keyof typeof nav] ;
  const [Theme] = useTheme();

  const navItems = [
    { href: `/${lang}`, label: home, Icon: Home11Icon },
    { href: `/${lang}/projects`, label: projects, Icon: GameboyIcon },
    { href: `/${lang}/about`, label: about, Icon: HelpCircleIcon },
    { href: `/${lang}/contact`, label: contact, Icon: Message01Icon },
  ];

  const isRTL = lang === "ar";

  

  console.log(lang)
  return (
    <div className={`fixed inset-0 z-20 bg-black bg-opacity-20 transition-opacity ${hide ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
    <div 
      className={`max-h-[50vh] z-50 fixed top-0 ${isRTL ? 'right-0' : 'left-0'} flex flex-col  w-[90vw] max-w-md text-inherit shadow-lg transform transition-transform ${Theme ? 'bg-black text-white' : 'bg-white text-black'} ${
        hide ? (isRTL ? 'translate-x-full' : '-translate-x-full') : 'translate-x-0'
      } ${isRTL ? "text-right" : "text-left"}`}
    >
      {navItems.map(({ href, label, Icon }) => (
        <Link 
          key={href}
          href={href}
          className={`p-5 flex items-center text-[17px] gap-2  transition-colors ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <Icon className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
          {label}
        </Link>
      ))}
    </div>
    <div 
      className="absolute inset-0 z-20" 
      onClick={onClick}
      aria-label="Close menu"
    />
  </div>
  
  )
}

export default Windoww