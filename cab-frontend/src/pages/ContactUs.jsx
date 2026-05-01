import ContactForm from "../components/ContactForm";
import { COMPANY_DETAILS } from "../ComponyDetails";

// src/components/ContactUs.jsx
export default function ContactUs() {
  return (
  <>
      <ContactForm/>
    <section className="bg-white/90 py-6 px-4 lg:py-10 lg:px-20 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact us</h2>
      <p className="text-gray-600 mb-6">
        We are committed to providing you with good quality service that meet and even exceed your expectations.
      </p>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Registered Office</h3>
          <p className="text-gray-600">{COMPANY_DETAILS.Office}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">Get in Touch</h3>
          <p className="text-gray-600">We are always happy to hear from you.</p>
          <p className="text-gray-800 font-medium">
            Call us 24x7 at <a href="tel:7490866866" className="text-blue-600 underline">{COMPANY_DETAILS.phone}</a>  
            <span className="block text-sm text-gray-500">Please dial the city specific STD code.</span>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700">General Purpose</h3>
          <p className="text-gray-600">Send us an email for queries and suggestions:</p>
          <p className="text-gray-800 font-medium">
            <a href="mailto:booking@assurecab.com" className="text-blue-600 underline">
              {COMPANY_DETAILS.email}
            </a>
          </p>
          <p className="text-sm text-gray-500">
            If you are facing any issue or for feedback, write us and we’ll try our best to get back to you within few hours.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
