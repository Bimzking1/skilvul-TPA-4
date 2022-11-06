// Dependencies
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './../assets/css/main.css'

// Assets
import ProfilePhoto from './../assets/img/Bimo.png'

const BlogDetail = () => {
	
    const params = useParams()
    const [newsDetail, setNewsDetail] = useState(null)
      
    useEffect(() => {
        axios
            .get(`https://634e4141f34e1ed826869202.mockapi.io/news/${params.id}`)
            .then((res) => {
                setNewsDetail(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);
	
    console.log(newsDetail)

	return (
        <>
			{ newsDetail !== null &&
				<div id={`${newsDetail.idColor}`}>
					<div className="container">
						<div className="row">
							<div className="col-lg-8 col-lg-offset-2">
								<p className="ba"><img src={ProfilePhoto} width="50px" height="50px"/> Paulus Bimo </p>
								<p className="bd">{newsDetail.date}</p>
								<h4>{newsDetail.title}</h4>
								<p className="newsDetailImageContainer">
									<img className="img-responsive newsDetailImage" src={newsDetail.image} alt=""/>
								</p>
								<p>
									{newsDetail.text}
								</p>
								<br/>
								<hr/>
								<p><Link to='/blog'>Back</Link></p>
							</div>
						</div>
					</div>
				</div>
			}
        </>
	)
}

export default BlogDetail