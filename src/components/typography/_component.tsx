import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { TypographyProps, Variant } from './_types'

const textStyle: Record<Variant, ReturnType<typeof css>> = {
  d1: css`
    font-size: 56px;
    font-weight: 700;
    line-height: 76px;
    letter-spacing: -1px;
  `,
  h1: css`
    font-size: 40px;
    font-weight: 600;
    line-height: 76px;
    letter-spacing: 0px;
  `,
  h2: css`
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
    letter-spacing: 0px;
  `,
  h3: css`
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: 0px;
  `,
  h4: css`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0px;
  `,
  t1: css`
    font-size: 17px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
  `,
  t2_600: css`
    font-size: 15px;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0px;
  `,
  t2_500: css`
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0px;
  `,
  t3: css`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0px;
  `,
  b1: css`
    font-size: 15px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
  `,
  b2: css`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
  `,
  b3: css`
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
  `,
  b3_long: css`
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
  `,
  c1: css`
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
  `,
  c2: css`
    font-size: 11px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0px;
  `,
}

const TypographyStyled = styled.span<TypographyProps>`
  display: -webkit-box;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;

  padding: 0px;
  margin: 0px;

  word-break: break-word;

  width: fit-content;
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp};
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};

  ${({ variant }) => variant && textStyle[variant]}
`

export const Typography = ({
  variant,
  as = 'span',
  children,
  lineClamp = 1,
  align = 'left',
  color = '#121212',
}: TypographyProps) => (
  <TypographyStyled variant={variant} as={as} lineClamp={lineClamp} align={align} color={color}>
    {children}
  </TypographyStyled>
)
