import './createCollection.css';
import bgPurple from '../../img/bg_purple.png';
import bgPurple2 from '../../img/bg_purple2.png';
import createCollectionImg from '../../img/img1.png';
import generateCollectionImg from '../../img/img2.png';

import React from 'react';

const CreateCollection = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="upper-portion">
					<p>CREATE COLLECTION</p>
					<br />
					<p>
						Select New or generate collection ot launch your NFTs in 3 easy
						steps.
					</p>
				</div>
			</div>

			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-12 mb-sm-5 mt-5 left_div">
					<div className="left-div-img">
						<img src={bgPurple} />
					</div>
					<div className="left-div-data">
						<h2>CREATE COLLECTION</h2>
						<div className="create-img">
							<img src={createCollectionImg} />
						</div>
						<p className="text-color">
							Already have your NFT assets? Upload <br /> and launch your NFT
							collection.
						</p>
						<button className="collection-btns">NEW COLLECTION</button>
					</div>
				</div>

				<div className="col-lg-6 col-md-6 col-sm-12 mt-5 right_div">
					<div className="right-div-img">
						<img src={bgPurple2} />
					</div>
					<div className="right-div-data">
						<h2>GENERATE COLLECTION</h2>
						<div className="generate-img">
							<img src={generateCollectionImg} />
						</div>
						<p className="text-color">
							Create and launch your randomly <br /> generated NFT collection.
						</p>
						<button className="collection-btns">GENERATE COLLECTION</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCollection;
