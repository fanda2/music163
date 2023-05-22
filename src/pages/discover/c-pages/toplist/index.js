import React, { memo } from 'react'
import { TopListWrapper,Content,PlayListLeft,PlayListRight} from './style'


const TopList = memo(() => {
  return (
   <TopListWrapper>
    <Content className='wrap-v2'>
      <PlayListLeft>
        <div className='minelist'>
          <h2>云音乐特色榜</h2>
          <ul>
            {/* {

            } */}
          </ul>
        </div>
      </PlayListLeft>
      <PlayListRight>ee</PlayListRight>
    </Content>
   </TopListWrapper>
  )
})

export default TopList