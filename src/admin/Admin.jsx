import React, { Component } from "react";

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Admin",
            content: "Admin page",
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>

                <p>{this.state.content}</p>
            </div>
        );
    }
}

