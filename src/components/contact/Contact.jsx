import React from 'react';
import './contact.css';
import directionLogo from '../../img/direction.png';
import message from '../../img/message.png';
import vector from '../../img/Vector.png';
import icon from '../../img/Icon.png';
import discord from '../../img/discord.png';
const Contact = () => {
	return (
		<section>
			<div className="container">
				<div className="row">
					<div className="col-md-12 cont-heading">
						<h1> Need to Ask Questions?</h1>
						<p>
							Please feel free to fill out an inquiry and a member from our team
							will reach out as soon as possible. For increased speed of
							response, please visit our discord and either open a ticket or ask
							our community, they are eager to meet you!
						</p>
					</div>
					<div className="row mt-5 form-div">
						<div className=" col-md-6 col-sm-12 col-lg-6 ">
							<input type="text" placeholder={`Full Name`} />
						</div>
						<div className="col-lg-6 col-md-6 col-sm-12">
							<input type="text" placeholder="Email Address" />
						</div>
					</div>
					<div className="row mt-5 form-div">
						<div className="col-lg-12">
							<input type="text" placeholder="Discord" />
						</div>
					</div>
					<div className="row mt-5 form-div">
						<div className="col-lg-12">
							<textarea type="text" placeholder="Detail Message" rows={10} />
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-lg-6">
							<button className=" btn1">
								explore now <img src={directionLogo} alt="directionLogo" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
