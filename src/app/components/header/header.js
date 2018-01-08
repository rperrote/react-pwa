import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import Link from "pawjs/src/components/link";

const Header = (props) => {
  return (
    <div className="container">
      <ul className="nav d-inline-flex">
        <li className="nav-item">
          <Link
            className={classNames("nav-link", {active: props.url === "/"})}
            to="/add"
          >
            <h1>+</h1>
          </Link>
        </li>
      </ul>
      <h2 className="d-inline-flex">Tudus ({props.cant})</h2>
    </div>
  );
};

export default connect(state => { return {url: state.router.location.pathname, cant: state.todos.cant}; })(Header);
