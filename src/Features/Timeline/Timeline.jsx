/** @jsx jsx */
import { jsx, css, } from '@emotion/core'
import { Fragment } from 'react'
import { colors, BottomContent } from '../theme'
import { AddThingTrigger, AddThingForm } from './AddThing'
import { Box } from './Box'

const Wrapper = props => (
  <div css={css`
  padding: 74px 2px 64px;
  display: flex;
  background: ${colors.gray};
  overflow: scroll;
  `} {...props} />
)

const Rows = ({ items, color }) => {
  const rows = []
  let max = 0;
  let max2 = 0;
  let r = null

  const isNewBox = start => !rows.length || start > rows[rows.length - 1].start

  const getLayer = start => {
    if (start < max) {
      if (start < max2)
        return 2
      return 1
    } else return 0
  }

  items
    .sort((t1, t2) => 1000 * (t1.start - t2.start) - (t1.end - t1.start) + (t2.end - t2.start))
    .map((thing) => {
      const { start, end, title } = thing
      if (isNewBox(start)) {
        const layer = getLayer(start)
        r = { start, end, title, layer }
        rows.push(r)
        max2 = layer === 1 ? end : max2
        max = Math.max(max, rows[rows.length - 1].end)
      } else {
        rows[rows.length - 1] = {
          ...r,
          end: Math.max(r.end, end),
          title: [r.title, title].join(', '),
        }
        r = rows[rows.length - 1]
      }
    })
  return rows.map((thing, key) => <Box {...{ thing, key, color, scale }} />)
}

const Column = ({ items, color, ...rest }) => items && items.length
  ? (
    <div css={css`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    position: relative;
    height: calc(100vh - 64px);
    margin: 0 2px 0 2px;
  `} {...rest}>
      <Rows {...{ items, color }} />
    </div>)
  : null

const Labels = () => (
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

const scale = [...Array(24)].map((item, index) => ({ time: index * 0.5 + 8, top: 30 * index }))

export const Timeline = ({ useTimelineContext }) => {
  const { things, addThing, setFormVisible, formVisible } = useTimelineContext()
  return (
    <Fragment>
      <Wrapper>
        <Labels />
        <Column items={things.activities} />
        <Column items={things.feelings} color={colors.orange} />
        <Column items={things.thoughts} color={colors.green} />
      </Wrapper>
      <AddThingTrigger onClick={() => setFormVisible(true)} />
      <BottomContent visible={formVisible} onClose={() => setFormVisible(false)}>
        <AddThingForm onSubmit={addThing} />
      </BottomContent>
    </Fragment>
  )
}