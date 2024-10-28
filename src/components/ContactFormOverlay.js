import React, { useState } from 'react';
import '../styles/contactFormOverlay.css';

const ContactFormOverlay = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Отправка...');

        window.Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'tekengineering124@gmail.com',
            Password: '69EEBC6D21959F74A447515C75BAE64BC34B',
            To: 'tekengineering124@gmail.com',
            From: 'tekengineering124@gmail.com',
            Subject: `Сообщение с сайта: ${formData.name}`,
            Body: `
                <h2>Сообщение с сайта</h2>
                <p><strong>От кого:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Сообщение:</strong></p>
                <p>${formData.message}</p>
            `,
        }).then((message) => {
            if (message === 'OK') {
                setStatus('Сообщение отправлено!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Ошибка отправки сообщения.');
                console.error('SMTP Error:', message);
            }
        }).catch((error) => {
            setStatus('Ошибка отправки сообщения.');
            console.error('Network Error:', error);
        });
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>Рассчитать стоимость аудита</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше имя"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ваш email"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Ваше сообщение"
                        required
                    ></textarea>
                    <button type="submit">Отправить</button>
                </form>
                <p className="status-message">{status}</p>
            </div>
        </div>
    );
};

export default ContactFormOverlay;
