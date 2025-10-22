import React from 'react';
import { DarkModeContext } from '../app';
import Open_In_New_icon from '../pic/open_in_new_icon.png'
import GitHubIcon from '../pic/GitHub-icon.png'


function ProjectCard(props){
    const [DarkMode , setDarkMode] = React.useContext(DarkModeContext)
    console.log(setDarkMode)
    return (
        <div className='projectCard' style={{ color : DarkMode ? 'white' : 'inherit' }}>
            <div style={{backgroundColor: DarkMode? '#004766': 'rgb(200, 239, 253)'}}>
                
                    <a href={props.linkToProjectSite} target='_blank'  rel="noopener noreferrer"> <img alt='' className='open-in-new-icon' src={Open_In_New_icon}/></a>
                    <a href={props.linkToGitHubRepo} target='_blank' rel="noopener noreferrer"> <img alt='' className='GitHub-icon' src={GitHubIcon}/></a>
              
                <div className='projctHeaderContainer'>
                    <img alt='' src={props.projectImage} className='projectImageClass'/>
                    <h3 className= 'projectNameClass'>{props.projectName}</h3>
                </div>
                <p>{props.description}</p>

            </div>
          

        </div>
    )
}

export default ProjectCard