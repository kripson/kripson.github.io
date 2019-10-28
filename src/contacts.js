import React from 'react';
import './Contacts.scss';
import facebook from "./icons/facebook.png";
import instagram from "./icons/instagram.png";
import linkedin from "./icons/linkedin.png";

function Contacts() {
  return (

 
    <div className="Contacts">
    	<a href=""><img src = {facebook} alt = "facebook"></img></a>
    	<a href=""><img src = {instagram} alt = "instagram"></img></a>
    	<a href=""><img src = {linkedin} alt = "linkedin"></img></a>
    	</div>
  );
}

export default Contacts;
