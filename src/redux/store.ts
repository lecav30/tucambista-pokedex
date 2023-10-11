import { createStore, applyMiddleware, compose } from "redux";
import reducers, { InitialRootState } from "./reducers";
import { createEpicMiddleware } from "redux-observable";
import { Action } from "redux-actions";
import epics from "./epics";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const epicMiddleware = createEpicMiddleware<
  Action<any>,
  Action<any>,
  InitialRootState
>();

function configureStore(initialState?: InitialRootState) {
  const middleware = [epicMiddleware];
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  return createStore(reducers, initialState, enhancer);
}

const store = configureStore();

epicMiddleware.run(epics as any);

export default store;
