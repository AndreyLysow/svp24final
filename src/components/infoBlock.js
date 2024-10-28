import React, { useState } from 'react';
import ContactFormOverlay from './ContactFormOverlay';
import Image from 'next/image';
import '../styles/infoBlock.css';

const InfoBlock = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <div className="info-block">
      <ContactFormOverlay isOpen={isOverlayOpen} onClose={toggleOverlay} />
      <div className="info-block-container">
        <div className="left-column">
          <h2>Почему выбирают нас</h2>
          <ul className="info-list">
            <li>
              <Image src='/icons/universal_mark.svg' alt='Маркер' width={20} height={20} />
              <span>11 лет работы на рынке</span>
            </li>
            <li>
              <Image src='/icons/universal_mark.svg' alt='Маркер' width={20} height={20} />
              <span>Широкий выбор материалов</span>
            </li>
            <li>
              <Image src='/icons/universal_mark.svg' alt='Маркер' width={20} height={20} />
              <span>Индивидуальный подход к каждому клиенту</span>
            </li>
             <li>
              <Image src='/icons/universal_mark.svg' alt='Маркер' width={20} height={20} />
              <span>Скорость и качество в выполнении каждого заказа</span>
            </li>
            <li>
              <Image src='/icons/universal_mark.svg' alt='Маркер' width={20} height={20} />
              <span>Этикетки, устойчивые к любым условиям использования</span>
            </li>
          </ul>
        </div>
        <div className="right-column">
          <div className="contact-info">
            <a href="mailto:tek_124@mail.ru" className="contact-link">
              <Image src="/icons/log-email-white.svg" alt="Mail Icon" width={25} height={25} />
              <span>silver_print@mail.ru</span>
            </a>
            <a href="tel:+79233553772" className="contact-link">
              <Image src="/icons/log-tel-white.svg" alt="Phone Icon" width={25} height={25} class="phone-icon"/>
              <span>+7 923 355 37 72   </span>
            </a>
          </div>
          <button className="calculate-button" onClick={toggleOverlay}>Заказать печать</button>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
