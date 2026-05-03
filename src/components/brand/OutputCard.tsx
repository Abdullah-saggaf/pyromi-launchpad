import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface OutputCardProps {
  active: boolean;
  duration: string;
  source: string;
  title: string;
  image: string;
  video: string;
  onActivate: () => void;
  onDeactivate: () => void;
}

export function OutputCard({
  active,
  duration,
  source,
  title,
  image,
  video,
  onActivate,
  onDeactivate,
}: OutputCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (active) {
      el.currentTime = 0;
      el.play().catch(() => {
        // Playback may be deferred until user interaction.
      });
    } else {
      el.pause();
      el.currentTime = 0;
    }

    return () => {
      el.pause();
      el.currentTime = 0;
    };
  }, [active]);

  return (
    <article
      className="group relative w-[220px] shrink-0 cursor-pointer sm:w-[260px]"
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
      onClick={() => (active ? onDeactivate() : onActivate())}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          active ? onDeactivate() : onActivate();
        }
      }}
    >
      <div className="gradient-border relative aspect-[9/16] overflow-hidden rounded-2xl bg-obsidian/80">
        <video
          ref={videoRef}
          src={video}
          className="absolute inset-0 z-10 h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: active ? 1 : 0 }}
          controls={false}
          muted
          loop
          playsInline
          preload="none"
        />

        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 z-20 h-full w-full object-cover"
          animate={{ opacity: active ? 0 : 1 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        />

        <div className="absolute inset-0 z-30 flex flex-col">
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/85 via-obsidian/35 to-transparent p-3 pt-10">
            <p className="text-sm font-semibold leading-tight text-white">{title}</p>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-sm font-semibold leading-tight text-smoke">{title}</p>
        <p className="mt-1 text-xs text-smoke/60">{source}</p>
      </div>
    </article>
  );
}

