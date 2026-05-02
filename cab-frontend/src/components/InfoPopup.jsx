import React, { useEffect, useState } from "react";
import "../styles/InfoPopup.css";

const InfoPopup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 10);
        return () => clearTimeout(timer);
    }, []);

    const closePopup = () => setShow(false);

    if (!show) return null;

    return (
        <div className="info-overlay" onClick={closePopup}>
            <div className="info-modal" onClick={(e) => e.stopPropagation()}>
                <button className="info-close" onClick={closePopup} aria-label="Close">
                    ✕
                </button>

                <h3 className="info-title">
                    🚖 Swara Trips – Affordable &amp; Reliable Taxi Service 🚖
                </h3>

                <p className="info-subtitle">✨ Comfortable rides at best prices ✨</p>

                <div className="info-section">
                    <p className="info-section-title">📍 Our Popular Routes &amp; Charges:</p>
                    <ul className="info-list">
                        <li>Ujjain Round Trip – ₹2500</li>
                        <li>Ujjain Drop – ₹1500</li>
                        <li>Omkareshwar Round Trip – ₹2750</li>
                        <li>Bhopal Drop – ₹2700</li>
                    </ul>
                </div>

                <div className="info-divider" />

                <div className="info-section">
                    <p className="info-section-title">
                        🚖 Swara Trips – Rental Packages 🚖
                    </p>
                    <p className="info-subtitle2">
                        ✨ Flexible &amp; Budget-Friendly Local Ride Packages ✨
                    </p>

                    <p className="info-section-title small">📍 Rental Plans:</p>
                    <ul className="info-list">
                        <li>6 Hours / 60 KM – ₹1500</li>
                        <li>8 Hours / 80 KM – ₹1800</li>
                        <li>10 Hours / 100 KM – ₹2000</li>
                    </ul>

                    <p className="info-note">⏱️ Extra KM &amp; Extra Time charges applicable</p>
                </div>

                <button className="info-btn" onClick={closePopup}>
                    View Packages
                </button>
            </div>
        </div>
    );
};

export default InfoPopup;