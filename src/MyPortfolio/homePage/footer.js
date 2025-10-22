import React from 'react';
import { DarkModeContext } from '../app';
import xIcon from '../pic/twitter.png'
import githubIcon from '../pic/github.png'
import linkedinIcon from '../pic/linkedin.png'
import telegramIcon from '../pic/telegram.png'


function sizeBackLinkIcon(e){
    e.target.style.boxShadow = 'none'
  
}
export default function Footer(){
    const [DarkMode , setDarkMode] = React.useContext(DarkModeContext)
    console.log(setDarkMode)

    function reSizeLinkIcon(e){
    
        e.target.style.boxShadow =DarkMode?  '0px 2px 4px 1px rgba(187, 248, 255, 0.58)': '0px 2px 4px 1px rgba(10, 10, 10, 0.36)';
    

    }
    return (
        <footer>
            <div className='socialMediaLinks'> 
                 <a href='https://x.com/loqman_AA' target='_blank' rel='noopener noreferrer'><img alt=''  onMouseLeave={sizeBackLinkIcon} onMouseEnter={reSizeLinkIcon} src ={xIcon}/> </a> 
                <a href='https://github.com/lokar-p' target='_blank' rel='noopener noreferrer'><img alt='' onMouseLeave={sizeBackLinkIcon} onMouseEnter={reSizeLinkIcon}  src={githubIcon}/></a> 
                 <a href='https://www.linkedin.com/in/loqman-awad-982469207/' target='_blank' rel='noopener noreferrer'><img alt='' onMouseLeave={sizeBackLinkIcon} onMouseEnter={reSizeLinkIcon} src={linkedinIcon}/></a> 
                  <a href='https://t.me/loqmanAA' target='_blank' rel='noopener noreferrer'><img alt='' onMouseLeave={sizeBackLinkIcon} onMouseEnter={reSizeLinkIcon} src={telegramIcon}/></a> 
        
            </div>
             <p>© 2025 Logman</p>
        </footer>
    )
}