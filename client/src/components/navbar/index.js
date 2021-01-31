import React from 'react';
import { Navbar } from 'react-bootstrap';
import './style.css';

function NavbarComponent() {
	return (
		<div className="">
			<Navbar bg="dark" className="nav">
				<Navbar.Brand className="logo" href="/">
					HTX{' '}
					<span className="">
						🌮
						{/* <i className="fa fa-star logo-star" aria-hidden="true"></i> */}
					</span>{' '}
					Tacos
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
