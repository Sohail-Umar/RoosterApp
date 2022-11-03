import React from 'react';
import bg2 from '../../img/Frame 4.png';
import bg3 from '../../img/Vector 3.png';
import bg4 from '../../img/Vector 5.png';
import EtheirumIcon from '../../img/etherum.png';
import BinaanceIcon from '../../img/binance.png';
import FantomIcon from '../../img/fantom.png';
import EthIcon from '../../img/eth.png';
import SolanaIcon from '../../img/solana.png';
import StackIcon from '../../img/stack.png';
import RightBox from '../../img/Ellipse 30.png';
import LeftBox from '../../img/Ellipse 29.png';

import './launchpad.css';
const LaunchPad = () => {
	return (
		<>
			<div className="container lcontainer mt-5">
				<div className="row bg2">
					<img src={bg2} alt="bg2" />
				</div>
				<div className="row bg3 ">
					<h3 className="lText">Premier Diy launchpad</h3>
				</div>

				<div className="  icons ">
					<div className=" icon-inner ">
						<img src={EtheirumIcon} alt="" />
						<p>Etherium</p>
					</div>
					<div className=" icon-inner">
						<img src={SolanaIcon} alt="" />
						<p>solana</p>
					</div>
					<div className=" icon-inner">
						<img src={BinaanceIcon} alt="" />
						<p>binance</p>
					</div>
					<div className=" icon-inner">
						<img src={EthIcon} alt="" />
						<p>Etherium</p>
					</div>
					<div className=" icon-inner">
						<img src={FantomIcon} alt="" />
						<p>fantom</p>
					</div>
					<div className="icon-inner ">
						<img src={StackIcon} alt="" />
						<p>stack</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default LaunchPad;
