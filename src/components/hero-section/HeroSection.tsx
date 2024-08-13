import Image from 'next/image'
import React from 'react'
import Button from '../button/Button'
import StoreIcon from '../storeIcon/StoreIcon'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className='flex items-center'>
      <div>
        <h2 className='relative text-[72px] max-w-[624px] font-bold leading-[79px] text-[#424242] mb-6'>
          <span className='absolute -top-2.5 -left-4'>
            <StoreIcon iconName='dot1' />
          </span>
          <p className='z-10 relative'>
            Level Up Your Style With Our Exclusive Kicks
          </p>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          fuga, neque porro mollitia in velit tempora quasi. Vitae distinctio
          qui nam natus, blanditiis, impedit voluptates accusantium repudiandae
          itaque magni ut accusamus. Ad sint, soluta, ipsum perferendis illum
          placeat officiis incidunt similique inventore quisquam consequuntur
          tenetur repellat nobis atque rem. Facere!
        </p>
        <div className='flex gap-6 mt-14'>
          <Link href={'/dashboard'}>
            <Button type='button' onClick={() => null}>
              Shop Now
            </Button>
          </Link>
          <Button outline type='button' onClick={() => null}>
            Explore Deals
          </Button>
        </div>
      </div>
      <Image alt='hero-img' src={'/hero-img.png'} width={720} height={560} />
    </div>
  )
}

export default HeroSection
