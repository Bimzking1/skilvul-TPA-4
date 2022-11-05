// Dependencies
import React from 'react'
import './../assets/css/main.css'

// Assets
import Inhotel from './../assets/img/portfolio/Inhotel.png'
import Fafifu from './../assets/img/portfolio/Fafifu.png'
import Nomdo from './../assets/img/portfolio/Nomdo.png'
import StarWars from './../assets/img/portfolio/Star Wars.png'
import Quote from './../assets/img/portfolio/Quote.png'
import Burger from './../assets/img/portfolio/Burger.png'

const Work = () => {
  return (
	<div className="container pt">
		<div className="row mt">
			<div className="col-lg-6 col-lg-offset-3 centered">
				<h3>PORTOFOLIO</h3>
				<hr/>
				<p>Ini adalah beberapa website buatan saya.</p>
			</div>
		</div>
		<div className="row mt centered">	
			<div className="col-lg-4">
				<a className="zoom green" ><img className="img-responsive" src={Inhotel} alt="" /></a>
				<a href="https://inhotel.id/" target="_blank"><p>Inhotels</p></a>
			</div>
			<div className="col-lg-4">
				<a className="zoom green" ><img className="img-responsive" src={Fafifu} alt="" /></a>
				<a href="http://fafifu.herokuapp.com/" target="_blank"><p>Fafifu Shop</p></a>
			</div>
			<div className="col-lg-4">
				<a className="zoom green" ><img className="img-responsive" src={Nomdo} alt="" /></a>
				<a href="https://nomdo.netlify.app/" target="_blank"><p>Nomdo</p></a>
			</div>
		</div>
		<div className="row mt centered">	
			<div className="col-lg-4">
				<a className="zoom green" ><img className="img-responsive" src={StarWars} alt="" /></a>
				<a href="https://bimo-star-wars-library.netlify.app/" target="_blank"><p>Star Wars Library</p></a>
			</div>
			<div className="col-lg-4">
				<a className="zoom green" ><img className="img-responsive" src={Quote} alt="" /></a>
				<a href="https://bimo-react-advice-quote.netlify.app/" target="_blank"><p>Random Quotes</p></a>
			</div>
			<div className="col-lg-4">
				<a className="zoom green" ><img className="img-responsive" src={Burger} alt="" /></a>
				<a href="https://bimo-burger-mini-app.netlify.app/" target="_blank"><p>Burger Mini App</p></a>
			</div>
		</div>
	</div>
  )
}

export default Work