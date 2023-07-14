/*
 * @Author: ccj
 * @Date: 2023-07-14 09:08:43
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-14 11:23:57
 * @Description: Layout
 */
import { useOutlet } from 'react-router-dom'
import Header from './Header'

function Layout() {
  const OutLet = useOutlet()

  return (
    <div className='hero min-h-screen bg-global-bg place-items-start'>
      <div className='hero-overlay bg-opacity-60' />
      <div className='text-neutral-content p-6'>
        <Header />
        {OutLet}
      </div>
    </div>
  )
}

export default Layout
