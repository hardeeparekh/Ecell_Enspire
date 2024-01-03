import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import introImg from "./images/introImg.jpg";
import logo from "./images/logo.png";
import insta from "./images/insta.jpg";
import linkedin from "./images/linkedin.jpg";
import twitter from "./images/twitter.jpg";
import discord from "./images/discord.jpg";
import spon1 from "./images/spon1.jpg";
import spon2 from "./images/spon2.jpg";
import "./Gallery.js";
import E1 from './images/E1.jpg';
import E2 from './images/E2.jpg';
import E3 from './images/E3.jpg';
import E4 from './images/E4.jpg';
import E5 from './images/E5.jpg';
import E6 from './images/E6.jpg';
import E7 from './images/E7.jpg';
import E8 from './images/E8.jpg';
import E9 from './images/E9.jpg';
function Home() {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <div>
            <img src={logo} className="navbarLogo" />
          </div>
          <div
            style={{
              color: "white",
              fontFamily: "sans-serif",
            }}
          >
            <b>E-CELL</b>
          </div>
        </div>
        <div>
          <ul type="none" className="nav-mid">
            <li className="nav">HOME</li>
            <li className="nav">EVENTS</li>
            <li className="nav">SPONSORS</li>
            <li className="nav">TEAM</li>
            <li className="nav">GALLERY</li>
            <li className="nav">CONTACT</li>
          </ul>
        </div>
        <div className="nav-right">
          <div>
            <a href="https://www.instagram.com/enspire_iiitl?igsh=OGQ5ZDc2ODk2ZA=="><img src={insta} className="nav-icons" ></img></a>
          </div>
          <div>
            <a href="https://www.linkedin.com/company/e-cell-iiit-lucknow/"><img src={linkedin} className="nav-icons" /></a>
          </div>
          <div>
            <a href="https://twitter.com/ecell_iiitl"><img src={twitter} className="nav-icon1" /></a>
          </div>
          <div>
            <a href="https://discord.com/invite/mGCKYBFWC8"><img src={discord} className="nav-icon2" /></a>
          </div>
        </div>
      </div>
      <div className="intro">
        <div className="intro-text">
          <div id="intro-text1" className="move-text">
            ECELL IIITL PRESENTS
          </div>
          <div id="intro-text2" className="move-text">
            <b>Enspire</b>
          </div>
          <div id="intro-text3" className="move-text">
            Ignite the Spark
          </div>
        </div>
        <div>
          <img src={introImg} className="intro-image"></img>
        </div>
      </div>
      <div className="spon-container">
      <div className="Heading1">Our Sponsors</div>
      <div className="sponsors">
        <div class="center">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="square">
            <img src={spon1} class="spon-img"></img>
          </div>
        </div>
        <div class="center">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="square">
            <img src={spon2} class="spon-img"></img>
          </div>
        </div>
        </div>

        <div className="spon2"></div>
      </div>
      <div className="Events-heading">Events</div>
      <div class="Events-container">
        <div className="Events-img-cont"><img src={E1} className="Events-img"></img></div>
        <div className="Events-img-cont"><img src={E2} className="Events-img"></img></div>
        <div className="Events-img-cont"><img src={E3} className="Events-img"></img></div>
      </div>
      <div class="Events-container">
        <div className="Events-img-cont"><img src={E4} className="Events-img"></img></div>
        <div className="Events-img-cont"><img src={E5} className="Events-img"></img></div>
        <div className="Events-img-cont"><img src={E6} className="Events-img"></img></div>
      </div>
      <div class="Events-container">
        <div className="Events-img-cont"><img src={E7} className="Events-img"></img></div>
        <div className="Events-img-cont"><img src={E8} className="Events-img"></img></div>
        <div className="Events-img-cont"><img src={E9} className="Events-img"></img></div>
      </div>
    </>
  );
}

export default Home;
