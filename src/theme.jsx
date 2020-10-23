/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { ReactComponent as HamburgerIcon } from './assets/icons/hamburger.svg';
import { ReactComponent as SearchIcon } from './assets/icons/search.svg';

export const colors = {
  red: '#ED3C19',
  green: '#2E8269',
  orange: '#D95D39',
  yellow: '#F9C926',
  black: '#243230',
  white: '#F1FAEA',
  gray: '#334746',
  grayLight: '#808E88',
}

export const Icons = {
  Hamburger: ({ color = colors.white, ...rest }) =>
    <HamburgerIcon css={css`fill: ${color}`} {...rest} />,
  Search: ({ color = colors.white, ...rest }) =>
    <SearchIcon css={css`fill: ${color}`} {...rest} />,
}