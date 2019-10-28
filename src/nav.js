import React,{Component} from 'react';
import "./nav.scss";
import homelogo from "./icons/home.png";
import hello from "./icons/hello.png";
import project from "./icons/project.png";
import activities from "./icons/activities.png";
import contact from "./icons/contact.png";

function Nav() {
  return (
    <div className="Nav">
    	<ul>
    	<li>
    		<div className ="inner-container">
    		<span className = "show">
    		<img src = {homelogo} alt = "Home icon"></img>
    		</span>
    		<span className = "hidden">
    		<p>Home</p>
    		</span>
    		</div>
    		

    	</li><li>
            <a href = "#aboutme">
    		<div className ="inner-container">
    		<span className = "show">
    		<img src = {hello} alt = "Home icon"></img>
    		</span>
    		<span className = "hidden">
    		<p>Intro</p>
    		</span>
    		</div>
            </a>
    		

    	</li><li>
    		<div className ="inner-container">
    		<span className = "show">
    		<img src = {project} alt = "Home icon"></img>
    		</span>
    		<span className = "hidden">
    		<p>Projects</p>
    		</span>
    		</div>
    		

    	</li><li>
    		<div className ="inner-container">
    		<span className = "show">
    		<img src = {activities} alt = "Home icon"></img>
    		</span>
    		<span className = "hidden">
    		<p>Activites</p>
    		</span>
    		</div>
    		

    	</li><li>
    		<div className ="inner-container">
    		<span className = "show">
    		<img src = {contact} alt = "Home icon"></img>
    		</span>
    		<span className = "hidden">
    		<p style = {{lineHeight:'80%'}}>Contact me</p>
    		</span>
    		</div>
    		

    	</li>
    	</ul>

    </div>
  );
}

export default Nav;
