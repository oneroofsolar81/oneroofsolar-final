import { LocationHub, LocationData } from "../components/LocationHub";
import heroImg from "../assets/images/loc_palmerston_hero.webp";
import secondaryImg from "../assets/images/inverter_install_hero_1785312441730.webp";

const data: LocationData = {
  slug: "palmerston",
  canonicalUrl: "https://oneroofsolar.com.au/locations/palmerston/",
  seoTitle: "Solar Panel Installation Palmerston | Oneroof Solar",
  metaDescription:
    "Solar panel installation across Palmerston, from established suburbs to new build estates like Zuccoli and Bellamack. Local Berrimah based team. Request a free quote.",
  breadcrumbName: "Palmerston",
  h1Lead: "Solar Panel Installation",
  h1Highlight: "Palmerston",
  heroSubheadline: "Local solar installers covering established suburbs and new build estates",
  heroImage: heroImg,
  heroImageAlt: "Solar panels on a new build home in Palmerston",
  secondaryImage: secondaryImg,
  secondaryImageAlt: "Solar system installation on a Palmerston home",
  introHeading: "Your Local Solar Team in Palmerston",
  introParagraphs: [
    "Oneroof Solar services Palmerston from our Berrimah base, a short trip from every suburb across the city. That means fast site visits, quick quotes and local knowledge of the estate covenants and build requirements common across Palmerston's newer developments.",
    "Palmerston is Darwin's fastest-growing area, and the suburb mix reflects that. Established pockets like Palmerston City, Driver and Woodroffe sit alongside newer estates such as Zuccoli, Bellamack, Bakewell and Gunn, many still being built out. That mix means we deal with everything from established roofs due for a system upgrade to brand new builds where solar can be planned from the start.",
    "If you are searching for solar installation in Palmerston, this is one of the fastest-growing markets we work in. New homeowners are often weighing up solar as part of their overall build or move-in costs, while established households are looking to cut rising power bills on a home they have owned for years.",
    "Whether you need a new residential installation, a system built into your new build, or repair and maintenance on an existing setup, we cover every suburb in this hub with the same local response time and workmanship.",
  ],
  whyHeading: "Why solar makes sense for Palmerston properties",
  whyParagraphs: [
    "Newer estates like Zuccoli, Johnston and Mitchell often present the best opportunity for a well-sized system, since roofs are unshaded and orientation can sometimes be planned before the home is even finished.",
    "Growing families in these estates also tend to have higher daily power use, from air conditioning to pool pumps, which shortens the payback period on solar considerably. Established suburbs such as Palmerston City, Driver, Moulden and Gray usually have homes ten to fifteen years old, often reaching the point where an ageing system or inverter needs replacing rather than a first-time install.",
    "Woodroffe, Durack, Rosebery and Bakewell fall somewhere in between, with a mix of original and upgraded systems across the same street. We assess each property on its own roof age, orientation and household usage rather than applying a blanket approach.",
  ],
  suburbsHeading: "Suburbs We Cover",
  suburbsIntro: "We install and maintain solar systems across every Palmerston suburb we cover.",
  suburbs: [
    { name: "Palmerston City", descriptor: "established residential and commercial centre" },
    { name: "Driver", descriptor: "established family homes" },
    { name: "Moulden", descriptor: "established residential" },
    { name: "Gray", descriptor: "established family homes" },
    { name: "Woodroffe", descriptor: "established residential" },
    { name: "Durack", descriptor: "established residential, mix of home ages" },
    { name: "Yarrawonga", descriptor: "established residential" },
    { name: "Archer", descriptor: "residential close to Palmerston centre" },
    { name: "Marlow Lagoon", descriptor: "established residential" },
    { name: "Farrar", descriptor: "newer residential development" },
    { name: "Rosebery", descriptor: "established residential" },
    { name: "Bellamack", descriptor: "newer estate" },
    { name: "Bakewell", descriptor: "established residential" },
    { name: "Gunn", descriptor: "newer estate" },
    { name: "Zuccoli", descriptor: "newer estate, growing family homes" },
    { name: "Johnston", descriptor: "newer estate, larger unshaded roofs" },
    { name: "Mitchell", descriptor: "newer estate" },
  ],
  whyChooseHeading: "Why Choose Oneroof for Palmerston",
  whyChoosePoints: [
    "Based in Berrimah, 4.9 star rated with over 120 reviews",
    "SAA Accredited Installer and Approved Products",
    "Experience across both established homes and new-build estates",
  ],
  quoteInfoHeading: "Get a Free Solar Quote in Palmerston",
  quoteInfoText:
    "Find out how much you can save with a solar system designed for your Palmerston home or new build. Get a free quote from your local Oneroof Solar team today.",
  midCtaHeading: "Start Saving on Your Palmerston Power Bills Today",
  midCtaSubtext: "See how much a custom solar system could save your property",
  midCtaButton: "Get Your Free Quote Now",
  finalCtaHeading: "Ready to Power Your Palmerston Property with Solar",
  finalCtaSubtext: "Request a free quote from your local Berrimah based team today",
  finalCtaButton: "Get Your Free Solar Assessment",
  areaServed: [
    "Palmerston",
    "Palmerston City",
    "Driver",
    "Woodroffe",
    "Zuccoli",
    "Bellamack",
    "Bakewell",
    "Gunn",
  ],
  serviceDescription:
    "Residential solar panel installation, battery storage and maintenance across Palmerston and its new build estates.",
};

export function Palmerston() {
  return <LocationHub data={data} />;
}

export default Palmerston;
