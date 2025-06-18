import * as SC from './_styles'
import { TypographyProps } from './_types'

const D1 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.D1 {...props} style={{ ...sx }}>
      {children}
    </SC.D1>
  )
}

const H1 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.H1 {...props} style={{ ...sx }}>
      {children}
    </SC.H1>
  )
}

const H2 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.H2 {...props} style={{ ...sx }}>
      {children}
    </SC.H2>
  )
}

const H3 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.H3 {...props} style={{ ...sx }}>
      {children}
    </SC.H3>
  )
}

const H4 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.H4 {...props} style={{ ...sx }}>
      {children}
    </SC.H4>
  )
}

const T1 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.T1 {...props} style={{ ...sx }}>
      {children}
    </SC.T1>
  )
}

const T2_600 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.T2_600 {...props} style={{ ...sx }}>
      {children}
    </SC.T2_600>
  )
}

const T2_500 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.T2_500 {...props} style={{ ...sx }}>
      {children}
    </SC.T2_500>
  )
}

const T3 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.T3 {...props} style={{ ...sx }}>
      {children}
    </SC.T3>
  )
}

const B1 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.B1 {...props} style={{ ...sx }}>
      {children}
    </SC.B1>
  )
}

const B2 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.B2 {...props} style={{ ...sx }}>
      {children}
    </SC.B2>
  )
}

const B3 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.B3 {...props} style={{ ...sx }}>
      {children}
    </SC.B3>
  )
}

const B3_Long = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.B3_Long {...props} style={{ ...sx }}>
      {children}
    </SC.B3_Long>
  )
}

const C1 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.C1 {...props} style={{ ...sx }}>
      {children}
    </SC.C1>
  )
}

const C2 = ({ children, sx, ...props }: TypographyProps) => {
  return (
    <SC.C2 {...props} style={{ ...sx }}>
      {children}
    </SC.C2>
  )
}

export const Typography = {
  D1,
  H1,
  H2,
  H3,
  H4,
  T1,
  T2_600,
  T2_500,
  T3,
  B1,
  B2,
  B3,
  B3_Long,
  C1,
  C2,
}
