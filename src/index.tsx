/**
 * @Author: ccj
 * @Date: 2023-07-12 14:02:23
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-13 16:08:49
 */
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.less'

const root = createRoot(document.getElementById('root')!)
root.render(<App />)
