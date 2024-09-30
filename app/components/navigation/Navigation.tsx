"use client";

import { Menu01Icon, Moon02Icon, Sun02Icon } from "hugeicons-react";
import Windoww from "./Windoww";
import { useTheme } from "@/app/context/ThemeContext";
import { useState } from "react";
import nav from "@/app/content/nav.json";
import { useParams } from "next/navigation";
import Link from "next/link";

type HideState = {
  window: boolean;
  lang: boolean;
};

const Navigation = () => {
  const [hide, setHide] = useState<HideState>({
    window: true,
    lang: true,
  });
  const [Theme, setTheme] = useTheme();

  const { lang = "en" } = useParams() as { lang?: string };
  const { home, projects, about, contact } = nav[lang as keyof typeof nav];

  const navItems = [
    { href: `/${lang}`, label: home },
    { href: `/${lang}/projects`, label: projects },
    { href: `/${lang}/about`, label: about },
    { href: `/${lang}/contact`, label: contact },
  ];

  const isRTL = lang === "ar";

  return (
    <div className="h-[3.5rem] w-full relative">
      <Windoww
        hide={hide.window}
        onClick={() => setHide({ ...hide, window: true })}
      />

      <div className="flex w-full h-[inherit] items-center justify-between px-2 gap-2 ">
        <ul
          className={`max-[773px]:hidden md:flex items-center ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`p-5 flex items-center text-[17px] gap-2 hover:underline underline-offset-8 transition-colors ${
                  isRTL ? "flex-row-reverse" : ""
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="icons flex gap-2 relative items-center">
          {/* Menu icon (only visible on mobile) */}
          <Menu01Icon
            className="md:hidden"
            width={40}
            height={40}
            onClick={() => setHide({ ...hide, window: false })}
          />

        </div>

        {/* Name (centered) */}
        <div className=" flex gap-3">
          {Theme ? (
            <Sun02Icon
              stroke="0.5"
              width={30}
              className="p-1  w-8 h-8 rounded-full bg-[#292929] "
              height={40}
              onClick={() => setTheme(!Theme)}
            />
          ) : (
            <Moon02Icon
              stroke="0.5"
              width={30}
              className="p-1 border w-8 h-8 rounded-full"
              height={40}
              onClick={() => setTheme(!Theme)}
            />
          )}

          <Link
            href={"/"}
            className={`text-lg font-semibold  ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            Noureddine Azinag
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
