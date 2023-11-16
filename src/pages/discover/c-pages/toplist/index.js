import React, { memo, useEffect, useState } from 'react'
import { TopListWrapper,Content,PlayListLeft,PlayListRight} from './style'
import ListItem from './c-cpns/list-item'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAllTopListAction, getTopListDetailAction } from './store/actionCreators'
import TopCoverContent from './c-cpns/top-cover'
import MusicList from './c-cpns/music-list'

const TopList = memo(() => {

  //用于判断当前点击的Item
  const [currentIndex,setCurrentIndex]=useState(0);
  const [currentIndex2,setCurrentIndex2]=useState(-1);

  const {allTopList,listDetail}=useSelector(state=>({
    allTopList:state.getIn(["toplist","allTopList"]),
    listDetail:state.getIn(["toplist","listDetail"])
  }),shallowEqual)


  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getAllTopListAction());
  },[dispatch])

 const vipList=allTopList.slice(0,4);
 const normalList=allTopList.slice(4,40);
 
 const selectItem=(index)=>{
  setCurrentIndex(index);
  dispatch(getTopListDetailAction(allTopList[index].id));
  setCurrentIndex2(-1);
 }
 const selectItem2=(index)=>{
  console.log("first",allTopList)
  setCurrentIndex2(index);
  dispatch(getTopListDetailAction(allTopList[4+index].id));
  setCurrentIndex(-1);
 }
  return (
   <TopListWrapper>
    <Content className='wrap-v2'>
      <PlayListLeft>
        <div className='minelist'>
           <div className='minelist-item'>
               <h2>云音乐特色榜</h2>
              <ul>
                {
                 vipList.map((item,index)=>{
                    return(
                      <li  className={index===currentIndex? 'select-list-item selected-list-item':'select-list-item'}  onClick={e=>selectItem(index)} key={item.id}> <ListItem info={item}> </ListItem></li>
                    )
                  })
                }
              </ul>
           </div>
          <div className='minelist-item'>
           <h2>云音乐特色榜</h2>
           <ul>
              {
      
                 normalList.map((item,index)=>{
                    return(
                      <li  className={index===currentIndex2? 'select-list-item selected-list-item':'select-list-item'} onClick={e=>selectItem2(index)} key={item.id}> <ListItem info={item}></ListItem></li>
                    )
                  })
                }
          </ul>
          </div>
        </div>
      </PlayListLeft>
      <PlayListRight>
        <div className='g-wrap22 content-top'>
          <TopCoverContent info={listDetail}/>
        </div>
        <div className='g-wrap12 content-list'>
          <MusicList info={listDetail.tracks}/>
        </div>
      </PlayListRight>
    </Content>
   </TopListWrapper>
  )
})

export default TopList