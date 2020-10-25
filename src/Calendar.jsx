/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from './theme'

export const Calendar = ({ selectedDate }) => {
  return (
    <div css={css`margin: 32px 0 32px;`}>
      <h2 css={css`
        font-size: 18px;
        line-height: 24px;
        margin: 0 0 8px 0;
        font-weight: 400;
        text-align: center;
        color: ${colors.white};
      `}>{selectedDate}</h2>
      <div css={css`
      color: ${colors.grayLight};
      background: ${colors.grayDark};
      width: 296px;
      height: 200px;
      margin: 16px 0 0;
    `}>
      </div>
    </div>
  )
}