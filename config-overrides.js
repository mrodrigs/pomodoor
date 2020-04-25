const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
    style: true,
}),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#b71c1c' },
  }),
);
