/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors } from './theme'

const Wrapper = props => (
  <div css={css`
  padding: 24px 2px 52px;
  display: flex;
  background: ${colors.gray};

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

const Box = ({ color = colors.yellow, thing = {} }) =>
  <div css={css`
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
  top: ${14 * 4 * (thing.start - 8)}px;
  height: ${22 + 4 * 14 * ((thing.end || thing.start) - thing.start)}px;
  `}>
    {thing.name}
  </div>

const Column = ({ items, color, ...rest }) => (
  <div css={css`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    position: relative;
    height: calc(100vh - 84px);
    margin: 0 2px 0 2px;
  `} {...rest}>
    {items.map((thing, key) => <Box {...{ thing, key, color }} />)}
  </div>
)

const Labels = () => <div css={css`
  flex-basis: 10%;
  color: ${colors.grayLight};
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  padding-right: 4px;
`}>
  08:00
</div>

const things = {
  activities: [
    { start: 8.0, name: 'Shower' },
    { start: 8.5, name: 'Breakfast' },
    { start: 9.0, end: 17, name: 'Work' }
  ],
  feelings: [
    { start: 12, end: 16, name: 'Motivated' },
    { start: 11, name: 'Hungryyyyy :(' }
  ],
  thoughts: [
    { start: 8.0, name: 'Nice wake up!' },
    { start: 14, name: 'I should buy a boat' },
    { start: 17.5, name: 'Party or not to party?' }
  ],
}

export const Timeline = () => (
  <Wrapper>
    <Labels />
    <Column items={things.activities} />
    <Column items={things.feelings} color={colors.orange} />
    <Column items={things.thoughts} color={colors.green} />
  </Wrapper>
)
