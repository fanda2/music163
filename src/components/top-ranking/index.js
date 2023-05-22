import React, { memo } from 'react'
import { TopRanlingWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils';
import {Link} from "react-router-dom"
import { getSongDetailAction } from '@/pages/player/store';
import { useDispatch } from 'react-redux';


const TopRanking = memo((props) => {
    //props and state
    const {info}=props;
    const {tracks=[]}=info;

    //redux hooks
    const dispatch=useDispatch();


    //other handle
    const playMusic=(item)=>{
        dispatch(getSongDetailAction(item.id))
    }
  return (
    <TopRanlingWrapper>
        <div className='header'>
            <div className='image'>
                <img src={getSizeImage(info.coverImgUrl,80)} alt="封面" />
                <Link to={{pathname:"/discover/toplist?id="+info.id}} className="cover-all"></Link>
            </div>
            <div className='info'>
                <Link to={{pathname:"/discover/toplist?id="+info.id}}>{info.name}</Link>
                <div>
                    <button className='btn play index'></button>
                    <button className='btn favor index'></button>
                </div>
            </div>
        </div>
        <div className='list'>
            {
                tracks.slice(0,10).map((item,index)=>{
                    return(
                        <div key={item.id} className='list-item'>
                            <div className='rank'>{index+1}</div>
                            <div className='name'><Link to={{pathname:"/song?id="+item.id}}>{item.name}</Link></div>
                            <div className='operate'>
                                <button className='btn play index' onClick={e=>playMusic(item)}></button>
                                <button className='btn addto icon'></button>
                                <button className='btn favor index'></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div className='footer'>
             <Link to={{pathname:"/discover/toplist?id="+info.id}}>查看全部 &gt;</Link>
        </div>
    </TopRanlingWrapper>
  )
})

export default TopRanking