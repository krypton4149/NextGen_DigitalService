import Image from "next/image";

type FrameImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  aspect?: string;
  className?: string;
  stamp?: string;
  kicker?: string;
  caption?: string;
  darkMatte?: boolean;
};

export function FrameImage({
  src,
  alt,
  sizes,
  priority,
  aspect = "aspect-[4/5]",
  className = "",
  stamp,
  kicker,
  caption,
  darkMatte,
}: FrameImageProps) {
  return (
    <figure className={`group ${className}`}>
      <div
        className={`img-frame ${darkMatte ? "img-frame--dark" : ""} ${aspect}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="img-zoom object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-foreground/55 via-transparent to-transparent" />
        {kicker ? (
          <p className="absolute left-5 top-5 z-[3] rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
            {kicker}
          </p>
        ) : null}
        {stamp ? <p className="img-stamp">{stamp}</p> : null}
      </div>
      {caption ? (
        <figcaption className="mt-3 font-display text-sm font-semibold uppercase tracking-[0.16em] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
