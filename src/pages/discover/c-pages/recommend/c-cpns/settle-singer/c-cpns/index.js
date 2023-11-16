import React, { memo } from 'react'
import { SettleListItemWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils';

const SettleItem = memo((props) => {
    const {info}=props;
    const descript= info.alias ||info.alias[1]
  return (
  <SettleListItemWrapper>
    <div className='cover-image'>
        <img src={getSizeImage(info.picUrl,40)} alt="封面" />
    </div>
    <div className='right-content'>
        <div className='artist'>{info.name}</div>
        <div className='thide'>{descript}</div>
    </div>
  </SettleListItemWrapper>
  )
})

export default SettleItem