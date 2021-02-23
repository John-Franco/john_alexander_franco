import React from "react";

import person from "../../assets/media/img/pages/aboutMe/johnFranco.jpeg";
import foto from "../../assets/media/img/pages/aboutMe/foto.jpg";

import "../../assets/css/pages/aboutMe.css";

const AboutMe = () => {
	return (
		<section
			id="aboutMe"
			className="page p-4 position-relative vh-100 d-flex justify-content-center align-items-center"
		>
			<div className="page-body h-100 d-flex justify-content-center align-items-center">
				<div className="row align-items-center h-100">
					<div className="col-sm-6 col-md-6 col-lg-5 mb-4">
						<img src={foto} className="w-100" alt="John Alexander Franco Gonzalez" />
					</div>
					<div className="col-sm-6 col-md-6 col-lg-7 mb-4">
						<div className="position-relative d-flex align-items-center">
							<h2 className="position-absolute text-background title m-0 font-weight-bold">
								QUIEN SOY
							</h2>
							<p className="subTitle m-0 font-weight-bold">Conóceme más</p>
						</div>
						<p>
							Soy John Alexander Franco Gonzalez, Desarrollador Front End y Back End con más de 3
							años de experiencia laboral, creando funcionalidades para E-Commerce, CRM, y
							Newsletter.
							<br />
							<br />
							Me gusta mucho aprender cosas nuevas, ayudar a las personas, tocar piano, montar Moto,
							Comer, Bailar y estar con mi familia.
						</p>
						<div className="col-12 mt-4">
							<div className="row">
								<div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
									<label className="text-center shadow h-100 d-flex flex-wrap p-2">
										<span className="title w-100 font-weight-bold">3 +</span> <br />
										<span className="w-100 text-dark font-weight-bold">Años de experiencia</span>
									</label>
								</div>
								<div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
									<label className="text-center shadow h-100 d-flex flex-wrap p-2">
										<span className="title w-100 font-weight-bold">12 </span>
										<br />
										<span className="w-100 text-dark font-weight-bold">Proyectos Realizados</span>
									</label>
								</div>
								<div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
									<label className="text-center shadow h-100 d-flex flex-wrap p-2">
										<span className="title w-100 font-weight-bold">1</span>
										<br />
										<span className="w-100 text-dark font-weight-bold">Certificaiones</span>
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
