import { CSSProperties } from 'react'
import { useTime } from '@/hooks'

interface CSSPropertiesWithVars extends CSSProperties {
  '--value': number
}

function Header() {
  const [hours, minutes, seconds] = useTime()

  return (
    <div className='grid grid-flow-col gap-5 text-center auto-cols-max'>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': hours } as CSSPropertiesWithVars} />
        </span>
        hours
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': minutes } as CSSPropertiesWithVars} />
        </span>
        min
      </div>
      <div className='flex flex-col p-2 bg-neutral rounded-box text-neutral-content'>
        <span className='countdown font-mono text-5xl'>
          <span style={{ '--value': seconds } as CSSPropertiesWithVars} />
        </span>
        sec
      </div>
    </div>
  )
}

export default Header
