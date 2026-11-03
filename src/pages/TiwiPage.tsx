import { Home, Building2, Zap, Cpu, Wrench, BatteryCharging } from "lucide-react";
import { SuburbLocationPage, type SuburbLocationData } from "../components/SuburbLocationPage";

const data: SuburbLocationData = {
  suburb: "Tiwi",
  slug: "tiwi",
  heroHighlight: "Tiwi NT",
  heroParagraph:
    "Reliable solar and storage solutions for Tiwi homes, built to handle Northern Darwin's intense tropical humidity, afternoon storms and high cooling demand. From elevated family homes near Dripstone Creek to properties surrounding Royal Darwin Hospital and CDU, we design, install, maintain and repair solar systems tailored to your roof, layout and shift-work power needs.",
  heroImage: "/assets/images/hosted/berrimah-0828.webp",
  heroImageAlt: "Solar installation serving Tiwi homes near Royal Darwin Hospital and CDU",
  rating: "4.9",
  reviewCount: "128",
  trustChips: [
    "SAA Accredited",
    "Cyclone Rated Roof Mounting C2/C3",
    "Jacana Approved",
    "Upfront STC & Battery Discounts",
  ],
  seo: {
    title: "Solar Installers & Repair in Tiwi NT | OneRoof",
    metaDescription:
      "Reliable solar, battery & inverter installation and repair for Tiwi homes & properties near RDH. SAA accredited, cyclone rated, 4.9★ rated local team.",
    canonicalUrl: "https://oneroofsolar.com.au/locations/tiwi/",
  },
  introHeading: "Solar Panel Installation and Repair in Tiwi",
  introParagraphs: [
    "Tiwi sits in Darwin's northern hub, bordered by Casuarina Coastal Reserve and major institutions like Royal Darwin Hospital (RDH). Local rooftops face high thermal stress, high humidity, monsoonal downpours and heavy seasonal winds. OneRoof Solar engineers every setup around your roof orientation, structural style and shading from mature trees, finishing each solar panel installation with C2/C3 cyclone-rated hardware. We also diagnose and fix underperforming systems across all panel and electrical components.",
    "Many existing rooftop systems in the area are over a decade old. If high energy bills or failing components are cutting into your savings, our solar panel repair specialists can assess system output and clarify whether component repair or a system upgrade provides better value. Scheduled solar panel cleaning and maintenance ensures your system stays free of debris, bird droppings and tropical mildew year-round.",
  ],
  systemsHeading: "Residential, Commercial, and Off-Grid Solar for Tiwi",
  systemTypes: [
    {
      title: "Residential Solar",
      href: "/solar-systems/residential-solar-system",
      icon: Home,
      text: "We size your residential solar system around your electricity use, roof space, orientation and shading from mature trees. For shift workers at RDH or staff at CDU, we also plan around your day-to-night power patterns. Your system can also be planned to work with battery storage now or later.",
    },
    {
      title: "Commercial Solar",
      href: "/solar-systems/commercial-solar-system",
      icon: Building2,
      text: "For clinics, professional suites, childcare centres and service businesses along the Rocklands Drive and Henbury Avenue corridors, daytime power draw is heavy. We design a commercial solar system aligned with peak operational hours and building phase connection (single or three-phase), offsetting baseline HVAC and lighting loads to lower operational overheads.",
    },
    {
      title: "Off-Grid Solar",
      href: "/solar-systems/off-grid-solar-system",
      icon: BatteryCharging,
      text: "While most of Tiwi operates on the local distribution grid, dedicated outbuildings, security hubs or standalone workshops near property lines may require independent power. An off-grid solar system pairs solar PV arrays, battery storage and custom-rated inverters to deliver reliable power off the main line.",
    },
  ],
  midCta: {
    heading: "Cut Power Bills for Your Tiwi Home or Facility",
    text: "Custom tropical solar designs backed by upfront STC discounts applied directly to your estimate.",
    button: "Get Your Free Tiwi Quote Today",
  },
  relatedHeading: "Inverter, Battery, and EV Charger Services",
  relatedIntro:
    "Solar panels are just one part of a complete energy system. Tiwi homes and businesses can also benefit from a reliable inverter, battery storage and EV charging. We install and repair all of them so your whole setup works together smoothly.",
  relatedServices: [
    {
      title: "Solar Inverter Installation",
      href: "/services/solar-inverters/installation",
      icon: Cpu,
      text: "Darwin's thermal cycles test inverter electronics daily. Our solar inverter installation catalogue focuses on IP65/IP66-rated weatherproofing to seal internal electronics against tropical humidity, driving rain and gecko intrusion. We select the ideal string or microinverter architecture based on your roof shading profile and total kilowatt capacity.",
    },
    {
      title: "Solar Inverter Repair",
      href: "/services/solar-inverters/repair",
      icon: Wrench,
      text: "If your unit shows status fault codes, trips your circuit breaker or drops offline during peak hours, our solar inverter repair technicians conduct on-site root-cause testing to replace failed components, fuses or isolated wiring without forcing unnecessary whole-unit replacements.",
    },
    {
      title: "Solar Battery Installation",
      href: "/services/solar-battery-installation",
      icon: BatteryCharging,
      text: "A solar battery installation captures daylight generation for shift workers coming home late or for cooling bedrooms overnight. Storage also offers essential backup power during wet-season grid outages. Eligible residential projects can access upfront savings through the Cheaper Home Batteries Program.",
    },
    {
      title: "EV Charger Installation",
      href: "/services/ev-chargers/installation",
      icon: Zap,
      text: "Powering your electric vehicle from local solar minimises commuter costs for trips across the Northern Suburbs and into Darwin CBD. We handle full EV charger installation for homes and facilities in Tiwi, integrating chargers directly with your switchboard and solar capacity.",
    },
    {
      title: "EV Charger Repair",
      href: "/services/ev-chargers/repair",
      icon: Wrench,
      text: "If your charging station trips, experiences line faults or shows charging errors, our local EV charger repair team troubleshoots control boards, cables and safety interlocks for all residential and commercial brands.",
    },
  ],
  whyHeading: "Why Tiwi Homeowners and Businesses Choose OneRoof Solar",
  whyPoints: [
    "Fast local response for Tiwi homes, units and nearby facilities",
    "Available for urgent solar repairs as well as new installations",
    "Ongoing maintenance to keep your solar system performing reliably",
    "SAA Accredited Installers using approved and certified products",
    "Cyclone-rated mounting and IP65/IP66 equipment built for Darwin heat and rain",
    "Upfront STC discounts applied directly to your quote with no paperwork hassle",
    "Battery rebate help to check eligibility for the Cheaper Home Batteries Program",
    "Grid connections handled for you through Jacana Energy and Power and Water",
    "4.9 stars from 128 local reviews",
  ],
  highlightCard: {
    heading: "Tailored for Tropical Top End Conditions",
    text: "From cyclone-rated mounting to IP65/IP66 equipment and upfront STC discounts, every Tiwi system is built for Darwin's heat, humidity, wet-season storms and elevated home roofs.",
    tag: "Local Berrimah-based team",
  },
  repairCta: {
    heading: "Solar System Underperforming or Faulty in Tiwi?",
    text: "Don't let faulty isolators, degraded panels or inverter faults drive up your electricity bills. Request a full diagnostic check from our local technicians.",
    button: "Book a Free Tiwi System Check",
  },
  mapHeading: "Find Us Near Tiwi",
  mapParagraph:
    "Serving Tiwi, Wanguri, Lyons and nearby Northern Darwin neighbourhoods. Our main workshop in Berrimah is located just off the Stuart Highway via Vanderlin Drive and Trower Road, making site visits fast and efficient.",
  nearbyHeading: "Nearby Solar Coverage",
  nearbySegments: [
    "Tiwi is an integral part of our ",
    { label: "Northern Darwin solar coverage", to: "/locations/northern-darwin" },
    ", servicing the 0810 and 0812 regions. Looking for service in neighbouring suburbs? See our ",
    { label: "Casuarina solar page", to: "/locations/casuarina" },
    ", ",
    { label: "Wanguri solar page", to: "/locations/wanguri" },
    ", ",
    { label: "Nightcliff solar page", to: "/locations/nightcliff" },
    " or ",
    { label: "Stuart Park solar page", to: "/locations/stuart-park" },
    ".",
  ],
  faqIntro: "Common questions about solar installation and repair for Tiwi properties.",
  faqs: [
    {
      q: "What does a typical solar installation cost in Tiwi?",
      a: "System cost varies based on target wattage (e.g., 6.6kW vs 10kW+), inverter architecture, roof construction (elevated tin vs ground-level tile) and whether battery storage is integrated. An accurate quote starts with an assessment of your switchboard and shading profile.",
    },
    {
      q: "Are elevated 1970s/80s Tiwi homes suitable for solar panels?",
      a: "Yes. High-set tropical homes in Tiwi are great candidates for solar due to clear, unshaded roof exposure. However, structural wiring path assessments and cyclone-rated timber/steel fixing checks are necessary.",
    },
    {
      q: "How do shift-work patterns around Royal Darwin Hospital affect solar sizing?",
      a: "Shift workers who operate air conditioning, laundry and appliances during daylight hours can use a large share of their solar energy directly as it is produced, maximising return on investment. For those working day shifts, adding a battery lets you capture peak daytime generation to power air conditioning and lights when returning home at night.",
    },
    {
      q: "How does tropical humidity and storm season impact solar performance in Tiwi?",
      a: "Heavy rainfall during the wet season cleans dust off panel glass, but prolonged high humidity and moisture ingress can cause degradation in low-quality isolators or unsealed junction boxes. We prevent moisture issues with IP66-rated components.",
    },
    {
      q: "My inverter in Tiwi keeps showing a red fault light during hot afternoons. What does this mean?",
      a: "Grid voltage spikes on hot afternoons or internal thermal overload can cause an inverter to throttle down or shut off entirely. We run grid voltage diagnostics and thermal checks to determine whether your inverter requires parameter reconfiguration, isolation repair or unit replacement.",
    },
    {
      q: "Can I add a solar battery to an existing Tiwi rooftop setup?",
      a: "In most cases, yes. AC-coupled battery options connect to your existing inverter setup without replacing your current panels. If your current inverter is older or underperforming, upgrading to a hybrid inverter during battery installation is often the cleanest solution.",
    },
    {
      q: "Who handles power grid approvals and solar feed-in applications in Tiwi?",
      a: "We handle all technical documentation and grid safety approvals with Power and Water Corporation and Jacana Energy. This ensures your inverter export limit settings and metering requirements comply with NT grid regulations before your system goes live.",
    },
  ],
  quoteHeading: "Ready to Upgrade or Fix Your Tiwi Solar System?",
  quoteParagraph:
    "Get a fast, transparent system design and quote from our local Berrimah team, with STC incentives included and support with your Power and Water grid connection requirements.",
  quoteFormTitle: "Book Your Free Tiwi Consultation",
  quoteSource: "location_tiwi",
  finalCtaHeading: "Ready to Upgrade or Fix Your Tiwi Solar System?",
  finalCtaText:
    "Get a fast, transparent system design and quote from our local Berrimah team with upfront STC discounts applied to your quote.",
  finalCtaButton: "Book Your Tiwi Solar Consultation",
  geo: { latitude: -12.3686, longitude: 130.8847 },
  serviceAreaNames: ["Tiwi", "Casuarina", "Wanguri", "Darwin"],
};

export function TiwiPage() {
  return <SuburbLocationPage data={data} />;
}

export default TiwiPage;
