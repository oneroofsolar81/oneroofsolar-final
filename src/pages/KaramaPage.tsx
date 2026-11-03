import { Home, Building2, Zap, Cpu, Wrench, BatteryCharging } from "lucide-react";
import { SuburbLocationPage, type SuburbLocationData } from "../components/SuburbLocationPage";

const data: SuburbLocationData = {
  suburb: "Karama",
  slug: "karama",
  heroHighlight: "Karama NT",
  heroParagraph:
    "Reliable solar for Karama homes and businesses, designed for Darwin's tropical heat, humidity and wet-season conditions. From established family homes to local businesses, we install, maintain and repair solar systems with your property's energy needs and local conditions in mind.",
  heroImage: "/assets/images/hosted/berrimah-0828.webp",
  heroImageAlt: "Solar installation serving Karama homes and businesses in Darwin's northern suburbs",
  rating: "4.9",
  reviewCount: "128",
  trustChips: [
    "SAA Accredited",
    "Cyclone Rated Roof Mounting C2/C3",
    "Jacana Approved",
    "Upfront STC & Battery Discounts",
  ],
  seo: {
    title: "Solar Installers & Repair in Karama NT | OneRoof",
    metaDescription:
      "Solar, battery and inverter installation and repair for Karama homes and businesses. SAA accredited, cyclone-rated systems, 4.9★ from 128 reviews.",
    canonicalUrl: "https://oneroofsolar.com.au/locations/karama/",
  },
  introHeading: "Solar Panel Installation and Repair in Karama",
  introParagraphs: [
    "Karama's established residential streets and family homes have different solar requirements depending on roof condition, available sunlight, shading and household electricity use. OneRoof Solar assesses these factors before recommending a suitable system and completing your solar panel installation with cyclone-rated mounting designed for Northern Territory conditions.",
    "If your existing solar system is producing less electricity, showing inverter errors or experiencing faults, our team can inspect the panels, inverter and electrical components. Our solar panel repair service helps identify whether a repair or replacement is the better option. Regular solar panel cleaning and maintenance can also help remove built-up dust and debris and maintain system performance.",
  ],
  systemsHeading: "Residential, Commercial, and Off-Grid Solar for Karama",
  systemTypes: [
    {
      title: "Residential Solar",
      href: "/solar-systems/residential-solar-system",
      icon: Home,
      text: "Karama has established family homes and residential properties with different roof layouts and electricity needs. We size your residential solar system around household energy use, roof space, orientation and shading from nearby trees. Your system can also be planned to accommodate battery storage now or in the future.",
    },
    {
      title: "Commercial Solar",
      href: "/solar-systems/commercial-solar-system",
      icon: Building2,
      text: "For shops, offices and other businesses around Karama, we design a commercial solar system based on operating hours, electricity consumption and available roof space. Whether your premises use single-phase or three-phase power, we plan the system around your business's energy requirements.",
    },
    {
      title: "Off-Grid Solar",
      href: "/solar-systems/off-grid-solar-system",
      icon: BatteryCharging,
      text: "Most Karama properties are connected to the electricity grid. However, if you need independent power for a separate structure or specific application, an off-grid solar system can combine solar panels, battery storage and a suitable inverter to supply electricity without relying on mains power. We assess your energy requirements before recommending a suitable setup.",
    },
  ],
  midCta: {
    heading: "Power Your Karama Home or Business with Local Solar",
    text: "Solar solutions designed around your energy needs, with upfront STC discounts applied directly to your quote.",
    button: "Get Your Free Karama Quote Today",
  },
  relatedHeading: "Inverter, Battery, and EV Charger Services",
  relatedIntro:
    "Solar panels are one part of a complete energy system. Karama homes and businesses can also benefit from a reliable inverter, battery storage and EV charging, and we install and repair all of them so the whole setup works together.",
  relatedServices: [
    {
      title: "Solar Inverter Installation",
      href: "/services/solar-inverters/installation",
      icon: Cpu,
      text: "Inverters operate in Darwin's tropical heat and need suitable protection against dust, moisture and harsh weather. Our solar inverter installation options include models with IP65 and IP66-rated enclosures. We select an inverter based on your solar system size, electricity requirements and property setup in Karama.",
    },
    {
      title: "Solar Inverter Repair",
      href: "/services/solar-inverters/repair",
      icon: Wrench,
      text: "If your inverter displays fault codes, shuts down unexpectedly or produces less power than expected, our solar inverter repair service can help. We diagnose the underlying fault and recommend the appropriate repair rather than replacing components unnecessarily.",
    },
    {
      title: "Solar Battery Installation",
      href: "/services/solar-battery-installation",
      icon: BatteryCharging,
      text: "Our solar battery installation service helps Karama households store excess daytime solar energy for evening use. We size the battery according to your electricity consumption, solar capacity and backup requirements. Eligible installations may also qualify for the Cheaper Home Batteries Program discount.",
    },
    {
      title: "EV Charger Installation",
      href: "/services/ev-chargers/installation",
      icon: Zap,
      text: "Charging an electric vehicle using your own solar generation can help make better use of daytime electricity. We provide EV charger installation for Karama homes and businesses, with charger options matched to your solar system and electrical setup.",
    },
    {
      title: "EV Charger Repair",
      href: "/services/ev-chargers/repair",
      icon: Wrench,
      text: "If your EV charger is not charging consistently, disconnects unexpectedly or stops working, our EV charger repair team can inspect and diagnose the issue. We support residential and commercial EV charging setups across Karama.",
    },
  ],
  whyHeading: "Why Karama Trusts OneRoof Solar",
  whyPoints: [
    "Fast, local response for Karama homes and businesses",
    "Support for urgent solar repairs and new installations",
    "Ongoing maintenance to help keep your solar system performing reliably",
    "SAA Accredited Installers using SAA Approved and Certified Products",
    "Cyclone-rated mounting and IP65/IP66-rated equipment suited to Darwin's conditions",
    "Federal STC Solar PV discounts applied upfront to your quote, with no paperwork to chase",
    "Eligible battery installations may qualify for a Cheaper Home Batteries Program discount",
    "Jacana Energy grid connection and compliance paperwork handled for you",
    "4.9 stars from 128 local reviews",
  ],
  highlightCard: {
    heading: "Built for Territory Conditions",
    text: "From cyclone-rated mounting systems to IP65/IP66 equipment and upfront STC discounts, our solar installations are planned around Darwin's heat, humidity and wet-season conditions.",
    tag: "Local Berrimah-based team",
  },
  repairCta: {
    heading: "Solar System Underperforming or Faulty in Karama?",
    text: "Get a local assessment in Karama for faulty panels, inverter issues, reduced solar output or unexpected system problems.",
    button: "Book a Free Karama System Check",
  },
  mapHeading: "Find Us Near Karama",
  mapParagraph:
    "Serving Karama and the surrounding northern Darwin suburbs, our Berrimah-based team provides solar installation, repairs and maintenance across the area. We arrange site visits to assess your property's solar requirements.",
  nearbyHeading: "Nearby Solar Coverage",
  nearbySegments: [
    "Karama is part of our ",
    { label: "Northern Darwin solar coverage", to: "/locations/northern-darwin" },
    ". We also provide solar services in nearby areas, including ",
    { label: "Wanguri", to: "/locations/wanguri" },
    ", ",
    { label: "Nightcliff", to: "/locations/nightcliff" },
    " and ",
    { label: "Berrimah", to: "/locations/berrimah" },
    ".",
  ],
  faqIntro: "Common questions about solar installation and repair for Karama properties.",
  faqs: [
    {
      q: "Can solar panels be installed on older homes in Karama?",
      a: "Yes. Older homes can often accommodate solar panels, provided the roof structure, condition and available space are suitable. A site assessment helps determine whether any roof work is needed before installation.",
    },
    {
      q: "Does roof shading affect solar panel performance in Karama?",
      a: "Yes. Trees, nearby buildings and roof structures can create shade that reduces solar generation. Panel placement and system design should account for shading throughout the day.",
    },
    {
      q: "Should I replace my old solar inverter or repair it?",
      a: "It depends on the inverter's age, condition, fault and repair cost. An inspection can help determine whether repairing the existing unit or installing a replacement is the more practical option.",
    },
    {
      q: "Can I add a solar battery to my existing system?",
      a: "In many cases, yes. Compatibility depends on your existing inverter, solar system configuration and the battery technology selected. An assessment can confirm suitable options.",
    },
    {
      q: "Will solar panels still generate electricity during Darwin's wet season?",
      a: "Yes. Solar panels continue generating electricity during the wet season, although heavy cloud cover and rainfall can reduce output. System performance varies with available sunlight and weather conditions.",
    },
    {
      q: "Do I need approval before connecting a solar system in Karama?",
      a: "Grid-connected solar systems must meet the relevant network connection requirements. Power and Water Corporation manages the electricity network in the Darwin-Katherine region, while Jacana Energy is a retailer. Your installer can guide you through the applicable connection process.",
    },
    {
      q: "How often should a solar system be inspected?",
      a: "Periodic inspections can help identify damaged wiring, loose connections, inverter faults and other performance issues. The recommended maintenance frequency depends on your equipment, system condition and operating environment.",
    },
  ],
  quoteHeading: "Ready to Upgrade or Fix Your Karama Solar System?",
  quoteParagraph:
    "Get a quick, no-obligation assessment from our local team, with STC incentives included in your quote and support with your Power and Water grid connection requirements.",
  quoteFormTitle: "Book Your Free Karama Consultation",
  quoteSource: "location_karama",
  finalCtaHeading: "Ready to Upgrade or Fix Your Karama Solar System?",
  finalCtaText:
    "Get a quick, no-obligation assessment from our local team with upfront STC discounts applied to your quote.",
  finalCtaButton: "Book Your Karama Solar Consultation",
  geo: { latitude: -12.3983, longitude: 130.9108 },
  serviceAreaNames: ["Karama", "Malak", "Berrimah", "Darwin"],
};

export function KaramaPage() {
  return <SuburbLocationPage data={data} />;
}

export default KaramaPage;
