import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TextStyleProps } from './_types'

export const CommonStyle = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  padding: 0px;
  margin: 0px;

  word-break: break-word;
`

const getWidth = (props: TextStyleProps) => props.width || 'fit-content'
const getLineClamp = (props: TextStyleProps) => props.lineClamp || 1
const getColor = (props: TextStyleProps) => props.color || '#121212'
const getAlign = (props: TextStyleProps) => props.align || 'left'
const getWeight = (props: TextStyleProps, init: number) => props.fontWeight || init

export const D1 = styled.h1<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 56px;
  font-weight: ${(props) => getWeight(props, 700)};
  line-height: 76px;
  letter-spacing: -1px;
`

export const H1 = styled.h1<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 40px;
  font-weight: ${(props) => getWeight(props, 600)};
  line-height: 76px;
  letter-spacing: 0px;
`

export const H2 = styled.h2<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 32px;
  font-weight: ${(props) => getWeight(props, 600)};
  line-height: 48px;
  letter-spacing: 0px;
`

export const H3 = styled.h3<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 24px;
  font-weight: ${(props) => getWeight(props, 600)};
  line-height: 32px;
  letter-spacing: 0px;
`

export const H4 = styled.h4<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 20px;
  font-weight: ${(props) => getWeight(props, 600)};
  line-height: 28px;
  letter-spacing: 0px;
`

// Title 스타일
export const T1 = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 17px;
  font-weight: ${(props) => getWeight(props, 600)};
  line-height: 24px;
  letter-spacing: 0px;
`

export const T2_600 = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 15px;
  font-weight: ${(props) => getWeight(props, 600)};
  line-height: 22px;
  letter-spacing: 0px;
`

export const T2_500 = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 15px;
  font-weight: ${(props) => getWeight(props, 500)};
  line-height: 22px;
  letter-spacing: 0px;
`

export const T3 = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 14px;
  font-weight: ${(props) => getWeight(props, 500)};
  line-height: 20px;
  letter-spacing: 0px;
`

// Body 스타일
export const B1 = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 15px;
  font-weight: ${(props) => getWeight(props, 400)};
  line-height: 22px;
  letter-spacing: 0px;
`

export const B2 = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 14px;
  font-weight: ${(props) => getWeight(props, 400)};
  line-height: 20px;
  letter-spacing: 0px;
`

export const B3 = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 13px;
  font-weight: ${(props) => getWeight(props, 400)};
  line-height: 18px;
  letter-spacing: 0px;
`

export const B3_Long = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 13px;
  font-weight: ${(props) => getWeight(props, 400)};
  line-height: 20px;
  letter-spacing: 0px;
`

// Caption 스타일
export const C1 = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 12px;
  font-weight: ${(props) => getWeight(props, 400)};
  line-height: 16px;
  letter-spacing: 0px;
`

export const C2 = styled.p<TextStyleProps>`
  ${CommonStyle}

  width: ${(props) => getWidth(props)};
  -webkit-line-clamp: ${(props) => getLineClamp(props)};
  color: ${(props) => getColor(props)};
  text-align: ${(props) => getAlign(props)};

  font-size: 11px;
  font-weight: ${(props) => getWeight(props, 500)};
  line-height: 14px;
  letter-spacing: 0px;
`
