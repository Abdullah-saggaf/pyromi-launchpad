import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface OutputCardProps {
  active: boolean;
  tag: string;
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
  tag,
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

        <div className="absolute inset-0 z-30 flex flex-col bg-gradient-to-t from-obsidian/80 via-transparent to-transparent">
          <div className="flex items-center justify-between p-3 text-[10px] uppercase tracking-widest">
            <span className="rounded-full bg-black/40 px-2 py-0.5 text-white/80 backdrop-blur">
              {tag}
            </span>
            <span className="text-white/80">{duration}</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur transition group-hover:scale-110"
              animate={{
                backgroundColor: active
                  ? "rgba(255, 255, 255, 0)"
                  : "rgba(255, 255, 255, 0.1)",
                scale: active ? 0.8 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <Play
                size={18}
                className="ml-0.5 text-white"
                style={{
                  opacity: active ? 0 : 1,
                  transition: "opacity 0.2s",
                }}
              />
            </motion.div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-3">
            <p className="text-sm font-semibold leading-tight text-white">{title}</p>
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-smoke/75">{source}</p>
    </article>
  );
}

