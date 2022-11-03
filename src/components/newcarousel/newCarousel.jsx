// import React from 'react';
// import './newCarousel.css';
// import gLogo from '../../img/gLogo.png';
// import cardImg from '../../img/image 8.png';
// const newCarousel = () => {
// 	return (
// 		<div class="my-5 text-center container">
// 			<div class="row mb-2">
// 				<div class="col text-center">
// 					<h1>Carousel with outer controls</h1>
// 					<p class="lead">
// 						<a target="_blank" href="https://codepen.io/davidbiek/pen/bMrQKN">
// 							Same carousel as before
// 						</a>
// 						, but this uses Bootstrap 5.
// 					</p>
// 				</div>
// 			</div>
// 			<div class="row d-flex align-items-center">
// 				<div class="col-1 d-flex align-items-center justify-content-center">
// 					<a
// 						role="button"
// 						data-bs-target="#carouselExampleIndicators"
// 						data-bs-slide="prev"
// 					>
// 						<div class="carousel-nav-icon">
// 							{/* <svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								viewBox="0 0 129 129"
// 								xmlns:xlink="http://www.w3.org/1999/xlink"
// 							>
// 								<path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z" />
// 							</svg> */}
// 						</div>
// 					</a>
// 				</div>
// 				<div class="col-10">
// 					{/* <!--Start carousel--> */}
// 					<div
// 						id="carouselExampleIndicators"
// 						class="carousel slide"
// 						data-bs-ride="carousel"
// 					>
// 						<div class="carousel-inner">
// 							<div class="carousel-item active">
// 								<div class="row">
// 									<div class="col-12 col-md d-flex align-items-center justify-content-center">
// 										<div className="card ">
// 											<img
// 												className="card-img-top "
// 												src={cardImg}
// 												alt="Card imagea"
// 											/>
// 											<div className="card-body1 d-flex justify-content-between ">
// 												<p className="card-title">Stoned Ape Crew</p>
// 												<img src={gLogo} alt="logo" className="mt-0" />
// 											</div>
// 											<div className="card-body2 d-flex justify-content-between  ">
// 												<p>ends in</p>
// 												<p>3d:23:02</p>
// 											</div>
// 											<div className="view-btn">
// 												<a href="#" className="btn btn-primary w-100">
// 													view auction
// 												</a>
// 											</div>
// 										</div>
// 									</div>
// 									<div class="col-12 col-md d-flex align-items-center justify-content-center">
// 										<div className="card ">
// 											<img
// 												className="card-img-top "
// 												src={cardImg}
// 												alt="Card imagea"
// 											/>
// 											<div className="card-body1 d-flex justify-content-between ">
// 												<p className="card-title">Stoned Ape Crew</p>
// 												<img src={gLogo} alt="logo" className="mt-0" />
// 											</div>
// 											<div className="card-body2 d-flex justify-content-between  ">
// 												<p>ends in</p>
// 												<p>3d:23:02</p>
// 											</div>
// 											<div className="view-btn">
// 												<a href="#" className="btn btn-primary w-100">
// 													view auction
// 												</a>
// 											</div>
// 										</div>
// 									</div>
// 									<div class="col-12 col-md d-flex align-items-center justify-content-center">
// 										<h3 class="text-white">Text in the panel.</h3>
// 									</div>
// 								</div>
// 							</div>
// 							<div class="carousel-item">
// 								<div class="row">
// 									<div class="col-12 col-md d-flex align-items-center justify-content-center">
// 										{' '}
// 										<div className="card ">
// 											<img
// 												className="card-img-top "
// 												src={cardImg}
// 												alt="Card imagea"
// 											/>
// 											<div className="card-body1 d-flex justify-content-between ">
// 												<p className="card-title">Stoned Ape Crew</p>
// 												<img src={gLogo} alt="logo" className="mt-0" />
// 											</div>
// 											<div className="card-body2 d-flex justify-content-between  ">
// 												<p>ends in</p>
// 												<p>3d:23:02</p>
// 											</div>
// 											<div className="view-btn">
// 												<a href="#" className="btn btn-primary w-100">
// 													view auction
// 												</a>
// 											</div>
// 										</div>
// 									</div>
// 									<div class="col-12 col-md d-flex align-items-center justify-content-center">
// 										<div className="card ">
// 											<img
// 												className="card-img-top "
// 												src={cardImg}
// 												alt="Card imagea"
// 											/>
// 											<div className="card-body1 d-flex justify-content-between ">
// 												<p className="card-title">Stoned Ape Crew</p>
// 												<img src={gLogo} alt="logo" className="mt-0" />
// 											</div>
// 											<div className="card-body2 d-flex justify-content-between  ">
// 												<p>ends in</p>
// 												<p>3d:23:02</p>
// 											</div>
// 											<div className="view-btn">
// 												<a href="#" className="btn btn-primary w-100">
// 													view auction
// 												</a>
// 											</div>
// 										</div>
// 									</div>
// 									<div class="col-12 col-md d-flex align-items-center justify-content-center">
// 										<div className="card ">
// 											<img
// 												className="card-img-top "
// 												src={cardImg}
// 												alt="Card imagea"
// 											/>
// 											<div className="card-body1 d-flex justify-content-between ">
// 												<p className="card-title">Stoned Ape Crew</p>
// 												<img src={gLogo} alt="logo" className="mt-0" />
// 											</div>
// 											<div className="card-body2 d-flex justify-content-between  ">
// 												<p>ends in</p>
// 												<p>3d:23:02</p>
// 											</div>
// 											<div className="view-btn">
// 												<a href="#" className="btn btn-primary w-100">
// 													view auction
// 												</a>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 					{/* <!--End carousel--> */}
// 				</div>
// 				<div class="col-1 d-flex align-items-center justify-content-center">
// 					<a
// 						role="button"
// 						data-bs-target="#carouselExampleIndicators"
// 						data-bs-slide="next"
// 					>
// 						<div class="carousel-nav-icon">
// 							{/* <svg
// 								xmlns="http://www.w3.org/2000/svg"
// 								viewBox="0 0 129 129"
// 								xmlns:xlink="http://www.w3.org/1999/xlink"
// 							>
// 								<path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
// 							</svg> */}
// 						</div>
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default newCarousel;
