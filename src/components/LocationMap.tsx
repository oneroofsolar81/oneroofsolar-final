import { MapPin } from "lucide-react";

export interface OfficeLocation {
  title: string;
  address: string;
  lat: number;
  lng: number;
  mapsQuery: string;
}

export const OFFICE_LOCATIONS: OfficeLocation[] = [
  {
    title: "Darwin",
    address: "3/97 Pruen Rd, Berrimah NT 0828",
    lat: -12.4386,
    lng: 130.9256,
    mapsQuery: "3/97 Pruen Rd, Berrimah NT 0828",
  },
  {
    title: "Alice Springs",
    address: "44 Zeil St, Araluen NT 0870",
    lat: -23.7084,
    lng: 133.8578,
    mapsQuery: "44 Zeil St, Araluen NT 0870",
  },
];

/**
 * Build a map location for a suburb service-area page. The pin sits on the
 * suburb centre and the label states it is a service area, so these pages
 * never misrepresent the suburb as a physical office (our only offices are
 * in OFFICE_LOCATIONS). Pass accurate suburb-centre coordinates only.
 */
export function suburbMapLocation(
  suburb: string,
  lat: number,
  lng: number,
  mapsQuery?: string,
): OfficeLocation {
  return {
    title: suburb,
    address: "Service area · Darwin, NT",
    lat,
    lng,
    mapsQuery: mapsQuery ?? `${suburb}, Darwin NT`,
  };
}

/**
 * Accurate suburb-centre coordinates for the standalone location pages that
 * do not use the shared SuburbLocationPage component. Keyed by URL slug.
 * Coordinates are real suburb centroids, not the Berrimah office.
 */
export const SUBURB_LOCATIONS: Record<string, OfficeLocation> = {
  "stuart-park": suburbMapLocation("Stuart Park", -12.4441, 130.8375, "Stuart Park NT 0820"),
  "fannie-bay": suburbMapLocation("Fannie Bay", -12.4328, 130.8415, "Fannie Bay NT 0820"),
  "east-point": suburbMapLocation("East Point", -12.426, 130.838, "East Point NT 0820"),
  bayview: suburbMapLocation("Bayview", -12.4403, 130.8603, "Bayview NT 0820"),
  winnellie: suburbMapLocation("Winnellie", -12.4289, 130.8697, "Winnellie NT 0820"),
};

function osmEmbedSrc(lat: number, lng: number, delta = 0.02) {
  const bbox = [lng - delta, lat - delta * 0.7, lng + delta, lat + delta * 0.7].join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(bbox)}&layer=mapnik&marker=${encodeURIComponent(`${lat},${lng}`)}`;
}

function googleMapsUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapSrc(location: OfficeLocation) {
  return osmEmbedSrc(location.lat, location.lng);
}

export function LocationMapCard({ location }: { location: OfficeLocation }) {
  return (
    <div className="h-[400px] sm:h-[450px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col bg-white">
      <div className="p-4 sm:p-5 flex justify-center items-center gap-2 border-b border-slate-100 font-bold text-sm sm:text-base text-slate-900 shrink-0 text-center">
        <MapPin className="text-brand-600 w-4 h-4 sm:w-5 sm:h-5" />
        {location.title}: {location.address}
      </div>
      <div className="relative flex-1 min-h-0 bg-slate-100" data-lenis-prevent>
        <iframe
          src={mapSrc(location)}
          title={`${location.title} office map`}
          loading="eager"
          referrerPolicy="origin"
          className="absolute inset-0 w-full h-full border-0"
        />
        <a
          href={googleMapsUrl(location.mapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-10 rounded-lg bg-white/95 border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm hover:bg-white hover:text-brand-700 transition-colors"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

export function LocationMaps({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {OFFICE_LOCATIONS.map((location) => (
        <LocationMapCard key={location.title} location={location} />
      ))}
    </div>
  );
}
