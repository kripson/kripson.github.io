import React from 'react';
import './Showcase.scss';
import projects from "./icons/projects.png";
import activities from "./icons/sactivities.png";
import medu1 from "./icons/m_edu1.jpg";
import medu2 from "./icons/m_edu2.jpg";
import medu3 from "./icons/m_edu3.jpg";
import medu4 from "./icons/m_edu4.jpg";

class Showcase  extends React.Component{

  constructor()
  {
    super();
    this.state = {
      projecttext :"",
      activitiestext: ""
    };
  }

  projecttext = "PROJECTS";
  activitiestext = "ACTIVITIES";
  i = 0;
  time = 250;

  change(time)
  {
    setTimeout(()=>
      {
        if(this.state.projecttext !== "PROJECTS")
        {
          
          this.setState({projecttext : this.state.projecttext + this.projecttext[this.i]});
          
          
        }

        if(this.state.activitiestext !== "ACTIVITIES")
        {
          this.setState({activitiestext : this.state.activitiestext + this.activitiestext[this.i]});
          this.i++;
          this.time += 250;
          this.change(this.time);
        }
        

      },time);
    
  }




  render()
  {

    this.change(this.time);
  return (
    <div id = "showcase"  className="showcase">
    <div className ="showinnerBox">
      <div id = "projects">
      <div><h1>{this.state.projecttext}</h1><p>To see what I have been up to <br></br><a href = "">Click here</a></p></div>
      
      <div><img  src = {projects} ></img></div>
      </div>
      <div id = "activities">
      <div>
      <img style = {{transform:'translateX(-100px)'}} src = {medu1} ></img>
      <img style = {{transform:'translateX(100px)'}} src = {medu2} ></img>
      <img style = {{transform:'translateY(-100px)'}} src = {medu3} ></img>
      </div>
      <div><h1>{this.state.activitiestext}</h1><p>To see what I have been up to <br></br><a href = "">Click here</a></p></div>
      
      
      </div>
       
    
    </div>
    </div>
  );
  }
  
}

export default Showcase;
