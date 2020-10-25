/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { useState } from 'react';
import { colors, Icons, Button, Flex } from './theme'

const FAB = props => (
  <Button css={css`
    border-radius: 50%;
    background: ${colors.yellow};
    position: fixed;
    bottom: 24px;
    right: 24px;
    display: flex;
    padding: 8px;
    margin: 0;
    box-shadow: 0 0 8px 4px ${colors.gray};
    transition: transform 100ms ease-out, background 100ms ease-out;

    > svg {
      width: 32px;
      height: 32px;
    }

    :hover {
      background: ${colors.yellowDark};
    }

    > {
    transition: transform 100ms ease-out;
    }

    :active, >:active {
      transform: scale(0.97);
    }
  `} {...props} />
)

export const AddThingTrigger = props => (
  <FAB {...props}>
    <Icons.Add />
  </FAB>
)

const TimePicker = ({ label = '', ...props }) => (
  <label>
    <span>{label}</span>
    <input type="time" {...props} css={css`max-width: 72px;`} />
  </label>
)

const Checkbox = ({ label = '', ...props }) => (
  <label>
    <span>{label}</span>
    <Flex.Row valign="center">
      <input type="checkbox" {...props} />
    </Flex.Row>
  </label>
)

const Textbox = ({ label = '', ...props }) => (
  <label>
    <span>{label}</span>
    {/* <input type="text" {...props} /> */}
    <textarea css={css`height: 96px;`} {...props} />
  </label>
)

export const AddThingForm = ({ onSubmit }) => {
  const [thing, setThing] = useState({ type: 'activity', start: Date() })

  const RadioInput = ({ color, checked, label, setThingType, ...props }) => (
    <div css={css`
      background: ${checked ? color : colors.gray};
      display: inline-flex;
      padding: 6px 8px;
      width: 80px;
      border-radius: 4px;
      color: ${checked ? '#000' : colors.grayLight};
      backdrop-filter: brightness(50%);
      font-size: 12px;
      justify-content: center;
      font-weight: 700;
      box-shadow: 0 4px 8px 0 #00000066;
    `} onClick={() => setThing({ ...thing, type: label })} {...props}>
      {label}
    </div>
  )

  return (
    <div css={css`
      background: ${colors.black};
      width: 100%;
      height: 282px;
      color: ${colors.grayLight};
      padding: 32px 16px;
      position: relative;
    `}>
      <form>
        <Flex.Row css={css`
          position: absolute;
          width: 100%;
          left: 0;
          top: 0;
          padding: 0 32px;
          margin-top: -8px;
        `}>
          <RadioInput color={colors.yellow} label="activity" checked={thing.type === 'activity'} />
          <RadioInput color={colors.orange} label="feeling" checked={thing.type === 'feeling'} />
          <RadioInput color={colors.green} label="thought" checked={thing.type === 'thought'} />
        </Flex.Row>
        <Flex.Row align="flex-start" css={css`margin-top: 12px;`}>
          <Flex.Col>
            <TimePicker
              label="begin"
              value={thing.start}
              onChange={event => setThing({ ...thing, start: event.target.value })}
            />
            <TimePicker label="end" />
            <Checkbox
              label="ongoing"
              checked={!!thing.end}
              onChange={event => !event.target.value && setThing({ ...thing, end: null })}
            />
          </Flex.Col>
          <Flex.Col>
            <Textbox label="title" value={thing.title} />
          </Flex.Col>
        </Flex.Row>
        <FAB
          onClick={onSubmit}
          css={css`
            background: ${colors.green}; 
            :hover { background: ${colors.grayLight} }
        `}>
          <Icons.Add color={colors.yellow} />
        </FAB>
      </form>
    </div>
  )
}