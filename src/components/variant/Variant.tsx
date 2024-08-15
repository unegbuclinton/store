import Image from 'next/image'
import React from 'react'

const Variant = ({
  active,
  src,
  onClick,
}: {
  active: boolean
  onClick: () => void
  src: string
}) => {
  return (
    <div
      className={`border-2 ${
        active ? 'border-primaryColor' : 'border-[#D1D1D8]'
      }  rounded-md p-2.5 w-fit cursor-pointer`}
      onClick={onClick}
    >
      <Image alt='product' src={src} width={90} height={95} />
    </div>
  )
}

export default Variant
