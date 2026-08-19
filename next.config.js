/** @type {import('next').NextConfig} */
const nextConfig = {
  // Dev-only: allow the app to be opened from any private LAN address (phone,
  // another laptop) instead of a hard-coded list of machine IPs.
  allowedDevOrigins: [
    "localhost",
    "127.0.0.1",
    "*.local",
    "10.*.*.*",
    "192.168.*.*",
    // 172.16.0.0/12 — wildcards only match a whole dot segment, so list each.
    ...Array.from({ length: 16 }, (_, i) => `172.${16 + i}.*.*`),
    ...(process.env.NEXT_DEV_ORIGIN ? [process.env.NEXT_DEV_ORIGIN] : []),
  ],
};

module.exports = nextConfig;
