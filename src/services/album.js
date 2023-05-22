import request from "./request"


export function getHotAlbums(limit){
    return request({
        url:"/album/newset", 
        params:{
        limit
       }
    })
  
}

export function getTopAlbums(limit ){
    return request({
        url:"/top/album",
        params:{
            limit
        }
    })
}