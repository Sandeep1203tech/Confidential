import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Home",
			icon: "icons/home2-svgrepo-com.svg",
		},
		{
			text: "Modules",
			icon: "icons/laptop-svgrepo-com.svg",
		},
		{
			text: " Doubt Sessions",
			icon: "icons/question-svgrepo-com.svg",
		},
		{
			text: "Gym",
			icon: "icons/study-research-scrutinize-search-svgrepo-com.svg",
		},
		// {
		// 	text: "File Manager",
		// 	icon: "icons/folder.svg",
		// },
		// {
		// 	text: "Orders",
		// 	icon: "icons/shopping-cart.svg",
		// },
		// {
		// 	text: "Saved Items",
		// 	icon: "icons/heart.svg",
		// },
		// {
		// 	text: "Settings",
		// 	icon: "icons/settings.svg",
		// },
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h2>Engineering Hub</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							key={text}
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="/"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">My Profile</p>
							<p className="nav-footer-user-position">Sandeep</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideNavBar;