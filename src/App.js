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
import LazyLoad from 'react-lazyload';
import { Preloader, Placeholder } from 'react-preloading-screen';

 











function App() {
  return (
    <div className="App">
    <link href="https://fonts.googleapis.com/css?family=Bangers&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai|Fascinate+Inline&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Fascinate+Inline|Work+Sans&display=swap" rel="stylesheet"></link>
    
  
    <Preloader fadeDuration = {3000}>
                <Placeholder id = "placeholder">
                    <div id = "first"><img src = {preloader}></img></div>
                   
                </Placeholder>
    </Preloader>
    
 
    <div className = "app-inner-wrapper">


      <div className = "IntroBackground">
        <img id = "illustration" src = {illustration} alt=""></img>
      </div>
     

      <Nav></Nav>
      <LazyLoad>
      <Banner></Banner>
      </LazyLoad>
      <Intro></Intro>
      <Contacts position = {"top"}></Contacts>
      <AboutMe></AboutMe>
      <Showcase></Showcase>


      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <Contacts position = {"bottom"}></Contacts>
          <a style = {{position:"absolute" , bottom:0 , right:0 }} href='https://pngtree.com/so/internet'>internet png from pngtree.com</a>
          <small>Copyright &copy; Sankit Man Shrestha</small>
        </div>
      </footer>
      



     </div>
    </div>
  );
}

export default App;
