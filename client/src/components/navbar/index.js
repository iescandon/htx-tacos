import React from 'react';
import { Navbar } from 'react-bootstrap';
import './style.css';

function NavbarComponent() {
	return (
		<div className="">
			<Navbar bg="dark" className="nav">
				<Navbar.Brand className="logo" href="/">
					HTX <span>🌮</span> Tacos
				</Navbar.Brand>
			</Navbar>
		</div>
	);
}

export default NavbarComponent;
