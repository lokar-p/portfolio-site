import React from "react";
import {BoplState} from './skillsSection.js'


export default function Skill(props){

    const [bobbleON  , setbobbleON] = React.useContext(BoplState)
   
    //creating a bobble using span tag and add class and text to it
    const bobble = document.createElement('span')
    bobble.classList.add('scoreBobble')
    bobble.textContent = props.score+ '%'
    
   
    // function scoreBobbleON(e){//showing the score bobble when mouse inter the skill image
      
    //     setTimeout(()=>{
    //         e.target.parentElement.appendChild(bobble)
    //     } , 1000)
    //     e.target.parentElement.appendChild(bobble)
    //      e.target.style.boxShadow = '1px 2px 4px 4px rgba(53, 190, 248, 0.36)'
    //     //  e.target.style.display = 'absolute'
    //     //  e.target.style.width = '90%'
    //     //  e.target.style.height = '90%'


    // }
    // function scoreBobbleOFF(e){ //remove score boble when mouse leave
    //     setTimeout(()=>{
    //         e.target.parentElement.removeChild(bobble)
    //     } , 1000)
    //    e.target.style.boxShadow = ''
    //     // e.target.style.width = ''
    //     //  e.target.style.height = ''
      

    //  }
     
  console.log(props.DarkMode)
    return(
        <div className="skill" >
            <div style = {{display : 'flex' , position: 'relative' , width:'60%' , height: '60%'}}>
            <img id = {props.id} src={props.src}className="skillLogo" /**onMouseOver={scoreBobbleON} onMouseLeave= {scoreBobbleOFF}*/ bbb/>
            
            </div>
            <h3 style={{color :props.DarkMode? 'white' : 'inherit'}}>{props.name}</h3>
        </div>
    )
}