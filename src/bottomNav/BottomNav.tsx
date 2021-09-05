import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BottomNav.scss';
import Link from './link/Link';

export interface BottomNavProps {
	activeRoute?: string;
}

const BottomNav = (props: BottomNavProps) => {
	let items = [
		{
			name: 'test1',
			href: 'testurl1',
		},
		{
			name: 'test2',
			href: 'testurl2',
		},
	];

	return (
		<nav className="navbar">
			{/* <NavLink to="/">Home</NavLink>
			<NavLink to="/list">List</NavLink>
			<NavLink to="/profile">profile</NavLink> */}
			<Link path="/">Home</Link>
			<Link path="/list">List</Link>
			<Link path="/profile">Home</Link>
		</nav>
	);
};

export default BottomNav;
