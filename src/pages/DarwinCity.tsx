import { LocationHub, LocationData } from "../components/LocationHub";
import heroImg from "../assets/images/loc_darwin_city_hero.webp";
import secondaryImg from "../assets/images/darwin_rooftops_aerial_1785312477139.webp";

const data: LocationData = {
  slug: "darwin-city",
  canonicalUrl: "https://oneroofsolar.com.au/locations/darwin-city/",
  seoTitle: "Solar Panel Installation Darwin City & Inner Suburbs | Oneroof Solar",
  metaDescription:
    "Local solar installers based in Berrimah, serving Darwin City and the inner suburbs including Fannie Bay, Stuart Park and Winnellie. Request a free quote today.",
  breadcrumbName: "Darwin City",
  h1Lead: "Solar Panel Installation",
  h1Highlight: "Darwin City & Inner Suburbs",
  heroSubheadline: "Local solar installers based in Berrimah covering Darwin's inner suburbs",
  heroImage: heroImg,
  heroImageAlt: "Solar panels installed on a modern Darwin City home",
  secondaryImage: secondaryImg,
  secondaryImageAlt: "Aerial view of Darwin rooftops with solar panels",
  introHeading: "Your Local Solar Team in Darwin City",
  introParagraphs: [
    "Oneroof Solar is based right in the heart of Darwin, with our team operating out of Berrimah. This puts us minutes from Fannie Bay, Stuart Park, East Point, Bayview and Winnellie, which means faster site visits, quicker quotes and local knowledge of council requirements across the inner suburbs.",
    "Darwin's inner suburbs mix older established homes, waterfront properties and commercial premises, each with different roof types, shading conditions and energy needs. Our team has installed and maintained solar systems across this area for years, from CBD apartments and townhouses to Fannie Bay's larger blocks and Winnellie's commercial and industrial sites.",
    "If you are searching for solar panel installation in Darwin, this is where our work is most concentrated. Being based in the area means we can turn quotes around quickly and schedule installations without the delays that come with travelling from further out.",
    "Whether you need a new residential installation, a commercial system for your business, or repair and maintenance on an existing setup, we cover every suburb in this hub with the same local response time and workmanship.",
  ],
  whyHeading: "Why solar makes sense for Darwin City properties",
  whyParagraphs: [
    "Darwin's climate keeps air conditioning running for most of the year, which drives household and business power bills higher than almost anywhere else in Australia. That constant demand is exactly what makes solar pay for itself faster here.",
    "CBD apartments and units often share roof space and require body corporate approval before installation, so we factor that into the process from the first site visit. Stuart Park's established homes usually have older roof structures that need proper assessment before panel placement. Coastal properties in Bayview and East Point need hardware selected with salt exposure in mind.",
    "Winnellie's industrial and commercial sites typically require larger systems built around business operating hours rather than a standard residential package. We size and design every system around the actual property, not a generic template.",
  ],
  suburbsHeading: "Suburbs We Cover",
  suburbsIntro: "We install and maintain solar systems across every inner Darwin suburb we cover.",
  suburbs: [
    { name: "Fannie Bay", descriptor: "larger residential blocks and waterfront homes" },
    { name: "Stuart Park", descriptor: "established family homes close to the CBD" },
    { name: "East Point", descriptor: "residential properties bordering the reserve" },
    { name: "Bayview", descriptor: "waterfront and near-coastal residential" },
    { name: "Winnellie", descriptor: "industrial and commercial sites" },
    { name: "Berrimah", descriptor: "our home base, residential and commercial" },
  ],
  whyChooseHeading: "Why Choose Oneroof for Darwin City",
  whyChoosePoints: [
    "Based in Berrimah, 4.9 star rated with over 120 reviews",
    "SAA Accredited Installer and Approved Products",
    "Residential and commercial systems, from apartment blocks to warehouses",
  ],
  quoteInfoHeading: "Get a Free Solar Quote in Darwin City",
  quoteInfoText:
    "Find out how much you can save with a solar system designed for your Darwin City home or business. Get a free quote from your local Oneroof Solar team today.",
  midCtaHeading: "Start Saving on Your Darwin City Power Bills Today",
  midCtaSubtext: "See how much a custom solar system could save your property",
  midCtaButton: "Get Your Free Quote Now",
  finalCtaHeading: "Ready to Power Your Darwin City Property with Solar",
  finalCtaSubtext: "Request a free quote from your local Berrimah based team today",
  finalCtaButton: "Get Your Free Solar Assessment",
  areaServed: [
    "Darwin City",
    "Fannie Bay",
    "Stuart Park",
    "East Point",
    "Bayview",
    "Winnellie",
    "Berrimah",
  ],
  serviceDescription:
    "Residential and commercial solar panel installation, battery storage and maintenance across Darwin City and the inner suburbs.",
};

export function DarwinCity() {
  return <LocationHub data={data} />;
}

export default DarwinCity;
