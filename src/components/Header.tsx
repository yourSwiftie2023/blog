/*
 * @Author: ccj
 * @Date: 2023-07-14 10:27:07
 * @LastEditors: ccj
 * @LastEditTime: 2023-07-17 16:27:57
 * @Description: Header
 */
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='p-6 flex'>
      <div className='flex-1 text-right'>
        <Link to='/aaa'>
          <div className='btn btn-ghost normal-case text-lg'>随写</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
