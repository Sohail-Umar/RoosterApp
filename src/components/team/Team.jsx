import React from 'react';
import './team.css';
import tLogo1 from '../../img/nft1.png';
import tLogo2 from '../../img/nft2.png';
import tLogo3 from '../../img/nft3.png';
import tLogo4 from '../../img/nft4.png';
import tLogo5 from '../../img/nft5.png';
import tLogo6 from '../../img/nft6.png';
const Team = () => {
	return (
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-12 team-heading">
						<h1> meet the team</h1>
						<p>
							Our diverse global team carries proven industry expertise
							including but not limited to; Project management, UI/UX design,
							Full-stack development, Business analysis, Front-end developers,
							game designers and developers and marketing.
						</p>
					</div>
					<div className="row mt-5">
						<div className="col-md-4 col-sm-6 col-lg-4 mb-sm-5 md-md-2 ml-4">
							<div className="team-card">
								<img src={tLogo1} alt="team logo" />
								<div className="text-light team-card-heading ">
									<p>Luke</p>
									<span>coummunity lead</span>
								</div>
								<div className="text-light team-card-logo ">
									<a href="">
										<i class="fa-brands fa-twitter"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-lg-4 mb-sm-5 md-md-2 ml-4">
							<div className="team-card">
								<img src={tLogo2} alt="team logo" />
								<div className="text-light team-card-heading ">
									<p>Luke</p>
									<span>coummunity lead</span>
								</div>
								<div className="text-light team-card-logo ">
									<a href="">
										<i class="fa-brands fa-twitter"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-lg-4 mb-sm-5 md-md-2 ml-4">
							<div className="team-card">
								<img src={tLogo3} alt="team logo" />
								<div className="text-light team-card-heading ">
									<p>Luke</p>
									<span>coummunity lead</span>
								</div>
								<div className="text-light team-card-logo ">
									<a href="">
										<i class="fa-brands fa-twitter"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-lg-4 mb-sm-5 md-md-2 ml-4">
							<div className="team-card">
								<img src={tLogo4} alt="team logo" />
								<div className="text-light team-card-heading ">
									<p>Luke</p>
									<span>coummunity lead</span>
								</div>
								<div className="text-light team-card-logo ">
									<a href="">
										<i class="fa-brands fa-twitter"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-lg-4 mb-sm-5 md-md-2 ml-4">
							<div className="team-card">
								<img src={tLogo5} alt="team logo" />
								<div className="text-light team-card-heading ">
									<p>Luke</p>
									<span>coummunity lead</span>
								</div>
								<div className="text-light team-card-logo ">
									<a href="">
										<i class="fa-brands fa-twitter"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-sm-6 col-lg-4 mb-sm-5 md-md-2 ml-4">
							<div className="team-card">
								<img src={tLogo6} alt="team logo" />
								<div className="text-light team-card-heading ">
									<p>Luke</p>
									<span>coummunity lead</span>
								</div>
								<div className="text-light team-card-logo ">
									<a href="">
										<i class="fa-brands fa-twitter"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
