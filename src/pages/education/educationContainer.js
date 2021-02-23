import React from "react";

import EducationView from "./educationView";
import person from "../../assets/media/img/pages/education/diploma-react.jpg";

const EducationContainer = () => {
	const certifications = [
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
		{
			title: "Bachiller Medio tecnico",
			document: person,
		},
	];
	return <EducationView certifications={certifications} />;
};

export default EducationContainer;
