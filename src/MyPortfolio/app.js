import React from 'react';
import Body from './homePage/body';
import Header from './homePage/header';
import Footer from './homePage/footer';
import './style.css'
export const windowWidthSize = React.createContext()
export const DarkModeContext = React.createContext()


export default function AppComponent(){
   // state that hold dark mode 
  const [DarkMode , setDarkMode] = React.useState(false)
  // creating state to hold window width  
  const [windowWidth , setWindowWidth] = React.useState(window.innerWidth)
  // state that holding language status
  const [language , setLanguage ] = React.useState(localStorage.getItem('language'));
  console.log(setLanguage)

  console.log('language',language)
  // changing the state immediately whenever the window width change
  React.useEffect(()=> {
   window.addEventListener('resize' , ()=>{
    setWindowWidth(window.innerWidth)
   })

   
  //set DarkMode value depending on the value stored in localStorage
  let darkmode = localStorage.getItem('darkMode')

  setDarkMode(()=>{
   if (darkmode === 'false'){
      return false
   }else if (darkmode === 'true'){
      return true
   }
  })
} , [])
  // creating context to hold the value of 

 let rootDiv = document.getElementById('root')
 console.log(rootDiv)
 rootDiv.style.backgroundColor = DarkMode ? 'rgba(0, 0, 0, 0.75)': 'rgba(255, 255, 255, 0.84)';
 rootDiv.style.borderRadius = '10px'
 let body = document.getElementsByTagName('body')[0]
 body.style.color = DarkMode? 'rgb(255, 255, 255)' :'rgba(1, 33, 54, 0.75)';
    return (
         <main>
            <DarkModeContext.Provider value = {[DarkMode , setDarkMode]}>
            <windowWidthSize.Provider value={windowWidth}> 
               <Header/>
               <Body />
               <Footer/>
            </windowWidthSize.Provider>
            </DarkModeContext.Provider>
         </main>
    )
}