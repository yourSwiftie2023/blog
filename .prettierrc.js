/*
 * @Author: ccj
 * @Date: 2023-07-13 16:10:28
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-13 17:18:54
 * @Description: prettier 配置
 */
module.exports = {
  trailingComma: 'es5',
  printWidth: 100,
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  jsxSingleQuote: true,
  endOfLine: 'lf',
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
}
