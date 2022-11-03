import React from 'react';
import Logo from '../../img/Frame 41.png';
import ConnectLogo from '../../img/Connecticon.png';
import './navbar.css';
const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg ">
				<div className="container-fluid">
					<a className="navbar-brand mr-5" href="/">
						<img src={Logo} alt="logo" />
					</a>
					<button
						className="navbar-toggler "
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse ml-lg-5"
						id="navbarSupportedContent"
					>
						<ul className=" navbar-nav me-auto mb-2 mb-lg-0  navList ">
							<li className="nav-item  ">
								<a
									className="nav-link text-light "
									aria-current="page"
									href="/"
								>
									Minting Now
								</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link text-light" href="/">
									Upcomming mint
								</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link text-light" href="/">
									create
								</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link text-light" href="/">
									Web services
								</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link text-light " href="/">
									NFT Rool Suit
								</a>
							</li>
							<li className="nav-item ">
								<a className="nav-link text-light " href="/">
									Chain Game
								</a>
							</li>
							<li className="nav-item ">
								<button className="btn2">
									connect wallet <img src={ConnectLogo} alt="cnLogo" />
								</button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
