import React from 'react'
import Skill from './skillCon'
import Data from './data'
import selfLearning from '../pic/Self-Learning.png'
import DetailOriented from '../pic/Blog_Attention_To_Detail.jpg'
import ProblemSolving from '../pic/Problem-Solving-Skills.jpg'
import { windowWidthSize } from '../app'
import { DarkModeContext } from '../app'

export const BoplState = React.createContext()

export default function SkillsSection(){
 const [scoreBoplState  , setScoreBoplState] = React.useState(false)
 const windowWidth = React.useContext(windowWidthSize)
 const [DarkMode , setDarkMode] = React.useContext(DarkModeContext)
 

// get the skill data from data.js file
  const skill = Data.map((skill)=>{ // mapping over each skill and pass skill data to <Skill/> component
    return(
    <BoplState.Provider  value={[scoreBoplState , setScoreBoplState]}>
        <Skill
    id = {skill.Id}
    src = {skill.src}
    name = {skill.name}
    score = {skill.score}
    DarkMode = {DarkMode}
    
    />
    </BoplState.Provider>
    )
  })

 function AddSoftSkillDescription (e) {
  var line = document.createElement('div')
  line.classList.add('skill_description_line')
    
  if(e.target.parentElement.children.length <=2 && windowWidth >510){
     e.target.parentElement.appendChild(line)
     
  }
  setTimeout(()=>{
    line.style.height = '100px'
    line.style.transition = '.8s'
  } , 200)
 } 
 


    return ( 
        <div className='skillSection'>

        <div className = "SkillHeaderContainer"><h3 className='skillsHeader' style={{backgroundColor: DarkMode? 'rgba(11, 47, 53, .87)' : 'rgba(255, 255, 255, 0.81)'}}>    Skills</h3></div>
            <div className='allSkills'>
                    <div className='techSkillsContainer' style={{backgroundColor : DarkMode? 'rgba(0, 48, 58, 0.67)': 'rgba(255, 255, 255, 0.84)' , color : DarkMode ? 'white' : 'inherit' }}> 
                           {skill}
                    </div>              
                    
                    <div className='soft_skills'>
                    <div  className='DetOrientatedContainer'> <p> <span style={{color : DarkMode? 'rgb(63, 207, 255)' : 'rgba(3, 20, 35, 0.84)'}}>Detail-Oriented </span>I pay close attention to the finer details in my work, ensuring accuracy and efficiency.</p> <img src= {DetailOriented} className='DetOriented' alt='detail-orinted image' onMouseOver={AddSoftSkillDescription}/></div>
                    <div className='slfLearningContainer'> <p> <span style={{color : DarkMode? 'rgb(63, 207, 255)' : 'rgba(3, 20, 35, 0.84)'}}>self-learning </span>I am a self-motivated learner who continuously seeks knowledge to stay ahead in the tech industry.</p> <img src= {selfLearning} className='slfLearning' alt = 'self-learning image' onMouseOver={AddSoftSkillDescription}/></div> 
                    <div className='ProbSolvingContainer'> <p> <span style={{color : DarkMode? 'rgb(63, 207, 255)' : 'rgba(3, 20, 35, 0.84)'}}>problem solving </span>I excel at analyzing complex challenges and finding innovative solutions.</p> <img  src= {ProblemSolving} className='ProbSolving' alt = 'problem solving image' onMouseOver={AddSoftSkillDescription}/></div>
                    </div> 

            
            </div>   

            
        </div>
    )
}

