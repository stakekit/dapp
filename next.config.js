import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin"

const withVanillaExtract = createVanillaExtractPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.optimization.splitChunks = false
    config.module.rules.push({
      resourceQuery: /raw/,
      type: "asset/source",
    })

    return config
  },
}

export default withVanillaExtract(nextConfig)
