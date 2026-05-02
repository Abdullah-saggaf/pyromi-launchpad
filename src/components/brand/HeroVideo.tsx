import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function HeroVideo() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const timeout = window.setTimeout(() => {
      // Don't block the page if the first frame takes too long on slow networks.
      setIsLoaded(true);
    }, 4000);

    const handleLoadedMetadata = () => {
      setIsLoaded(true);
      video.play().catch(() => {
        // Autoplay can be blocked; UI still renders fine.
      });
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      window.clearTimeout(timeout);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
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
                <p className="mt-3 text-sm text-smoke/50">{hasError ? "Video unavailable" : "Loading video..."}</p>
              </div>
            </div>
          )}

          <video
            ref={videoRef}
            src="/assets/hero/Pyromi_Hero_Animation_Rev.mp4?v=6243adb"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            onLoadedData={() => setIsLoaded(true)}
            onCanPlay={() => setIsLoaded(true)}
            onError={() => {
              setHasError(true);
              setIsLoaded(true);
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

