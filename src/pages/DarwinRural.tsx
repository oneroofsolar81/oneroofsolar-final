import { LocationHub, LocationData } from "../components/LocationHub";
import heroImg from "../assets/images/loc_darwin_rural_hero.webp";
import secondaryImg from "../assets/images/offgrid_hero_1785224439961.webp";

const data: LocationData = {
  slug: "darwin-rural",
  canonicalUrl: "https://oneroofsolar.com.au/locations/darwin-rural/",
  seoTitle: "Solar Panel Installation Darwin Rural & Litchfield | Oneroof Solar",
  metaDescription:
    "Solar installation for rural and acreage properties across Darwin Rural and Litchfield, including Humpty Doo, Berry Springs and Howard Springs. Request a free quote.",
  breadcrumbName: "Darwin Rural",
  h1Lead: "Solar Panel Installation",
  h1Highlight: "Darwin Rural & Litchfield",
  heroSubheadline: "Local solar installers for acreage and rural properties across Litchfield",
  heroImage: heroImg,
  heroImageAlt: "Aerial view of solar panels on a rural property near Litchfield",
  secondaryImage: secondaryImg,
  secondaryImageAlt: "Off grid solar and battery system on a rural property",
  introHeading: "Solar Built for Darwin Rural and Litchfield Properties",
  introParagraphs: [
    "Oneroof Solar services the rural belt south of Darwin from our Berrimah base, covering everywhere from Howard Springs and Humpty Doo through to Berry Springs and Darwin River. Rural properties in this area are a different job to a suburban install, and it's work we handle regularly.",
    "Acreage blocks typically come with larger roof areas across the house, sheds and outbuildings, more distance between the meter box and the array, and in some cases a weaker or less reliable grid connection than properties closer to town. That changes how a system needs to be sized and wired, and it's why a generic suburban quote rarely fits a rural property properly.",
    "If you are searching for solar installation across Darwin's rural areas, including Litchfield, this is where a large share of our acreage and lifestyle-block work happens. Many properties out here are also looking at hybrid or off grid setups, whether that's to reduce reliance on a patchy grid connection or to power a shed, pump or second dwelling independently.",
    "Whether you need a grid-connected system, a hybrid setup with battery backup, or an off grid solution for a remote block, we cover every suburb in this hub with the same local response time and workmanship.",
  ],
  whyHeading: "Why solar makes sense for Darwin Rural properties",
  whyParagraphs: [
    "Rural blocks around Humpty Doo, Berry Springs and Darwin River often run bore pumps, irrigation, workshops and sheds alongside the main house, which pushes daily power use well above a standard suburban home. That higher, more constant load is exactly where a well-sized solar and battery system delivers the fastest return.",
    "Properties further out toward Dundee Beach, Dundee Downs and Batchelor sometimes sit at the edge of reliable grid supply, making a hybrid or off grid system a practical solution rather than just a cost-saving one.",
    "Coolalinga and Howard Springs, being closer to town, usually still connect straightforwardly to the grid but benefit from the same larger roof space acreage blocks offer. We assess grid reliability, roof layout and actual load on-site before recommending a system, rather than sizing off a standard suburban template.",
  ],
  suburbsHeading: "Suburbs We Cover",
  suburbsIntro: "We install and maintain solar systems across every rural suburb we cover.",
  suburbs: [
    { name: "Howard Springs", descriptor: "acreage residential, established" },
    { name: "Humpty Doo", descriptor: "acreage and lifestyle blocks" },
    { name: "Berry Springs", descriptor: "acreage residential, rural lifestyle" },
    { name: "Coolalinga", descriptor: "residential, closer to town connection" },
    { name: "Noonamah", descriptor: "rural residential" },
    { name: "Hughes", descriptor: "rural residential" },
    { name: "Manton", descriptor: "rural residential" },
    { name: "Virginia", descriptor: "acreage residential" },
    { name: "Girraween", descriptor: "acreage residential" },
    { name: "Herbert", descriptor: "rural residential" },
    { name: "Darwin River", descriptor: "acreage and rural lifestyle" },
    { name: "Dundee Downs", descriptor: "rural, edge of grid coverage" },
    { name: "Dundee Beach", descriptor: "rural coastal, edge of grid coverage" },
    { name: "Dundee Forest", descriptor: "rural, edge of grid coverage" },
    { name: "Batchelor", descriptor: "rural township" },
    { name: "Litchfield Park", descriptor: "rural, larger acreage blocks" },
  ],
  whyChooseHeading: "Why Choose Oneroof for Darwin Rural",
  whyChoosePoints: [
    "Based in Berrimah, 4.9 star rated with over 120 reviews",
    "SAA Accredited Installer and Approved Products",
    "Experience with grid-connected, hybrid and off grid systems on acreage properties",
  ],
  quoteInfoHeading: "Get a Free Solar Quote for Darwin Rural",
  quoteInfoText:
    "Find out how much you can save with a solar system sized for your acreage or rural property. Get a free quote from your local Oneroof Solar team today.",
  midCtaHeading: "Start Saving on Your Rural Property Power Bills Today",
  midCtaSubtext: "See how much a custom solar and battery system could save your property",
  midCtaButton: "Get Your Free Quote Now",
  finalCtaHeading: "Ready to Power Your Rural Property with Solar",
  finalCtaSubtext: "Request a free quote from your local Berrimah based team today",
  finalCtaButton: "Get Your Free Solar Assessment",
  areaServed: [
    "Darwin Rural",
    "Litchfield",
    "Howard Springs",
    "Humpty Doo",
    "Berry Springs",
    "Darwin River",
    "Coolalinga",
    "Batchelor",
  ],
  serviceDescription:
    "Grid connected, hybrid and off grid solar installation for rural and acreage properties across Darwin Rural and Litchfield.",
};

export function DarwinRural() {
  return <LocationHub data={data} />;
}

export default DarwinRural;
