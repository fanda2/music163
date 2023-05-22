import * as actionTypes from "./constants"

import {getTopAlbums } from "@/services/album"


const changeAlbumsListAction=(res)=>({
    type:actionTypes.CHANGE_NEW_ALBUM_LIST,
    newAlbums:res
})

const changeHotAlbumsAction=(res)=>({
    type:actionTypes.CHANGE_HOT_ALBUM_LIST,
    hotAlbums:res
})


export const getNewAlbumsListAction=(limit)=>{
    return dispatch=>{
        getTopAlbums(limit).then(res=>{
            const newAlbumList=res.weekData.slice(0,10);
            dispatch(changeAlbumsListAction(newAlbumList))
        })
    }
}


export const getHotAlumsListAction=(limit)=>{
    return dispatch=>{
        getTopAlbums(limit).then(res=>{
            const hotAlbumList=res.weekData.slice(0,35);
            dispatch(changeHotAlbumsAction(hotAlbumList))
        })
    }
}