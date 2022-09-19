/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as Logo } from './images/pflanzer-logo.svg';

const mainStyles = css`
  box-sizing: border-box;
`;

const headerWrapperStyles = css`
  //   text-align: center;
  //   /* justify-content: space-between; */
  width: 1198px;
  height: 50px;
  //   display: flex;
  //
`;

const logoStyles = css`
  width: 150px;
  height: 33.8px;
  font-size: 10px;
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  text-align: center;
  margin-left: 434px;
`;

const navStyles = css`
  font-size: 14px;
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <div class="headerWrapper" css={headerWrapperStyles}>
        <header css={headerStyles}>
          <Logo css={logoStyles} />

          <nav css={navStyles}>
            <a href="#x">Pricing</a>
            <a href="#x">Features</a>
            <a href="#x">Use Cases</a>
          </nav>

          <div>
            <a href="#x">Sign Up </a>
            <a href="#x">Get Started</a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
