import React from 'react';
//import { Test } from './Navigation.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/logo.png';
import './Navigation.css';

const Navigation = () => (
	<div className="navigation-wrapper">
		<div className="navigation-logo">
			<img src={Logo} alt="logo" />
			<div className="navigation-menu">
				<ul>
					<li>Nav 1</li>
					<li>Nav 2</li>
					<li>Nav 3</li>
					<li>
						<FontAwesomeIcon
							className="star"
							icon={faBars}
							style={{ width: '30px' }}
						/>
					</li>
				</ul>
			</div>
		</div>
		<hr />
	</div>
);

export default Navigation;
