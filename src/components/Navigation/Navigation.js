import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/logo.png';
import './Navigation.css';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayMenu: false,
		};
	}

	menu = () => {
		return (
			<>
				<li>Home</li>
				<li>About us</li>
				<li>Contact</li>
			</>
		);
	};

	onToggleMenu = () => {
		console.log('hi');
		this.setState({
			displayMenu: !this.state.displayMenu,
		});
	};

	render() {
		let menu = this.menu();
		return (
			<div className="navigation-wrapper">
				<div className="navigation-logo">
					<img src={Logo} alt="logo" />
					<div className="navigation-menu">
						<ul>
							{this.state.displayMenu === true ? menu : null}
							<li>
								<FontAwesomeIcon
									onClick={() => this.onToggleMenu()}
									className="navigation-hamburger"
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
	}
}

export default Navigation;
