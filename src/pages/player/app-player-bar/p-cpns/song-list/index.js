import React, { memo, useEffect, useRef, useState } from 'react'
import { SongListWrapper,ListTop,ListBottom } from './style'
import {  useDispatch, useSelector } from 'react-redux'
import { changeShowPlayListAction, selectCurrentSongAction } from '../../../store/actionCreator'
import {Link} from "react-router-dom"


import PlayListItem from '@/components/play-listitem-player'
import { getSizeImage } from '@/utils/format-utils'

const SongList = memo((props) => {
   const {listcount,currentlyricindex}=props;

   const [showButton,setShowButton]=useState(false);

   const scrollListRef=useRef();
   const scrollRef=useRef();

    useEffect(()=>{
        //当前小于3时不需要滑动
        scrollRef.current.scrollTop=currentlyricindex<3? 0 : (currentlyricindex-3)*44;
    },[currentlyricindex])


    const {currentSong,PlayList,currentSongIndex,lyricList}=useSelector(state=>({
        PlayList:state.getIn(["player","playList"]),
        currentSong:state.getIn(["player","currentSong"]),
        currentSongIndex:state.getIn(["player","currentSongIndex"]),
        lyricList:state.getIn(["player","lyricList"])
    }))
    const currentSongName=currentSong.name;

    const dispatch=useDispatch();



    //other handle
    const picUrl=(currentSong.al && currentSong.al.picUrl) || "@/assets/img/people.png";

    //自定义事件处理
    const closePlayList=()=>{
        dispatch(changeShowPlayListAction(false));
    }
    const changeShowButton=()=>{
        setShowButton(!showButton)
    }
    //选择播放的歌曲进行播放
    const selectSongItem=(ids)=>{
        dispatch(selectCurrentSongAction(ids))
    }
    

  return (
    <SongListWrapper>
        <div className='playlist-content'>
            <ListTop>
                <div className='top-title-left'>
                 <h4>播放别表({listcount})</h4>
                 <a href="#/" className='addall'>
                    <span className='ico play-list ico-add'></span>
                    收藏全部
                </a>
                <span className='line'></span>
                <a href="#/" className='clear'>
                <span className='play-list ico ico-clear'></span>
                    删除
                </a>
                </div>
                <div className='top-title-right'>
                    <div className='song-name f-thide'>{currentSongName}</div>
                    <span className='close play-list' onClick={e=>closePlayList()}>关闭</span>
                </div>
            </ListTop>
            <ListBottom scrollcount={currentlyricindex}>
                <img src={getSizeImage(picUrl,980)} alt="" className='bottom-image'/>
                <div className='listbdc scroll  j-flag' ref={scrollListRef}>
                <ul className='f-cb'>
                        {
                            PlayList.map((item,index)=>{
                                return (
                                    <li className={currentSongIndex===index? "m-playbar-item select-player-item":"m-playbar-item"} key={item.id} onClick={e=>selectSongItem(item.id)} >
                                        <PlayListItem  isselected={currentSongIndex===index? "1":"0"} info={item} ></PlayListItem>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className='bline j-flag'>
                   <span className='b-scroll'></span>
                </div>
                <div className='ask'>
                    <span className='ico ask-ico play-list' onClick={e=>changeShowButton()}> </span>
                </div>
                {showButton && (<div className='ask-upload'>
                    <Link to="/discover/report">报错</Link>
                </div>)}
                <div className='mask2  j-flag'></div>
                <div className='listlyric scroll j-flag' ref={scrollRef}>
                    {
                        lyricList.map((item,index)=>{
                            return <p   className={index===currentlyricindex-1? "j-flag z-sel": "j-flag"} data-time={index} key={item.time}>{item.content}</p>
                        })
                    }
                </div>
                <div className='bline bline-2 j-flag'>
                <span className='b-scroll-2'></span>
                </div>
            </ListBottom>
        </div>
    </SongListWrapper>
  )
})

export default SongList