import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import epics from "./epics";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducers, applyMiddleware(epicMiddleware));

epicMiddleware.run(epics);

export default store;
