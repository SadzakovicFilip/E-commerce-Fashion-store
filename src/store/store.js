import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { legacy_createStore } from "redux";

import { rootReducer } from "./root-reduer";

//root-reducer

const middleWares = [logger];

const composedEnahcers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnahcers);
