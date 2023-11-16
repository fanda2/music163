import request from "./request"

export function getTopList(id){
    return request({
        url:"/playlist/detail",
        params:{
            id
        }
    })

}

//获取所有排行榜当
export function getAllTopList(){
    return request({
        url:"/toplist"
    })
}