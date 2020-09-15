import React from "react";

const Navbar = () => {
	return (
		<div className="navbar-nav">
			<nav
				className="navbar navbar-expand navbar-light bg-light "
				height="100"
			>
				<h1 className="text-uppercase font-weight-light">
					<img
						src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png"
						width="120"
						height="80"
						className="d-inline-block justify-content-end p-3"
						alt="Wild Code School logo"
						loading="lazy"
					/>
					Les Argonautes
				</h1>
			</nav>
		</div>
	);
};

export default Navbar;
