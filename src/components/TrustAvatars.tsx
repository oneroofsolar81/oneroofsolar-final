const HOMEOWNER_AVATARS = [
  { src: "/assets/images/hosted/homeowner-1.jpg", alt: "Darwin homeowner" },
  { src: "/assets/images/hosted/homeowner-2.jpg", alt: "Darwin homeowner" },
  { src: "/assets/images/hosted/homeowner-3.jpg", alt: "Darwin homeowner" },
];

export function TrustAvatars({
  className = "",
  imageClassName = "w-7 h-7 sm:w-8 sm:h-8 border-[#101726]",
  badgeClassName = "w-7 h-7 sm:w-8 sm:h-8 border-[#101726] bg-[#1c3525] text-[#8dc63f]",
}: {
  className?: string;
  imageClassName?: string;
  badgeClassName?: string;
}) {
  return (
    <div className={`flex -space-x-2 ${className}`}>
      {HOMEOWNER_AVATARS.map((avatar) => (
        <img
          key={avatar.src}
          className={`rounded-full border-2 object-cover ${imageClassName}`}
          src={avatar.src}
          alt={avatar.alt}
          width={32}
          height={32}
        />
      ))}
      <div
        className={`rounded-full border-2 text-[10px] font-black flex items-center justify-center ${badgeClassName}`}
      >
        +500
      </div>
    </div>
  );
}
