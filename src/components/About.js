// Dependencies
import React from 'react'
import './../assets/css/main.css'

// Assets
import ProfilePhoto from './../assets/img/Bimo.png'
import HTMLImage from './../assets/img/skills/html.png'
import CSSImage from './../assets/img/skills/css.png'
import JSImage from './../assets/img/skills/js.png'
import NodeImage from './../assets/img/skills/node.png'
import ReactImage from './../assets/img/skills/react.png'
import BootstrapImage from './../assets/img/skills/bootstrap.png'
import TailwindImage from './../assets/img/skills/tailwind.png'
import FigmaImage from './../assets/img/skills/figma.png'
import NextImage from './../assets/img/skills/next.png'
import ExpressImage from './../assets/img/skills/express.png'
import VueImage from './../assets/img/skills/vue.png'
import GithubImage from './../assets/img/skills/github.png'

const About = () => {

    const skills = [
        {
            id: 1,
            skillname: 'HTML 5',
            image: HTMLImage,
            percentage: 60
        },
        {
            id: 2,
            skillname: 'CSS 3',
            image: CSSImage,
            percentage: 80
        },
        {
            id: 3,
            skillname: 'Javascript',
            image: JSImage,
            percentage: 70
        },
        {
            id: 4,
            skillname: 'Node JS',
            image: NodeImage,
            percentage: 40
        },
        {
            id: 5,
            skillname: 'React JS',
            image: ReactImage,
            percentage: 60
        },
        {
            id: 6,
            skillname: 'Bootstrap',
            image: BootstrapImage,
            percentage: 50
        },
        {
            id: 7,
            skillname: 'Tailwind',
            image: TailwindImage,
            percentage: 60
        },
        {
            id: 8,
            skillname: 'Figma',
            image: FigmaImage,
            percentage: 80
        },
        {
            id: 9,
            skillname: 'Next JS',
            image: NextImage,
            percentage: 40
        },
        {
            id: 10,
            skillname: 'Express JS',
            image: ExpressImage,
            percentage: 30
        },
        {
            id: 11,
            skillname: 'Vue JS',
            image: VueImage,
            percentage: 20
        },
        {
            id: 12,
            skillname: 'Github',
            image: GithubImage,
            percentage: 70
        },
    ]

    return (
        <>
            <div id="ww">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 centered">
                            <img src={ProfilePhoto} alt="Bimo"/>
                            <h1>Tentang Bimo</h1>
                            <p>Saya adalah mahasiswa Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS).</p>
                            <p>Saya menyukai bidang pengembangan website, terutama bagian Frontend.</p>
                        
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container pt">
                <div className="row mt centered">	
                    <h1>My Skills</h1><br/>
                    
                    {skills.map((skill) => {
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
                    
                        {skills.map((skill) => {
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
        </>
    )
}

export default About