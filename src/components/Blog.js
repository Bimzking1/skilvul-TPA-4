// Dependencies
import React from 'react'
import './../assets/css/main.css'
import { Link } from 'react-router-dom'

// Assets
import ProfilePhoto from './../assets/img/Bimo.png'

const Blog = () => {
  return (
    <>
        <div id="grey">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <p><img src={ProfilePhoto} width="50px" height="50px"/> <ba>Paulus Bimo</ba></p>
                        <p><bd>Oktober 7, 2022</bd></p>
                        <h4>Hard Days Away From Home</h4>
                        <p>
                            Manchester United kembali memenangi pertandingan di Europa League dengan susah payah setelah bertandang ke Siprus, homebase dari tim Omonia Nikosia. 
                            Pertandingan dimenangi MU dengan skor 3-2 dan bahkan mereka tertinggal lebih dahulu. 
                            Taktik penguasaan yang diusung Erik ten Hag kurang mampu diselesaikan dengan baik oleh tim, 
                            terutama oleh si racun, Cristiano Ronaldo.
                        </p>
                        <p><Link to="blogDetail">Lanjutkan membaca...</Link></p>
                    </div>

                </div>
            </div>
        </div>
        <div id="white">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2">
                        <p><img src={ProfilePhoto} width="50px" height="50px"/> <ba>Paulus Bimo</ba></p>
                        <p><bd>September 16, 2022</bd></p>
                        <h4>The Mythic Pursuit</h4>
                        <p>Akhirnya setelah 1,5 tahun main Mobile Legends: Bang-Bang, saya mencapai tier Mythic untuk pertama kalinya. Pendakian ke Mythic kali ini terlihat lebih mudah dari season-season sebelumnya karena saya selalu bermain secara party dan jarang mengajak public ikut main.</p>
                        <p>Season ini saya mencapai tier Mythic dengan bermain sebagai Roamer menggunakan bermacam hero seperti Atlas, Akai, hingga Baxia.</p>
                        <p><a href="blog02.html">Lanjutkan membaca...</a></p>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Blog