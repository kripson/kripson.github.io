import React from 'react';
import './Contacts.scss';
import facebook from "./icons/facebook.png";
import instagram from "./icons/instagram.png";
import linkedin from "./icons/linkedin.png";

class Contacts extends React.Component{


	constructor(props)
	{
		super();
	}

render()
{
	if(this.props.position === "top")
	{
		var class1 = "Contacts1";

	}
	else
	{
		var class1 = "Contacts2";	
	}
	return (

 
    <div className= {class1}>
    	<a href=""><img src = {facebook} alt = "facebook"></img></a>
    	<a href=""><img src = {instagram} alt = "instagram"></img></a>
    	<a href=""><img src = {linkedin} alt = "linkedin"></img></a>
    	</div>
  );
}
  
}

export default Contacts;
