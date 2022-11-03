import React from 'react';
import bg1 from '../../img/Frame 42.png';
import OBJECT from '../../img/OBJECTS.png';
import Rocket from '../../img/rocket.png';
import LaunchPad from '../launchpad/LaunchPad';
import Navbar from '../navbar/Navbar';
import './hero.css';

const Hero = () => {
	return (
		<>
			<Navbar />
			<div className="container-fluid hero">
				<img src={bg1} alt="BG" className=" bg1" />
				<div className="row ">
					<div className=" col-lg-6 col-md-6 col-sm-12 text-div">
						<div className="">
							<h1 className="text1">
								Discover, create, <br /> generate,
								<br /> Collect & Sell
							</h1>
							<button className=" btn1">
								explore now <img src={Rocket} alt="rocket" />
							</button>
						</div>
					</div>

					<div className=" col-lg-6 col-sm-12 col-md-6  ">
						<div className="avtar-img">
							<img src={OBJECT} alt="avtar" className="" />
						</div>
					</div>
				</div>
			</div>
			<LaunchPad />
		</>
	);
};

export default Hero;
