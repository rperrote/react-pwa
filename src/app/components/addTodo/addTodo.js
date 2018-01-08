import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todo";

@connect(state => {
  return {
    todos: _.get(state.todos, "list", []),
  }
})
export default class AddTodo extends Component {
  constructor(){
    super();
    let input;
  }

  addTodo(e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (!this.input.value.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.input.value));
    this.input.value = "";
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="my-2">
        <form
          onSubmit={e => this.addTodo(e)}
        >
          <input type="text" ref={node => this.input = node} placeholder="Ingrese algo tudu"/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}
