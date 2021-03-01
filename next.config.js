const withYAML = require("next-yaml");

module.exports = withYAML({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
