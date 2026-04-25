import { useMemo, useState } from "react";
import "../styles/tourpackage.css";
import { Phone, PhoneCall } from "lucide-react";
import firstsection from "../assets/images/1stsection.jpg";
import ujjainmahakaleshwar from "../assets/images/ujjain-mahakaleshwar.jpg";
import khajuraho from "../assets/images/khajuraho-fi.webp";
import Kanha_Safari_Main from "../assets/images/Kanha_Safari_Main.jpg";
import Pachmarhi_valley_Madhya_Pradesh_INDIA from "../assets/images/Pachmarhi_valley_Madhya_Pradesh_INDIA.jpg";
import sanchistupa from "../assets/images/sanchi-stupa.webp";
import Masjid from "../assets/images/Masjid.webp";

export default function TourPackages() {
  const [cat, setCat] = useState("All");

  const packages = [
    {
      id: 1,
      title: "Ujjain Mahakal Darshan",
      days: "1 Day",
      price: "₹2,999",
      cat: "Religious",
      rating: "4.9",
      img: ujjainmahakaleshwar
    },
    {
      id: 2,
      title: "Khajuraho Heritage Tour",
      days: "2 Days",
      price: "₹7,999",
      cat: "Heritage",
      rating: "4.8",
      img: khajuraho
    },
    {
      id: 3,
      title: "Kanha National Park Safari",
      days: "3 Days",
      price: "₹12,999",
      cat: "Wildlife",
      rating: "4.7",
      img: Kanha_Safari_Main
    },
    {
      id: 4,
      title: "Pachmarhi Hill Trip",
      days: "2 Days",
      price: "₹8,499",
      cat: "Hill",
      rating: "4.8", 
      img: Pachmarhi_valley_Madhya_Pradesh_INDIA
    },
    {
      id: 5,
      title: "Sanchi + Bhimbetka",
      days: "1 Day",
      price: "₹3,999",
      cat: "Heritage",
      rating: "4.9",
      img: sanchistupa
    },
    {
      id: 6,
      title: "Bhopal City Sightseeing",
      days: "1 Day",
      price: "₹2,499",
      cat: "City",
      rating: "4.6",
      img: Masjid
    },
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
  {/* Background image with blur */}
  <div className="absolute inset-0 z-0">
    <img
      src={firstsection}
      alt="Industrial background"
      className="h-full w-full object-cover blur-[1px]"
    />
  </div>

  {/* Foreground content */}
  <div className="tpHeroInner relative z-10 text-center px-6">
    <p className="tpKicker">CityCabs • Tour Packages</p>
    <h1 className="tpTitle">Explore with Comfort</h1>
    <p className="tpSub">
      Handpicked packages with transparent pricing and comfortable rides.
    </p>

    <div className="tpBtns mt-6 flex justify-center space-x-4">
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
              <div className="tpCard relative overflow-hidden rounded-xl shadow-lg min-h-[250px] group flex flex-col" key={p.id}>
                {/* Blurred Background Image */}
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat   scale-100 transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundImage: `url(${p.img})` }}
                />

                {/* Dark Overlay for Text Visibility */}
                <div className="absolute inset-0 bg-white/12 transition-colors duration-500" />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full p-5 text-white">
                  <div className="tpCardTop flex justify-between items-start mb-auto">
                    <span className="tpBadge">★ {p.rating}</span>
                    <span className="tpChip bg-orange-500 text-white px-2.5 py-1 rounded text-xs font-bold tracking-wider uppercase shadow-sm">{p.cat}</span>
                  </div>

                  <div className="mt-4">
                    <h3 className="tpCardTitle text-xl font-bold mb-2 drop-shadow-md">{p.title}</h3>

                    <div className="tpMeta flex justify-between items-center mb-5 text-gray-50 font-medium">
                      <span className="drop-shadow-md">⏱ {p.days}</span>
                      <span className="tpPrice text-xl font-extrabold text-white drop-shadow-md">{p.price}</span>
                    </div>

                    <div className="tpActions flex gap-3">
                      <a className="tpBtnSmall flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-bold transition shadow-md" href="/#contact">Enquiry</a>
                      <a className="tpBtnSmallOutline flex text-center bg-white/20 hover:bg-white hover:text-black text-white border border-white/50 backdrop-blur-sm py-2 gap-2 rounded-md font-bold transition shadow-md" href="tel:+919876543210"><PhoneCall size={20}/></a>
                    </div>
                  </div>
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