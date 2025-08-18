import React from "react";
import { DarkModeContext } from "../app";




export default function PopUpSideMenu(){

const[DarkMode , setDarkMode] =React.useContext(DarkModeContext)


    /** this style for the button style changer */
    const styleLeft = {
    
        left: '1px',
        backgroundColor: 'white',
        
      }
    
      const styleRight = {
        right: '1px',
        backgroundColor: 'Gray'
      }
  /** change the style of  paragraph's in light changer div */
  const darkStyle = {
    padding: '0px',
    color:DarkMode? "white" : "lightGray",
    fontSize : '10px',
    fontWeight: 'bold',
   };
   const lightStyle = {
     padding: '0px',
     color:DarkMode?  'black' :  'rgb(73, 72, 72)',
     fontSize : '10px',
    fontWeight: 'bold',
   }
  
const darkCon = {
  padding: '2px',
  width: '42px ',
  backgroundColor:DarkMode? 'black' : 'white',
  justifyContent:DarkMode ?   'end' : 'start',
  
}

function changeDarkMode(){
    setDarkMode((old)=>{
        if(old == true){
            localStorage.setItem('darkMode' , false)
            return false
        }else{
            localStorage.setItem('darkMode' , true)
            return true
        }
    }

)
    
    console.log('local storage of dark mode',localStorage.getItem('darkMode'))
} 

//this code create a toggle icon that can flip when clicking it 
let darkModFlipper =
<div className="DarkModefliperCon">
   <div className='dark-mode-container' >
       
       <div className='icon-div'  onClick={changeDarkMode} style={darkCon}>
           {!DarkMode && <p style={lightStyle}>off</p>}
           <div className='fliper-div' style={DarkMode ?   styleLeft : styleRight }></div>
       
          {DarkMode &&  <p style= {darkStyle}>on</p> }
           </div>
       
   </div>
</div>

//styling popUp side menu for dark mode 
let popUpHeight = document.documentElement.clientHeight
const sidPupUpMenuStyle = {
    height : popUpHeight ,
    backgroundColor : DarkMode?  'rgb(0, 48, 58)'  : 'rgba(255, 255, 255, 0.84)',
    borderLeft: DarkMode ? 'solid 1px rgb(17, 75, 99)' : 'none',
  
}
//create a function that trigger the click affect on <a> tag to download cv file:
 function TriggerTheLinkForDownload(){
    document.getElementsByClassName('cvLink')[0].click();
 }

 //show a pop up description above cv to 

 React.useEffect(()=>{ 
 var description = document.createElement('div')
 description.id = 'cvDescriptionPop'
 description.innerText = 'Download Logman CV'
 description.style.position = 'absolute'
 description.style.bottom = '105%'
 description.style.right = '0%'
 description.style.padding = '5px'
 description.style.border = '1px solid'
 description.style.fontSize = '10px'
 description.style.borderRadius = '4px'
 description.style.display = 'none'

 let cvContainer = document.getElementsByClassName('cv')[0]
 cvContainer.appendChild(description) 
 })
    
 
 function showCvDescription(e) {
    let description = document.getElementById('cvDescriptionPop')
    description.style.display = 'flex'
        } 
 function hideCvDescription(e){
    let description = document.getElementById('cvDescriptionPop')
    description.style.display = 'none'  
 }
// set site based on user options language 
    return(
        <div className="PopUpSideMenuContainer">
        <div style ={{width: '40%' , backgroundColor: 'none' }} id="CloseMenuTrigger"></div>
     
        <div  style = {sidPupUpMenuStyle} className="PopUpSideMenu" >
            <ul className="PopUpSideMenuList ">
                <li onMouseEnter={showCvDescription} onMouseLeave={hideCvDescription} onClick={TriggerTheLinkForDownload} class='cv' style={{color:DarkMode? '#02d9ff': '#004766' , position: "relative"}}><a href='./pic/Logman awad software engineer CV.pdf' className="cvLink"  download>CV</a></li>
                <li class='lang'>
                    <select style={{color:DarkMode? '#02d9ff': '#004766'}} >
                        <option>English</option>
                        <option>Arabic</option>
                        <option>Deutch</option>
                    </select>
                </li>
                <li class='mode' style={{color:DarkMode? '#02d9ff': '#004766'}}>Dark {darkModFlipper}</li>
            </ul>
        </div>
        
        </div>
    )
}