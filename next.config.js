/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: { plugins: { removeViewBox: false } },
          },
        },
        "url-loader",
      ],
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        SOCKET_HOST: JSON.stringify(process.env.SOCKET_HOST),
        API_DOMAIN: JSON.stringify(process.env.API_DOMAIN)
      }),
      new webpack.EnvironmentPlugin(["NODE_ENV"]),
    );

    return config;
  },

  env: {
    SOCKET_HOST: process.env.SOCKET_HOST,
    API_DOMAIN: process.env.API_DOMAIN,
  },
};
