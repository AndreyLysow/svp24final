"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HexagonCanvas from "../components/hexagonCanvas";
import Image from "next/image";
import localFont from "next/font/local";
import "../styles/globals.css"; // Подключаем глобальные стили

// Настройка шрифта Montserrat
const montserrat = localFont({
  src: [
    { path: "./fonts/Montserrat-VariableFont_wght.ttf", weight: "400" },
    { path: "./fonts/Montserrat-VariableFont_wght.ttf", weight: "700" },
  ],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  const [showScrollUp, setShowScrollUp] = useState(false);

   useEffect(() => {
    // Добавление класса active2 к элементам меню с классом activelink
    const headerMenuItems = document.querySelectorAll('.menu-item');
    headerMenuItems.forEach(item => {
      item.classList.add('active2');
    });
  }, []);

  useEffect(() => {
    // Обработчик прокрутки для показа кнопки "вверх"
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <html lang="en">
      <head>
        <style>{`:root { font-family: var(--font-montserrat); }`}</style>
      </head>
      <body className={montserrat.variable}>
        <Header />
        <HexagonCanvas />
        {children}
        <Footer />

        {/* Кнопка скролла наверх */}
        {showScrollUp && (
          <button
            className={`scroll-to-top ${showScrollUp ? "show" : ""}`}
            onClick={scrollToTop}
          >
            <Image
              src="/icons/scroll-up.svg"
              alt="Scroll to top"
              width={40}
              height={40}
              style={{ width: "auto", height: "auto" }}
            />
          </button>
        )}
      </body>
    </html>
  );
}
