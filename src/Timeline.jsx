/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from './theme'

const Wrapper = props => (
  <div css={css`
  padding: 18px 2px 64px;
  display: flex;
  background: ${colors.gray};
  overflow: scroll;

  h2 {
    font-size: 18px;
    line-height: 24px;
    margin: 0 0 8px 0;
    font-weight: 500;
  }
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 300;
    margin: 0 0 8px 0;
  }
  `} {...props} />
)

const Box = ({ color = colors.yellow, thing = {} }) => {
  const { top } = scale.find(place => place.time === thing.start)
  const { top: end } = scale.find(place => place.time === thing.end) || { top: top + 22 }
  return (<div css={css`
    background: ${color}; 
    color: ${color === colors.yellow ? colors.black : colors.white};
    width: 100%;
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

    :hover {
      opacity: 0.8;
    }

    > {
      transition: transform 100ms ease-out;
      }

    *:active, :active {
      transform: scaleX(0.97);
    }
  `}>
    {thing.name}
  </div>)
}

const Column = ({ items, color, ...rest }) => (
  <div css={css`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    position: relative;
    height: calc(100vh - 64px);
    margin: 0 2px 0 2px;
  `} {...rest}>
    {items.map((thing, key) => <Box {...{ thing, key, color }} />)}
  </div>
)

const Labels = () => <div css={css`
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

const things = {
  activities: [
    { start: 8, name: 'Shower' },
    { start: 8.5, name: 'Breakfast' },
    { start: 9, end: 17, name: 'Work' }
  ],
  feelings: [
    { start: 12, end: 16, name: 'Motivated' },
    { start: 11, name: 'Hungryyyyy :(' }
  ],
  thoughts: [
    { start: 8, name: 'Nice wake up!' },
    { start: 14, name: 'I should buy a boat' },
    { start: 17.5, name: 'Party or not to party?' }
  ],
}

const scale = [...Array(24)].map((item, index) => ({ time: index * 0.5 + 8, top: 30 * index }))

export const Timeline = () => (
  <Wrapper>
    <Labels />
    <Column items={things.activities} />
    <Column items={things.feelings} color={colors.orange} />
    <Column items={things.thoughts} color={colors.green} />
  </Wrapper>
)