"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "../styles/main.css";

export default function Home() {
 
  return (
    <div className="main-container">
      <div className="background-image-container">
        <Image
          src="/main2.jpg"
          alt="Фон Сильверпринт"
          fill
          style={{ objectFit: "cover", position: "absolute", zIndex: -3, opacity: 0.6 }}
        />
        <div className="background-mask"></div>
      </div>

      {/* Основной контент */}
      <main className="content-wrapper">
        <div className="main-section">
          <h1 className="highlight-title">Заголовок</h1>
          <p>Текст или контент основной секции</p>
        </div>
        <div style={{ height: "2000px", background: "rgba(0, 0, 0, 0.1)" }}></div>
      </main>
    </div>
  );
}
