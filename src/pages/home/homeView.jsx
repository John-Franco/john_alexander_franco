import React from "react";

import "../../assets/css/pages/home.css";

const HomeView = ({ writeText, showSpanAnimation }) => {
	return (
		<section className="page p-4 position-relative vh-100 d-flex justify-content-center align-items-center">
			<div>
				<div className="overlay"></div>
				<div className="parallax"></div>
				<div className="content text-white text-center">
					<h2 className="text-white mb-4 title">¡Bienvenidos!</h2>
					<h2 className="text-white mb-4 title">
						<strong className="writing-text">
							<span>{writeText}</span>
							<span className={showSpanAnimation}>|</span>
						</strong>
					</h2>
					<p className="mb-4">Amo implementar soluciones que cambian vidas</p>
					<button className="btn btn-success rounded-pill">Contáctame</button>
				</div>
			</div>
		</section>
	);
};

export default HomeView;
