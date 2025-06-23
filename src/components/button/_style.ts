import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'

const buttonAnimation = css`
  transition: transform 0.1s ease;
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    transition: none;
    transform: none;
  }

  cursor: pointer;
`

export const Button = styled.button`
  ${buttonAnimation}
  border: 1px solid black;
`
