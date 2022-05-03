/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");

// add this if you need LESS
// also install less and less-loader
// const withLess = require("next-with-less");

const plugins = [
  // add this if you need LESS
  // [withLess, {
  //   lessLoaderOptions: {
  //     /* ... */
  //   },
  // }],
];

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};

module.exports = withPlugins(plugins, nextConfig);
