import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
import * as Todo from "./pages/todos";
import * as AddTodo from "./pages/addTodos";

export default configureRoutes([
  Todo,
  AddTodo
]);
