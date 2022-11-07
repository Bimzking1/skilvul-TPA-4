// Dependencies
import React from 'react'

// Assets
import Gmail from './../assets/img/contacts/gmail.png'
import Whattsapp from './../assets/img/contacts/whattsapp.png'
import Instagram from './../assets/img/contacts/instagram.png'
import Linkedin from './../assets/img/contacts/linkedin.png'

const Contact = () => {
  return (
	<div className="container pt">
		<div className="row mt">
			<div className="col-lg-6 col-lg-offset-3 centered">
				<h3>HUBUNGI SAYA</h3>
				<hr/>
				<p>Anda dapat menghubungi saya sewaktu-waktu melalui:</p>
        <div className="col-lg-12 centered">
          <a href="mailto:kingofbimo@gmail.com" target="_blank" rel="noreferrer"><img className="centered contactImage" src={Gmail} alt="" /></a>
          <a href="https://wa.me/+6287840758430" target="_blank" rel="noreferrer"><img className="centered contactImage" src={Whattsapp} alt="" /></a>
          <a href="https://www.instagram.com/bimopaul/" target="_blank" rel="noreferrer"><img className="centered contactImage" src={Instagram} alt="" /></a>
          <a href="https://www.linkedin.com/in/paulus-bimo-347b13200/" target="_blank" rel="noreferrer"><img className="centered contactImage" src={Linkedin} alt="" /></a>
        </div>
			</div>
		</div>
	</div>
  )
}

export default Contact