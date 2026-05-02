import React from "react";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import "../styles/FloatingButtons.css";

const FloatingButtons = () => {
    const phoneNumber = "919302538296";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=I want to book a taxi`;

    return (
        <div className="floating-container">

            {/* CALL */}
            <a href="tel:+919302538296" className="float-item call">
                <FaPhone />
                <span>Call</span>
            </a>

            {/* WHATSAPP */}
            <a href={whatsappLink} className="float-item whatsapp" target="_blank" rel="noreferrer">
                <FaWhatsapp />
                <span>WhatsApp</span>
            </a>

            {/* INSTAGRAM WITH ARROW */}
            <a
                href="https://www.instagram.com/st_royal_trips/"
                className="float-item instagram"
                target="_blank"
                rel="noreferrer"
            >
                <FaInstagram />
                <span>Instagram</span>
            </a>

        </div>
    );
};

export default FloatingButtons;