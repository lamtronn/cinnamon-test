import React, { Component } from 'react';
import Point from './Point/Point';
import Level from './Level/Level';
import Star from './Star/Star';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './Table.css';
class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [
				{
					id: 1,
					name: 'Mike',
					point: 1230,
					level: 80,
					star: 3,
				},
				{
					id: 2,
					name: 'Alex',
					point: 45,
					level: 50,
					star: 2,
				},
				{
					id: 3,
					name: 'Christopher',
					point: 0,
					level: 25,
					star: 1,
				},
				{
					id: 4,
					name: 'John',
					point: -60,
					level: 0,
					star: 0,
				},
			],
			onEdit: false,
		};
	}

	onDeleteUser = (id) => {
		let { users } = this.state;
		let index = this.findIndex(id);
		console.log(users);
		users.splice(index, 1);
		this.setState({ users: users });
	};

	findIndex = (id) => {
		let { users } = this.state;
		let result = -1;
		users.map((user, index) => {
			if (user.id === id) {
				result = index;
			}
		});
		return result;
	};

	render() {
		let userList = this.state.users.map((user, index) => {
			return (
				<tr>
					<td className="table-column-small">{user.id}</td>
					<td className="table-align-left">{user.name}</td>
					<td className="table-align-right">
						<Point point={user.point} />
					</td>
					<td>
						<Level level={user.level} />
					</td>
					<td className="table-column-star">
						<Star star={user.star} />
						<p className="table-column-delete">
							<FontAwesomeIcon
								onClick={() => this.onDeleteUser(user.id)}
								className="star"
								icon={faTrash}
								style={{ color: '#7f7f7f' }}
							/>
						</p>
					</td>
				</tr>
			);
		});

		return (
			<div className="table-wrapper">
				<div className="table-container">
					<div className="table-title">
						<p>Stage1</p>
					</div>
					<div className="table">
						<table>
							<tr className="table-header">
								<th className="table-column-small">#</th>
								<th className="table-align-left">Name</th>
								<th className="table-align-right">Point</th>
								<th className="table-column-big">Level</th>
								<th className="table-column-big">Star</th>
								{/* <th className="table-column-delete"></th> */}
							</tr>
							<br />
							{userList}
						</table>
					</div>
					<div className="table-buttons"></div>
				</div>
				<hr />
			</div>
		);
	}
}

export default Table;
