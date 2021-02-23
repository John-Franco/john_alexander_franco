import React from "react";

import "../../../assets/css/components/wrapper.css";
import "../../../assets/css/pages/pages.css";
import Header from "./header/header";

const Wrapper = ({ handleShowSidebar, getHeightHeader, children }) => {
	return (
		<>
			<div className="wrapper">
				<Header handleShowSidebar={handleShowSidebar} />
				<main style={{ paddingTop: getHeightHeader + "px" }}>{children}</main>
			</div>
		</>
	);
};

export default Wrapper;
