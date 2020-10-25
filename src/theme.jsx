/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { ReactComponent as HamburgerIcon } from './assets/icons/hamburger.svg';
import { ReactComponent as SearchIcon } from './assets/icons/search.svg';
import { ReactComponent as AddIcon } from './assets/icons/add.svg';
import { ReactComponent as CloseIcon } from './assets/icons/close.svg';

export const colors = {
  red: '#ED3C19',
  orange: '#D95D39',

  yellow: '#F9C926',
  yellowDark: '#DBA906',

  green: '#2E8269',

  white: '#F1FAEA',
  black: '#243230',

  grayLight: '#808E88',
  gray: '#334746',
  grayDark: '#2B3B3A',
}

export const Icons = {
  Hamburger: ({ color = colors.white, ...rest }) =>
    <HamburgerIcon css={css`fill: ${color}`} {...rest} />,
  Search: ({ color = colors.white, ...rest }) =>
    <SearchIcon css={css`fill: ${color}`} {...rest} />,
  Add: () => <AddIcon css={css`fill: ${colors.black}`} />,
  Close: () => <CloseIcon css={css`fill: ${colors.white}`} />
}

export const Theme = props => (
  <div css={css`
    font-family: 'Consolas';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.white};
    color: ${colors.black};  
    
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }
    
    main {
      margin-top: 48px;
    }
    
    div {
      box-sizing: border-box;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 300;
      margin: 0 0 8px 0;
    }
  `} {...props} />
)

export const Button = props => (
  <button css={css`      
    border: 0;
    font: 500 12px Consolas;
    background: none;
    outline: none;
    padding: 4px;
    margin: -4px;
    display: flex;
    justify-content: center;
    transition: transform 100ms ease-out;
    
    *:active, :active {
      transform: scaleX(0.97);
    }
  `} {...props} />
)

export const Link = props => (
  <a css={css`
    display: inline-block;
    color: ${colors.white};
    transition: transform 100ms ease-out;
    text-decoration: none;
    padding: 0 0 2px;
    border-bottom: 2px solid ${colors.red};
    
    *:active, :active {
      transform: scaleX(0.97);
    }
  `} {...props} />
)