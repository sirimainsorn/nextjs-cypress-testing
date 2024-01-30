import { classNames } from '@/utils'
import React from 'react'

interface ButtonProps {
  children: any
  color?: string
  pills?: boolean
  className?: string
  size?: string
  disabled: boolean
}

const buttonSize: any = {
  xs: 'px-3 py-2 text-xs',
  sm: 'px-3 py-2 text-sm',
  default: 'px-5 py-2.5 text-sm',
  md: 'px-5 py-3 text-base',
  lg: 'px-6 py-3.5 text-base',
}

function Button(props: ButtonProps) {
  const { children, color, pills, className, size, ...rest } = props

  return (
    <button
      type='button'
      className={classNames(
        'mb-2 me-2 font-medium text-white',
        'focus:outline-none focus:ring-4',
        color ? `bg-${color}-700 hover:bg-${color}-800` : 'bg-blue-700 hover:bg-blue-800',
        color ? `focus:ring-${color}-300` : 'focus:ring-blue-300',
        color
          ? `dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`
          : 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        pills ? 'rounded-full' : 'rounded-lg',
        className && className,
        size ? buttonSize[size] : buttonSize['default'],
        props.disabled && 'cursor-not-allowed',
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
