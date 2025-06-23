import React from 'react'
import * as SC from './_style'

type ButtonVariant = 'filled' | 'outlined' | 'text'
type ButtonTheme = 'primary' | 'secondary' | 'gray' | 'danger'
type ButtonSize = 'xl' | 'lg' | 'md' | 'sm'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  theme?: ButtonTheme
  size?: ButtonSize
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
  loading?: boolean
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <SC.Button {...props}>{children}</SC.Button>
}

export default Button
