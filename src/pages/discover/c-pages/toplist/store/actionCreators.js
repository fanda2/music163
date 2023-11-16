import * as actionTypes from "./constants"

import { getAllTopList,getTopList} from "@/services/toplist"

const changeAllTopListAction=(res)=>({
    type:actionTypes.CHANGE_ALL_TOP_LIST,
    allTopList:res
})

const changeTopListDetailACtion=(res)=>({
    type:actionTypes.CHANGE_LIST_DETAIL,
    listDetail:res
})



export const getAllTopListAction=()=>{
    return (dispatch,getState)=>{
        getAllTopList().then(res=>{
            const topList=res.list;
            const defaultId=topList[0].id;
           dispatch(changeAllTopListAction(topList));
           dispatch(getTopListDetailAction(defaultId))
        })
    }
}

export const getTopListDetailAction=(id)=>{
    return dispatch=>{
        getTopList(id).then(res=>{
            const playList=res.playlist;   //详情中的头部
            dispatch(changeTopListDetailACtion(playList))
        })
        
    }
}