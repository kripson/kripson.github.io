import React from 'react';
import './Doorpart.scss';
import activities from "./icons/activities.png";
import project from "./icons/project.png";

class Doorpart  extends React.Component {



    constructor()
    {
        super();
    }


    render()
    {
        if(this.props.position === "left")
        {
            var doorknob = <div><img src = {activities} alt = "Home icon"></img></div>;
            var classname = "Doorpart left";
            var doorpart =[<div></div>,<div></div>,doorknob];

           
                                
                                
                                
                                
                        
        }
        else
        {
            var doorknob = <div><img src = {project} alt = "Home icon"></img></div>
            var classname = "Doorpart right";
            var doorpart =[doorknob,<div></div>,<div></div>];
        }
        


  return (
    <div className = {classname}>
        {doorpart}
    </div>
    
  );
}
}

export default Doorpart;
