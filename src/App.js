import { css } from '@emotion/react';
import icon1 from './images/icon-1-home-features.svg';
import icon2 from './images/icon-2-home-features.svg';
import icon3 from './images/icon-3-home-features.svg';
import icon4 from './images/icon-4-home-features.svg';
import icon5 from './images/icon-5-home-features.svg';
import icon6 from './images/icon-6-home-feature.svg';
import { ReactComponent as Logo } from './images/pflanzer-logo.svg';
import imagePlatform from './images/planzer-io-platform.svg';
/** @jsxImportSource @emotion/react */
import imageNativeIntegrations from './images/planzer-native-integrations.png';

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

const icon = css`
  border-radius: 25px;
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 52px 0px 50px;
  width: 1198px;
  height: 50px;
  margin-left: 260px;
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

const h2 = css`
  font-size: 36px;
  font-weight: 700;
  font-family: Thicccboi, sans-serif;
  color: #0b0a33;
`;

const h3 = css`
  font-size: 28px;
  font-weight: 700;
  font-family: Thicccboi, sans-serif;
  color: #0b0a33;
`;

const p = css`
  opacity: 0.6;
  font-size: 17px;
  font-family: Thicccboi, sans-serif;
  line-height: 35px;
`;

const heroSectionStyles = css`
  display: flex;
  justify-content: center;
  margin-top: 50px;
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

const heroImageStyles = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const nativeIntegrationsStyles = css`
  opacity: 0.6;
  font-size: 20px;
  font-family: Thicccboi, sans-serif;
  margin-top: 50px;

  > * {
    display: flex;
    justify-content: center;
  }
`;

const imageNativePartingLine = css`
  border-bottom: 1px solid grey;
  width: 1100px;
  padding-bottom: 150px;
  margin-bottom: 150px;
  text-align: center;
  margin: auto;
`;

const sectionBenefitStyles = css`
  display: block;

  > div {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 20px;
  }

  div:first-child {
    margin-top: 220px;
  }

  div:nth-child(3) {
    width: 525px;
    margin: auto;
  }
`;
const grid = css`
  display: grid;
  grid-template-columns: 374px 374px 374px;
  grid-template-rows: 440px 440px 440px;
  width: 1198;
  height: 858;
  /* row-gap: 20px;
  column-gap: 20px; */
  grid-gap: 20px;
`;

const gridBox = css`
  /* border: 1px solid black; */
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  grid-auto-flow: row;
`;

const cardHome = css`
  width: 260px;
  height: 310px;
  /* border: 1px solid black; */
  display: block;
`;

// const test = css`display: block, margin: auto`;

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
      <div css={heroImageStyles}>
        <img src={imagePlatform} alt="" />
      </div>
      <br />
      <br />
      <br />
      <br />
      <div css={nativeIntegrationsStyles}>
        <div>
          <p>Here are some of our native integrations</p>
        </div>
        <div>
          <img src={imageNativeIntegrations} alt="" />
        </div>
        <div css={imageNativePartingLine} />
        <div css={sectionBenefitStyles}>
          <div>Benefits</div>
          <div css={h2}>You'll never miss a deadline!</div>
          <div css={p}>
            With Planzer.io, you will never miss a deadline because you lost
            track of your tasks. You can easily organize your day, track your
            goals and become more productive.
          </div>
        </div>
        <br />
        <br />
        <div css={grid}>
          <div css={gridBox}>
            <div css={cardHome}>
              <img src={icon1} css={icon} alt="" />
              <h3 css={h3}>Organize your day</h3>
              <p css={p}>
                Organize your tasks across multiple applications, and don't
                loose track of your day
              </p>
            </div>
          </div>
          <div css={gridBox}>
            <div css={cardHome}>
              <img src={icon2} css={icon} alt="" />
              <h3 css={h3}>Track progress</h3>
              <p css={p}>
                Planzer.io can easily track your goals by assigning tasks. Of
                course, you will follow your progress as well.
              </p>
            </div>
          </div>
          <div css={gridBox}>
            <div css={cardHome}>
              {' '}
              <img src={icon3} css={icon} alt="" />
              <h3 css={h3}>Set goals</h3>
              <p css={p}>
                Once you set specific goals with time frames, you can organize
                and manage your workload.
              </p>
            </div>
          </div>
          <div css={gridBox}>
            <div css={cardHome}>
              {' '}
              <img src={icon4} css={icon} alt="" />
              <h3 css={h3}>Limit distractions</h3>
              <p css={p}>
                Concentrating on work for extended periods in an organized
                workspace is much easier.
              </p>
            </div>
          </div>
          <div css={gridBox}>
            <div css={cardHome}>
              {' '}
              <img src={icon5} css={icon} alt="" />
              <h3 css={h3}>Calendar overview</h3>
              <p css={p}>
                Planzer.io keeps you aware of what meetings and due dates you
                have coming up in your schedule.
              </p>
            </div>
          </div>
          <div css={gridBox}>
            <div css={cardHome}>
              {' '}
              <img src={icon6} css={icon} alt="" />
              <h3 css={h3}>Practice accountability</h3>
              <p css={p}>
                Accountability includes keeping your to-do list in mind. You
                should evaluate your goal list, reflect on your progress and
                identify the steps you need to take.
              </p>
            </div>
          </div>
        </div>
        <br />
        {/* <div css={test}>
          <img src={imagePlatform} alt="" />
        </div> */}
        <br />
      </div>
    </div>
  );
}

export default App;
