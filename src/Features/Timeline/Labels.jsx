/** @jsx jsx */
import { jsx, css, } from '@emotion/core'
import { scale } from '../../appHelper'
import { colors } from '../theme'

export const Labels = () => (
  <div css={css`
  flex-basis: 10%;
  color: ${colors.grayLight};
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  padding-right: 4px;
  position: relative;
  height: calc(100vh - 64px);
  transform: translateY(-4px);
`}>
    {scale.map(place => (
      <div key={place.time} css={css`
      position:absolute;
      top: ${place.top}px;
      left: 2px;
      width: calc(100vw - 8px);
      border-top: 1px solid ${colors.grayDark}88;
      text-align: left;
      padding: 1px 0px;
    `}>{place.time % Math.floor(place.time) === 0 &&
          <span>
            {Math.floor(place.time)}
            <sup css={css`font-size: 6px;`}>00</sup>
          </span>
        }</div>
    ))}
  </div>
)