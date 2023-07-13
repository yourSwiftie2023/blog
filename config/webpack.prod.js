/**
 * @Author: ccj
 * @Date: 2023-07-12 16:26:34
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-13 13:25:51
 * @Description: webpack生产环境配置
 */
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          // node_modules里的代码
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10, // 优先级
          enforce: true,
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin({
        parallel: 4,
      }),
      new TerserPlugin({
        extractComments: false,
        parallel: 4,
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      }),
    ],
  },
})
