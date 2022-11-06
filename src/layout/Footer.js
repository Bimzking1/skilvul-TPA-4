import React from 'react'
import './../assets/css/main.css'

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h4>MY ADDRESS</h4>
            <p>
              Perumahan Kebraon Indah Permai I-25,<br/>
              Surabaya, Indonesia.
            </p>
          </div>
          
          <div className="col-lg-4">
            <h4>My Links</h4>
            <p>
              <a href="https://www.linkedin.com/in/paulus-bimo-347b13200/" target="_blank">Linkedin</a><br/>
              <a href="https://www.instagram.com/bimopaul/" target="_blank">Instagram</a><br/>
              <a href="https://github.com/Bimzking1" target="_blank">Github</a>
            </p>
          </div>
          
          <div className="col-lg-4">
            <h4>My Motto</h4>
            <p>Be Simple</p>
          </div>
        
        </div>
      
      </div>
    </div>
  )
}

export default Footer