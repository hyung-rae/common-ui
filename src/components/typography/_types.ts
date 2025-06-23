import { HTMLAttributes } from 'react'

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant: Variant
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: React.ReactNode | string
  lineClamp?: number
  align?: 'left' | 'center' | 'right'
  color?: string
}

export type Variant =
  | 'd1'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 't1'
  | 't2_600'
  | 't2_500'
  | 't3'
  | 'b1'
  | 'b2'
  | 'b3'
  | 'b3_long'
  | 'c1'
  | 'c2'
