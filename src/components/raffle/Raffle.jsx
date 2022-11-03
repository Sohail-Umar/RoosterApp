import React from 'react';
import './raffle.css';
import ObjectImage from '../../img/raFFEL iMAGE.svg';
import Rocket from '../../img/rocket.png';
import gLogo from '../../img/gLogo.png';

const Raffle = () => {
	return (
		<div className="container  raffle">
			<div className="row  d-flex justify-content-center">
				<div className="col-lg-6 col-md-6 d-flex justify-content-center">
					<img src={ObjectImage} alt="obj imagea" className="obj-img" />
				</div>
				<div className="col-md-6 col-sm-12 text-div my-5 ">
					<div>
						<p className="heading">Raffle House</p>
						<p className="texts">
							Raffles for unique Solana NFTs/ Sol prizes/ white lists and much
							more you say? Ragin’ Roosters hears you and is ready to put those
							ideas into action with our custom-built raffle house!Raffles for
							unique Solana NFTs/ Sol prizes/ white lists and much more you say?
							Ragin’ Roosters hears you and is ready to put those ideas into
							action with our custom-built raffle house!
						</p>
						<button className=" btnA mt-5">
							launch now <img src={Rocket} alt="rocket" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Raffle;
