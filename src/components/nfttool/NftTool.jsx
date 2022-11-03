import React from 'react';
import './nfttool.css';
import carousalImg from '../../img/Carousal Frame .png';

const NftTool = () => {
	return (
		<div className="container-fluid mt p-5">
			<div className="row mt-5">
				<div className="col-md-4 col-sm-12 text-item px-5">
					<h1>Nft tool suit</h1>
					<p>
						We at Ragin Roosters do not believe that there should be a high
						barrier to entry for NFT tools, management, sniping bots etc. and
						some even run you as high as 60 sol!! We have designed and developed
						our own and offer it to everyone for as little as six dollars a
						month (less than a monthly Netflix{' '}
					</p>
				</div>
				<div className="col-md-8 col-sm-12 craousel-div ">
					<div>
						<div
							id="carouselExampleIndicators"
							className="carousel slide"
							data-bs-ride="true"
						>
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="0"
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="1"
									aria-label="Slide 2"
								></button>
								<button
									type="button"
									data-bs-target="#carouselExampleIndicators"
									data-bs-slide-to="2"
									aria-label="Slide 3"
								></button>
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img src={carousalImg} className="d-block  " alt="..." />
								</div>
								<div className="carousel-item">
									<img src={carousalImg} className="d-block " alt="..." />
								</div>
								<div className="carousel-item">
									<img src={carousalImg} className="d-block " alt="..." />
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NftTool;
