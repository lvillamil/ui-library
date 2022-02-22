const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  // Add any Storybook addons you want here: https://storybook.js.org/addons/
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
  ],
  webpackFinal: async (config) => {
    config.resolve.modules = [
      path.resolve(__dirname, '..', 'src'),
      'node_modules',
    ];

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: ['./src/styles'],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false,
              },
            },
          },
        },
      ],
    });

    config.resolve.extensions.push('.js', '.jsx');

    return config;
  },
};
