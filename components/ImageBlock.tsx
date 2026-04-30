interface ImageBlockProps {
  src?: string;
  alt: string;
  caption?: string;
  aspectRatio?: "wide" | "square" | "tall";
}

export default function ImageBlock({
  src,
  alt,
  caption,
  aspectRatio = "wide",
}: ImageBlockProps) {
  const aspectClasses = {
    wide: "aspect-[16/9]",
    square: "aspect-square",
    tall: "aspect-[3/4]",
  };

  return (
    <figure className="w-full">
      <div
        className={`relative w-full ${aspectClasses[aspectRatio]} bg-zinc-100 rounded-xl overflow-hidden`}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={alt}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          >
            <div className="w-8 h-8 rounded-full border-2 border-zinc-300 flex items-center justify-center" aria-hidden="true">
              <svg
                className="w-4 h-4 text-zinc-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-xs text-zinc-600 font-medium">{alt}</span>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-zinc-600 text-center leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
