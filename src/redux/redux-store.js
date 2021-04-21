import { applyMiddleware, combineReducers, createStore } from "redux"
import Loadingreduser from '../redux/loading-reducer'
import Homereduser from '../redux/home-reducer'
import Statisticsreduser from '../redux/statistics-reducer'
import Countriesreduser from '../redux/countries-reducer'
import thunkMiddleware from 'redux-thunk';
let reducers = combineReducers({
    Loadingreduser,
    Countriesreduser,
    Homereduser,
    Statisticsreduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window._store = store
export default store