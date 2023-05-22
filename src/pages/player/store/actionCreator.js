import * as actionTypes from "./constants"

import { getSongDetail,getSongLyric } from "@/services/player";
import { getRandomNum } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";

const changeSongDetailAction=(res)=>({
    type:actionTypes.CHANGE_SONG_DETAIL,
    currentSong:res
})

const changePlayListAction=(playList)=>({
    type:actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changCurrentSongIndexAction=(index)=>({
    type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})

export const changeSequeceAction=(sequence)=>({
    type:actionTypes.CHANGE_SEQUENCE,
    sequence
})

const changeLyricListAction=(lyricList)=>({
    type:actionTypes.CHANGE_SONG_LYRIC_LIST,
    lyricList
})


export const changeCurrentSongAction=(tags)=>{
    return (dispatch,getState)=>{
        const playList=getState().getIn(["player","playList"]);
        const sequence=getState().getIn(["player","sequence"]);
        let currentSongIndex=getState().getIn(["player","currentSongIndex"]);

        switch(sequence){
            case 1:  //随机播放
                let randomIndex=getRandomNum(playList.length);
                while(randomIndex===currentSongIndex){
                    randomIndex=getRandomNum(playList.length);
                }
                currentSongIndex=randomIndex;
                break;
            default: //单曲或顺序
               currentSongIndex+=tags; 
               if(currentSongIndex>=playList.length) currentSongIndex=0;
               if(currentSongIndex<0) currentSongIndex=playList.length-1;
        }
        const currentSong=playList[currentSongIndex];
        dispatch(changeSongDetailAction(currentSong));
        dispatch(changCurrentSongIndexAction(currentSongIndex));
         //请求歌词
         dispatch(getLyricAction(currentSong.id))
        
    }
}

export const getSongDetailAction=(ids)=>{
    return (dispatch,getState)=>{
            //1.根据ID查找playlist中是否存在该歌曲
            const playList=getState().getIn(["player","playList"]);
            const index= playList.findIndex((item)=>item.id===ids);

            let song=null;

            //2.判断是否找到歌曲
            if(index!==-1){
                dispatch(changCurrentSongIndexAction(index));
                 song=playList[index];
                 dispatch(changeSongDetailAction(song));
                 //获取歌词
                 dispatch(getLyricAction(song.id))
            }else{
                 getSongDetail(ids).then(res=>{
                     song=res.songs && res.songs[0];
                     if(!song){
                        return;
                     }else{
                        const newPlayList=[...playList];
                        newPlayList.push(song);
                        //更新redux中的值
                         dispatch(changePlayListAction(newPlayList));
                         dispatch(changCurrentSongIndexAction(newPlayList.length-1))
                         dispatch(changeSongDetailAction(song));
                           //3.请求该歌曲的歌词
                          if(!song) return;
                         dispatch(getLyricAction(song.id))

                     }
                    
                 })
            }
    }
}


export const selectCurrentSongAction=(ids)=>{
    return (dispatch,getState)=>{
        const playList=getState().getIn(["player","playList"]);
        let currentSongIndex=getState().getIn(["player","currentSongIndex"]);

         let count=0;
        for (let item of playList){
            if(item.id===ids){
                currentSongIndex=count;
            } 
            count++;
        }
        const currentSong=playList[currentSongIndex];
        dispatch(changeSongDetailAction(currentSong));
        dispatch(changCurrentSongIndexAction(currentSongIndex)); 
        //请求歌词
        dispatch(getLyricAction(currentSong.id))
    }
  
}


export const changeIsLockAction=(isLock)=>({
    type:actionTypes.CHANGE_LOCK,
    isLock
})


export const changeShowPlayListAction=(isShowPlayList)=>({
    type:actionTypes.CHANGE_SHOW_LPAYLIST,
    isShowPlayList
})


export const getLyricAction=(id)=>{
    return dispatch=>{
       getSongLyric(id).then(res=>{
        const lyric=res.lrc.lyric;
        const lyricList=parseLyric(lyric);
        dispatch(changeLyricListAction(lyricList))
       })
    }
}