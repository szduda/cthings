/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors, Icons } from './theme'

const Wrapper = props => (
  <div css={css`
  background: ${colors.black};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 4px #000;
  `} {...props} />
)

const Logo = () => (
  <h1 css={css`
  font-size: 16px;
  margin: 0;
  font-weight: 300;
  color: ${colors.yellow};
  transform: translateY(-2px);
  b {
    font-size: 24px;
    line-height: 28px;
    display: inline-block;
    font-weight: 400;
    margin-right: -3px;
  }`}>
    <b>C<span css={css`color: ${colors.orange}; margin-left: -3px;`}>T</span></b>hings
  </h1>
)

const Title = () => (
  <h2 css={css`
    margin: 0;
    font-size: 16px;
    line-height: 28px;
    color: ${colors.grayLight};
  `}>24-10-2020</h2>
)

const Group = props => <div css={css`
  display: flex;
  align-items: center;
`} {...props} />

const SearchTrigger = () => <Icons.Search css={css`margin-right: 16px;`} />
const MenuTrigger = () => <Icons.Hamburger />

export const Header = () => (
  <Wrapper>
    <Logo />
    <Title />
    <Group>
      <SearchTrigger />
      <MenuTrigger />
    </Group>
  </Wrapper>
)