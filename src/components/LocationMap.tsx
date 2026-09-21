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
