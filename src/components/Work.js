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

    const works = [
        {
            id: 1,
            projectname: 'Inhotels',
            image: Inhotel,
			links: "https://inhotel.id/"
        },
        {
            id: 2,
            projectname: 'Fafifu Shop',
            image: Fafifu,
			links: "http://fafifu.herokuapp.com/"
        },
        {
            id: 3,
            projectname: 'Nomdo',
            image: Nomdo,
			links: "https://nomdo.netlify.app/"
        },
        {
            id: 4,
            projectname: 'Star Wars Library',
            image: StarWars,
			links: "https://bimo-star-wars-library.netlify.app/"
        },
        {
            id: 5,
            projectname: 'Random Quotes',
            image: Quote,
			links: "https://bimo-react-advice-quote.netlify.app/"
        },
        {
            id: 6,
            projectname: 'Burger Mini App',
            image: Burger,
			links: "https://bimo-burger-mini-app.netlify.app/"
        },
	]

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
				{works.map((work) => {
					return(
						<div className="col-lg-4">
							<a className="zoom green" ><img className="img-responsive" src={work.image} alt="" /></a>
							<a href={`${work.links}`} target="_blank" rel="noreferrer"><p>{work.projectname}</p></a>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Work