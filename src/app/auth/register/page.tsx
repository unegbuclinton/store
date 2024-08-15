import Button from '@/components/button/Button'
import InputField from '@/components/input/InputField'
import StoreIcon from '@/components/storeIcon/StoreIcon'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className='flex-1 flex justify-center flex-col items-center overflow-auto pt-36 pb-20'>
      <span className='block mb-20'>
        <StoreIcon iconName='authLogo' />
      </span>
      <div className='flex mb-12'>
        <p className='text-xl px-4 font-normal text-dark/50'>Sign In</p>

        <p className='text-xl border-l font-bold px-4'>Sign Up</p>
      </div>

      <form>
        <div className='flex gap-8 mb-8'>
          <InputField
            onChange={() => null}
            type='text'
            placeholder='First name:'
          />
          <InputField
            onChange={() => null}
            type='text'
            placeholder='Last name:'
          />
        </div>
        <div className='mb-8'>
          <InputField onChange={() => null} type='email' placeholder='Email:' />
        </div>
        <div className='flex gap-8 mb-8'>
          <InputField
            onChange={() => null}
            type='text'
            placeholder='Verification code:'
            containerStyles='flex-1'
          />
          <Button buttonStyles='text-nowrap' type='button' onClick={() => null}>
            Get code
          </Button>
        </div>
        <div className='flex gap-8 mb-8'>
          <InputField
            onChange={() => null}
            type='number'
            placeholder='Phone:'
            containerStyles='flex-1'
          />
        </div>
        <div className='flex gap-8 mb-8'>
          <InputField
            onChange={() => null}
            type='password'
            placeholder='Password:'
            containerStyles='flex-1'
          />
        </div>
        <div className='flex gap-8 mb-2'>
          <InputField
            onChange={() => null}
            type='password'
            placeholder='Confirm Password:'
            containerStyles='flex-1'
          />
        </div>
        <p className='flex gap-2 items-center text-xs text-grey/40 mb-8'>
          <input type='checkbox' />I have read and agreed to the flykicks terms
          and privacy policy{' '}
        </p>
        <Button buttonStyles='w-full' type='submit'>
          Sign up
        </Button>
      </form>
      <p className='text-center mt-6 text-sm'>
        Already have an account?{' '}
        <Link href={'/auth/login'} className='text-primaryColor font-medium'>
          Log in
        </Link>
      </p>
    </div>
  )
}

export default Register
