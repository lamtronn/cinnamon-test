import React, { PureComponent } from 'react';

import './Level.css';

class Level extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			width: this.props.level.toString() + '%',
			color: null,
		};
	}

	componentDidMount = () => {
		if (this.props.level > 100) {
			this.setState({ width: '100%', color: '#70ad46' });
		}
		if (this.props.level > 50 && this.props.level <= 100) {
			this.setState({ color: '#70ad46' });
		}
		if (this.props.level > 25 && this.props.level <= 50) {
			this.setState({ color: '#fed966' });
		}
		if (this.props.level > 0 && this.props.level <= 25) {
			this.setState({ color: '#ed7d31' });
		}
	};
	render() {
		const progressStyle = {
			width: this.state.width,
			background: this.state.color,
		};
		return (
			<div className="level-wrapper">
				<div className="level-progress" style={progressStyle}></div>
			</div>
		);
	}
}

export default Level;
