import "../styles/About.css";
import heroImg from "../assets/hero.png"; // aapke assets me already hai
import { COMPANY_DETAILS } from "../ComponyDetails";
import Hero from "../components/Hero";

export default function About() {

   // ✅ NEW: WhatsApp Handler
  const handleWhatsapp = () => {
    
    const phone = "919302538296"; // change if needed

    const message = `Hey Swaratrips Indore,
Looking to book a cab. Please share your best price and availability.
Thanks!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  return (
    <main className="aboutPage">
      {/* HERO */}
      
      <section className="aboutHero">
        <div
          className="aboutHeroBg"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="aboutHeroOverlay" />

        <div className="aboutContainer aboutHeroContent">
          <p className="aboutKicker">{COMPANY_DETAILS.name}</p>
          <h1 className="aboutTitle">About Us</h1>
          <p className="aboutSub">
            We provide safe, comfortable and on-time taxi services for local city rides,
            outstation trips and airport transfers with transparent pricing.
          </p>

          <div className="aboutHeroBtns">
            <a className="aboutBtnPrimary" href={`tel:${COMPANY_DETAILS.phone.replace(/\s/g, '')}`}>
              Call Now
            </a>
            <a
              className="aboutBtnOutline"
              rel="noreferrer"
              onClick={handleWhatsapp}
            >
              WhatsApp
            </a>
            <a
              className="aboutBtnOutline"
              rel="noreferrer"
              href="https://share.google/TwUGPKQvaOCdvCv14"
            >
              Visit
            </a>
          </div>
        </div>
      </section>
      {/* <Hero/> */}
      {/* CONTENT */}
      <section className="aboutSection">
        <div className="aboutContainer">
          <div className="aboutGrid">
            {/* Left */}
            <div className="aboutCard">
              <h2 className="aboutH2">Who we are</h2>
              <p className="aboutText">
                {COMPANY_DETAILS.name} is a customer-first cab service built for reliability. Our focus is
                clean vehicles, professional drivers, and smooth booking experience.
              </p>

              <div className="aboutPoints">
                <div className="aboutPoint">
                  <span className="aboutDot" />
                  Verified drivers & safe rides
                </div>
                <div className="aboutPoint">
                  <span className="aboutDot" />
                  Transparent pricing (no hidden charges)
                </div>
                <div className="aboutPoint">
                  <span className="aboutDot" />
                  On-time pickup & 24/7 support
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="aboutCard aboutStatsCard">
              <h2 className="aboutH2">Quick Stats</h2>

              <div className="aboutStats">
                <div className="aboutStat">
                  <div className="aboutStatNum">5000+</div>
                  <div className="aboutStatLbl">Happy Rides</div>
                </div>
                <div className="aboutStat">
                  <div className="aboutStatNum">24/7</div>
                  <div className="aboutStatLbl">Support</div>
                </div>
                <div className="aboutStat">
                  <div className="aboutStatNum">AC</div>
                  <div className="aboutStatLbl">Comfort Cars</div>
                </div>
                <div className="aboutStat">
                  <div className="aboutStatNum">100+</div>
                  <div className="aboutStatLbl">Routes Covered</div>
                </div>
              </div>

              <div className="aboutCtaMini">
                <div>
                  <div className="aboutCtaTitle">Need a custom quote?</div>
                  <div className="aboutCtaSub">Pickup + Drop + Date/Time send karo.</div>
                </div>

                <a className="aboutBtnSmall" href="/#contact">
                  Get Quote
                </a>
              </div>
            </div>
          </div>

          {/* SERVICES STRIP */}
          <div className="aboutStrip">
            <div className="aboutStripItem">Local Taxi</div>
            <div className="aboutStripItem">Outstation Trips</div>
            <div className="aboutStripItem">Airport Transfer</div>
            <div className="aboutStripItem">Hourly Rental</div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="aboutBottom">
        <div className="aboutContainer aboutBottomInner">
          <div>
            <h2 className="aboutBottomTitle">Ready to book your ride?</h2>
            <p className="aboutBottomSub">Call/WhatsApp and get instant confirmation.</p>
          </div>

          <div className="aboutBottomBtns">
            <a className="aboutBtnPrimary" href={`tel:${COMPANY_DETAILS.phone.replace(/\s/g, '')}`}>Call</a>
            <a className="aboutBtnOutlineDark" onClick={handleWhatsapp}>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}