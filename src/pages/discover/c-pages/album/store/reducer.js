import * as actionTypes from "./constants"

import {Map} from "immutable"


const defalutState=Map({
    newAlbums:[],
    hotAlbums:[]
})

function reducer(state=defalutState,action){
    switch(action.type){
        case actionTypes.CHANGE_NEW_ALBUM_LIST:
           return state.set("newAlbums",action.newAlbums);
        case actionTypes.CHANGE_HOT_ALBUM_LIST:
            return state.set("hotAlbums",action.hotAlbums);
        default:
            return state
    }
}


export default reducer;