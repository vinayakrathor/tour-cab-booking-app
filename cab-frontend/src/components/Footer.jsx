// src/components/Footer.jsx
import { Mail, Phone } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { COMPANY_DETAILS } from "../ComponyDetails";


export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

                {/* About Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">About Us</h3>
                    <p className="text-gray-400 text-sm">
                        {COMPANY_DETAILS.name.toUpperCase()} CAB is a complete car rental solution for local, outstation & holidays tour.
                        Within few years of its launch, {COMPANY_DETAILS.name} has positioned itself as In.
                    </p>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="/" className="hover:text-white">Home</a></li>
                        <li><a href="/about-us" className="hover:text-white">About Us</a></li>
                        <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
                        <li><a href="/rider-app" className="hover:text-white">Rider App</a></li>
                        <li><a href="/driver-app" className="hover:text-white">Driver App</a></li>
                        <li><a href="/vendor-app" className="hover:text-white">Vendor App</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Round Trip (Outstation) Cabs</li>
                        <li>Oneway Drops</li>
                        <li>Local Rentals</li>
                        <li>Corporate Cab Rental</li>
                        <li>Railway Station Transfer</li>
                        <li>Airport Transfer</li>
                        <li>Hourly Package</li>
                        <li>Outstation Taxi</li>
                    </ul>
                </div>

                {/* Policy */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Policy</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="/cancellation-policy" className="hover:text-white">Cancellation Policy</a></li>
                        <li><a href="/refund-policy" className="hover:text-white">Refund Policy</a></li>
                        <li><a href="/terms" className="hover:text-white">Terms & Condition</a></li>
                        <li><a href="/disclaimer" className="hover:text-white">Disclaimer</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">24x7 Contact</h3>
                    <p className="text-orange-400 text-sm">{COMPANY_DETAILS.Office}</p>
                    <p className="flex gap-1 text-gray-400 text-sm mt-2">
                        <Mail size={20} /> <a href="mailto:booking@assurecab.com" className="hover:text-white">{COMPANY_DETAILS.email}</a>
                    </p>
                    <p className="flex gap-1 text-gray-400 text-sm mt-2">
                        <Phone size={20} /> <a href="tel:+917490866866" className="hover:text-white">{COMPANY_DETAILS.phone}</a>
                    </p>
                    <div className="flex space-x-4 mt-3">
                        <a href="https://www.facebook.com/rocky.puware" className="hover:text-white">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/st_royal_trips/" className="hover:text-white">
                            <FontAwesomeIcon icon={faInstagram} className="w-9 h-9" />
                        </a>
                        {/* <a href="#" className="hover:text-white">
                            <FontAwesomeIcon icon={faLinkedin} className="w-9 h-9" />
                        </a>
                        <a href="#" className="hover:text-white">
                            <FontAwesomeIcon icon={faTwitter} className="w-9 h-9" />
                        </a> */}
                    </div>

                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10">
                © Copyright 2023 - Assure Travel Services Pvt. Ltd.
            </div>
        </footer>
    );
}
