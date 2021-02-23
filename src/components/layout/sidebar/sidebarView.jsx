import React from "react";
import { Link } from "react-router-dom";

import avatar from "../../../assets/media/img/components/sidebar/avatar.jpg";
import avatar2 from "../../../assets/media/img/components/sidebar/avatar3.jpg";
import CV from "../../../assets/doct/JOHN_ALEXANDER_FRANCO.pdf";

import "../../../assets/css/components/sidebar.css";

const SidebarView = ({
	handleShowSidebar,
	setMenuActive,
	showSidebarState,
	menuActive,
	sidebarOptions,
	getHeightHeader,
}) => {
	return (
		<>
			<aside
				className={`sidebar justify-content-between shadow ${showSidebarState}`}
				style={{ paddingTop: getHeightHeader + "px" }}
			>
				<div className="sidebar-logo d-none d-md-flex p-3 pt-4 mt-4 justify-content-center align-items-center flex-wrap">
					<span className="rounded-circle">
						<img
							className="d-block m-auto rounded-circle avatar"
							width="100%"
							height="auto"
							src={avatar2}
							alt="John Alexander Franco Gonzalez"
						/>
					</span>
					<h1 className="text-center mt-2 text-white">
						<strong className="text-center mt-2 text-white">John Alexander Franco Gonzalez</strong>
					</h1>
				</div>
				<div className="sidebar-options pt-4 pt-md-0 pl-3 pr-3 pb-3 d-flex flex-wrap justify-content-center">
					<ul className="navbar-nav">
						{sidebarOptions.map((option, index) => {
							return (
								<li key={index} className={option.cName}>
									<Link
										className={`nav-link d-flex align-items-center justify-content-start ${
											menuActive.active === option.title && "active"
										}`}
										onClick={() => {
											setMenuActive({ active: option.title });
											handleShowSidebar();
										}}
										to={option.path}
									>
										{option.icon}
										<span className="menu-text pl-2">{option.title}</span>
									</Link>
								</li>
							);
						})}
					</ul>
					<div className="w-100 mt-4">
						<a
							href={CV}
							className="btn btn-success rounded-pill m-auto d-block"
							target="_blank"
							rel="noreferrer"
						>
							Ver Hoja de Vida
						</a>
					</div>
				</div>
				<div className="p-3 pb-4 mb-4 d-flex justify-content-center">Footer</div>
			</aside>
			<div onClick={handleShowSidebar} className={`overlay ${showSidebarState}`}></div>
		</>
	);
};

export default SidebarView;
