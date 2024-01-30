import { classNames } from '@/utils'
import React from 'react'

interface ButtonProps {
  color?: string
  label: string
  pills?: boolean
  className?: string
}

const defaultProps = {
  label: 'Default',
}

function Button(props: ButtonProps & typeof defaultProps) {
  const { color, label, pills, className } = props

  return (
    <button
      type='button'
      className={classNames(
        'mb-2 me-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white',
        'focus:outline-none focus:ring-4',
        color ? `bg-${color}-700 hover:bg-${color}-800` : 'bg-blue-700 hover:bg-blue-800',
        color ? `focus:ring-${color}-300` : 'focus:ring-blue-300',
        color
          ? `dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`
          : 'dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
        pills && 'rounded-full',
        className && className,
      )}
    >
      {label}
    </button>
  )
}

export default Button
