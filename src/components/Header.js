import React from "react";

function Header(props) {
    return (
        <nav className="navbar sticky-top navbar-light bg-primary">
            <a className="navbar-brand" href="/">
                <h2><strong>Clicky Game</strong></h2>
            </a>
            <span className="navbar-text text-dark">
                <h3 className="align-baseline">
                    Score: <span>{props.score}</span>  |  Top Score: <span>{props.topScore}</span>
                </h3>
            </span>
        </nav>
    );
}

export default Header