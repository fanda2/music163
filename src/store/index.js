import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import reducer from "./reducer"


const composeEhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//applyMiddleWare合并多个中间件

const store=createStore(reducer,composeEhancers(
    applyMiddleware(thunk)
));

export default store;
