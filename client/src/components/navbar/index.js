import React from 'react';
import { Navbar } from 'react-bootstrap';
import './style.css';

function NavbarComponent() {
	return (
		<div>
			<Navbar bg="dark">
				<Navbar.Brand className="logo" href="#home">
					HTX Tacos
				</Navbar.Brand>
				{/* <Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						Signed in as: <a href="#login">Mark Otto</a>
					</Navbar.Text>
				</Navbar.Collapse> */}
			</Navbar>
		</div>
	);
}

export default NavbarComponent;
