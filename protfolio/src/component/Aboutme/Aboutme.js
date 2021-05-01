import React from 'react'
import './Aboutme.css'
import mypicture from '../images/1.png'

export const Aboutme = () => {
  return (
    <section>
      <h1 className="text-center options-color">About me</h1>
      <div className="aboutstyle">
      </div>
      <img src={mypicture} alt="sayful islam shakib" className="my-picture-style" />
      <p className="my-text-style">Hi, I'm Sayful Islam Shakib, a passionate self-taught frontEnd web developer from <span className="text-bold">Bangladesh</span>, currently I am learning in <span className="text-bold">Programming Hero</span> I tried to make and learn modern web technologies to build websites that look <span className="text-bold">great</span>, feel <span className="text-bold">fantastic</span>, and function correctly. I am especially focusing on <span className="text-bold">React.js.</span>
        <br />
        <br />
      I'm also a certified graphic designer from <span className="text-bold">LEDP</span> <span className="text-small">(Learning and earnign devolopment project)</span>. I'm also <span className="text-bold">GOOGLE</span> certified UX/UI designer. Since I love both programming and designing, I'm also interested in creating programmatic designs and creative coding projects.
      </p>
      <div>
      </div>
      <div className="Motivation-style">
        <div className="Motivation">
          <p>“Simplicity is the baddest choice to be the best.“ <br /> <span className="float-right author">-myself</span></p>
        </div>
        <div className="Motivation">
          <p>“I know I’m not successful enough, but I’m passionate enough not to worry about success.“ <br /> <span className="float-right ">-myself</span></p>
        </div>
        <div className="Motivation">
          <p>“Creativity is the driver of an unstoppable train called Passion.” <br /> <span className="float-right author">-myself</span></p>
        </div>
      </div>
    </section>
  )
}
