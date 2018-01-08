import AddTodo from "../app/components/addTodo";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/add",
    exact: true,
    component: AddTodo,
    layout: DefaultLayout,
  }
];
export default routes;
