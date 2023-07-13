/**
 * @Author: ccj
 * @Date: 2023-07-12 15:54:39
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-13 14:14:54
 * @Description: tailwindcss 配置
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.ejs'],
  theme: {
    extend: {
      backgroundImage: {
        'global-bg': "url('@/assets/bg.jpg')",
      },
    },
  },
  plugins: [require('daisyui')],
}
