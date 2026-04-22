import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isVercelBuild = process.env.VERCEL === "1";

export default defineConfig({
	plugins: [
		tanstackStart(),
		isVercelBuild ? nitro({ preset: "vercel" }) : cloudflare({ viteEnvironment: { name: "ssr" } }),
		react(),
		tailwindcss(),
		tsconfigPaths(),
	],
});
