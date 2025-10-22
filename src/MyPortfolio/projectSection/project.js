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

    console.log(setDarkMode)
    
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
                linkToProjectSite = 'https://logmanmorwih.netlify.app/'
                linkToGitHubRepo = 'https://github.com/lokar-p/portfolio-site'
                projectImage={portfolioImage}
                projectName='My site'
                description = 'a portfolio that showcase my skills and my recent project '
            />
            <ProjectCard
                linkToProjectSite = 'https://daalet.netlify.app/'
                linkToGitHubRepo = 'https://github.com/lokar-p/Daalet-game-project'
                projectImage={daaletImage}
                projectName='Daalet Game'
                description = 'Sudanese traditional game played by tow players in six-by-six grid'
            
            />
            <ProjectCard
                linkToProjectSite = ''
                linkToGitHubRepo = ''
                projectImage={MLModelImage}
                projectName='ML Model'
                description = 'A machine learning model trying to predict conflict conflict outbreak in sudan  '
            
            />
          

         </div>
        </>
      
    )
}