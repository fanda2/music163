// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import {reducer as recommendReducer} from "../pages/discover/c-pages/recommend/store"
import {reducer as playerReducer} from "../pages/player/store"
import {reducer as albumReducer} from "../pages/discover/c-pages/album/store"
import {reducer as topListReducer} from "../pages/discover/c-pages/toplist/store"

const cReducer =combineReducers({
    recommend:recommendReducer,
    player:playerReducer,
    album:albumReducer,
    toplist:topListReducer
}) 

export default cReducer; 