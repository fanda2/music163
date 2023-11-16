import * as actionTypes from "./constants"

import {getTopBanners,getHotRecommends} from  "@/services/recommend"
import { getTopAlbums } from "@/services/album"
import { getTopList } from "@/services/toplist"
import { getArtistList,getPopularDjList} from "@/services/artist"

const changeTopBannersAction=(res)=>({
    type:actionTypes.CHANGE_TOP_BANNER,
    topBanners:res.banners
})


const changeHotRecommendsAction=(res)=>({
    type:actionTypes.CHANGE_HTO_RECOMMEND,
    hotRecommends:res.result
})

const changeNewAlbumsAction=(res)=>({
    type:actionTypes.CHANGE_NEW_ALBUM,
    newAlbums:res
})

const changeUpListAction=(res)=>({
    type:actionTypes.CHANGE_UP_LIST,
    upList:res.playlist
})
const changeNewListAction=(res)=>({
    type:actionTypes.CHANGE_NEW_LIST,
    newList:res.playlist
})
const changeOriginListAction=(res)=>({
    type:actionTypes.CHANGE_ORIGIN_LIST,
    originList:res.playlist
})

const changeArtistListAction=(res)=>({
    type:actionTypes.CHANGE_ARTIST_LIST,
    artistList:res
})

const changeDjRadioListAction=(res)=>({
    type:actionTypes.CHANGE_DJRADIO_LIST,
    djRadioList:res
})

export const getTopBannerAction=()=>{
    return dispatch=>{
        getTopBanners().then(res=>{
           dispatch(changeTopBannersAction(res))
        })
    }
}

export const getHotRecommendsAction=(limit)=>{
    return dispatch=>{
        getHotRecommends(limit).then(res=>{
            dispatch(changeHotRecommendsAction(res));
        })
    }
}

export const getNewAlbumsAction=(limit)=>{
    return dispatch=>{
        getTopAlbums(limit).then(res=>{
            const albums=res.weekData.slice(0,10);
            dispatch(changeNewAlbumsAction(albums))
        })
    }
}

export const getTopListAction=(id)=>{
    return dispatch=>{
        getTopList(id).then(res=>{
           switch (id){
            case 19723756:
               dispatch(changeUpListAction(res));
               break;
            case 3779629:
                dispatch(changeNewListAction(res));
                break;
            case 2884035:
                dispatch(changeOriginListAction(res))
                console.log(res)
                break;
            default:
           }
        })
    }
}


//调用接口获取数据
export const getArtistListAction=(offset,limit)=>{
    return dispatch=>{
        getArtistList(offset,limit).then((res)=>{
            const artists=res.artists;
            dispatch(changeArtistListAction(artists));
        })
    }
}

//获取热门主播
export const getPopularListAction=(limit)=>{
    return dispatch=>{
        getPopularDjList(limit).then((res)=>{
            const popularDj=res.data.list;
           dispatch(changeDjRadioListAction(popularDj));
        })
    }
}