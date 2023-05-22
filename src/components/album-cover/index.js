import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils';
import { AlbumWrapper } from './style'
import {Link} from "react-router-dom"

const AlbumCover = memo((props) => {
    //state和props
    const {info,size=130,width=153,bgp=-845}=props;
  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
        <div className='album-image'>
           <img src={getSizeImage(info.picUrl,size)} alt="" />
           <Link to={{pathname:"/album?id="+info.id}} className='cover cover-all'></Link>
        </div>
        <div className='album-info'>
            <div className='name'><Link to={{pathname:"/album?id="+info.id}}>{info.name}</Link></div>
            <div className='artist'><Link to={{pathname:"/artist?id="+info.artist.id}} >{info.artist.name}</Link></div>
        </div>
    </AlbumWrapper>
  )
})

export default AlbumCover