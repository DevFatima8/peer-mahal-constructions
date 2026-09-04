import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /**
     * Online images (Pexels CDN + common free image hosts).
     * Agar aap koi aur hosting istemal karein to uska hostname yahan add kar dein.
     */
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.imgur.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "**.peermahalconstruction.com" },
    ],
    /**
     * Local images (agar aap apni file public/images mein rakhein).
     * Cache-busting query (?v=…) allow karne ke liye `search` omit kiya gaya hai.
     */
    localPatterns: [
      { pathname: "/images/**" },
      { pathname: "/img/**" },
      { pathname: "/photos/**" },
      { pathname: "/uploads/**" },
      { pathname: "/*" },
    ],
    formats: ["image/webp"],
    minimumCacheTTL: 3600,
    /** Logo SVG format mein bhi lagaya ja sake */
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
