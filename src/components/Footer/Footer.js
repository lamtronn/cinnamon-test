import React from 'react';
import { Animated } from 'react-animated-css';

import './Footer.css';

const Footer = () => (
	<Animated animationIn="fadeIn" animationInDelay="300" isVisible={true}>
		<div className="footer-wrapper">
			<hr />
			<div className="footer-title">
				<p>Extend human potential</p>
			</div>
			<div className="footer-content">
				<p>
					{' '}
					At Cinnamon we are working to make a world where human creativity can
					flourish by using out AI technology to replace all the repetitive,
					mind-numbing tasks that take place today.
				</p>
			</div>
		</div>
	</Animated>
);

export default Footer;
