import thunk from "redux-thunk"
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './rootReducer.jsx'

const middleware = [thunk];
const initialState = {}
const store =  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;