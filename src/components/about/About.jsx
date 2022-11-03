import React from 'react';
import img1 from '../../img/Asset 1 4.png';
import img2 from '../../img/Asset 2 1.png';
import Rocket from '../../img/rocket.png';
import './about.css';
const About = () => {
	return (
		<div className="container  my-5 amtc">
			<div className="row my-5 d-flex justify-content-center ">
				<div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 img-div">
					<img src={img1} alt="img1" />
				</div>
				<div className="col-md-6 col-sm-12 col-lg-6 col-xl-6 text-div">
					<div>
						<p className="heading">What’s Roosters launchpad</p>
						<p className="texts">
							The Roosters launchpad is the premier Do It Yourself (DIY)
							launchpad on Solana. Through our user-friendly interface and easy
							to follow launching instructions, we simplify the overly complex
							NFT launching process. We have created a process that empowers
							project owners of all development skill levels, even if you have
							no previous development knowledge, we ensure that you will be able
							to confidently create a project, generate art, manage whitelists
							and finally mint!
							<br /> <br /> Following mint we provide free products and services
							to ensure that you are well equipped to begin your NFT project and
							establish a trusting community. We aim to provide development
							resources to handle tasks so that you have more time to focus on
							the roadmap and community!
						</p>
						<button className=" btnA mt-5">
							launch now <img src={Rocket} alt="rocket" />
						</button>
					</div>
				</div>
			</div>
			<div className="row my-5  d-flex justify-content-center">
				<div className="col-md-6 col-sm-12 text-div my-5 ">
					<div>
						<p className="heading">Stake you NFTs</p>
						<p className="texts">
							Roosters launchpad offers a variety of products and services to
							support new and emerging projects. One of our premier offerings is
							our customizable non-custodial staking. Do you have aspirations to
							create a token with specified distribution rules and a custom UI?
							Look no further! By partnering with Ragin’ Roosters we will help
							you establish your brand and create your very own ecosystem token!
						</p>
						<button className=" btnA mt-5">
							launch now <img src={Rocket} alt="rocket" />
						</button>
					</div>
				</div>
				<div className="col-md-6 col-sm-12 img-div2">
					<img src={img2} alt="img2" />
				</div>
			</div>
		</div>
	);
};

export default About;
