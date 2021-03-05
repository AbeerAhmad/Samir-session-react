import { combineReducers, createStore } from "redux";
import user from "./reducer/userreducer";
import count from './reducer/count'
const combinereducers=combineReducers({user,count})

const store=createStore(combinereducers)
export default store


