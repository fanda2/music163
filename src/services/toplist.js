import request from "./request"

export function getTopList(id){
    return request({
        url:"/playlist/detail",
        params:{
            id
        }
    })

}