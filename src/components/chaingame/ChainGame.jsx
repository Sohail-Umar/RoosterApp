import React from 'react';
import ChainBg from '../../img/Group 2.png';
import './chaingame.css';
import gameImg1 from '../../img/Frame 66.png';
import gameImg2 from '../../img/Frame 67.png';
import gameImg3 from '../../img/Frame 68.png';
import gameImg4 from '../../img/Frame 69.png';
const ChainGame = () => {
	return (
		<section className="section-chain-bg">
			<img src={ChainBg} alt="background image" className="section-chain-bg1" />
			<div className="container ">
				<div className="row ">
					<div className="col-lg-12 headings mtc">
						<h1>Chain Games</h1>
						<p>
							Sure, staking is one way to distribute tokens to your faithful
							community but shouldn’t there be a more fun way? We completely
							agree, and have perfected our offerings of fun, interactive chain
							games to allow wagering in your native coin!
						</p>
					</div>
				</div>
				<div className="row my-5 d-flex justify-content-center align-item-center">
					<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
						<img src={gameImg1} alt=" game" className="gameImg1" />
					</div>
					<div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
						<div className="row">
							<img src={gameImg2} alt="game" className="gameImg2" />
						</div>
						<div className="row mt-5 ">
							<div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
								<img src={gameImg3} alt="game" className="gameImg3" />
							</div>
							<div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
								<img src={gameImg4} alt="game" className="gameImg4" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ChainGame;
