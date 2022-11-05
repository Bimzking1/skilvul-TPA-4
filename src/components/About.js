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
  return (
    <>
        <div id="ww">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 centered">
                        <img src={ProfilePhoto} alt="Bimo"/>
                        <h1>Tentang Bimo</h1>
                        <p>Saya adalah mahasiswa Teknik Informatika di Politeknik Elektronika Negeri Surabaya (PENS).</p>
                        <p>Saya menyukai bidang pengembangan website, terutama bagian Frontend.</p>
                    
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container pt">
            <div class="row mt centered">	
                <h1>My Skills</h1><br/>
                <div class="col-lg-3 centered">
                    <img class="centered" src={HTMLImage} alt="" />
                    <p>HTML 5</p>
                </div>
                
                <div class="col-lg-3 centered">
                    <img class="centered" src={CSSImage} alt="" />
                    <p>CSS 3</p>
                </div>
                
                <div class="col-lg-3 centered">
                    <img class="centered" src={JSImage} alt="" />
                    <p>Javascript</p>
                </div>
                
                <div class="col-lg-3 centered">
                    <img class="centered" src={NodeImage} alt="" />
                    <p>Node.js</p>
                </div>
            </div>
            <div class="row mt centered">
                <div class="col-lg-3 centered">
                    <img class="centered" src={ReactImage} alt="" />
                    <p>React JS</p>
                </div>
                
                <div class="col-lg-3 centered">
                    <img class="centered" src={BootstrapImage} alt="" />
                    <p>Bootstrap</p>
                </div>
                
                <div class="col-lg-3 centered">
                    <img class="centered" src={TailwindImage} alt="" />
                    <p>Tailwind</p>
                </div>
                
                <div class="col-lg-3 centered">
                    <img class="centered" src={FigmaImage} alt="" />
                    <p>Figma</p>
                </div>
            </div>
            <div class="row mt centered">
                <div class="col-lg-3 centered">
                    <img class="centered" src={NextImage} alt="" />
                    <p>Next JS</p>
                </div>
                
                <div class="col-lg-3 centered">
                    <img class="centered" src={ExpressImage} alt="" />
                    <p>Express JS</p>
                </div>
                
                <div class="col-lg-3 centered">
                    <img class="centered" src={VueImage} alt="" />
                    <p>Vue JS</p>
                </div>
                
                <div class="col-lg-3 centered">
                    <img class="centered" src={GithubImage} alt="" />
                    <p>Github</p>
                </div>
            </div>
            
            <div class="row mt">
                <div class="col-lg-3">
                    <h4>Skill Percentage</h4><br/>
                    HTML 5
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
                            <span class="sr-only">60% Complete</span>
                        </div>
                    </div>

                    React JS
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                            <span class="sr-only">80% Complete</span>
                        </div>
                    </div>
                    
                    Next JS
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                            <span class="sr-only">95% Complete</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-3">
                    <br/><br/><br/>
                    CSS 3
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
                            <span class="sr-only">60% Complete</span>
                        </div>
                    </div>

                    Bootstrap
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{width: '50%'}}>
                            <span class="sr-only">80% Complete</span>
                        </div>
                    </div>
                    
                    Express JS
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                            <span class="sr-only">95% Complete</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-3">
                    <br/><br/><br/>
                    Javascript
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
                            <span class="sr-only">60% Complete</span>
                        </div>
                    </div>

                    Tailwind
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                            <span class="sr-only">80% Complete</span>
                        </div>
                    </div>
                    
                    Vue JS
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: '20%'}}>
                            <span class="sr-only">95% Complete</span>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-3">
                    <br/><br/><br/>
                    Node JS
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                            <span class="sr-only">60% Complete</span>
                        </div>
                    </div>

                    Figma
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
                            <span class="sr-only">80% Complete</span>
                        </div>
                    </div>
                    
                    Github
                    <div class="progress">
                        <div class="progress-bar progress-bar-theme" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
                            <span class="sr-only">95% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About