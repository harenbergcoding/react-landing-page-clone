/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import { ReactComponent as Logo } from './images/pflanzer-logo.svg';

const mainStyles = css`
  /* box-sizing: border-box; */
`;

const button = css`
  background-color: #5335d9;
  padding: 17px 30px;
  border-radius: 50px;
  color: white;
  font-weight: bold;
`;

const logoStyles = css`
  width: 150px;
  height: 33.8px;
  /* font-size: 10px; */
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 52px 0px 50px;
  width: 1198px;
  height: 50px;
  margin-left: 160px;
  background-color: #f3f5ff;
`;

const navStyles = css`
  display: flex;
  padding-top: 10px;

  > a {
    color: #0b0a33;
    text-decoration: none;
    font-family: Thicccboi, sans-serif;
    font-size: 16px;
    margin-right: 45px;
  }
`;

const navRightStyles = css`
  font-family: Thicccboi, sans-serif;
  color: #0b0a33;
  text-decoration: none;
  padding-top: 10px;

  > a {
    margin-left: 0px;
    text-decoration: none;
    font-family: Thicccboi, sans-serif;
    font-size: 16px;
  }

  a:first-child {
    margin-right: 20px;
    color: #0b0a33;
  }

  div:nth-child(2) {
    color: white;
  }
`;

const h1 = css`
  font-size: 56px;
  font-weight: 700;
  font-family: Thicccboi, sans-serif;
  color: #0b0a33;
`;

const heroSectionStyles = css`
  display: flex;
  justify-content: center;

  > div {
    padding-top: 15px;
  }

  > div > p {
    padding: 10 25 0 25;
    width: 650px;
    opacity: 0.6;
    font-size: 17px;
    font-family: Thicccboi, sans-serif;
    line-height: 35px;
  }
`;

const heroDivStyles = css`
  width: 700px;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    margin: 0 0 24;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

function App() {
  return (
    <div className="App" css={mainStyles}>
      {/* <div className="headerWrapper" css={headerWrapperStyles}> */}
      <header className="header" css={headerStyles}>
        <Logo css={logoStyles} />

        <nav className="nav" css={navStyles}>
          <a href="#x">Pricing</a>
          <a href="#x">Features</a>
          <a href="#x">Use Cases</a>
        </nav>

        <div className="navRight" css={navRightStyles}>
          <a href="#x">Sign In</a>
          <a href="#x" css={button}>
            Get Started ►
          </a>
        </div>
      </header>
      <br />
      <br />
      <section css={heroSectionStyles}>
        <div className="heroSection" css={heroDivStyles}>
          <h1 css={h1}>Stop losing track of your tasks</h1>
          <p>
            Planzer.io lets you plan your day with tasks from multiple project
            management tools in one simple view, to help you be more productive.
          </p>
          <br />
          <br />
          <a href="#a" css={button}>
            Start planning your day ►
          </a>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* </div> */}
    </div>
  );
}

export default App;
