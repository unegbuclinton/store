import Button from '@/components/button/Button'
import InputField from '@/components/input/InputField'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='flex justify-center mb-12'>
        <p className='text-xl px-4 font-bold'>Sign In</p>

        <p className='text-xl font-normal text-dark/50 border-l px-4'>
          Sign Up
        </p>
      </div>

      <form className='w-full max-w-[590px]'>
        <div className='mb-8 w-full'>
          <InputField
            onChange={() => null}
            type='email'
            inputStyles='mb-24'
            placeholder='Email/Phone:'
          />
        </div>
        <div className='mb-8 w-full'>
          <InputField
            onChange={() => null}
            type='password'
            placeholder='Password:'
          />
        </div>

        <Button buttonStyles='w-full' type='submit'>
          Sign In
        </Button>
      </form>
      <p className='text-center mt-6 text-sm'>
        Forgot Password?{' '}
        <Link href={'#'} className='text-primaryColor font-medium'>
          Recover
        </Link>
      </p>
      <p className='text-center mt-4 text-sm'>
        Don&apos;t have an account?{' '}
        <Link href={'/auth/register'} className='text-primaryColor font-medium'>
          Register
        </Link>
      </p>
    </div>
  )
}

export default Login
