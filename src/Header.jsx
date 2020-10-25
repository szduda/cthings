/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { colors, Icons, Button, Link, themeProps } from './theme'
import { Calendar } from './Calendar'
import { useState } from 'react'
import { useStore } from './StateManager/Store'

const Wrapper = props => (
  <div css={css`
  background: ${colors.black};
  color: ${colors.white};
  padding: 12px 16px;
  box-shadow: 0 0 4px #000;
  `} {...props} />
)

const Row = ({ align, ...props }) => (
  <div css={css`
    display: flex;
    justify-content: ${align || 'space-between'};
  `} {...props} />
)

const Logo = () => (
  <h1 css={css`
  font-size: 16px;
  margin: 0;
  font-weight: 300;
  line-height: 32px;
  color: ${colors.yellow};
  height: 32px;
  b {
    font-size: 24px;
    display: inline-block;
    font-weight: 400;
    margin-right: -3px;
  }`}>
    <b>C<span css={css`color: ${colors.orange}; margin-left: -3px;`}>T</span></b>hings
  </h1>
)

const Title = ({ text }) => (
  <h2 css={css`
    margin: 0;
    font-size: 16px;
    line-height: 28px;
    color: ${colors.grayLight};
    align-self: flex-end;
  `}>{text}</h2>
)

const Group = props => <div css={css`
  display: flex;
  align-items: center;
`} {...props} />

const SearchTrigger = () => <Icons.Search css={css`margin-right: 16px;`} />
const MenuTrigger = ({ opened, ...props }) => (
  <Button {...props}>
    {opened ? <Icons.Close /> : <Icons.Hamburger />}
  </Button>
)

const menuItems = [
  'Timeline', 'Statistics', 'Preferences', 'Help'
]

const MainMenu = ({ visible, selectedDate, setDate }) => (
  <div css={css`
    height: calc(100vh - ${themeProps.headerHeight});
    transition: top 300ms ease-out, opacity 300ms ease-out, visibility 300ms linear;
    overflow: hidden;
    visibility: ${visible ? 'visible' : 'hidden'};
    opacity: ${visible ? 1 : 0};
    position: absolute;
    background: ${colors.black};
    width: 100%;
    left: 0;
    z-index: -1;
    top: ${visible ? themeProps.headerHeight : 0};
  `}>
    <Row align="center">
      <Button onClick={() => setDate(selectedDate === "25-10-2020" ? "24-10-2020" : "25-10-2020")}>
        <Calendar selectedDate={selectedDate} />
      </Button>
    </Row>
    <Row align="center">
      <nav>
        <ul css={css`
          flex-wrap: wrap;
          display: flex;
          list-style: none;
          margin: 0 -8px;
          padding: 0;
          justify-content: space-between;
          width: 312px;
        `}>
          {[...Array(4)].map((item, index) =>
            <li key={index} css={css`
              flex-basis: calc(50% - 16px);
              margin: 8px;
            `}>
              <Button css={css`
                background: ${[colors.yellow, colors.green, colors.orange, colors.grayDark][index]};
                color: ${index ? colors.white : colors.black};
                padding: 4px 6px;
                border-radius: 4px;
                font-size: 16px;
                line-height: 24px;
                width: 100%;
              `}>{menuItems[index]}</Button>
            </li>
          )}
        </ul>
      </nav>
    </Row>
    <Row align="center">
      <footer css={css`
        color: ${colors.grayLight}; 
        position: absolute;
        bottom: 0;
        margin: 32px 0 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}>
        <p>Signed in as Szymon.</p>
        <Link href="#">Logout</Link>
      </footer>
    </Row>
  </div>
)

export const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const { state, actions } = useStore()
  const { current } = state
  const { setDate } = actions.current
  return (
    <Wrapper>
      <Row>
        <Logo />
        {!menuOpened && <Title text={current.date} />}
        <Group>
          <SearchTrigger />
          <MenuTrigger
            opened={menuOpened}
            onClick={() => setMenuOpened(!menuOpened)}
          />
        </Group>
      </Row>
      <MainMenu visible={menuOpened} selectedDate={current.date} setDate={setDate} />
    </Wrapper>
  )
}