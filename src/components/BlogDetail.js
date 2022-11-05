// Dependencies
import React from 'react'
import './../assets/css/main.css'

// Assets
import ProfilePhoto from './../assets/img/Bimo.png'
import BlogDetailPost from './../assets/img/ronaldo.png'

const BlogDetail = () => {
  return (
	<div id="white">
	    <div class="container">
			<div class="row">
				<div class="col-lg-8 col-lg-offset-2">
					<p><img src={ProfilePhoto} width="50px" height="50px"/> <ba>Paulus Bimo</ba></p>
					<p><bd>Oktober 7, 2022</bd></p>
					<h4>Hard Days Away From Home</h4>
					<p><img class="img-responsive" src={BlogDetailPost} alt=""/></p>
					<p>
						Manchester United kembali memenangi pertandingan di Europa League dengan susah payah setelah bertandang ke Siprus, homebase dari tim Omonia Nikosia. 
						Pertandingan dimenangi MU dengan skor 3-2 dan bahkan mereka tertinggal lebih dahulu. 
						Taktik penguasaan yang diusung Erik ten Hag kurang mampu diselesaikan dengan baik oleh tim, 
						terutama oleh si racun, Cristiano Ronaldo, yang hanya mencatatkan 1 tembakan ke gawang dari 8 kesempatan.
					</p>
					<p>
						Marcus Rashford tampil heroik dengan torehan 2 gol, dilengkapi oleh Anthony Martial dengan gol spektakulernya dari luar kotak penalti.
					</p>
					<br/>
					<hr/>
					<p><a href="blog.html"># Back</a></p>
				</div>

			</div>
	    </div>
	</div>
  )
}

export default BlogDetail