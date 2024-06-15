import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
// stales time for prefetching server side data
const nextConfig = {
  output: "standalone",
  experimental: {
    staleTimes: {
      dynamic: 5,
      static: 300,
    },
  },
};

export default withNextIntl(nextConfig);
