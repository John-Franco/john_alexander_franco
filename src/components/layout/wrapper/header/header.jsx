import React from "react";
import { FaAlignJustify } from "react-icons/fa";

import avatar from "../../../../assets/media/img/components/sidebar/avatar.jpg";

import "../../../../assets/css/components/header.css";

const Header = ({ handleShowSidebar }) => {
	return (
		<header className="p-3 justify-content-between align-items-center">
			<p className="m-0 d-flex align-items-center">
				<img
					className="rounded-circle avatar mr-2"
					width="auto"
					height="80px"
					src={avatar}
					alt="John Alexander Franco Gonzalez"
				/>
				<strong className="text-white">John Alexander Franco Gonzalez</strong>
			</p>
			<div className="header-options d-flex">
				<div></div>
				<FaAlignJustify size={25} onClick={handleShowSidebar} />
			</div>
		</header>
	);
};

export default Header;
