import React from 'react'
import StoreIcon from '../storeIcon/StoreIcon'

const Footer = () => {
  return (
    <footer className='flex justify-between py-16 px-24 bg-offWhite/75'>
      <div className='max-w-[344px]'>
        <span className='block mb-4'>
          <StoreIcon iconName='foterLogo' />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          expedita nobis veritatis consequatur iste in, distinctio quos
          excepturi esse ducimus.
        </p>
        <div className='flex gap-4 mt-6'>
          {['instagramIcon', 'twitterIcon', 'youtubeIcon'].map(
            (item, index) => (
              <span key={index} className='cursor-pointer'>
                <StoreIcon iconName={item} />
              </span>
            )
          )}
        </div>
      </div>

      <div className='flex gap-6'>
        <div>
          <h3 className='text-base font-semibold mb-6'>PRODUCT</h3>
          <ul>
            {['Men Shoes', 'Women Shoes', 'Kiddes', 'Unisex'].map(
              (item, index) => (
                <li
                  className='text-sm font-normal mb-4 list-none cursor-pointer'
                  key={index}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h3 className='text-base font-semibold mb-6'>ACCOUNT</h3>
          <ul>
            {['Profile', 'Orders', 'Cart', 'Wishlist'].map((item, index) => (
              <li
                className='text-sm font-normal mb-4 list-none cursor-pointer'
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-base font-semibold mb-6'>COMPANY</h3>
          <ul>
            {['About Us', 'Contact Us', 'Career'].map((item, index) => (
              <li
                className='text-sm font-normal mb-4 list-none cursor-pointer'
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className='text-base font-semibold mb-6'>SUPPORT</h3>
          <ul>
            {['Policy', 'Help'].map((item, index) => (
              <li
                className='text-sm font-normal mb-4 list-none cursor-pointer'
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
