import React from 'react';
import './launchcollection.css';

import launchBgLeft from '../../img/launchBgLeft.png';
import lauchBgRight from '../../img/lauchBgRight.png';
import roosterArt from '../../img/RoosterArt.png';
import launchLevel from '../../img/launchLevel.png';
const LaunchCollection = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<h1
						style={{ color: 'white', marginTop: '20px', textAlign: 'center' }}
					>
						LAUNCH COLLECTION
					</h1>
				</div>

				<div className="row">
					<img src={launchLevel} />
				</div>

				{/* <div className="row">
                        <img src={firstStage} />
                        <img src={lineLaunch} />
                        <img src={secondStage} />
                        <img src={thirdStage} />
                        <img src={forthStage} />
                </div> */}

				<div className="row">
					<div
						className="col-lg-4 col-sm-12"
						style={{ position: 'relative', zIndex: 100 }}
					>
						<div
							className="launch-left-div"
							style={{ position: 'absolute', zIndex: -1 }}
						>
							<img src={launchBgLeft} />
						</div>
						<div className="row launch-heading">
							<h5 style={{ color: 'white' }}>COLLECTION DETAILS</h5>
							<input placeholder="Contract Name" />
							<input placeholder="Collection Name" />
							<input placeholder="Symbol" />
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'flex-start',
									alignItems: 'start',
								}}
							>
								<p style={{ color: 'white' }}>Lauch Collection later</p>
								{/* <input type="checkbox" role="switch" /> */}
								{/* <div class="form-check form-switch">
                                <label class="form-check-label text-light" for="flexSwitchCheckDefault" >Launch Collection Later</label>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                            </div> */}
								<p style={{ color: 'white' }}>Add Whishlist</p>
								{/* <div class="form-check form-switch">
                                <label class="form-check-label text-light" for="flexSwitchCheckDefault" >Add Wishlist</label>
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div> */}
							</div>
						</div>
					</div>

					{/ <div className="col-lg-6"> /}
					<div
						className="col-lg-8 col-sm-12"
						style={{ position: 'relative', zIndex: 100 }}
					>
						<div
							className="launch-left-div"
							style={{ position: 'absolute', zIndex: -1 }}
						>
							<img src={lauchBgRight} />
						</div>
						<div
							className="row"
							style={{
								marginLeft: '10px',
								marginTop: '50px',
								width: '700px',
							}}
						>
							<div className="col-lg-8">
								<h3 style={{ color: 'white' }}>NFT DETAILS</h3>
								<input placeholder="Base Art Name" />
								<textarea type="text" rows={4} placeholder="Description" />
								<div className="row">
									<div className="col-lg-6">
										<p style={{ color: 'white' }}>Mint Cost</p>
										<br />
										<input type="number" placeholder="0.05" />
									</div>
									<div className="col-lg-6">
										<p style={{ color: 'white' }}>Royalities</p>
										<br />
										<input type="number" placeholder="0.05" />
									</div>
								</div>
							</div>
							<div
								className="col-lg-4"
								style={{
									background: '#272434',
									display: 'flex',
									flexDirection: 'column',
									flexWrap: 'wrap',
								}}
							>
								<div className="row">
									<p
										style={{
											color: 'white',
											marginTop: '20px',
											textAlign: 'center',
										}}
									>
										Preview
									</p>
								</div>
								<div className="row">
									<img src={roosterArt} />
								</div>
							</div>
							<button className="next-button">
								<strong> Next </strong>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LaunchCollection;
