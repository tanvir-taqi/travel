import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Navbar.css'

export default function Navbar() {
	const [ click, setClick ] = useState(false);
    const [button, setButton] = useState(true)



	const handleClick = () => setClick(!click);

	const closeMobileMenu = () => setClick(false);

    const showButton =()=>{
        if (window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)

        }
    }

 useEffect(()=>{
     showButton()
 },[])   



    window.addEventListener('resize', showButton)

	return (
		<div>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo">
						TraVel <i className="fas fa-fire" />
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-minus-circle' : 'fas fa-plus-circle'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item ">
							<Link to="/" className="nav-links " onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className="nav-item ">
							<Link to="/Services" className="nav-links " onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li className="nav-item ">
							<Link to="/Products" className="nav-links " onClick={closeMobileMenu}>
								Products
							</Link>
						</li>
						<li className="nav-item ">
							<Link to="/sign-up" className="nav-links-mobile " onClick={closeMobileMenu}>
								Sign Up
							</Link>
						</li>
					</ul>
                    {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
				</div>
			</nav>
		</div>
	);
}
