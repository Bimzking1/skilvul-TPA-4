// Dependencies
import React from 'react'
import './../assets/css/main.css'

const AboutSkill = (props) => {
    return (
        <div className="container pt">
            <div className="row mt centered">	
                <h1>My Skills</h1><br/>
                
                {props.skillProps.map((skill) => {
                    return(
                        <div className="col-lg-3 centered">
                            <img src={skill.image} className="centered" alt="" />
                            <p>{skill.skillname}</p>
                        </div>
                    )
                })}
            </div>
            
            <div>
                <h4>Skill Percentage</h4><br/>
                <div className="skillPercentage">
                
                    {props.skillProps.map((skill) => {
                        return(
                            <div>
                                {skill.skillname}
                                <div className="progress">
                                    <div 
                                        className="progress-bar progress-bar-theme" 
                                        role="progressbar" 
                                        aria-valuenow={`${skill.percentage}`} 
                                        aria-valuemin="0" 
                                        aria-valuemax="100" 
                                        style={{
                                            width: `${skill.percentage}%`
                                        }}>
                                        <span className="sr-only">{skill.percentage}% Complete</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutSkill