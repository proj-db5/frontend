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
        API_DOMAIN: JSON.stringify(process.env.API_DOMAIN)
      }),
      new webpack.EnvironmentPlugin(["NODE_ENV"]),
    );

    return config;
  },

  env: {
    socketHost: process.env.SOCKET_HOST || 'http://127.0.0.1:4000',
    API_DOMAIN: process.env.API_DOMAIN,
  },
};
