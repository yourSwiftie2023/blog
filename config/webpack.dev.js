/**
 * @Author: ccj
 * @Date: 2023-07-12 16:26:34
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-13 16:50:03
 * @Description: webpack开发环境配置
 */
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const paths = require('./paths')
const common = require('./webpack.common')

let config = {}

switch (process.env.NODE_ENV) {
  case 'analyze':
    config = Object.assign(config, {
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerPort: '7900',
        }),
      ],
    })
    break
  case 'development':
    config = Object.assign(config, {
      devServer: {
        port: 5000,
        static: paths.appDist,
        hot: true,
      },
    })
    break
  default:
    break
}

module.exports = merge(common, {
  ...config,
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
})
