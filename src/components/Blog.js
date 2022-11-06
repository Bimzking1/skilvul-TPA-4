// Dependencies
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './../assets/css/main.css'

// Assets
import ProfilePhoto from './../assets/img/Bimo.png'

const Blog = () => {

    const [news, setNews] = useState([])
      
    useEffect(() => {
        axios
            .get(`https://634e4141f34e1ed826869202.mockapi.io/news`, {})
            .then((res) => {
                setNews(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
    }, []);
    
    console.log(news)

    return (
        <>
            {news.map((newsData, index) => {
                return(
                    <div id={`${newsData.idColor}`} key={index}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-lg-offset-2">
                                    <p className="ba"><img src={ProfilePhoto} width="50px" height="50px"/> Paulus Bimo </p>
                                    <p  className="bd">{newsData.date}</p>
                                    <h4>{newsData.title}</h4>
                                    <p>
                                        {newsData.text}
                                    </p>
                                    <p><Link to={`/blogDetail/${newsData.id}`}>Lanjutkan membaca...</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Blog