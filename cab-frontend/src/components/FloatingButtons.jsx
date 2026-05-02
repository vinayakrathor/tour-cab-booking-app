import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../styles/FloatingButtons.css";

const FloatingButtons = () => {
    const phoneNumber = "919302538296"; // your number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=I want to book a taxi`;

    return (
        <>
            {/* WhatsApp - FIXED */}
            <a
                href={whatsappLink}
                className="whatsapp-btn"
                target="_blank"
                rel="noreferrer"
            >
                <FaWhatsapp />
                <span>Book Taxi</span>
            </a>

            {/* Instagram - NOT FIXED (absolute inside page) */}
            <a
                href="https://www.instagram.com/st_royal_trips/"
                className="instagram-btn"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram />
            </a>
        </>
    );
};

export default FloatingButtons;