/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: false,
  },
  // eloadOnPrerender: process.env.NODE_ENV === "development",
};

export default nextConfig;
