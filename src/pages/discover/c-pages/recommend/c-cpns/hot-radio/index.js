import React, { memo, useEffect } from 'react'
import { HotRadioWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPopularListAction } from '../../store/actionCreators';

import DjRadioItem from './c-cpns';

const HotRadio = memo(() => {

  const {djRadioList}=useSelector((state)=>({
    djRadioList:state.getIn(["recommend","djRadioList"])
  }),shallowEqual);

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getPopularListAction(5))
  },[dispatch])


  return (
  <HotRadioWrapper>
     <div className='settle-list'>
       <div className='settle-list-top'>
        <h3>热门主播{djRadioList.length}</h3>
       </div>
       <div className='settle-list-content'>
        <ul>
          {
           djRadioList.map((item,index)=>{
            return (
              <li className='settle-list-item' key={item.id}><DjRadioItem info={item}></DjRadioItem></li>
            )
           })
          }
        </ul>
       </div>
     </div>
  </HotRadioWrapper>
  )
})

export default HotRadio