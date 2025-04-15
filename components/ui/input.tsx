import * as React from 'react'

import {cn} from '@/lib/utils'

interface Props extends React.ComponentProps<'input'> {
  variant?: 'primary' | 'secondary'
}

function Input({className, type, variant = 'primary', ...props}: Props) {
  return (
    <div className='group relative w-full'>
      <input
        type={type}
        data-slot='input'
        className={cn(
          'text-dark-200 flex h-9 w-full min-w-0 rounded-md bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm',
          'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'placeholder:text-light-200 placeholder:text-sm placeholder:leading-5 placeholder:font-semibold',
          'selection:bg-primary selection:text-primary-foreground',
          'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
          'file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium',
          variant === 'primary' && 'border-input focus-visible:border-ring focus-visible:ring-ring/50 border shadow-xs focus-visible:ring-[3px]',
          variant === 'secondary' && 'border-none p-0',

          className
        )}
        {...props}
      />
      <span className='bg-dark-200 absolute bottom-0 left-1/2 h-[2px] w-0 origin-center -translate-x-1/2 transform transition-all duration-300 group-focus-within:w-full' />
    </div>
  )
}

export {Input}
