import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { toggleTodo, setVisibilityFilter } from "../../actions/todo";

@connect(state => {
  return {
    todos: _.get(state.todos, "list", []),
    cant: _.get(state.todos, "cant", 0)
  };
})
export default class TodoList extends Component {
  toggleTodo(e, id) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    this.props.dispatch(toggleTodo(id));
  }

  render() {
    return (
      <div className="my-2">
        <div className="col-12 col-lg-12 col-sm-12">
          <ul>
            {this.props.todos.map(todo => (
              <li className="pointer"
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
                key={todo.id}
                onClick={e => this.toggleTodo(e, todo.id)}
              >
                {todo.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
