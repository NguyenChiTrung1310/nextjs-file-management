'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import React from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from '@/components/ui/input'
import {formSchema} from '@/modules/auth/auth.resolver'

import {Button} from './ui/button'

interface Props {
  type: 'sign-in' | 'sign-up'
}

const AuthForm: React.FC<Props> = ({type}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log('values', values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8'>
        <h1 className='text-light-100 text-center md:text-left'>{type === 'sign-in' ? 'Sign In' : 'Sign Up'}</h1>

        {type === 'sign-up' && (
          <FormField
            control={form.control}
            name='fullName'
            render={({field}) => (
              <FormItem className='shadow-drop-1 gap-2 rounded-xl bg-white p-4 pb-2 font-light'>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your full name' variant='secondary' {...field} className='h-6' />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type='submit' className='w-full'>
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default AuthForm
