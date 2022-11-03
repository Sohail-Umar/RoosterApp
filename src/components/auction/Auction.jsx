import React from 'react';
import './auction.css';
import lArrow from '../../img/Line 1.png';
import rArrow from '../../img/Line 2.png';
import auctionBga from '../../img/auctionBG.png';
import auctionBg1 from '../../img/Vector 9.png';
import btnBg from '../../img/Vector 12.png';
import cardImg from '../../img/image 8.png';
import rLogo from '../../img/rLogo.png';
import gLogo from '../../img/gLogo.png';
import Carousel from '../carousel/Carousel';
const Auction = () => {
	return (
		<section className="section-bg">
			<img src={auctionBga} alt="background image" className="section-bg1" />
			<div className="container">
				<div className="row ">
					<div className="col-lg-12 headings-auction">
						<h1>NFT Auction House</h1>
						<p>
							Now that you have your ecosystem token and distribution squared
							away, Ragin Roosters will help you put them to use with a
							custom-built auction house immediately providing utility for that
							ecosystem token.
						</p>
					</div>
					<div className="row mtc">
						<div className="col   d-flex justify-content-end align-item-end ">
							<div className="button-relative ">
								<div></div>
								<div className="arrow-btn">
									<a href="#">Prev</a>
									<a href="#">Next</a>
									{/* <button
										// className="carousel-control-prev"
										type="button"
										data-bs-target="#carouselExampleIndicators"
										data-bs-slide="prev"
									>
										<span
											className="carousel-control-prev-icon"
											aria-hidden="true"
										></span>
										<span className="visually-hidden">Previous</span>
									</button> */}
									{/* <button
										// className="carousel-control-next"
										type="button"
										data-bs-target="#carouselExampleIndicators"
										data-bs-slide="next"
									>
										<span
											className="carousel-control-next-icon"
											aria-hidden="true"
										></span>
										<span className="visually-hidden">Next</span>
									</button> */}
								</div>
							</div>
						</div>
						<div className="auction-div">
							<div className="auction-div2">
								{/* <img src={auctionBg} alt="auction bg" className="auction-bg" /> */}
							</div>
							{/* <div className="card-div">
								<div className="card">
									<img
										className="card-img-top "
										src={cardImg}
										alt="Card imagea"
									/>
									<div className="card-body1 d-flex justify-content-between ">
										<p className="card-title">Stoned Ape Crew</p>
										<img src={gLogo} alt="logo" className="mt-0" />
									</div>
									<div className="card-body2 d-flex justify-content-between  ">
										<p>ends in</p>
										<p>3d:23:02</p>
									</div>
									<div className="view-btn">
										<a href="#" className="btn btn-primary w-100">
											view auction
										</a>
									</div>
								</div>
								<div className="card">
									<img
										className="card-img-top "
										src={cardImg}
										alt="Card imagea"
									/>
									<div className="card-body1 d-flex justify-content-between  ">
										<p className="card-title">Stoned Ape Crew</p>
										<img src={gLogo} alt="logo" className="mt-0" />
									</div>
									<div className="card-body2 d-flex justify-content-between  ">
										<p>ends in</p>
										<p>3d:23:02</p>
									</div>
									<div className="view-btn">
										<a href="#" className="btn btn-primary w-100">
											view auction
										</a>
									</div>
								</div>
								<div className="card">
									<img
										className="card-img-top "
										src={cardImg}
										alt="Card imagea"
									/>
									<div className="card-body1 d-flex justify-content-between ">
										<p className="card-title">Stoned Ape Crew</p>
										<img src={gLogo} alt="logo" className="mt-0" />
									</div>
									<div className="card-body2 d-flex justify-content-between  ">
										<p>ends in</p>
										<p>3d:23:02</p>
									</div>
									<div className="view-btn">
										<a href="#" className="btn btn-primary w-100">
											view auction
										</a>
									</div>
								</div>
								<div className="card">
									<img
										className="card-img-top "
										src={cardImg}
										alt="Card imagea"
									/>
									<div className="card-body1 d-flex justify-content-between ">
										<p className="card-title">Stoned Ape Crew</p>
										<img src={gLogo} alt="logo" className="mt-0" />
									</div>
									<div className="card-body2 d-flex justify-content-between  ">
										<p>ends in</p>
										<p>3d:23:02</p>
									</div>
									<div className="view-btn">
										<a href="#" className="btn btn-primary w-100">
											view auction
										</a>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			<Carousel />
		</section>
	);
};

export default Auction;
