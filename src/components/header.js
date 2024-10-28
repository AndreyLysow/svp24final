"use client"; // Указание на клиентский компонент

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../styles/header.css';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link href="/">
            <Image
              id="logo"
              src="/public/logotips/logo-silverprint.png" // Убедитесь, что этот путь к изображению правильный
              alt="Логотип"
              width={isMobile && menuOpen ? 374.4 : 312}
              height={isMobile && menuOpen ? 67.68 : 56.4}
            />
          </Link>
        </div>
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <ul>
            {[
              { label: 'Главная', href: '/' },
              { label: 'О компании', href: '/aboutPage' },
              { label: 'Услуги', href: '/services' },
              { label: 'Вакансии', href: '/careers' },
              { label: 'Контакты', href: '/global-contact' },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.href} className={`menu-item ${pathname === item.href ? 'activelink mask-next' : ''}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="contact-info">
          <Link href="tel:+79233553772" className="phone-number">
            <Image src="/icons/log-tel-white.svg" alt="Телефон" width={24} height={24} className="phone-icon" />
            <span style={{ color: '#fff', position: 'relative', top: '3px' }}>+7 923 355 37 72</span>
          </Link>
        </div>
        <button className="burger-menu" onClick={toggleMenu}>
          <Image src={menuOpen ? '/icons/close.png' : '/icons/burger.png'} alt="Меню" width={24} height={24} />
        </button>
        <div className="social-icons-container">
          <div className="social-icons">
            <Link href="https://t.me/+79233553772" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/telegram.svg" alt="Telegram" className="social-icon" width={24} height={24} />
            </Link>
            <Link href="https://wa.me/79233553772" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" className="social-icon" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="divider-container">
        <div className="divider"></div>
      </div>
    </header>
  );
};

export default Header;
