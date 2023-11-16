import React, { memo,useEffect} from 'react'
import { RankingWrapper } from './style'


import ThemeHeaderRecommend from '@/components/theme-header-rcm'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopListAction } from '../../store/actionCreators'


import TopRanking from '@/components/top-ranking'

const RankingList = memo((props) => {

    const {upList,newList,originList}=useSelector(state=>({
        upList:state.getIn(["recommend","upList"]),
        newList:state.getIn(["recommend","newList"]),
        originList:state.getIn(["recommend","originList"])
    }),shallowEqual)
   
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getTopListAction(19723756));
      dispatch(getTopListAction(3779629));
      dispatch(getTopListAction(2884035));
    },[dispatch])
    
  return (
  <RankingWrapper>
    <ThemeHeaderRecommend title={{name:"榜单",link:"/discover/toplist"}}/>
    <div className='tops'>
      <TopRanking info={upList}></TopRanking>
      <TopRanking info={newList}></TopRanking>
      <TopRanking info={originList}></TopRanking>
    </div>
  </RankingWrapper>
  )
})

export default RankingList