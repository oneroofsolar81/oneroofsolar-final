import { LocationHub, LocationData } from "../components/LocationHub";
import heroImg from "../assets/images/loc_northern_darwin_hero.webp";
import secondaryImg from "../assets/images/solar_technician_darwin_1784286745235.webp";

const data: LocationData = {
  slug: "northern-darwin",
  canonicalUrl: "https://oneroofsolar.com.au/locations/northern-darwin/",
  seoTitle: "Solar Panel Installation Northern Darwin | Oneroof Solar",
  metaDescription:
    "Solar panel installation across Darwin's northern suburbs, from Nightcliff and Casuarina to Muirhead and Wanguri. Local Berrimah based team. Request a free quote.",
  breadcrumbName: "Northern Darwin",
  h1Lead: "Solar Panel Installation",
  h1Highlight: "Northern Darwin",
  heroSubheadline: "Local solar installers covering every suburb across Darwin's north",
  heroImage: heroImg,
  heroImageAlt: "Solar panels on a northern Darwin family home",
  secondaryImage: secondaryImg,
  secondaryImageAlt: "Oneroof Solar technician installing panels in Darwin",
  introHeading: "Your Local Solar Team Across Northern Darwin",
  introParagraphs: [
    "Oneroof Solar operates out of Berrimah, a short drive from every suburb across Northern Darwin. This means fast site visits, quick quotes and local knowledge of the roof types and shading patterns common throughout the area.",
    "Northern Darwin covers a wide mix of suburbs, from established neighbourhoods like Nightcliff, Casuarina and Rapid Creek to newer growth pockets like Muirhead and Wanguri. Family homes here tend to sit on larger blocks with bigger roofs and higher daily power use than inner-city properties, which makes solar a strong investment across the board.",
    "If you are searching for solar installation across Darwin's northern suburbs, this is one of the areas where we install and maintain the most systems. Established suburbs often have mature trees affecting shading, so panel placement needs a proper site assessment rather than a generic layout. Newer estates usually offer larger, unshaded roofs suited to bigger systems from day one.",
    "Whether you need a new residential installation, an upgrade to an aging system, or repair and maintenance, we cover every suburb in this hub with the same local response time and workmanship.",
  ],
  whyHeading: "Why solar makes sense for Northern Darwin properties",
  whyParagraphs: [
    "Family-sized homes across the northern suburbs typically run more air conditioning zones and higher daily loads than smaller inner-city dwellings, which shortens the payback period on a well-sized system.",
    "Coconut Grove and Rapid Creek's family homes often see their biggest power draw through the wet season, when a correctly sized system makes the clearest difference to the bill. Older suburbs such as Casuarina, Alawa and Moil frequently have established tree cover, so we assess shading properly before recommending panel placement rather than assuming a standard layout will work.",
    "Newer estates like Muirhead and Wanguri tend to have larger, unshaded roof space, which opens up bigger system sizes and battery-ready setups from the first install. We design around what each property actually offers rather than a one-size package.",
  ],
  suburbsHeading: "Suburbs We Cover",
  suburbsIntro: "We install and maintain solar systems across every northern suburb we cover.",
  suburbs: [
    { name: "Nightcliff", descriptor: "established homes close to the coast" },
    { name: "Casuarina", descriptor: "established residential with mature tree cover" },
    { name: "Rapid Creek", descriptor: "family homes with higher cooling loads" },
    { name: "Coconut Grove", descriptor: "established residential, close to shops and schools" },
    { name: "Millner", descriptor: "established family homes" },
    { name: "Jingili", descriptor: "residential close to Charles Darwin University" },
    { name: "Tiwi", descriptor: "established residential" },
    { name: "Muirhead", descriptor: "newer estate, larger unshaded roofs" },
    { name: "Wanguri", descriptor: "newer estate, larger unshaded roofs" },
    { name: "Alawa", descriptor: "established residential with tree cover" },
    { name: "Lyons", descriptor: "newer residential development" },
    { name: "Moil", descriptor: "established family homes" },
    { name: "Wagaman", descriptor: "established residential" },
    { name: "Wulagi", descriptor: "established family homes" },
    { name: "Anula", descriptor: "established residential" },
    { name: "Marrara", descriptor: "residential and sporting precinct" },
    { name: "Malak", descriptor: "established residential" },
    { name: "Karama", descriptor: "established family homes" },
    { name: "Leanyer", descriptor: "established residential with larger blocks" },
  ],
  whyChooseHeading: "Why Choose Oneroof for Northern Darwin",
  whyChoosePoints: [
    "Based in Berrimah, 4.9 star rated with over 120 reviews",
    "SAA Accredited Installer and Approved Products",
    "Residential systems sized to household size, not one-size packages",
  ],
  quoteInfoHeading: "Get a Free Solar Quote in Northern Darwin",
  quoteInfoText:
    "Find out how much you can save with a solar system designed for your northern suburbs home. Get a free quote from your local Oneroof Solar team today.",
  midCtaHeading: "Start Saving on Your Northern Darwin Power Bills Today",
  midCtaSubtext: "See how much a custom solar system could save your property",
  midCtaButton: "Get Your Free Quote Now",
  finalCtaHeading: "Ready to Power Your Northern Darwin Home with Solar",
  finalCtaSubtext: "Request a free quote from your local Berrimah based team today",
  finalCtaButton: "Get Your Free Solar Assessment",
  areaServed: [
    "Northern Darwin",
    "Nightcliff",
    "Casuarina",
    "Rapid Creek",
    "Coconut Grove",
    "Muirhead",
    "Wanguri",
    "Leanyer",
  ],
  serviceDescription:
    "Residential solar panel installation, battery storage and maintenance across the northern suburbs of Darwin.",
};

export function NorthernDarwin() {
  return <LocationHub data={data} />;
}

export default NorthernDarwin;
