import React from "react";

import "../../assets/css/pages/education.css";

const EducationView = ({ certifications }) => {
	return (
		<>
			<section
				id="aboutMe"
				className="page p-4 position-relative vh-100 d-flex justify-content-center align-items-center flex-wrap"
			>
				<div className="page-head position-relative d-flex align-items-center justify-content-center w-100 ">
					<h2 className="position-absolute text-background title m-0 font-weight-bold text-center ">
						Educacion
					</h2>
					<p className="subTitle m-0 font-weight-bold text-center">Cursos y Certificaiones</p>
				</div>
				<div className="page-body d-flex justify-content-center align-items-center flex-wrap w-100 mt-4">
					<div className="w-100 group">
						{certifications.map((certification, index) => {
							return (
								<div key={index} className="shadow p-2 h-100">
									<figure>
										<img
											src={certification.document}
											alt={certification.title}
											className=""
											height="200px"
											width="240px"
										/>
									</figure>
									<p>{certification.title}</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default EducationView;
