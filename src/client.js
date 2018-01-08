import { trackPageView } from "pawjs/src/utils/analytics";

import * as appReducers from "./app/reducers";

export const reduxInitialState = {
  todos: {
    cant: 0,
    list: [],
    visibility: "SHOW_ALL"
  }
};
export const reduxReducers = appReducers;
export const onPageChange = function() {
  trackPageView().catch();
};

if (module.hot) module.hot.accept();
