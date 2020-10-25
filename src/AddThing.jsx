/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors, Icons, Button } from './theme'

const FAB = props => (
  <Button css={css`
    border-radius: 50%;
    background: ${colors.yellow};
    position: fixed;
    bottom: 12px;
    right: 12px;
    display: flex;
    padding: 8px;
    margin: 0;
    box-shadow: 0 0 8px 4px ${colors.gray};
    transition: transform 100ms ease-out, background 100ms ease-out;

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

export const AddThingTrigger = () => (
  <FAB>
    <Icons.Add />
  </FAB>
)