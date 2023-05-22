import React, { memo,useEffect,useRef ,useState,useCallback } from 'react'
import { Slider } from 'antd'

import { getSizeImage ,formatDate} from '@/utils/format-utils'

import { AppPlayerWrapper, Control, Operator, PlayInfo,LockTag } from './style'
import {Link} from "react-router-dom"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSongDetailAction ,changeSequeceAction, changeCurrentSongAction, changeIsLockAction,changeShowPlayListAction} from '../store/actionCreator'
import { getPlayMusic } from '@/utils/format-utils'
import SongList from './p-cpns/song-list'

import useOutsideClick from '@/utils/outSideClick'

const AppPlayerBar = memo(() => {
    //props and state
    const [currentTime,setCurrentTime]=useState(0);
    const [progress,setProgress]=useState(0);
    const [isChanging,setIsChanging]=useState(0);
    const [isPlaying,setIsPlaying]=useState(false);
    const [playVolume,setPlayVolume]=useState(30);
    const [showVolume,setShowVolume]=useState(false);
    const [currentLyricIndex,setCurrentLyricIndex]=useState(0);
    // const [showPlayList,setShowPlayList]=useState(false)


    const {currentSong,sequence,PlayList,isLock,isShowPlayList,lyricList}=useSelector(state=>({
        currentSong:state.getIn(["player","currentSong"]),
        sequence:state.getIn(["player","sequence"]),
        PlayList:state.getIn(["player","playList"]),
        isLock:state.getIn(["player","isLock"]),
        isShowPlayList:state.getIn(["player","isShowPlayList"]),
        lyricList:state.getIn(["player","lyricList"])
      
    }),shallowEqual)

    //定义点击外部的处理函数 
    const dispatch=useDispatch();

    const handleClickOutside = () => {
        setShowVolume(false);
        dispatch(changeShowPlayListAction(false));
      };
    
    const ref = useOutsideClick(handleClickOutside);

   
    //other hooks
    const audioRef=useRef();
    useEffect((ids)=>{
        dispatch(getSongDetailAction(21224493))
    },[dispatch])

    useEffect(()=>{
        audioRef.current.src=getPlayMusic(currentSong.id);
        audioRef.current.play().then(res=>{
            setIsPlaying(true);
        }).catch(err=>{
            setIsPlaying(false)
        })
    },[currentSong])


    //other handle
    const picUrl=(currentSong.al && currentSong.al.picUrl) || "@/assets/img/people.png";
    const singerName= (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
    const duration= currentSong.dt || 0;
    const showDuration=formatDate(duration,"mm:ss");
    const showCurrentTime=formatDate(currentTime,"mm:ss");
  
   
    // handleFunction
    const playMusic=useCallback(()=>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(false);
        }else{
            audioRef.current.play();
            setIsPlaying(true);
        }
      
    },[isPlaying])

    const changeSequece=()=>{
        const currentSequence=sequence+1;
        if(sequence<=2){
            dispatch(changeSequeceAction(currentSequence));
        }else{
            dispatch(changeSequeceAction(0));
        }
    }
    const changeMusic=(tags)=>{
        dispatch(changeCurrentSongAction(tags))
    }

    //播放时间改变时
    const timeUpdate=(e)=>{
        const gcurrentTime=e.target.currentTime*1000
        if(!isChanging){ 
            setCurrentTime(gcurrentTime);
            setProgress(currentTime/duration*100);
        }

        //获取当前的歌词
        let currentLyricIndex=0;
        for(let i=0;i<lyricList.length;i++){
            let lyricItem=lyricList[i];
            if(gcurrentTime<lyricItem.time){
                currentLyricIndex=i;
                setCurrentLyricIndex(currentLyricIndex);
                break;
            }
        }

    }
    const changeValue=useCallback((value)=>{
        setIsChanging(true);
        const currentTime=value/100*duration;
        setCurrentTime(currentTime);
        setProgress(value); 
    },[duration])

    const afterChange=useCallback((value)=>{
        const currentTime=value/100*duration/1000; 
        setCurrentTime(currentTime*1000);  //解决进度条拖拽跳动问题
        audioRef.current.currentTime=currentTime;
        setIsChanging(false);

        if(!isPlaying){
            playMusic();
        }
    },[duration,isPlaying,playMusic])

    const handleMusicEnded=()=>{
        if(sequence===2){

        }else{
            dispatch(changeCurrentSongAction(1))
        }

    }

    const changeLoock=()=>{
        dispatch(changeIsLockAction(!isLock));
    }
    /**
     * 改变播放器音量
     */
    const changeVolume=(value)=>{
        const currentVolume=value/100;
        audioRef.current.volume=currentVolume;
        setPlayVolume(value);
    }
    /**
     * 显示音量调节
     */
    const changeShowVolume=()=>{
        setShowVolume(!showVolume);
    }
    /**
     * 是否显示播放列表
     */
    const changeShowPlayList=()=>{
        const newStatus=!isShowPlayList;
        dispatch(changeShowPlayListAction(newStatus));
    }

  return (
   <AppPlayerWrapper className='play-bar' ref={ref} >
     <div className='content wrap-v2'>
        <Control isplaying={isPlaying? "1":"0"}>
            <button className='play-bar prev' onClick={e=>changeMusic(-1)}></button>
            <button className='play-bar play' onClick={e=>playMusic()}></button>
            <button className='play-bar next' onClick={e=>changeMusic(1)}></button>
        </Control>
        <PlayInfo>
            <div className='image cover-all '>
               <Link to="/discover/player">
                  <img src={getSizeImage(picUrl,35)} alt="" />
               </Link>
            </div>
            <div className='info'>
                <div className='song'>
                   <div className="song-name"> <Link to="/discover/player" >{currentSong.name}</Link></div><i className='vedio play-bar'></i>
                   <div className="singer-name"><Link to="/discover/artist">{singerName}</Link></div><i className='link play-bar'></i>
                </div>
                <div className='progress'>
                    <Slider defaultValue={0} value={progress} onAfterChange={afterChange} onChange={changeValue}/>
                    <div className='time'>
                        <span className='now-time'>{showCurrentTime}</span>
                        <span className='divider'>/</span>
                        <span className='duration'>{showDuration}</span>
                    </div>

                </div>
            </div>
        </PlayInfo>
        <Operator sequence={sequence}>
            <div className='left'>
                <button className='window btn icn'></button>
                <button className='play-bar btn favor'></button>
                <button className='play-bar btn share'></button>
            </div>
            <div className='right play-bar'>
                 {
                    showVolume && (<div className='m-vol play-bar' > 
                    <Slider vertical defaultValue={30}  value={playVolume} onChange={changeVolume}/>  
                       <div className='barbg'></div>
                   </div>)
                 }
                <button className='btn play-bar volume' onClick={e=>changeShowVolume()}></button>
                <button className='btn play-bar loop' onClick={e=>changeSequece()}></button>
                <button className='btn play-bar playlist' onClick={e=>changeShowPlayList()}>{PlayList.length}</button>
            </div>
        </Operator>
     </div>
     <LockTag islock={isLock? "1":"0"}>
            <div className='play-bar tag'>
                <div className='lock play-bar' onClick={e=>changeLoock()}>

                </div>
            </div>
     </LockTag>
     {isShowPlayList && (<div  className='m-play-list'><SongList listcount={PlayList.length} currentlyricindex={currentLyricIndex}></SongList></div>) }
     <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={handleMusicEnded}/>
   </AppPlayerWrapper>
  )
})

export default AppPlayerBar