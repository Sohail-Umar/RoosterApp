import React from 'react';
import './advertising.css';
import addBg from '../../img/image 33.png';
const Advertising = () => {
	return (
		<section className="section-add-bg">
			<img src={addBg} alt="background image" className="section-add-bg1" />;
			<div className="add-box">
				<h1>advertising</h1>
				<p>
					Ragin’ Roosters is dedicated to provide new and existing projects
					affordable advertising methods outside of the usual influencer posts.
					We offer several purchasable banner ads that receive differing daily
					views. Interested? Inquire below.
				</p>
			</div>
		</section>
	);
};

export default Advertising;
