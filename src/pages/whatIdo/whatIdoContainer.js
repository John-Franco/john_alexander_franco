import React from "react";

import { FaCode, FaCodeBranch, FaLightbulb } from "react-icons/fa";
import { BsServer, BsTerminalFill } from "react-icons/bs";
import { DiBitbucket } from "react-icons/di";

import WhatIdoView from "./whatIdoView";

const WhatIdoContainer = () => {
	const knowledge = [
		{
			technologyType: "Lenguajes",
			icon: <FaCode color={"white"} size={50} />,
			technologyArray: ["Java", "JavaScript", "HTML", "Css", "PHP"],
		},
		{
			technologyType: "Frameworks & CMS’s",
			icon: <FaCodeBranch color={"white"} size={50} />,
			technologyArray: ["React", "Spring", "MyBatis", "Bootstrap", "Joomla", "Wordpress", "jQuery"],
		},
		{
			technologyType: "Bases de Datos",
			icon: <BsServer color={"white"} size={50} />,
			technologyArray: ["MySql", "DynamoDB"],
		},
		{
			technologyType: "Infraestructuras",
			icon: <BsServer color={"white"} size={50} />,
			technologyArray: ["AWS"],
		},
		{
			technologyType: "Sistemas Operativos",
			icon: <BsTerminalFill color={"white"} size={50} />,
			technologyArray: ["Linux", "Windows"],
		},
		{
			technologyType: "Control de versiones",
			icon: <DiBitbucket color={"white"} size={50} />,
			technologyArray: ["Git", "Bitbucket"],
		},
		{
			technologyType: "Habilidades blandas",
			icon: <FaLightbulb color={"white"} size={50} />,
			technologyArray: ["SEO"],
		},
	];

	return <WhatIdoView knowledge={knowledge} />;
};

export default WhatIdoContainer;
