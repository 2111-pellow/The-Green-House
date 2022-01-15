
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import plantsReducer from "./allPlants";
import  singlePlantReducer  from "./singlePlant"
import  singleUserReducer  from "./singleUser"
import cartReducer from "./cart"

const reducer = combineReducers({
  auth,
  singlePlantReducer,
  plants: plantsReducer,
  singleUserReducer,
  cartReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
