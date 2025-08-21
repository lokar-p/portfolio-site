import React from 'react';
//import profilePic from '../pic/profile-pic.jpg'
import SkillSection from './skillsSection'
import Projects from '../projectSection/project';
import { windowWidthSize } from '../app';
import AboutSection from './aboutSection';
import { DarkModeContext } from '../app';  

export default function Body(){
     const windowWidth = React.useContext(windowWidthSize)
     const [DarkMode , setDarkMode] = React.useContext(DarkModeContext)
   
   console.log('%c%Dark mode context is ' , DarkMode)
     React.useEffect(()=> {
        let myImage = document.getElementsByClassName('MyImageContainer')[0]
     if(windowWidth <= 820){
        myImage.style.alignSelf = 'start'
        myImage.style.transition = '.5s'
     }else if (windowWidth > 820){
        myImage.style.alignSelf = 'center'
     }
     },[windowWidth])
     
// styling dark mode toggle button
let topPosition = document.documentElement.clientHeight - 50
let dark_mode_button_display = windowWidth > 515 ? 'flex' : 'none';

// add click event to dark mode toggle button to toggle between dark and light mode 

function DarkModeToggler(){
    setDarkMode((old)=>{
        if(old === true){
            localStorage.setItem('darkMode' , false)
            return false
        }else{
            localStorage.setItem('darkMode' , true)
            return true
        }
    })
}
const DarkModeTogglerImage = DarkMode? 'http':"https//:ww.google.com"; 
    return(
        
        
        <div className='MainContentContainer'>
            <div className='darkModeToggleButton' onClick={DarkModeToggler} style={{top: topPosition , display: dark_mode_button_display}}><img alt='' src={DarkModeTogglerImage}/></div>
            <AboutSection/>
            <SkillSection />
            <Projects />
            
        </div> 
      
        
    )
}
