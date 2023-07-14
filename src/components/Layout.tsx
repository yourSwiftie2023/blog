/*
 * @Author: ccj
 * @Date: 2023-07-14 09:08:43
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-14 17:49:17
 * @Description: Layout
 */
import { useOutlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  const OutLet = useOutlet()

  return (
    <div className='h-screen relative'>
      <Header />
      {OutLet}
    </div>
  )
}

export default Layout
