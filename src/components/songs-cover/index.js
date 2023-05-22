import React, { memo } from 'react'
import { SongsCoverWrapper } from './style'
import {Link} from "react-router-dom"

import {getCount,getSizeImage} from "@/utils/format-utils"

const SongsCover = memo((props) => {
    const {info}=props;
  return (
   <SongsCoverWrapper>
    <div className='cover-top'>
        <img src={getSizeImage(info.picUrl,140)} alt={info.name} />
        <div className='cover cover-all'></div>
        <div className='info cover-all'>
          <span>
            <i className='erji icon-all'></i>
            {getCount(info.playCount)}
          </span>
             <i className='play icon-all'></i>
        </div>
    </div>
    <div className='cover-bottom'>
      <Link to={{pathname:"/discover/playlist",state:{id:2}}} className='cover-bottom-link'>{info.name} </Link> 
    </div>
    <div className='cover-source'>
        {/* by {info.copywriter || info.creator.nickname} */}
    </div>
   </SongsCoverWrapper>
  )
})

export default SongsCover