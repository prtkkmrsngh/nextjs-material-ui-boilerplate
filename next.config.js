/**
 * NextJS Material-UI boilerplate
 * @flow
 */

/* eslint-disable import/no-commonjs */
/* eslint-disable flowtype/require-return-type */
const Dotenv = require('dotenv-webpack');
const withCSS = require('@zeit/next-css');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { ANALYZE, NODE_ENV } = process.env;

module.exports = withCSS({
  cssModules: true,
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new Dotenv({
        path: NODE_ENV === 'development' ? './.env' : './.env.production',
      }),
    );

    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        }),
      );
    }
    return config;
  },
  // assetPrefix:
  //   NODE_ENV === 'development' ? '/' : 'https://d2s2wl3wzgxrzs.cloudfront.net/',
});
