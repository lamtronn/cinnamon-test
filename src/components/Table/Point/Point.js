import React, { PureComponent } from 'react';
//import { Test } from './Point.styles';

class Point extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			point: null,
		};
  }

  componentDidMount = () => {
    this.setState({
      point : this.convertNumber(this.props.point)
    });
  }

  convertNumber(point) {
    if (point > 1000) {
      // point = point.toString();
      console.log(typeof(point));
      return parseInt(point).toLocaleString('en');
    }
    if (point < 0) {
      point = point.toString();
      return point.slice(0,1) + " " + point.slice(1,point.length);
    }
    else return point;
  }

	render() {
		return (
			<div
				style={{ color: this.props.point < 0 ? 'red' : 'black' }}
				className="point-wrapper"
			>
				{this.state.point}
			</div>
		);
	}
}

export default Point;
