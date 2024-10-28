"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/footer.css";
import Image from "next/image";

const Footer = () => {
  const pathname = usePathname();

  const renderFooterSection = (title, links) => (
    <div className="footer-section">
      <span className="footer-section-title">{title}</span>
      <div className="footer-info">
        {links.map((link, index) => (
          <Link href={link.href} key={`${link.href}-${index}`}>
            <span className={`footer-item ${pathname === link.href ? "footerselect-next" : ""}`}>
              {link.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );

  const companyLinks = [
    { label: "О компании", href: "#about" },
    { label: "Контакты", href: "#contacts" },
    { label: "Реквизиты", href: "#details" },
    { label: "Вакансии", href: "#vacancies" },
  ];

  const infoLinks = [
    { label: "Услуги", href: "#services" },
    { label: "Политика обработки персональных данных", href: "#policy" },
    { label: "Карта сайта", href: "#sitemap" },
  ];

  return (
    <footer style={{ position: "relative", zIndex: 10 }}>
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-logo-section">
            <Image
              src="/logotips/logo-silverprint.png"
              alt="Сильверпринт"
              className="footer-logo"
              width={120}
              height={40}
              style={{ objectFit: "contain" }}
            />
            <div className="footer-company-details">
              {companyLinks.map((link, index) => (
                <Link href={link.href} key={`${link.href}-${index}`}>
                  <span className={`footer-item ${pathname === link.href ? "footerselect-next" : ""}`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {renderFooterSection("Информация", infoLinks)}

          <div className="footer-section">
            <span className="footer-section-title">Мы в соцсетях</span>
            <div className="footer-socials">
              <p>Подпишитесь на нас в социальных сетях, чтобы не пропустить новые предложения:</p>
              <div className="footer-social-icons">
                <div className="footer-social-icon-container">
                  <Link href="https://t.me/+79233553772" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/telegram.svg" alt="Телеграм" width={24} height={24} />
                  </Link>
                </div>
                <div className="footer-social-icon-container">
                  <Link href="https://wa.me/79233553772" target="_blank" rel="noopener noreferrer">
                    <Image src="/icons/whatsapp.svg" alt="Ватсап" width={28} height={26} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2024{" "}
          <Link href="https://port-443.ru" target="_blank" rel="noopener noreferrer">
            <span>PORT443</span>
          </Link>{" "}
          Веб дизайн. Создание сайтов.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
