import React from 'react'
import ProfilePhoto from './../assets/img/Bimo.png'
import './../assets/css/main.css'

const Home = () => {
  return (
    <div id="ww">
        <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 centered">
            <img src={ProfilePhoto} alt="Stanley"/>
            <h1>Halo, nama saya Bimo!</h1>
            <p>
              Perkenalkan, saya Paulus Bimo Satrio Aji, tapi kalian boleh panggil saya Bimo.
              Saya adalah seorang Frontend Developer yang menyukai video games.
            </p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Home