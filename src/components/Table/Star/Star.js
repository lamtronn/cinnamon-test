import React, { PureComponent } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Star extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			point: null,
		};
  }

	render() {
    let stars = [];
for (var i = 0; i < this.props.star; i++) {
  stars.push(<FontAwesomeIcon className='star' icon={faStar} style={{color: "#fac107", margin: '2px'}}/>);
}
		return (
			<div
				className="star-wrapper"
			>
			{stars}
			</div>
		);
	}
}

export default Star;
