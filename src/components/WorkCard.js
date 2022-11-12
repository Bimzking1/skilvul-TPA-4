// Dependencies
import React from 'react'
import './../assets/css/main.css'

const WorkCard = (props) => {
    return (
        <div className="col-lg-4">
            <a className="zoom green" >
                <img className="img-responsive" src={props.workProps.image} alt="" />
            </a>
            <a href={`${props.workProps.links}`} target="_blank" rel="noreferrer">
                <p>{props.workProps.projectname}</p>
            </a>
        </div>
    )
}

export default WorkCard