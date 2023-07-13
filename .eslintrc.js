/*
 * @Author: ccj
 * @Date: 2023-07-13 16:06:11
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-13 18:04:22
 * @Description: eslint 配置
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  // 指定的规范，其中配置文件的规则会被已启用配置的的规则继承，后配置会覆盖先配置的规则，其中 rules 的优先级最高
  extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  // 为我们提供运行环境，一个环境定义了一组预定义的全局变量
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    commonjs: true,
  },
  // 在配置文件里配置插件时, 可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'import', 'prettier'],
  // 自定义 eslint 规则
  // 其中 "off" 或 0 表示关闭这个规则检查，"warn" 或 1 - 开启这个规则检查并提示（不影响退出状态）"error" 或 2 - 开启规则检查并报错
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'global-require': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/webpack.*.js'],
      },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', 'ts', 'tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
