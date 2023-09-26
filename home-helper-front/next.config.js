const withInterceptStdout = require("next-intercept-stdout");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    swcMinify: false,
  },
  (text) => (text.includes("Duplicate atom key") ? "" : text),
);

module.exports = nextConfig;
