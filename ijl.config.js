const pkg = require('./package');

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  navigations: {
    'sirius-x.main': '/sirius-x',
    'sirius-x.schedule': '/sirius-x/schedule',
    'sirius-x.attendance': '/sirius-x/attendance',
    'sirius-x.statistics': '/sirius-x/statistics',
  },
  features: {
    'sirius-x': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: 'value',
  },
};
