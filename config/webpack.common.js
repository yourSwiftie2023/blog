/**
 * @Author: ccj
 * @Date: 2023-07-12 16:26:34
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-13 14:44:44
 * @Description: webpack公共配置
 */
const chalk = require('chalk')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require('./paths')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  cache: {
    type: 'filesystem',
  },
  entry: paths.resolveApp('src/index.tsx'),
  output: {
    path: paths.appDist,
    filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)$/,
        use: ['babel-loader', 'ts-loader'],
        include: paths.appSrc,
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
        include: paths.appSrc,
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [paths.appSrc],
        type: 'asset/resource',
        parser: {
          dataUrlCondition: {
            maxSize: 6 * 1024,
          },
        },
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/i,
        include: [paths.appSrc],
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': paths.appSrc,
    },
  },
  plugins: [
    new ProgressBarPlugin({
      format: `  ${chalk.yellow.bold(':msg')} ${chalk.white.bold.bgRed.bold(
        '[:bar]'
      )} ${chalk.green.bold(':percent')} (:elapsed s)`,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'yourSwiftie-个人博客',
      template: paths.appHtml,
      favicon: paths.appFavicon,
      inject: 'body',
      meta: {
        keywords: 'yourSwiftie,blog',
        description: "yourSwiftie's blog",
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
}
