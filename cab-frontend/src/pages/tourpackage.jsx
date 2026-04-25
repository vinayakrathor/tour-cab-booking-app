import { useMemo, useState } from "react";
import "../styles/tourpackage.css";

export default function TourPackages() {
  const [cat, setCat] = useState("All");

  const packages = [
    { id: 1, title: "Ujjain Mahakal Darshan", days: "1 Day", price: "₹2,999", cat: "Religious", rating: "4.9" },
    { id: 2, title: "Khajuraho Heritage Tour", days: "2 Days", price: "₹7,999", cat: "Heritage", rating: "4.8" },
    { id: 3, title: "Kanha National Park Safari", days: "3 Days", price: "₹12,999", cat: "Wildlife", rating: "4.7" },
    { id: 4, title: "Pachmarhi Hill Trip", days: "2 Days", price: "₹8,499", cat: "Hill", rating: "4.8" },
    { id: 5, title: "Sanchi + Bhimbetka", days: "1 Day", price: "₹3,999", cat: "Heritage", rating: "4.9" },
    { id: 6, title: "Bhopal City Sightseeing", days: "1 Day", price: "₹2,499", cat: "City", rating: "4.6" },
  ];

  const cats = ["All", "Religious", "Heritage", "Wildlife", "Hill", "City"];

  const filtered = useMemo(() => {
    if (cat === "All") return packages;
    return packages.filter((p) => p.cat === cat);
  }, [cat]);

  return (
    <main className="tpPage">
      {/* Hero */}
      <section className="tpHero">
        <div className="tpHeroInner">
          <p className="tpKicker">CityCabs • Tour Packages</p>
          <h1 className="tpTitle">Explore with Comfort</h1>
          <p className="tpSub">
            Handpicked packages with transparent pricing and comfortable rides.
          </p>

          <div className="tpBtns">
            <a className="tpBtnPrimary" href="/#contact">Get a Quote</a>
            <a className="tpBtnOutline" href="/#home">Back to Home</a>
          </div>
        </div>
      </section>

      {/* Filters + Cards */}
      <section className="tpSection">
        <div className="tpContainer">
          <div className="tpHead">
            <div>
              <h2 className="tpH2">Popular Packages</h2>
              <p className="tpMuted">Select category and send enquiry.</p>
            </div>

            <div className="tpCats">
              {cats.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`tpCat ${cat === c ? "active" : ""}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="tpGrid">
            {filtered.map((p) => (
              <div className="tpCard" key={p.id}>
                <div className="tpCardTop">
                  <span className="tpBadge">★ {p.rating}</span>
                  <span className="tpChip">{p.cat}</span>
                </div>

                <h3 className="tpCardTitle">{p.title}</h3>

                <div className="tpMeta">
                  <span>{p.days}</span>
                  <span className="tpPrice">{p.price}</span>
                </div>

                <div className="tpActions">
                  <a className="tpBtnSmall" href="/#contact">Enquiry</a>
                  <a className="tpBtnSmallOutline" href="tel:+919876543210">Call</a>
                </div>
              </div>
            ))}
          </div>

          <div className="tpCta">
            <div>
              <h3 className="tpCtaTitle">Custom package chahiye?</h3>
              <p className="tpMuted">Pickup + dates bhejo, hum best quote denge.</p>
            </div>
            <a className="tpBtnPrimary" href="/#contact">Get a Free Quote</a>
          </div>
        </div>
      </section>
    </main>
  );
}