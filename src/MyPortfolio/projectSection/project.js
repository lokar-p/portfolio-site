import React from "react";
import ProjectCard from "./projectCard";
import { windowWidthSize } from "../app";
import portfolioImage from '../pic/portfolio-Image.png'
import daaletImage from '../pic/Daalet-Image.png'
import MLModelImage from '../pic/ML-model-Image.png'
import { DarkModeContext } from "../app";

export default function Projects(){
    
    const windowWidth = React.useContext(windowWidthSize)
    const [DarkMode , setDarkMode] = React.useContext(DarkModeContext)

    
    
    React.useEffect( ()=>{
       
    const projectContainer = document.getElementsByClassName('projectsContainer')[0]
        if (windowWidth < 680){
            projectContainer.classList.add('tabletResponseStyle')
        }else if (windowWidth >= 680 ) {
            if (projectContainer.classList.contains('tabletResponseStyle')){
                projectContainer.classList.remove('tabletResponseStyle')
            }
        }
       
    }, [windowWidth])
    
    return (
        <> 
        <div className = "projectHeaderContainer"><h3 className = 'projectHeder' style={{backgroundColor: DarkMode? 'rgba(11, 47, 53, .87)' : 'rgba(255, 255, 255, 0.81)'}}>projects</h3></div>
         <div className="projectsContainer">

            <ProjectCard
                projectImage={portfolioImage}
                projectName='My site'
                description = 'a portfolio that showcase my skills and my recent project '
            />
            <ProjectCard
                projectImage={daaletImage}
                projectName='Daalet Game'
                description = 'Sudanese traditional game played by tow players in six-by-six grid'
            
            />
            <ProjectCard
                projectImage={MLModelImage}
                projectName='ML Model'
                description = 'A machine learning model trying to predict conflict conflict outbreak in sudan  '
            
            />
          

         </div>
        </>
      
    )
}