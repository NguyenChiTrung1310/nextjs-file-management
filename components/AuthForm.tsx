/* eslint-disable quotes */
'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import Link from 'next/link'
import React from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {formSchema} from '@/modules/auth/auth.resolver'
import {ROUTES} from '@/routes'

import {Button} from './ui/button'

interface Props {
  type: 'sign-in' | 'sign-up'
}

const AuthForm: React.FC<Props> = ({type}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log('values', values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
        <h1 className='text-light-100 text-center md:text-left'>{type === 'sign-in' ? 'Sign In' : 'Sign Up'}</h1>

        {type === 'sign-up' && (
          <>
            <FormField
              control={form.control}
              name='fullName'
              render={({field}) => (
                <FormItem className='shadow-drop-1 gap-1 rounded-xl bg-white p-4 pb-2 font-light'>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your full name' variant='secondary' {...field} className='h-6' />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({field}) => (
                <FormItem className='shadow-drop-1 gap-1 rounded-xl bg-white p-4 pb-2 font-light'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your email' variant='secondary' {...field} className='h-6' />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <Button type='submit' className='w-full'>
          {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
        </Button>

        <div className='flex-center gap-2 text-sm'>
          <p className='text-light-100'>{type === 'sign-in' ? "Don't have an account?" : 'Already have an account?'}</p>
          <Link className='text-brand hover-underline font-medium' href={type === 'sign-in' ? ROUTES.SIGN_UP : ROUTES.SIGN_IN}>
            {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
          </Link>
        </div>
      </form>
    </Form>
  )
}

export default AuthForm
