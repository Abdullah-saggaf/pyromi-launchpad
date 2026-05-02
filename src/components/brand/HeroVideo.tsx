import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function HeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        // Autoplay can be blocked; UI still renders fine.
      });
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => video.removeEventListener("loadedmetadata", handleLoadedMetadata);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative mx-auto mt-16 max-w-5xl"
    >
      <div className="gradient-border relative overflow-hidden rounded-2xl bg-charcoal/90 p-3 shadow-[0_40px_120px_-40px_rgba(110,59,255,0.6)]">
        <div className="relative aspect-video overflow-hidden rounded-xl bg-obsidian/80">
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-obsidian/80">
              <div className="text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-smoke/20 border-t-pyromi" />
                <p className="mt-3 text-sm text-smoke/50">Loading video...</p>
              </div>
            </div>
          )}

          <video
            ref={videoRef}
            src="/assets/hero/pyromi_hero_animation.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            onLoadedMetadata={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </motion.div>
  );
}

