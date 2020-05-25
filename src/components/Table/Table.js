import React, { Component } from 'react';
import Point from './Point/Point';
import Level from './Level/Level';

import './Table.css';
class Table extends Component {
	constructor(props) {
		super(props);

		this.state = {
      users : [{
        id: 1,
        name: 'Mike',
        point: 1230,
        level: 80,
        star: 3
      },
      {
        id: 2,
        name: 'Alex',
        point: 45,
        level: 50,
        star: 2
      },
      {
        id: 3,
        name: 'Christopher',
        point: 0,
        level: 25,
        star: 1
      },
      {
        id: 4,
        name: 'John',
        point: -60,
        level: 0,
        star: 0
      }],
			onEdit: false,
		};
  }

	render() {
    let userList = this.state.users.map((user, index) =>  {
      return (<tr>
        <td className="table-column-small">{user.id}</td>
        <td className="table-align-left">{user.name}</td>
        <td className="table-align-right" ><Point point={user.point}/></td>
        <td><Level level={user.level}/></td>
        <td>{user.star}</td>
      </tr>)
    });
		return (
			<div className="table-wrapper">
				<div className="table-container">
					<div className="table-header">
						<p>Stage1</p>
					</div>
					<div className="table">
						<table>
							<tr>
								<th className="table-column-small">#</th>
								<th className="table-align-left">Name</th>
								<th className="table-align-right">Point</th>
								<th className="table-column-big">Level</th>
								<th className="table-column-big">Star</th>
							</tr>
							{userList}
						</table>
					</div>
				</div>
				<hr />
			</div>
		);
	}
}

export default Table;
