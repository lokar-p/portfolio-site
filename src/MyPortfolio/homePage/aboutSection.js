import React from 'react';
import profilePic from '../pic/thumbnails-profile-pic.jpg'
//import fullSizeProfilePic from '../pic/profile-pic.jpg'
import { windowWidthSize } from '../app';
import { DarkModeContext } from '../app';

export default function AboutSection(){
    const windowWidth = React.useContext(windowWidthSize)
    const [DarkMode , setDarkMode] = React.useContext(DarkModeContext)
    console.log(setDarkMode);
    return ( 
        <div className = 'aboutSection'> 
           {windowWidth >=820 && <div className='description1'>
                <h2>logman.A</h2>
                <div><p style={{backgroundColor: DarkMode ? 'rgb(11 48 53)': '#e8fcff'}}>My name is Logman Awad. I am a web developer passionate about creating innovative solutions, building dynamic user interfaces with React, and exploring artificial intelligence. I am dedicated to continuous learning and aspire to become an expert in React development  </p></div> 
            </div>}
            
            <div>
                {/* <img src={profilePic} alt='logman profile image ' className='MyImageContainer'/> */}
                
                 <img src={profilePic} alt='logman' className='MyImageContainer' />
                
                
            </div>
            <div className='description2'>
             <h2>{windowWidth >= 820 ? `Web developer` : `Logman.A`}</h2>
             <div><p style={{backgroundColor: DarkMode ? 'rgb(11 48 53)': '#e8fcff'}}>{windowWidth >= 820 ? `I am experienced` : `My name is Logman Awad. I am a web developer with experience`}  in building responsive websites, creating dynamic user interfaces using React, and developing applications that solve real-world problems. My portfolio showcases my skills and dedication to continuous learning</p></div>
            </div>
        </div>
    )
}