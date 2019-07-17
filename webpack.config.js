const path = require('path');

module.exports = {
    entry: 'semver',
    devtool: 'inline-source-map',
    mode: 'none',
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'semver-umd.js',
        libraryTarget: 'umd'
    }
};