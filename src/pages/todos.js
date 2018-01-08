import Todo from "../app/components/todo";
import DefaultLayout from "../app/components/layout";

const routes = [
  {
    path: "/",
    exact: true,
    component: Todo,
    layout: DefaultLayout,
  }
];
export default routes;
