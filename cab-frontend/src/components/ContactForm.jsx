import React, { useMemo, useState } from "react";
import "../styles/ContactUs.css";
 
export default function ContactForm({
  title = "Contact Us",
  openInMapsUrl = "https://www.google.com/maps?q=Indore%20Madhya%20Pradesh",
  mapEmbedUrl = "https://maps.google.com/maps?q=Indore%20Madhya%20Pradesh&z=14&output=embed",
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    option: "",
    message: "",
  });
 
  const isValid = useMemo(() => {
    return (
      form.name.trim() &&
      form.phone.trim() &&
      form.option.trim()
      
    );
  }, [form]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
 
  async function handleSubmit(e) {
    e.preventDefault();
    if (!isValid) return;
 
    console.log("ContactUs Form:", form);
     const res=await saveContact(form);
    if(res){
      alert("Submitted successfully!");
      setForm({
      name: "",
      phone: "",
      email: "",
      option: "",
      message: "",
    });
    } else {
      alert("Submission failed. Please try again.");
    }
    
  };
 
  return (
    <section className="cu-section">
      <div className="cu-container">
        <h2 className="cu-title">{title}</h2>
 
        <div className="cu-card">
          {/* LEFT: MAP */}
          <div className="cu-mapBox">
            <a
              className="cu-openMaps"
              href={openInMapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps <span className="cu-ext">↗</span>
            </a>
 
            <iframe
              title="Google Map"
              src={mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
 
          {/* RIGHT: FORM */}
          <form className="cu-form" onSubmit={handleSubmit}>
            <input
              className="cu-input"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
            />
 
            <input
              className="cu-input"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Contact Number"
            />
 
            <input
              className="cu-input"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />
 
            <select
              className="cu-input"
              name="option"
              value={form.option}
              onChange={handleChange}
            >
              <option value="">-------- Select One Option ------</option>
              <option value="Tour Package">Tour Package</option>
              <option value="Taxi Booking">Taxi Booking</option>
              <option value="Hotel Booking">Hotel Booking</option>
              <option value="Other">Other</option>
            </select>
 
            <textarea
              className="cu-input cu-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
            />
 
            <button className="cu-btn" type="submit" disabled={!isValid}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}