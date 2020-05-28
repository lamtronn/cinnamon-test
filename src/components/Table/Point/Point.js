import React, { PureComponent } from 'react';

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
    point = parseInt(point).toLocaleString('en').toString();
    if (point < 0) {
      return point.slice(0,1) + " " + point.slice(1,point.length);
    }
    else return point;
  }

	render() {
		return (
			<div
				style={{ color: this.props.point < 0 ? 'red' : '#4A4A4A' }}
				className="point-wrapper"
			>
				<p>{this.state.point}</p>
			</div>
		);
	}
}

export default Point;
