import React from 'react'
import StoreIcon from '../storeIcon/StoreIcon'
import InputField from '../input/InputField'
import Button from '../button/Button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <Link href={'/'}>
        <StoreIcon iconName='logo' />
      </Link>
      <div className='max-w-[700px] flex gap-2 w-full'>
        <div className='flex-1'>
          <InputField
            icon='searchIcon'
            type='search'
            onChange={() => null}
            placeholder='Search'
          />
        </div>
        <Button type='button' onClick={() => null}>
          Search
        </Button>
      </div>

      <div className='font-medium text-sm flex gap-2 items-center'>
        <p className='cursor-pointer'>All categories</p>
        <p className='flex items-center gap-1.5 cursor-pointer'>
          <span>
            <StoreIcon iconName='profileIcon' />
          </span>
          Account
          <StoreIcon iconName='arrowDown' />
        </p>
        <Link
          href={'/cart'}
          title='Cart'
          className='flex items-center gap-1.5 cursor-pointer'
        >
          <span>
            <StoreIcon iconName='cartIcon' />
          </span>
          Cart
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
