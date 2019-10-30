import React from 'react';
import './AboutMe.scss';
import nepal from "./icons/nepal.jpg";
import australia from "./icons/australia.jpg";
import airplane from "./icons/airplane.jpg";
import LazyLoad from 'react-lazyload';

function AboutMe() {


  return (
    <div id = "aboutme"  className="AboutMe">
    <div className ="innerBox">
      <div>
      <LazyLoad>
      <img id = "nepal" src = {nepal} ></img>
      </LazyLoad>
      </div>
      <div></div>
      <div id = "australiasection"><p> I travelled to <span style = {{padding:"3px",backgroundColor:"black", color:"white",fontFamily: "'Bangers', cursive"}}>Australia</span> in 2017 and am currently pursuing my Bachelor's degree in IT. During my pursual of academic qualification, I stumbled upon web development and fell in love with it. I like the idea of bringing my imagination to life and web development allowed me to do exactly that. Hence, I turned into an aspiring web developer.</p></div>
      <div id = "nepalsection"><p>Let me talk a little bit about my roots. I was born and raised in Butwal which is a city in <span style = {{backgroundColor:"black", color:"white",fontFamily: "'Bangers', cursive"}}>South-Western Nepal</span>. I have always been fascinated by computers since my childhood. So, after my high school, I decided to write a new chapter of my life and pursue a degree in IT in Australia.</p></div>
       <div>
       <LazyLoad>
       <img id = "air" src = {airplane} ></img>
       </LazyLoad>
       </div>
      <div></div>
      <div >
      <LazyLoad>
      <img id = "australia" src = {australia} ></img>
      </LazyLoad></div>
</div>
    	 
    
    </div>
  );
}

export default AboutMe;
