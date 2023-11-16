import React, { memo, useEffect } from 'react'
import { SettleSingerWrapper } from './style'
import {Link} from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getArtistListAction } from '../../store/actionCreators'
import SettleItem from './c-cpns'

const SettleSinger = memo(() => {
  const {artistList}=useSelector(state=>({
    artistList:state.getIn(["recommend","artistList"])
  }),shallowEqual);

  const dispatch=useDispatch();

  //other hooks
  useEffect(()=>{
    dispatch(getArtistListAction(0,5))
  },[dispatch])
  return (
  <SettleSingerWrapper>
     <div className='settle-list'>
       <div className='settle-list-top'>
        <h3>入驻歌手</h3>
        <Link to="/discover/artist/signed">查看全部&gt;</Link>
       </div>
       <div className='settle-list-content'>
        <ul>
          {
            artistList.map((item,index)=>{
              return (<li className='settle-list-item' key={item.id}><SettleItem info={item}></SettleItem></li>)
            })
          }
        </ul>
        <div className='add-btn'>
            <a className='add-btn-link button2' href="https://music.163.com/st/musician"><i className='button2 in-btn'>申请成为音乐人</i></a>
        </div>
       </div>
     </div>
  </SettleSingerWrapper>
  )
})

export default SettleSinger