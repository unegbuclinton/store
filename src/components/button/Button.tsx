import React from 'react'

interface buttonInterface {
  children: React.ReactNode
  outline?: boolean
  buttonStyles?: string
  onClick?: () => void
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const Button: React.FC<buttonInterface> = ({
  children,
  outline,
  onClick,
  type,
  disabled,
  buttonStyles,
  ...rest
}) => {
  const filledStyle = 'border-none bg-primaryColor text-white'
  const outlineStyle = 'border border-primaryColor text-dark'
  const disabledStyle = 'border-none bg-lightgrey text-white/40'
  return (
    <button
      className={`${
        outline ? outlineStyle : disabled ? disabledStyle : filledStyle
      } px-12 py-2 font-normal outline-none rounded-lg ${buttonStyles}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
