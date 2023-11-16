import React, { memo } from 'react'
import { ListItemWrapper } from './style'
import { getSizeImage } from '@/utils/format-utils';

const ListItem = memo((props) => {
  const {info}=props;
  return (
   <ListItemWrapper>
     <div className='item-content'>
        <div className='left'>
            <img src={getSizeImage(info.coverImgUrl,40)} alt="封面" />
        </div>
        <div className='right'>
            <div className='list-name'>{info.name}</div>
            <div className='new'>{info.updateFrequency}</div>
        </div>
     </div>
   </ListItemWrapper>
  )
})

export default ListItem