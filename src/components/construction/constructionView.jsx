import React from "react";

import background from "../../assets/media/img/components/construction/construction.jpg";

const ConstructionView = () => {
	return (
		<section className="page p-4 position-relative vh-100 d-flex justify-content-center align-items-center">
			<img src={background} alt="Pagina en Construción" width="60%" height="auto" />;
		</section>
	);
};

export default ConstructionView;
