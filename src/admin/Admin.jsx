import React, { Component } from "react";

import send from "../client/lib/send";

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            db: [],
        };
    }

    componentDidMount() {
        send("getUsersList", {}).then((res) => {
            const { users } = res;
            this.setState({ db: users });
        });
        console.log(this.db);
    }

    deleteUser = (username) => {
    };

    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Widht</th>
                            <th>Height</th>
                            <th>Grid</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.db.map((item) => (
                            <tr key={item.username}>
                                <td>{item.username}</td>    
                                <td>{item.width}</td>
                                <td>{item.height}</td>
                                <td>{item.grid}</td>
                                <td>
                                    <button

                                        onClick={() => this.deleteUser(item.username)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                }
                    </tbody>
                </table>
            </div>
        );
    }
}

