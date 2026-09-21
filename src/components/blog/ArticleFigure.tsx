export function ArticleFigure({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure className="my-10 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-md">
      <img
        referrerPolicy="no-referrer"
        loading="lazy"
        src={src}
        alt={alt}
        className="w-full h-[240px] sm:h-[340px] lg:h-[400px] object-cover"
      />
    </figure>
  );
}
