import React from 'react';
import './Mainheader.css';
// import mypicture from '../images/1.png'
import giticon from '../images/github.svg'
import linkdinicon from '../images/linkedin.svg'
import facebookicon from '../images/facebook.svg'
import twittericon from '../images/twitter.svg'
import bgimage from '../images/download.svg'

export const Mainheader = () => {
  return (
    <main className="row main-style d-flex align-items-center">
      <div className="col-md-7 offset-md-1">
        <p>Hello, I'm</p>
        <h1>Sayful Islam Shakib</h1>
        <p className="title">FRONT-END WEB DEVELOPER</p>
        <button className="button-style">DOWNLOAD RESUME</button>
        <div className="linkicons">
          <a href="https://github.com/sayfulislamshakib"><img src={giticon} alt="github icon" /></a>
          <a href="https://linkdin.com/in/sayfulislamshakib"><img src={linkdinicon} alt="linkdin icon" /></a>
          <a href="https://facebook.com/sis.shakib.DT"><img src={facebookicon} alt="facebook icon" /></a>
          <a href="https://twitter.com/sayful_shakib"><img src={twittericon} alt="twitter icon" /></a>
        </div>
      </div>
      {/* <div className="float-right">
        <img src={mypicture} alt="Sayful Islam Shakib" className="img-fluid" />
      </div> */}
      <div className="informaitons">
        <ul>
          <li><span className="bold">loaction:</span> Munshiganj, Dhaka, Bangladesh</li><br />
          <li><span className="bold">Email:</span> connect.sayful@gmail.com</li><br />
          <li>Coding Lover</li>
        </ul>
      </div>
      <img src={bgimage} alt="" className="bgImage" />
    </main>
  )
}
