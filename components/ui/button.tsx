import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import {AnimatePresence, motion} from 'motion/react'
import * as React from 'react'

import {cn} from '@/lib/utils'

import Loader from './loader'

const buttonVariants = cva(
  'cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[40px] text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-white shadow-drop-2 hover:bg-red',
      },
      size: {
        default: 'h-14 p-4',
        sm: 'h-13 p-3',
        lg: 'h-16 p-8',
        icon: 'h-14 w-14',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, asChild = false, loading = false, children, ...props}, ref) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp className={cn(buttonVariants({variant, size, className}), 'transition-all duration-300')} disabled={loading || props.disabled} ref={ref} {...props}>
      <div className='relative flex items-center justify-center gap-2 transition-all duration-300'>
        <AnimatePresence initial={false}>
          {loading && (
            <motion.div
              key='loader'
              initial={{opacity: 0, scale: 0.6, width: 0}}
              animate={{opacity: 1, scale: 1, width: 20}}
              exit={{opacity: 0, scale: 0.6, width: 0}}
              transition={{duration: 0.1}}
              className='flex-center'
            >
              <Loader />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.span key='text' animate={{opacity: loading ? 0.6 : 1, x: loading ? 2 : 0}} transition={{duration: 0.25}}>
          {children}
        </motion.span>
      </div>
    </Comp>
  )
})
Button.displayName = 'Button'

export {Button, buttonVariants}
