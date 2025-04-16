import React from 'react'

import {cn} from '@/lib/utils'

interface Props {
  size?: 'lg' | 'md' | 'sm'
}

const sizeClasses = {
  lg: 'h-8 w-8',
  md: 'h-5 w-5',
  sm: 'h-4 w-4',
}
const dotClasses = {
  lg: 'h-2 w-2',
  md: 'h-1.5 w-1.5',
  sm: 'h-1 w-1',
}

const Loader: React.FC<Props> = ({size = 'md'}) => {
  const sizeClass = sizeClasses[size]
  const dotClass = dotClasses[size]

  return (
    <div className={cn('relative rotate-45', sizeClass)}>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className='animate-orbit absolute inset-0'
          style={{
            animationDelay: `${index * 0.1}s`,
            opacity: 1 - index * 0.2,
          }}
        >
          <div className={cn('absolute top-0 left-0 rounded-full bg-white shadow-[0_0_20px_2px_#ffffff]', dotClass)} />
        </div>
      ))}
    </div>
  )
}

export default Loader
