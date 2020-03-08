import React, { Component } from "react";

class Movie extends Component {
    render() {
        const { title, body } = this.props.movie;
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                <div style={{ maxWidth: 800 }}>
                    <h3>{title}</h3>
                    <p>{body}</p>
                </div>
                <div className="image-parent">
                    <img
                        src="https://picsum.photos/300/200"
                        className="img-fluid"
                        alt={title}
                    />
                </div>
            </li>
        );
    }
}

export default Movie;
