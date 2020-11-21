/** @jsx jsx */
import { jsx, css, } from '@emotion/core'
import { Fragment } from 'react'
import { colors, BottomContent } from '../theme'
import { AddThingTrigger, AddThingForm } from './AddThing'
import { Box } from './Box'
import { Labels } from './Labels'
import { sortThings } from '../../appHelper'

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

  const updateMax = ({ end, layer }) => {
    max2 = layer === 1 ? end : max2
    max = Math.max(max, rows[rows.length - 1].end)
  }

  items
    .sort(sortThings)
    .map((thing) => {
      const { start, end, title, id } = thing
      if (isNewBox(start)) {
        const layer = getLayer(start)
        r = { start, end, title, layer, id }
        rows.push(r)
        updateMax({ end, layer })
      } else {
        r = rows[rows.length - 1] = {
          ...r,
          end: Math.max(r.end, end),
          title: [r.title, title].join(', '),
        }
      }
    })

  return rows.map(thing => <Box {...{ thing, key: thing.id, color }} />)
}

const Column = ({ items, color, ...rest }) =>
  <div css={css`
    display: flex;
    flex-direction: column;
    flex-basis: 30%;
    position: relative;
    height: calc(100vh - 64px);
    margin: 0 2px 0 2px;
  `} {...rest}>
    {items && items.length && <Rows {...{ items, color }} />}
  </div>

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