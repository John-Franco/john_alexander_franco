import React, { useState, useEffect } from "react";
import { FaHome, FaUserAlt, FaTools, FaBook, FaBriefcase, FaPhoneAlt } from "react-icons/fa";

import SidebarView from "./sidebarView";

const SidebarContainer = ({ handleShowSidebar, showSidebarState, getHeightHeader }) => {
	const [menuActive, setMenuActive] = useState({ active: "Inicio" });

	const sidebarOptions = [
		{
			title: "Inicio",
			path: "/",
			icon: <FaHome className="d-none d-md-block" />,
			className: "nav-item",
		},
		{
			title: "Quien Soy",
			path: "/quien-soy",
			icon: <FaUserAlt className="d-none d-md-block" />,
			className: "nav-item",
		},
		{
			title: "Lo que hago",
			path: "/lo-que-hago",
			icon: <FaTools className="d-none d-md-block" />,
			className: "nav-item",
		},
		{
			title: "Educación",
			path: "/educacion",
			icon: <FaBook className="d-none d-md-block" />,
			className: "nav-item",
		},
		{
			title: "Portafolio",
			path: "/portafolio",
			icon: <FaBriefcase className="d-none d-md-block" />,
			className: "nav-item",
		},
		{
			title: "Contáctame",
			path: "/contactame",
			icon: <FaPhoneAlt className="d-none d-md-block" />,
			className: "nav-item",
		},
	];
	const handleGetMenuActive = () => {
		let currentMenuActive = sidebarOptions.filter(
			(currentMenu) => currentMenu.path == window.location.pathname
		);
		setMenuActive({ active: currentMenuActive ? currentMenuActive[0].title : "" });
	};
	useEffect(() => {
		handleGetMenuActive();
	}, []);

	return (
		<SidebarView
			showSidebarState={showSidebarState}
			sidebarOptions={sidebarOptions}
			handleShowSidebar={handleShowSidebar}
			menuActive={menuActive}
			setMenuActive={setMenuActive}
			getHeightHeader={getHeightHeader}
		/>
	);
};

export default SidebarContainer;
