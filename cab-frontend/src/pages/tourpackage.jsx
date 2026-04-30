import { useMemo, useState } from "react";
import "../styles/tourpackage.css";
import { Phone, PhoneCall } from "lucide-react";
import firstsection from "../assets/images/1stsection.jpg";
import ujjainmahakaleshwar from "../assets/images/ujjain-mahakaleshwar.jpg";
import trimbakeshwar from "../assets/images/Trimbakeshwar.jpg";
import Kanha_Safari_Main from "../assets/images/Kanha_Safari_Main.jpg";
import Pachmarhi_valley_Madhya_Pradesh_INDIA from "../assets/images/Pachmarhi_valley_Madhya_Pradesh_INDIA.jpg";
import sanchistupa from "../assets/images/sanchi-stupa.webp";
import Masjid from "../assets/images/Masjid.webp";
import maheshwarImg from "../assets/images/maheshwar.png";
import omkareshwarImg from "../assets/images/Omkareshwar8.avif";
import mandavImg from "../assets/images/mandav.webp"; 

export default function TourPackages() {
  const [cat, setCat] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
    id: 7,
    title: "Omkareshwar Jyotirlinga Darshan",
    days: "2 Days and 1 Night",
    price: "₹4,499",
    cat: "Religious",
    rating: "4.8",
    img: omkareshwarImg,
  
    description: "Visit sacred Omkareshwar Jyotirlinga with peaceful Narmada river views.",
  
    route: ["Indore", "Omkareshwar", "Indore"],
  
    highlights: [
      "Omkareshwar Jyotirlinga",
      "Mamleshwar Temple",
      "Narmada Aarti",
      "Hanging Bridge"
    ],
  
    itinerary: [
      {
        day: "Day 1",
        title: "Indore → Omkareshwar",
        points: [
          "Pickup from Indore",
          "Drive to Omkareshwar",
          "Hotel Check-in",
          "Evening Aarti Darshan"
        ]
      },
      {
        day: "Day 2",
        title: "Temple Darshan & Return",
        points: [
          "Morning Temple Visit",
          "Local sightseeing",
          "Return to Indore"
        ]
      }
    ],
  
    includes: [
      "AC Cab",
      "1 Night Hotel Stay",
      "Driver Allowance",
      "Temple Visits"
    ],
  
    excludes: [
      "Food",
      "VIP Darshan",
      "Personal Expenses"
    ],
  
    contact: "9302538296"
  },
  {
    id: 8,
    title: "Mandav Heritage Trip",
    days: "2 Days and 1 Night",
    price: "₹5,999",
    cat: "Heritage",
    rating: "4.7",
    img: mandavImg,
  
    description: "Explore the royal heritage of Mandu with historic forts and scenic beauty.",
  
    route: ["Indore", "Mandav", "Indore"],
  
    highlights: [
      "Jahaz Mahal",
      "Rani Roopmati Pavilion",
      "Baz Bahadur Palace",
      "Hindola Mahal"
    ],
  
    itinerary: [
      {
        day: "Day 1",
        title: "Indore → Mandav",
        points: [
          "Pickup from Indore",
          "Drive to Mandav",
          "Hotel Check-in",
          "Visit Jahaz Mahal"
        ]
      },
      {
        day: "Day 2",
        title: "Sightseeing & Return",
        points: [
          "Visit Roopmati Pavilion",
          "Explore Baz Bahadur Palace",
          "Return to Indore"
        ]
      }
    ],
  
    includes: [
      "AC Cab",
      "Hotel Stay",
      "Driver Allowance",
      "Sightseeing"
    ],
  
    excludes: [
      "Entry Tickets",
      "Food",
      "Personal Expenses"
    ],
  
    contact: "9302538296"
  },
  {
    id: 9,
    title: "Maheshwar Spiritual Trip",
    days: "1 Day",
    price: "₹3,499",
    cat: "Religious",
    rating: "4.8",
    img: maheshwarImg,
  
    description: "Experience the spiritual charm of Maheshwar with Narmada ghats and temples.",
  
    route: ["Indore", "Maheshwar", "Indore"],
  
    highlights: [
      "Ahilya Fort",
      "Narmada Ghats",
      "Maheshwari Saree Market"
    ],
  
    itinerary: [
      {
        day: "Day 1",
        title: "Indore → Maheshwar → Indore",
        points: [
          "Pickup from Indore",
          "Drive to Maheshwar",
          "Temple visit & sightseeing",
          "Return by evening"
        ]
      }
    ],
  
    includes: [
      "AC Cab",
      "Driver Allowance",
      "Sightseeing"
    ],
  
    excludes: [
      "Food",
      "Shopping Expenses",
      "Personal Expenses"
    ],
  
    contact: "9302538296"
  },
  {
    id: 1,
    title: "Ujjain Mahakal Darshan",
    days: "3 Days and 2 Nights",
    price: "₹3,499",
    cat: "Religious",
    rating: "4.9",
    img: ujjainmahakaleshwar,

    description: "Experience divine Mahakal darshan with comfortable cab and stay.",

    route: ["Indore", "Ujjain", "Indore"],

    highlights: ["Mahakaleshwar Temple", "Kal Bhairav Temple", "Ram Ghat"],

    itinerary: [
      {
        day: "Day 1",
        title: "Indore → Ujjain",
        points: ["Pickup from Indore", "Travel to Ujjain", "Hotel Check-in"]
      },
      {
        day: "Day 2",
        title: "Temple Darshan",
        points: ["Mahakal Darshan", "Local sightseeing"]
      },
      {
        day: "Day 3",
        title: "Return",
        points: ["Checkout", "Return to Indore"]
      }
    ],

    includes: [
      "AC Cab",
      "Hotel Stay",
      "Driver Allowance",
      "Temple Visits"
    ],

    excludes: [
      "Food",
      "VIP Darshan",
      "Personal Expenses"
    ],

    contact: "9302538296"
  },

  {
    id: 2,
    title: "Indore-Maharashtra Jyotirlinga Tour",
    days: "3 Days and 2 Nights",
    price: "₹7,499",
    cat: "Religious",
    rating: "4.8",
    img: trimbakeshwar,

    description: "Visit 3 Jyotirlingas with complete travel, stay and darshan support.",

    route: ["Indore", "Nashik", "Bhimashankar", "Aurangabad", "Indore"],

    highlights: ["Trimbakeshwar", "Bhimashankar", "Grishneshwar"],

    itinerary: [
      {
        day: "Day 1",
        title: "Indore → Nashik",
        points: ["Pickup", "Direct travel", "Hotel stay"]
      },
      {
        day: "Day 2",
        title: "Temple Visits",
        points: [
          "Trimbakeshwar Darshan",
          "Bhimashankar Darshan",
          "Travel to Aurangabad"
        ]
      },
      {
        day: "Day 3",
        title: "Return",
        points: [
          "Grishneshwar Darshan",
          "Return to Indore"
        ]
      }
    ],

    includes: [
      "AC Cab (Dzire / Ertiga)",
      "2 Night Hotel Stay",
      "Driver Allowance + Toll",
      "All Temple Visits"
    ],

    excludes: [
      "Food",
      "VIP Darshan",
      "Personal Expenses"
    ],

    contact: "9302538296"
  },

  {
    id: 3,
    title: "Kanha National Park Safari",
    days: "3 Days",
    price: "₹12,999",
    cat: "Wildlife",
    rating: "4.7",
    img: Kanha_Safari_Main,

    description: "Explore wildlife safari at Kanha National Park with guided tours.",

    route: ["Indore", "Kanha", "Indore"],

    highlights: ["Jungle Safari", "Tiger Spotting", "Nature Walk"],

    itinerary: [
      {
        day: "Day 1",
        title: "Travel",
        points: ["Indore to Kanha", "Check-in"]
      },
      {
        day: "Day 2",
        title: "Safari",
        points: ["Morning Safari", "Evening Safari"]
      },
      {
        day: "Day 3",
        title: "Return",
        points: ["Checkout", "Return to Indore"]
      }
    ],

    includes: ["Cab", "Hotel", "Guide"],
    excludes: ["Food", "Tickets"],
    contact: "9302538296"
  },

  {
    id: 4,
    title: "Pachmarhi Hill Trip",
    days: "2 Days and 1 Night",
    price: "₹8,499",
    cat: "Hill",
    rating: "4.8",
    img: Pachmarhi_valley_Madhya_Pradesh_INDIA,

    description: "Enjoy scenic hill views and waterfalls in Pachmarhi.",

    route: ["Indore", "Pachmarhi", "Indore"],

    highlights: ["Bee Falls", "Dhoopgarh", "Pandav Caves"],

    itinerary: [
      {
        day: "Day 1",
        title: "Travel & Explore",
        points: ["Travel", "Local sightseeing"]
      },
      {
        day: "Day 2",
        title: "Return",
        points: ["Sunrise point", "Return"]
      }
    ],

    includes: ["Cab", "Stay"],
    excludes: ["Food"],
    contact: "9302538296"
  },

  {
    id: 5,
    title: "Sanchi + Bhimbetka",
    days: "1 Day",
    price: "₹3,999",
    cat: "Heritage",
    rating: "4.9",
    img: sanchistupa,

    description: "Explore UNESCO heritage sites in one day trip.",

    route: ["Bhopal", "Sanchi", "Bhimbetka", "Bhopal"],

    highlights: ["Sanchi Stupa", "Rock Shelters"],

    itinerary: [
      {
        day: "Day 1",
        title: "Tour",
        points: ["Visit Sanchi", "Visit Bhimbetka"]
      }
    ],

    includes: ["Cab"],
    excludes: ["Tickets"],
    contact: "9302538296"
  },

  {
    id: 6,
    title: "Bhopal City Sightseeing",
    days: "1 Day",
    price: "₹2,499",
    cat: "City",
    rating: "4.6",
    img: Masjid,

    description: "Explore Bhopal city attractions in a comfortable ride.",

    route: ["Bhopal City Tour"],

    highlights: ["Upper Lake", "Taj-ul-Masjid", "Museum"],

    itinerary: [
      {
        day: "Day 1",
        title: "City Tour",
        points: ["Lake visit", "Mosque visit", "Local markets"]
      }
    ],

    includes: ["Cab"],
    excludes: ["Entry Fees"],
    contact: "9302538296"
  },
];

  const cats = ["All", "Religious", "Heritage", "Wildlife", "Hill", "City"];

  const filtered = useMemo(() => {
    if (cat === "All") return packages;
    return packages.filter((p) => p.cat === cat);
  }, [cat]);

  return (
              <>
                {showModal && selectedPackage && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

    <div className="tpCard bg-white max-w-2xl w-full p-5 relative overflow-y-auto max-h-[90vh]">

      {/* Close */}
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-black"
        onClick={() => setShowModal(false)}
      >
        ✕
      </button>

      {/* Title */}
      <h2 className="tpCardTitle">{selectedPackage.title}</h2>

      {/* Meta */}
      <div className="tpMeta mb-3">
        <span>⏱ {selectedPackage.days}</span>
        <span className="tpPrice">{selectedPackage.price}</span>
      </div>

      {/* Category + Rating */}
      <div className="tpCardTop mb-4">
        <span className="tpChip">{selectedPackage.cat}</span>
        <span className="tpBadge">★ {selectedPackage.rating}</span>
      </div>

      {/* Description */}
      <p className="tpMuted mb-4">
        {selectedPackage.description}
      </p>

      {/* Highlights */}
      {selectedPackage.highlights && (
        <div className="mb-4">
          <h3 className="tpH2">Highlights</h3>
          <ul className="tpMuted">
            {selectedPackage.highlights.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Route */}
      {selectedPackage.route && (
        <div className="tpMuted mb-4">
          <strong>Route:</strong>
          <div>{selectedPackage.route.join(" → ")}</div>
        </div>
      )}

      {/* Itinerary */}
      {selectedPackage.itinerary && (
        <div className="mb-4">
          <h3 className="tpH2">Itinerary</h3>

          <div className="tpMuted space-y-2">
            {selectedPackage.itinerary.map((day, index) => (
              <div key={index}>
                <p><strong>{day.day}:</strong> {day.title}</p>
                <ul>
                  {day.points.map((point, i) => (
                    <li key={i}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Includes */}
      {selectedPackage.includes && (
        <div className="mb-4">
          <h3 className="tpH2">Includes</h3>
          <ul className="tpMuted">
            {selectedPackage.includes.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Not Included */}
      {selectedPackage.excludes && (
        <div className="mb-4">
          <h3 className="tpH2">Not Included</h3>
          <ul className="tpMuted">
            {selectedPackage.excludes.map((item, index) => (
              <li key={index}>✖ {item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="tpActions">
        <a href="/#contact" className="tpBtnPrimary">
          Send Enquiry
        </a>
        <a href={`tel:+91${selectedPackage.contact}`} className="tpBtnOutline">
          Call Now
        </a>
      </div>

    </div>
  </div>
)}

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
                        <button
                          className="tpBtnSmall flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-bold transition shadow-md"
                          onClick={() => {
                            setSelectedPackage(p);
                            setShowModal(true);
                          }}
                        >
                          Enquiry
                        </button>
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
    </>
  );
}