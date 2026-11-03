import { Home, Building2, Zap, Cpu, Wrench, BatteryCharging } from "lucide-react";
import { SuburbLocationPage, type SuburbLocationData } from "../components/SuburbLocationPage";

const data: SuburbLocationData = {
  suburb: "Casuarina",
  slug: "casuarina",
  heroHighlight: "Casuarina NT",
  heroParagraph:
    "Solar for the homes, units and businesses around Casuarina Square, Trower Road and Casuarina Beach. Whether you run a household, a strata block or a shopfront with heavy daytime power use, we design, install and repair systems that suit Darwin's heat, wet-season storms and shaded streets.",
  heroImage: "/assets/images/hosted/bayview-0820.webp",
  heroImageAlt: "Solar installation serving Casuarina homes, units and businesses in Darwin",
  rating: "4.9",
  reviewCount: "128",
  trustChips: [
    "SAA Accredited",
    "Cyclone Rated Roof Mounting C2/C3",
    "Jacana Approved",
    "Upfront STC & Battery Discounts",
  ],
  seo: {
    title: "Solar Installers & Repair in Casuarina NT | OneRoof",
    metaDescription:
      "Solar, battery, inverter and EV charger installation and repair for Casuarina homes, units and businesses. SAA accredited, 4.9★ from 128 reviews.",
    canonicalUrl: "https://oneroofsolar.com.au/locations/casuarina/",
  },
  introHeading: "Solar Panel Installation and Repair in Casuarina",
  introParagraphs: [
    "Casuarina is one of Darwin's busiest northern suburbs, with a mix of established houses, townhouses, apartment blocks and a large retail and services precinct. That mix means no two roofs are alike. Our solar panel installation starts with a roof assessment covering orientation, tilt, shade from mature trees, switchboard capacity and your daily load, then uses cyclone-rated mounting designed for the Top End wet season.",
    "Older Casuarina systems often show the same problems: cracked or soiled panels, tripped inverters, loose wiring and output that has slowly dropped. Our solar panel repair team tests string voltages and inverter logs to find the fault before recommending a fix. Ongoing solar panel cleaning and maintenance catches issues early, including moisture ingress of the kind that affects systems in Darwin's humidity.",
  ],
  systemsHeading: "Residential, Commercial, and Off-Grid Solar for Casuarina",
  systemTypes: [
    {
      title: "Residential Solar",
      href: "/solar-systems/residential-solar-system",
      icon: Home,
      text: "Casuarina households range from detached family homes to townhouses and units. Your residential solar system is sized from your 12-month usage, roof layout and shading, with panel placement or optimisers used where tree cover affects output. For strata and body corporate properties, we prepare the documentation needed for approval.",
    },
    {
      title: "Commercial Solar",
      href: "/solar-systems/commercial-solar-system",
      icon: Building2,
      text: "Shops, medical practices, offices and food outlets use most of their power while the sun is up, which suits solar well. A commercial solar system here is designed around trading hours, air-conditioning load, single or three-phase supply and the roof area your tenancy or building owner permits.",
    },
    {
      title: "Off-Grid Solar",
      href: "/solar-systems/off-grid-solar-system",
      icon: BatteryCharging,
      text: "Casuarina is fully grid-connected, so off-grid is rarely the right fit. For a detached studio, workshop or site office that cannot connect to the mains, an off-grid solar system pairs panels, batteries and an inverter sized to that building alone.",
    },
  ],
  midCta: {
    heading: "Power Outbuildings Without the Grid-Connection Headache",
    text: "Sized-to-fit off-grid solar for your Casuarina workshop or studio, complete with instant upfront STC discounts.",
    button: "Get Your Free Casuarina Quote Today",
  },
  relatedHeading: "Inverter, Battery, and EV Charger Services",
  relatedIntro:
    "The inverter, battery and charger are what turn panels into a usable energy system. We install and repair each one so they work together on your switchboard.",
  relatedServices: [
    {
      title: "Solar Inverter Installation",
      href: "/services/solar-inverters/installation",
      icon: Cpu,
      text: "The inverter converts panel output into household power and sets your export limit. Our solar inverter installation covers string, hybrid and microinverter options, chosen for your system size, shading and future battery plans.",
    },
    {
      title: "Solar Inverter Repair",
      href: "/services/solar-inverters/repair",
      icon: Wrench,
      text: "Repeated shutdowns, error codes or a blank display usually point to a specific fault. Our inverter repair service reads the fault log, tests the unit and repairs or replaces only what has failed.",
    },
    {
      title: "Solar Battery Installation",
      href: "/services/solar-battery-installation",
      icon: BatteryCharging,
      text: "A battery shifts your midday surplus into the evening peak, when most Casuarina households run air-conditioning and cooking. Our battery installation is sized to your overnight load and backup needs, and eligible systems may qualify for a Cheaper Home Batteries Program discount.",
    },
    {
      title: "EV Charger Installation",
      href: "/services/ev-chargers/installation",
      icon: Zap,
      text: "A home or workplace charger on your solar circuit lets daytime generation feed the car directly. Our EV charger installation covers single and three-phase supply, with load management where the switchboard is near capacity.",
    },
    {
      title: "EV Charger Repair",
      href: "/services/ev-chargers/repair",
      icon: Wrench,
      text: "Chargers that fault, fail to start a session or drop out mid-charge are inspected, tested and repaired by our EV charger repair team.",
    },
  ],
  whyHeading: "Why Casuarina Chooses OneRoof Solar",
  whyPoints: [
    "Solar designed for strata, townhouse and shopfront roofs as well as standalone homes",
    "Urgent repair callouts as well as new installations",
    "Shade-aware layouts using optimisers or microinverters where trees affect output",
    "SAA Accredited Installers using SAA Approved and Certified Products",
    "Cyclone-rated mounting built for Top End storms",
    "STC discounts applied upfront, plus Cheaper Home Batteries Program discounts where eligible",
    "Jacana Energy connection and compliance paperwork handled for you",
    "4.9 stars from 128 local reviews",
  ],
  highlightCard: {
    heading: "Built for Busy Northern Suburbs",
    text: "From strata approvals to three-phase commercial roofs, every Casuarina system is planned around the way the building is actually used.",
    tag: "Local Berrimah-based team",
  },
  repairCta: {
    heading: "Solar System Underperforming or Faulty in Casuarina?",
    text: "Get a local check on low output, inverter faults, damaged panels or a system that has stopped exporting.",
    button: "Book a Free Casuarina System Check",
  },
  mapHeading: "Find Us Near Casuarina",
  mapParagraph:
    "Our Berrimah-based team services Casuarina via the Stuart Highway and Trower Road, so site inspections and repair visits are quick to arrange.",
  nearbyHeading: "Nearby Solar Coverage",
  nearbySegments: [
    "Casuarina falls within our ",
    { label: "Northern Darwin solar coverage", to: "/locations/northern-darwin" },
    ", serving homes across postcodes 0810 and 0812, alongside nearby suburbs such as ",
    { label: "Rapid Creek", to: "/locations/rapid-creek" },
    ", ",
    { label: "Tiwi", to: "/locations/tiwi" },
    " and ",
    { label: "Wanguri", to: "/locations/wanguri" },
    ". Looking for solar services along the coast? Explore our ",
    { label: "Nightcliff solar page", to: "/locations/nightcliff" },
    ".",
  ],
  faqIntro: "Questions specific to solar for Casuarina units, shops and homes.",
  faqs: [
    {
      q: "Can I install solar on a unit or townhouse in Casuarina?",
      a: "Often yes, but the roof is usually common property, so body corporate approval comes first. We supply the system layout, engineering and equipment details the committee needs, and discuss options such as a roof-share arrangement or a system on a dedicated section of roof.",
    },
    {
      q: "Will solar suit a Casuarina shop or office with high daytime use?",
      a: "Typically it does, because consumption peaks during trading hours when panels produce the most. We size the system against your 30-minute interval data where available, rather than guessing from your bill, so the system matches your daytime load.",
    },
    {
      q: "How do mature trees in Casuarina affect solar output?",
      a: "Shade on even one panel can reduce the output of a whole string. We map shading across the day and season, then use optimisers, microinverters or separate roof planes to limit the loss. Where a branch is the problem, we will say so before suggesting any hardware.",
    },
    {
      q: "Why does my system produce less in the build-up months?",
      a: "Heat lowers panel efficiency, and cloud and storms cut output in the wet season. A modest dip is normal, but a sharp or sustained drop is not. We can test your system if the drop looks abnormal.",
    },
    {
      q: "Can a battery power my Casuarina home during an outage?",
      a: "Only if the system is designed for backup. Many batteries are installed for evening self-use and do not power the home when the grid goes down. If outage protection matters, tell us at quote stage so we can specify a backup-capable inverter and decide which circuits to protect.",
    },
    {
      q: "Can I add an EV charger in an apartment block or shared carpark?",
      a: "Possibly, subject to body corporate approval and available switchboard capacity. We check the supply, then recommend a dedicated charger on your own meter circuit or a load-managed setup.",
    },
    {
      q: "How do I find out why my export or feed-in has stopped?",
      a: "Check the inverter display for error codes, then your meter and monitoring app. Common causes include a tripped isolator, grid voltage rises forcing the inverter offline, and communication faults. If it persists, book a system check and we will diagnose it.",
    },
  ],
  quoteHeading: "Ready to Upgrade or Fix Your Casuarina Solar System?",
  quoteParagraph:
    "Get a quick, no-obligation assessment from our local team, with STC incentives included in your quote and support with your Power and Water grid connection requirements.",
  quoteFormTitle: "Book Your Free Casuarina Consultation",
  quoteSource: "location_casuarina",
  finalCtaHeading: "Ready to Upgrade or Fix Your Casuarina Solar System?",
  finalCtaText:
    "Get a quick, no-obligation assessment from our local team with upfront STC discounts applied to your quote.",
  finalCtaButton: "Book Your Casuarina Solar Consultation",
  geo: { latitude: -12.3744, longitude: 130.875 },
  serviceAreaNames: ["Casuarina", "Rapid Creek", "Tiwi", "Wanguri", "Darwin"],
};

export function CasuarinaPage() {
  return <SuburbLocationPage data={data} />;
}

export default CasuarinaPage;
