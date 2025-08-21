import React from 'react';
import { DarkModeContext } from '../app';


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
                 <a href='https://x.com/loqman_AA'><img alt=''  onMouseLeave={sizeBackLinkIcon} onMouseEnter={reSizeLinkIcon} src = 'https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000'/> </a> 
                <a href='https://github.com/lokar-p'><img alt='' onMouseLeave={sizeBackLinkIcon} onMouseEnter={reSizeLinkIcon}  src='https://img.icons8.com/?size=100&id=62856&format=png&color=000000'/></a> 
                 <a href='https://www.linkedin.com/in/loqman-awad-982469207/'><img alt='' onMouseLeave={sizeBackLinkIcon} onMouseEnter={reSizeLinkIcon} src='https://img.icons8.com/?size=100&id=qNUNvR9aEWql&format=png&color=000000'/></a> 
                  <a href='https://t.me/loqmanAA'><img alt='' onMouseLeave={sizeBackLinkIcon} onMouseEnter={reSizeLinkIcon} src='https://img.icons8.com/?size=100&id=oWiuH0jFiU0R&format=png&color=000000'/></a> 
        
            </div>
             <p>© 2025 Logman</p>
        </footer>
    )
}