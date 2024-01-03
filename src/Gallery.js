import './Gallery.css';
import logo from './images/logo.png';
import insta from './images/insta.jpg';
import linkedin from './images/linkedin.jpg';
import twitter from './images/twitter.jpg';
import discord from './images/discord.jpg';
import img1 from'./images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from'./images/img3.jpg';
import img4 from'./images/img4.jpg';
import img5 from'./images/img5.jpg';
import img6 from'./images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from'./images/img8.jpg';
import img9 from'./images/img9.jpg';
import img10 from'./images/img10.jpg';
import img11 from'./images/img11.jpg';
import img12 from './images/img12.jpg';
import img13 from'./images/img13.jpg';
import img14 from'./images/img14.jpg';
import img15 from'./images/img15.jpg';
// import React,{components} from 'react';
// import styled,{keyframes} from 'styled-components';
// import {bounce} from 'react-animations';
// import './style.css';
function gallery(){
  //const Bounce=styled.div`animation:2s${keyframes`${bounce}`} 2`;
  
   return(
    <>
     <div className="navbar">
        <div className="nav-left">
          <div>
           <img src={logo} className="navbarLogo" />
           </div>
          <div 
          style={{
            color: 'white' ,
            fontFamily:'sans-serif'
            }}
            ><b>E-CELL</b></div>
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
    <div className="Heading">Gallery</div>
    <div className="container">
     <div className="block">
      <div><img src={img1} id="img1"></img></div>
      <div><img src={img6} id="img6"></img></div>
      <div><img src={img11} id="img11"></img></div>
     </div>
     <div className="block">
      <div><img src={img2} id="img2"></img></div>
      <div><img src={img7} id="img7"></img></div>
      <div><img src={img12} id="img12"></img></div>
     </div>
     <div className="block">
      <div><img src={img3} id="img3"></img></div>
      <div><img src={img8} id="img8"></img></div>
      <div><img src={img13} id="img13"></img></div>
     </div>
     <div className="block">
     <div><img src={img4} id="img4"></img></div>
     <div><img src={img9} id="img9"></img></div>
     <div><img src={img14} id="img14"></img></div>
     </div>
     <div className="block">
     <div><img src={img5} id="img5"></img></div>
     <div><img src={img10} id="img10"></img></div>
     <div><img src={img15} id="img15"></img></div>
     </div>


    </div>
    
    

    </>
   )
}
export default gallery;