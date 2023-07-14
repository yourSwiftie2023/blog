/*
 * @Author: ccj
 * @Date: 2023-07-14 13:05:48
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-14 13:13:10
 * @Description: stylelint 配置
 */
module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
}
