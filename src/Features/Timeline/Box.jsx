/** @jsx jsx */
import { jsx, css, } from '@emotion/core'
import { colors } from '../theme'

const layerInfo = color => [
  { left: 0, right: 0, bg: colors.darken(color) },
  { left: 4, right: 4, bg: colors.lighten(color) },
  { left: -2, right: 8, bg: color },
]

const Wrapper = ({ color, top, end, layer, ...rest }) => {
  const { left, right, bg } = layerInfo(color)[layer]
  return (
    <div css={css`
  background: ${bg}; 
  color: ${color === colors.yellow ? colors.black : colors.white};
  width: calc(100% - ${left + right}px);
  left: ${left}px;
  padding: 4px 6px;
  margin: 0 0 4px 0;
  border-radius: 4px;
  font-size: 12px;
  line-height: 14px;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: ${top}px;
  height: ${Math.max(22, end - top - 8)}px;
  transition: transform 100ms ease-out, opacity 100ms ease-out;
  box-shadow: 0 2px 4px 0 ${colors.grayDark}44;

  :hover {
    text-decoration: underline;
  }

  > {
    transition: transform 100ms ease-out;
    }

  *:active, :active {
    transform: scaleX(0.97);
  }
`} {...rest} />
  )
}

export const Box = ({ scale, color = colors.yellow, thing = { start: 0 } }) => {
  const { layer, title } = thing
  const { top } = scale.find(place => place.time === thing.start) || { top: 0 }
  const { top: end } = scale.find(place => place.time === thing.end) || { top: top + 22 }
  return (
    <Wrapper {...{ color, layer, top, end }}>
      <span>{title}</span>
    </Wrapper>
  )
}