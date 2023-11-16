import React, { memo } from 'react'
import { DjRadioItemWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils'
import {Link} from "react-router-dom"

const DjRadioItem = memo((props) => {
    const {info}=props;
  return (
   <DjRadioItemWrapper>
     <div className='avatr-image'>
        <img src={getSizeImage(info.avatarUrl,40)} alt="头像" />
     </div>
     <div className='right'>
        <div className='dj-name'><Link  to="/user/home">{info.nickName}</Link></div>
        <div className='thide'>{info.nickName}</div>
     </div>
   </DjRadioItemWrapper>
  )
})

export default DjRadioItem