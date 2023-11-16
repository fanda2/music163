import request from "./request"

export function getArtistList(offset,limit){
    return request({
        url:"/top/artists",
        params:{
            offset,
            limit
        }
    })
}

export function getHotRadioList(){
    return request({
        url:"/dj/hot",
    })
}

export function getPopularDjList(limit){
    return request({
        url:"/dj/toplist/popular",
        params:{
            limit
        }
    })
}