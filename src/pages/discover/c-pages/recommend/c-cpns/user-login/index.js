import React, { memo } from 'react'
import { UserLoginWrapper } from './style'


const UserLogin = memo(() => {
  return (
    <UserLoginWrapper>
        <div className='index content'>
            <div className='word'><p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p></div>
            <button className='index btn'>用户登录</button>
        </div>
    </UserLoginWrapper>
  )
})

export default UserLogin