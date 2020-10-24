/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors, Icons } from './theme'

const FAB = props => (
  <button css={css`
    border-radius: 50%;
    background: ${colors.yellow};
    position: fixed;
    bottom: 12px;
    right: 12px;
    display: flex;
    box-shadow: 0 0 8px 4px ${colors.gray};
    transition: transform 100ms ease-out, opacity 100ms ease-out;

    :hover {
      opacity: 0.8;
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