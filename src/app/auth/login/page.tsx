import Button from '@/components/button/Button'
import Carousel from '@/components/carousel/Carousel'
import InputField from '@/components/input/InputField'
import StoreIcon from '@/components/storeIcon/StoreIcon'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex-1 flex justify-center flex-col items-center overflow-auto pt-36 pb-20'>
      <span className='block mb-20'>
        <StoreIcon iconName='authLogo' />
      </span>
      <div className='flex mb-12'>
        <Link href={'/auth/login'} className='text-3xl px-4 font-bold'>
          Sign In
        </Link>

        <Link
          href={'/auth/register'}
          className='text-3xl font-normal text-dark/50 border-l px-4'
        >
          Sign Up
        </Link>
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
      <p className='text-center mt-6'>
        Forgot Password?{' '}
        <Link href={'#'} className='text-primaryColor font-medium'>
          Recover
        </Link>
      </p>
      <p className='text-center mt-4'>
        Don&apos;t have an account?{' '}
        <Link href={'/auth/register'} className='text-primaryColor font-medium'>
          Register
        </Link>
      </p>
    </div>
  )
}

export default Login
