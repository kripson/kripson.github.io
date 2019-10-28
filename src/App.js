import React from 'react';
import './App.scss';
import Nav from "./nav";
import Banner from "./banner";
import Contacts from "./contacts";
import Doorpart from "./doorpart";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Showcase from "./showcase";
import illustration from "./icons/illustration.svg";
import preloader from "./icons/9-1.gif";
import { Preloader, Placeholder } from 'react-preloading-screen';

 











function App() {
  return (
    <div className="App">
    <link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Fascinate+Inline&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Fascinate+Inline|Work+Sans&display=swap" rel="stylesheet"></link>
    
  
    <Preloader fadeDuration = {0}>
                <Placeholder id = "placeholder">
                    <div id = "first"><img src = {preloader}></img></div>
                   
                </Placeholder>
    </Preloader>
    
 
    <div className = "app-inner-wrapper">


      <div className = "IntroBackground">
        <img id = "illustration" src = {illustration} alt=""></img>
      </div>
     

      <Nav></Nav>
      <Banner></Banner>
      <Intro></Intro>
      <Contacts></Contacts>
      <AboutMe></AboutMe>
      <Showcase></Showcase>



      <a href='https://pngtree.com/so/internet'>internet png from pngtree.com</a>



     </div>
    </div>
  );
}

export default App;
