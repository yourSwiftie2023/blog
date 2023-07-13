/**
 * @Author: ccj
 * @Date: 2023-07-13 13:13:52
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-13 13:33:21
 * @Description: paths
 */
const fs = require('fs')
const path = require('path')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

module.exports = {
  resolveApp,
  appHtml: resolveApp('public/index.ejs'),
  appFavicon: resolveApp('public/favicon.ico'),
  appSrc: resolveApp('src'),
  appDist: resolveApp('dist'),
}
