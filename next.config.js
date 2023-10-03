const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.optimization.splitChunks = false
    config.externals.push("pino-pretty", "lokijs", "encoding")
    config.module.rules.push({
      resourceQuery: /raw/,
      type: "asset/source",
    })

    return config
  },
}

module.exports = withVanillaExtract(nextConfig)
