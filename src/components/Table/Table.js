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
			usersEditing: null,
			onEdit: false,
		};
	}

	onDeleteUser = (index) => {
		let { users } = this.state;
		let newUsersArray = [...users];
		newUsersArray.splice(index, 1);
		this.setState({ users: newUsersArray });
	};

	onEditUser = (event, index) => {
		let { users } = this.state;
		let newUsersArray = [...users];

		let target = event.target;
		let name = target.name;
		let value = target.value;

		newUsersArray[index][name] = value;
		this.setState({
			users: newUsersArray,
		});
	};

	onClickEdit = (param) => {
		this.setState({ onEdit: param });
	};

	userList = () =>
		this.state.users.map((user, index) => {
			return (
				<tr className="table-column" key={user.id}>
					<td className="table-column-small">{index + 1}</td>
					<td className="table-align-left">{user.name}</td>
					<td className="table-align-right">
						<Point point={user.point} />
					</td>
					<td>
						<Level level={user.level} />
					</td>
					<td className="table-column-star">
						<Star star={user.star} />
					</td>
				</tr>
			);
		});

	userListEdit = () =>
		this.state.users.map((user, index) => {
			return (
				<tr key={user.id}>
					<td className="table-column-small">{user.id}</td>
					<td className="table-align-left">
						<input
							type="text"
							name="name"
							value={user.name}
							className="table-form-input"
							onChange={(event) => this.onEditUser(event, index)}
						/>
					</td>
					<td className="table-align-right">
						<input
							type="number"
							name="point"
							value={user.point}
							className="table-form-input"
							onChange={(event) => this.onEditUser(event, index)}
						/>
					</td>
					<td>
						<input
							type="number"
							name="level"
							value={user.level}
							className="table-form-input"
							onChange={(event) => this.onEditUser(event, index)}
						/>
					</td>
					<td className="table-column-star">
						<select
							value={user.star}
							name="star"
							onChange={(event) => this.onEditUser(event, index)}
						>
							<option value={0}>0</option>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={3}>3</option>
						</select>
					</td>
					<td className="table-column-delete">
						<FontAwesomeIcon
							onClick={() => this.onDeleteUser(index)}
							className="delete"
							icon={faTrash}
							style={{ color: '#7f7f7f' }}
						/>
					</td>
				</tr>
			);
		});

	render() {
		let userList = this.userList();
		let userListEdit = this.userListEdit();

		return (
			<div className="table-wrapper">
				<div className="table-container">
					<div className="table">
						<table>
							<tr className="table-header">
								<th className="table-column-small table-top-left">#</th>
								<th className="table-align-left">Name</th>
								<th className="table-align-right">Point</th>
								<th className="table-column-big">Level</th>
								<th className="table-column-medium table-top-right">Star</th>
								{/* <th className="table-column-small">#</th> */}
								{/* <th className="table-column-delete"></th> */}
							</tr>
							{this.state.onEdit === false ? userList : userListEdit}
						</table>
					</div>
					<div className="table-button">
						{this.state.onEdit !== true ? (
							<button
								className="table-button-edit"
								onClick={() => this.onClickEdit(true)}
							>
								Edit
							</button>
						) : (
							<button
								className="table-button-ok"
								onClick={() => this.onClickEdit(false)}
							>
								OK
							</button>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Table;
