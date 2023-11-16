import * as actionTypes from "./constants"
import {Map} from "immutable"

const defaultState=Map({
    allTopList:[],
    listDetail:{}
})

function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_ALL_TOP_LIST:
            return state.set("allTopList",action.allTopList);
        case actionTypes.CHANGE_LIST_DETAIL:
            return state.set("listDetail",action.listDetail)
        default:
            return state;
    }
}


export default reducer