import * as actionTypes from "./constants"
import {Map} from "immutable"

const defaultState=Map({
    topBanners:[],
    hotRecommends:[],
    newAlbums:[],
    upList:[],
    newList:[],
    originList:[]

})


function reducer(state=defaultState,action){
    switch(action.type){
        case actionTypes.CHANGE_TOP_BANNER:
            return state.set("topBanners",action.topBanners);
        case actionTypes.CHANGE_HTO_RECOMMEND:
            return state.set("hotRecommends",action.hotRecommends);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbums",action.newAlbums);
        case actionTypes.CHANGE_UP_LIST:
            return state.set("upList",action.upList)
        case actionTypes.CHANGE_NEW_LIST:
            return state.set("newList",action.newList)
        case actionTypes.CHANGE_ORIGIN_LIST:
            return state.set("originList",action.originList)
        default:
            return state;
    }
}

export default reducer;