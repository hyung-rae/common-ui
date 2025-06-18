type TextAlign = 'left' | 'center' | 'right'

interface TextStyleProps {
  width?: string
  lineClamp?: number
  align?: TextAlign
  color?: string
  fontWeight?: number
}

interface TypographyProps extends TextStyleProps {
  sx?: { [key: string]: string }
  children: string
}

export type { TextStyleProps, TypographyProps }
