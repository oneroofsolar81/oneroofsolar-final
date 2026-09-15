export function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-10 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-900 shadow-md">
      <div className="relative">
        <img
          referrerPolicy="no-referrer"
          loading="lazy"
          src={src}
          alt={alt}
          className="w-full h-[240px] sm:h-[340px] lg:h-[400px] object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/70 to-transparent px-5 py-4">
          <figcaption className="text-sm text-slate-100 leading-relaxed">{caption}</figcaption>
        </div>
      </div>
    </figure>
  );
}
