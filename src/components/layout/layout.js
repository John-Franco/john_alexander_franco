import React, { useState, useEffect } from "react";

import Sidebar from "./sidebar/sidebarContainer";
import Wrapper from "./wrapper/wrapper";

const Layout = ({ children }) => {
	const [showSidebarState, setShowSidebarState] = useState(false);

	const [getHeightHeader, setHeightHeader] = useState(0);

	const handleShowSidebar = () => {
		setShowSidebarState(!showSidebarState);
	};

	const handleGetHeightHeader = (mediaQuery) => {
		if (mediaQuery.matches) {
			setHeightHeader(document.querySelector("header").clientHeight);
		} else {
			setHeightHeader(0);
		}
	};

	let mediaQuery = window.matchMedia("(max-width: 767px");

	useEffect(() => {
		handleGetHeightHeader(mediaQuery);
		mediaQuery.addEventListener("change", handleGetHeightHeader);
		return () => {
			mediaQuery.removeEventListener("change", handleGetHeightHeader);
		};
	}, []);

	return (
		<>
			<Sidebar
				handleShowSidebar={handleShowSidebar}
				showSidebarState={showSidebarState}
				getHeightHeader={getHeightHeader}
			/>
			<Wrapper handleShowSidebar={handleShowSidebar} getHeightHeader={getHeightHeader}>
				{children}
			</Wrapper>
		</>
	);
};

export default Layout;
