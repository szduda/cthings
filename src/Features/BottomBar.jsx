/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export const BottomBar = props => (
  <div css={css`
  background: ${colors.black};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 4px #000;
  `} {...props} />
)