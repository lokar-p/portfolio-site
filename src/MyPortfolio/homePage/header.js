import React from 'react';
import sitLogo from '../pic/sitlogo1.png';
import {windowWidthSize} from '../app';
import PopUpSideMenu from './popUpMenu'
import { DarkModeContext } from '../app';
import { click } from '@testing-library/user-event/dist/click';





export default function Header(){
    const [IsMenuButton , setIsMenuButton] = React.useState(false)
    const windowWidth   = React.useContext(windowWidthSize)
    const [scrollHight  , setScrollHight ] = React.useState(window.scrollY)
    const [popUpMenuToggle , setPopUpMenu] = React.useState(false)
    const [DarkMode , setDarkMode] = React.useContext(DarkModeContext)

    React.useEffect(()=>{
        window.addEventListener('scroll' , ()=>{
            setScrollHight(()=>window.scrollY)
        })
        
        
    // calculating the changing percentage of scroll 
    var scrollHeightWithoutClinte = document.documentElement.scrollHeight - document.documentElement.clientHeight
    var scrollChangingPercentage = window.scrollY/scrollHeightWithoutClinte*100
// changing the width of header bottom beasd on the change of the scroll 
    const headerBottom = document.getElementsByClassName('ScrollTrackerLine')[0]
    
    headerBottom.style.width = `${scrollChangingPercentage}%`
    
    
    } , [window.scrollY])
 
    React.useEffect( ()=>{
     // set isMenuButton to false or true depend on  the screen size , use to toggle between menuIcon and reguler navigation bar
       
     // adding resize  event to window to get the size of it
   
        //change the IsMenuButton to true or false based on screen size
        if (windowWidth <= 515){
            setIsMenuButton(true)
            
        }else if (windowWidth > 515){
            setIsMenuButton(false)
            setPopUpMenu(false)//return popUpMenuToggle to its default value to prevent close icon from appear changing window size 
        }
      
    }, [windowWidth])
  
    //add effect when mouse enter  menuIcon 
    function addMouseEffect(e){
       
        e.target.style.backgroundColor = 'rgba(178, 195, 200, 0.479)'
      
    }
    //remove mouse effect when mouse leave
    function DeleteMouseEffect(e){
        
        e.target.style.backgroundColor = 'inherit'
       
    } 
  
    // create a function that handel click on each navigator to navigate the location of it's content
    function NavigateTo(e){
        if(e.target.classList.contains('skillsNavigator')){
            
            window.scrollTo(0 ,380)
            var skillsNav = document.getElementsByClassName('skillsNavigator')[0]
            skillsNav.style.backgroundColor = 'green'
            e.target.style.backgroundColor = 'lightblue'
             e.target.nextElementSibling.style.backgroundColor = 'initial'

        }else if (e.target.classList.contains('projectsNavigator')){
            window.scrollTo(0 ,1300)
            e.target.style.backgroundColor = 'lightblue'
            e.target.previousElementSibling.style.backgroundColor = 'initial'

        }
    }
    /**changing the menu display to show the side menu when clicking on menu button   */
   
    ///////
    
    const menuIcon = popUpMenuToggle ? <span onMouseEnter={addMouseEffect} onMouseLeave={DeleteMouseEffect} style = {{color : DarkMode ?'#02d9ff' : '#004766' ,cursor: 'pointer' , margin: '10px', padding: '5px', borderRadius : '100%'}} onClick={changMenuDisplay} class="material-symbols-outlined">
    close</span>:  <div class="menuIcon" onMouseEnter={addMouseEffect} onMouseLeave={DeleteMouseEffect} onClick={changMenuDisplay}> 
                            <div style={{borderColor: DarkMode? '#02d9ff' : '#004766'}}></div>
                            <div style={{borderColor: DarkMode? '#02d9ff' : '#004766'}}></div>
                            <div style={{borderColor: DarkMode? '#02d9ff' : '#004766'}}></div>
                       </div>
     
     function changMenuDisplay(){
        setPopUpMenu((old)=>!old)
        let PopUpMenu = document.getElementsByClassName('PopUpSideMenuContainer')[0]
        let MenuLest = document.getElementsByClassName('PopUpSideMenuList')[0]
        if(PopUpMenu != undefined){
          PopUpMenu.style.display = popUpMenuToggle? 'none' : 'flex';

        }       
    }



   //disapering the side bar when clicking outside the bar 
   React.useEffect(()=>{
     
    
       try {

        var closeIconTrigger = document.getElementById('CloseMenuTrigger')
        closeIconTrigger.addEventListener('click' , ()=>{
        let close = document.getElementsByClassName('material-symbols-outlined')[0]
        if(close !== undefined){
            close.click()
        }
    
    }) 
       }catch (err){
        console.log(err)

       }
      
   } , [popUpMenuToggle])
  

 
    let menuContent = IsMenuButton ?  [menuIcon] : <>
    <li className='skillsNavigator' onClick={NavigateTo}> Skills </li>
    <li  className='projectsNavigator' onClick={NavigateTo}> Projects </li>
    <li  className='cvNavigator'> CV </li>   
    <li className='shareImageDiv'> <img src="https://img.icons8.com/flat-round/50/share--v1.png" alt="share--v1"/></li>
     </>
   
    return (   
        <nav className='headerContainer'  style = {{backgroundColor : DarkMode?  'rgba(0, 48, 58, 0.94)' : 'rgba(255, 255, 255, 0.84)'}}>
            <span className= 'ScrollTrackerLine' style={{backgroundColor: DarkMode? 'rgb(11, 171, 245)' : 'rgb(22, 97, 132)'}}></span>
            <ul className='headerlistFather' style={{color: DarkMode? 'white' : '#004766'}}>
                <li className='sitLogo'><img src={sitLogo}/></li>
                {menuContent}
            </ul>
             {windowWidth <=515 && <PopUpSideMenu /> }
        </nav>
    )
}