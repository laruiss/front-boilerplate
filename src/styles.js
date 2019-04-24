import { css } from '@emotion/core'

const colors = {
  danger: '#e74c3c',
  success: '#2ecc71',
  warning: '#f1c40f',
}

export const hidden = css`
  display: none;
`

export const flex = css`
  display: flex;
`

export const flexWrap = css`
  flex-wrap: wrap;
`

export const flexCentered = css`
  ${flex} justify-content: center;
  align-items: center;
`

export const flexColumn = css`
  ${flex} flex-direction: column;
`

export const flexItem = css`
  flex: 1 1 auto;
`
export const maxWidth = css`
  margin: 0 auto;
  max-width: 1440px;
`

export const fullHeight = css`
  height: 100%;
`

export const button = css`
  border: none;
  line-height: 2em;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 3px;
  cursor: pointer;
`

export const dangerButton = css`
  ${button}
  background-color: ${colors.danger};
  color: #fff;
`

export const successButton = css`
  ${button} color: #fff;
  background-color: ${colors.success};
`

export const warningButton = css`
  ${button} color: #fff;
  background-color: ${colors.warning};
`
