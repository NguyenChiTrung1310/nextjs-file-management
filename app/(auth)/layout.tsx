'use client'
import {motion} from 'motion/react'
import Image from 'next/image'
import React, {PropsWithChildren} from 'react'

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className='container min-h-screen p-4'>
      <div className='shadow-1 flex h-full w-full rounded-3xl'>
        <section className='bg-brand lg:flex-between hidden w-[580px] flex-col rounded-s-3xl p-10'>
          <div className='flex items-center gap-2 self-start'>
            <Image src='/images/Logo.png' width={82} height={82} alt='Logo' className='h-auto' />
            <div className='text-5xl font-medium text-white'>StoreDocs</div>
          </div>

          <div className='mt-4 space-y-5 text-white'>
            <h1 className='text-[46px] leading-[56px]'>Manage your files the best way</h1>
            <p className='body-1'>Awesome, we&apos;ve created the perfect place for you to store all your documents.</p>
          </div>

          <motion.div whileHover={{scale: 1.05, rotateX: 20, rotateY: 20}} className='relative mt-auto aspect-square w-full max-w-[342px] overflow-hidden'>
            <Image src='/images/Illustration.png' fill className='absolute inset-0 object-contain' alt='Illustration' />
          </motion.div>
        </section>

        <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0'>
          <div className='mb-16 lg:hidden'>
            <Image src='/images/Logo.svg' width={224} height={82} className='h-auto' alt='Illustration' />
          </div>
          {children}
        </section>
      </div>
    </div>
  )
}

export default Layout
