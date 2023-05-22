import React, { memo } from 'react'

import { PlayListWrapper,Content } from './style'

const PlayList = memo(() => {
  return (
   <PlayListWrapper>
    <Content className='wrap-v2'>
       <div className='playlist-content'>
           ddd
       </div>
    </Content>
   </PlayListWrapper>
  )
})

export default PlayList