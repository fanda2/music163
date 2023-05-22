import React, {memo} from 'react'
import {NavLink} from 'react-router-dom/cjs/react-router-dom.min'
import {HeaderWrapper, HeaderLeft, HeaderRight} from './style'
import {headerLinks} from "@/common/local-data.js"
import {SearchOutlined} from "@ant-design/icons"
import {Input} from "antd";

export default memo(function AppHeader() {
    //业务逻辑代码
    const showSelectItem=(item,index)=>{
        if(index<3){
            return(
                <NavLink to={item.link} >
                    {item.title}
                    <i className='top-bar icon'></i>
                </NavLink>
                
            )
        }else if(index<5){
            return(
                <a href={item.link} target='_blank' rel="noopener noreferrer">{item.title}</a>
            )
        }else{
            return(
                <NavLink to={item.link} >
                    {item.title}
                    <i className='top-bar icon'></i>
                </NavLink>
            )
        }
    }


    //返回jsx
    return (

        <HeaderWrapper>
            <div className='content wrap-v1'>
                <HeaderLeft>
                    <a href="#/" className='logo top-bar'> </a>
                    <div className='select-list'>
                        {
                            headerLinks.map((item,index)=>{
                                return(
                                    <div key={item.title} className='select-item'>
                                        {showSelectItem(item,index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined/>}/>
                    <div className='center'>创作者中心</div>
                    <div className='login-btn'>登录</div>
                </HeaderRight>
            </div>
            <div className='divider'></div>

        </HeaderWrapper>

    )
})
