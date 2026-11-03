import { Home, Building2, Zap, Cpu, Wrench, BatteryCharging } from "lucide-react";
import { SuburbLocationPage, type SuburbLocationData } from "../components/SuburbLocationPage";

const data: SuburbLocationData = {
  suburb: "Muirhead",
  slug: "muirhead",
  heroHighlight: "Muirhead NT",
  heroParagraph:
    "Berrimah-based solar installers build and fix systems for Muirhead's newer homes, from the estate streets off Lee Point Road to the coastal edge near the Casuarina Coastal Reserve. Fixed pricing, Territory-rated equipment and a local team that answers within 2 business hours.",
  heroImage: "/assets/images/hosted/berrimah-0828.webp",
  heroImageAlt: "Solar installation serving Muirhead's newer family homes in Darwin's north",
  rating: "4.9",
  reviewCount: "128",
  trustChips: [
    "SAA Accredited",
    "Cyclone Rated Roof Mounting C2/C3",
    "Jacana Approved",
    "Upfront STC & Battery Discounts",
  ],
  seo: {
    title: "Solar Installation & Repair Muirhead | Oneroof Solar",
    metaDescription:
      "Local solar panel, inverter, battery and EV charger installation and repair in Muirhead NT. SAA accredited, cyclone rated. Call 0483 986 444.",
    canonicalUrl: "https://oneroofsolar.com.au/locations/muirhead/",
  },
  introHeading: "Solar Panel Installation and Repair in Muirhead",
  introParagraphs: [
    "Muirhead is one of Northern Darwin's newer suburbs, so most roofs are modern, large and unshaded, which makes them well suited to solar. Families here tend to run ducted air conditioning, pools and busy evening households, and that usage pattern decides how a system should be sized. Our team designs around your actual consumption, not a generic package.",
    "For new systems we handle solar panel installation from design and STC paperwork through to switch-on, with every panel fixed to Cyclone Rated C2/C3 mounting. If an existing system has gone quiet, our solar panel repair technicians trace the fault, whether that is a cracked panel, a damaged isolator or wiring that has not coped with the wet season. To keep output steady after the first few years, solar panel maintenance covers cleaning, inspections and performance checks.",
  ],
  systemsHeading: "Systems for Every Muirhead Property",
  systemTypes: [
    {
      title: "Residential Solar",
      href: "/solar-systems/residential-solar-system",
      icon: Home,
      text: "Roof layouts and system sizes matched to Muirhead's larger family homes, with room to add a battery later. We design around your household's daily and evening power use so the system fits your home rather than a standard package.",
    },
    {
      title: "Commercial Solar",
      href: "/solar-systems/commercial-solar-system",
      icon: Building2,
      text: "Solar for the small businesses, home offices and light commercial sites around the northern suburbs, cutting daytime power costs. We plan the system around your trading hours, demand and available roof space.",
    },
    {
      title: "Off-Grid Solar",
      href: "/solar-systems/off-grid-solar-system",
      icon: BatteryCharging,
      text: "Independent power for rural blocks and lifestyle properties on the Darwin fringe, with battery storage built in. We assess your loads and backup needs before recommending a suitable off-grid design.",
    },
  ],
  midCta: {
    heading: "Ready to Stop Overpaying for Power in Muirhead?",
    text: "Every month on the grid is another bill you could have cut. Get a fixed-price quote with your STC discount applied upfront, and find out what your Muirhead roof can really save you.",
    button: "Get My Muirhead Solar Quote Today",
  },
  relatedHeading: "Inverter, Battery, and EV Charger Services in Muirhead",
  relatedIntro:
    "A well-designed solar system involves more than just panels on the roof. Muirhead properties can benefit from dependable inverters, battery storage and EV charging solutions that help manage electricity use throughout the day. OneRoof Solar provides installation and repair services to keep these components working together efficiently.",
  relatedServices: [
    {
      title: "Solar Inverter Installation",
      href: "/services/solar-inverters/installation",
      icon: Cpu,
      text: "Darwin's hot weather and seasonal storms can put additional demands on solar inverters. We provide solar inverter installation in Muirhead, selecting suitable models with IP65 and IP66-rated enclosures for protection against dust and water. Every installation is matched to your property's energy requirements and solar system capacity.",
    },
    {
      title: "Solar Inverter Repair",
      href: "/services/solar-inverters/repair",
      icon: Wrench,
      text: "An inverter displaying error codes, switching off unexpectedly or producing less power than usual may need professional attention. Our solar inverter repair service identifies the underlying fault and provides the necessary repairs to restore system performance without unnecessary component replacements.",
    },
    {
      title: "Solar Battery Installation",
      href: "/services/solar-battery-installation",
      icon: BatteryCharging,
      text: "Make better use of the solar electricity your panels generate during the day with solar battery installation. We help Muirhead homeowners choose battery storage based on household consumption, existing solar capacity and backup requirements. Eligible installations may also benefit from the Australian Government's Cheaper Home Batteries Program.",
    },
    {
      title: "EV Charger Installation",
      href: "/services/ev-chargers/installation",
      icon: Zap,
      text: "If you own an electric vehicle, a home charging station can make everyday charging more convenient. Our EV charger installation service helps Muirhead property owners choose a charger that suits their electrical infrastructure and solar setup, making it easier to use their own solar-generated electricity for vehicle charging.",
    },
    {
      title: "EV Charger Repair",
      href: "/services/ev-chargers/repair",
      icon: Wrench,
      text: "Charging interruptions, repeated disconnections or a charger that stops responding can affect your daily routine. Our EV charger repair service covers residential and commercial charging systems, with fault diagnosis to identify and resolve the problem.",
    },
  ],
  whyHeading: "Why Muirhead Residents Choose OneRoof Solar",
  whyPoints: [
    "Local solar installation and repair services for Muirhead homes and businesses",
    "Prompt response for new installations, system faults and urgent solar repairs",
    "Regular solar maintenance to support long-term system performance",
    "SAA Accredited Installers working with SAA Approved and Certified Products",
    "Cyclone-rated mounting systems and IP65/IP66-rated equipment designed for Darwin's climate",
    "Federal STC Solar PV discounts applied upfront to your quote, without the paperwork hassle",
    "Eligible battery installations may benefit from the Cheaper Home Batteries Program",
    "Jacana Energy grid connection and compliance paperwork managed on your behalf",
    "Rated 4.9 stars from 128 customer reviews",
  ],
  highlightCard: {
    heading: "Built for Territory Conditions",
    text: "From cyclone-rated mounting systems to IP65/IP66-rated equipment and upfront STC discounts, every Muirhead solar installation is planned to handle Darwin's heat, humidity and wet-season conditions.",
    tag: "Local Berrimah-based solar team",
  },
  repairCta: {
    heading: "Is Your Muirhead Solar System Underperforming or Faulty?",
    text: "Get a local assessment for faulty panels, inverter issues, low solar output or unexpected system problems.",
    button: "Book a Free Muirhead System Check",
  },
  mapHeading: "Find Us Near Muirhead",
  mapParagraph:
    "Our Berrimah team services Muirhead and the surrounding northern suburbs. We arrange site visits to assess your property's solar requirements and respond to every enquiry within 2 business hours.",
  nearbyHeading: "Nearby Solar Coverage",
  nearbySegments: [
    "Muirhead is part of our ",
    { label: "Northern Darwin solar coverage", to: "/locations/northern-darwin" },
    " across postcodes 0810 and 0812. We also install and repair systems in neighbouring ",
    { label: "Casuarina", to: "/locations/casuarina" },
    " and ",
    { label: "Wanguri", to: "/locations/wanguri" },
    ", and further afield in ",
    { label: "Stuart Park", to: "/locations/stuart-park" },
    " and ",
    { label: "Darwin City", to: "/locations/darwin-city" },
    ".",
  ],
  faqIntro: "Common questions about solar installation and repair for Muirhead properties.",
  faqs: [
    {
      q: "What size solar system suits a Muirhead family home?",
      a: "Most Muirhead homes are newer and larger, with ducted air conditioning and often a pool, so a mid to large system usually fits best. We size it from your electricity bills and your daytime and evening usage, then match the panel and inverter capacity to your roof.",
    },
    {
      q: "Is solar worth it for a newer home in Muirhead?",
      a: "Yes. Newer roofs tend to have clear northern and western faces with little shade, so panels produce well and pay back faster. A system installed now also starts saving from the first bill, with the STC discount taken off your quote upfront.",
    },
    {
      q: "Can I add a battery to my Muirhead system later?",
      a: "Yes. We can design your system battery-ready, with a hybrid inverter or a compatible upgrade path, so you can add storage when it suits your budget. The Cheaper Home Batteries Program discount applies at the time the battery is installed.",
    },
    {
      q: "Do sea breezes near Lee Point affect solar panels?",
      a: "Coastal air carries salt and moisture, which can wear fixings and electronics over time. We use corrosion-resistant mounting and sealed IP65/IP66 inverters, and a routine check keeps any build-up from affecting output.",
    },
    {
      q: "Can I charge an electric vehicle from my Muirhead solar panels?",
      a: "Yes. Charging in the middle of the day uses your own generation instead of grid power. We can install an EV charger alongside your solar system, or add one to an existing system.",
    },
    {
      q: "Who handles the grid connection paperwork?",
      a: "We do. Our team prepares and lodges the required approvals, applies your STC discount and arranges connection, so you are not chasing forms after the install.",
    },
    {
      q: "How quickly can you get to Muirhead for a quote or a repair?",
      a: "We are based in Berrimah, so we reach Muirhead quickly. We respond to every enquiry within 2 business hours and can usually book a site visit or system check the same week.",
    },
  ],
  quoteHeading: "Ready to Power Your Muirhead Home with Solar?",
  quoteParagraph:
    "Stop paying more than you need to for electricity. Tell us about your home and we will come back within 2 business hours with a fixed-price quote, STC discount applied and grid connection handled.",
  quoteFormTitle: "Book Your Free Muirhead Consultation",
  quoteSource: "location_muirhead",
  finalCtaHeading: "Ready to Power Your Muirhead Home with Solar?",
  finalCtaText:
    "Stop paying more than you need to for electricity. Tell us about your home and we will come back within 2 business hours with a fixed-price quote.",
  finalCtaButton: "Book My Free Muirhead Consultation",
  geo: { latitude: -12.36, longitude: 130.895 },
  serviceAreaNames: ["Muirhead", "Lyons", "Casuarina", "Wanguri", "Darwin"],
};

export function MuirheadPage() {
  return <SuburbLocationPage data={data} />;
}

export default MuirheadPage;
