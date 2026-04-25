import "../styles/About.css";
import heroImg from "../assets/hero.png"; // aapke assets me already hai

export default function About() {
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
          <p className="aboutKicker">CityCabs</p>
          <h1 className="aboutTitle">About Us</h1>
          <p className="aboutSub">
            We provide safe, comfortable and on-time taxi services for local city rides,
            outstation trips and airport transfers with transparent pricing.
          </p>

          <div className="aboutHeroBtns">
            <a className="aboutBtnPrimary" href="tel:+919876543210">
              Call Now
            </a>
            <a
              className="aboutBtnOutline"
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="aboutSection">
        <div className="aboutContainer">
          <div className="aboutGrid">
            {/* Left */}
            <div className="aboutCard">
              <h2 className="aboutH2">Who we are</h2>
              <p className="aboutText">
                CityCabs is a customer-first cab service built for reliability. Our focus is
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
            <a className="aboutBtnPrimary" href="tel:+919876543210">Call</a>
            <a className="aboutBtnOutlineDark" href="/#contact">Contact Form</a>
          </div>
        </div>
      </section>
    </main>
  );
}