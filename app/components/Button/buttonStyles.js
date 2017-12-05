import { css } from 'styled-components'

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  border: none;
  font-family: 'FG-R';
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;
  border-radius: 16px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: #fff;
  background: var(--booger);
  padding: 10px 20px;

  &:active {
    background: var(--booger);
    color: #fff;
  }
`

export default buttonStyles
