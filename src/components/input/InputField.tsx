import React from 'react'
import StoreIcon from '../storeIcon/StoreIcon'

interface inputProp {
  type: string
  placeholder?: string
  onChange: () => void
  value?: string
  id?: string
  inputStyles?: string
  containerStyles?: string
  icon?: string
}
const InputField: React.FC<inputProp> = ({
  type,
  placeholder,
  onChange,
  value,
  id,
  inputStyles,
  containerStyles,
  icon,
  ...rest
}) => {
  return (
    <div className={`relative h-10 ${containerStyles}`}>
      {icon && (
        <span className='absolute top-1/2 left-2 transform -translate-y-1/2'>
          <StoreIcon iconName={icon} />
        </span>
      )}
      <input
        type={type}
        className={`h-full w-full rounded-lg border outline-none border-grey/50 pr-4 ${
          icon ? 'pl-10' : 'pl-4'
        } ${inputStyles}`}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}

export default InputField
