import React, { memo } from 'react'
import { PlayListItemWrapper } from './style'
import {Link} from "react-router-dom"
import { formatDate } from '@/utils/format-utils'


const PlayListItem = memo((props) => {
    const {info,isselected}=props;

    const singerName= (info.ar && info.ar[0].name) || "未知歌手";
    const duration= info.dt || 0;
  return (
   <PlayListItemWrapper>
    <div className='item-content'>
        <div className='col col-play-icon'>
           {isselected==="1" &&  <div className='playicn play-list'></div>}
        </div>
        <div className='col col-name f-thide'>{info.name}</div>
        <div className='col col-icns'>
           <div className='icns-all'>
             <i className='icns-delete icns play-list' title='删除'></i> 
             <i className='icns-download icns play-list' title='下载'></i>
             <i className='icns-share icns play-list' title='分享'></i>
             <i className='icns-add icns play-list' title='收藏'></i>
           </div>
        </div>
        <div className='col col-artist f-thide'>
            <Link to={{pathname:"/djradio"}} className="song-artist-name">{singerName}</Link>
        </div>
        <div className='col col-duration'>{formatDate(duration,"mm:ss")}</div>
        <div className='col col-link'>
            <Link to={{pathname:"/discover/toplist?id=3779629&_hash=songlist-2043125519"}} className='icns-link play-list'></Link>
        </div>


    </div>
   </PlayListItemWrapper>
  )
})

export default PlayListItem