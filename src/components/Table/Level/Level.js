import React, { PureComponent } from 'react';

import './Level.css';

class Level extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			width: this.props.level.toString() + '%',
			title : null,
			color: null,
		};
	}

	componentDidMount = () => {
		if (this.props.level > 100) {
			this.setState({ width: '100%', color: '#50e3c2', title: 'Full' });
		}
		if (this.props.level > 50 && this.props.level <= 100) {
			this.setState({ color: '#50e3c2', title: 'High' });
		}
		if (this.props.level > 25 && this.props.level <= 50) {
			this.setState({ color: '#FFC25D', title: 'Medium' });
		}
		if (this.props.level >= 0 && this.props.level <= 25) {
			this.setState({ color: '#FF5267', title: 'Low' });
		}
	};
	render() {
		const progressStyle = {
			width: this.state.width,
			background: this.state.color,
		};

		const textStyle = {
			color: this.state.color,
		};

		return (
			<div className="level-wrapper">
				<div className="level-info">
					<div className="level-percent">
					{this.state.width} 
					</div>
					<div className="level-title" style={textStyle}>
					{this.state.title} 
					</div>
				</div>
				<div className='level-border'>
				<div className="level-progress" style={progressStyle}></div>
				</div>
			</div>
		);
	}
}

export default Level;
