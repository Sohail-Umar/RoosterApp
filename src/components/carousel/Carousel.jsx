import React from 'react';
import './carousel.css';
import gLogo from '../../img/gLogo.png';
import cardImg from '../../img/image 8.png';
import { Pagination, Navigation } from 'swiper';
import jQuery from 'jquery';
import $ from 'jquery';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
const Carousel = () => {
	return (
		<>
			<div>
				<Swiper
					slidesPerView={5}
					spaceBetween={10}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
					// pagination={{
					// 	clickable: true,
					// }}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					<SwiperSlide>
						<div className="card ">
							<img className="card-img-top " src={cardImg} alt="Card imagea" />
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
					</SwiperSlide>
					<SwiperSlide>
						<div className="card ">
							<img className="card-img-top " src={cardImg} alt="Card imagea" />
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
					</SwiperSlide>
					<SwiperSlide>
						<div className="card ">
							<img className="card-img-top " src={cardImg} alt="Card imagea" />
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
					</SwiperSlide>
					<SwiperSlide>
						<div className="card ">
							<img className="card-img-top " src={cardImg} alt="Card imagea" />
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
					</SwiperSlide>
					<SwiperSlide>
						<div className="card ">
							<img className="card-img-top " src={cardImg} alt="Card imagea" />
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
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
};

export default Carousel;
