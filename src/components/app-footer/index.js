import React, { memo } from 'react'
import { FooterWrapper,FooterTop,FooterMiddle,FooterBottom } from './style'
import {footerLinks,footerIconLinks} from "@/common/local-data.js"

export default memo(function AppFooter(){
  return (
    <FooterWrapper>
        <div className='wrap-v2 content'>
            <FooterTop className="top">
                <div className='icon-link'>
                    <ul className='icon-link-ul'>
                         {
                    footerIconLinks.map((item,index)=>{
                        return(
                          <li key={item.title} className='icon-item'> <a href={item.link} className='foot-enter-new list-icon' target='_blank' rel="noopener noreferrer"> </a><span className='tt'>{item.title}</span></li>
                        )
                       })
                      }
                    </ul>
                </div>
            </FooterTop>
            <FooterMiddle>
                <div className='miidle-link'>
                    <ul className='link-ul'>
                        {
                            footerLinks.map((item,index)=>{
                                return <li key={item.title}><a className='link-item' href={item.link} target='_blank' rel="noopener noreferrer">{item.title}</a></li>
                            })
                        }
                    </ul>
                </div>
            </FooterMiddle>
            <FooterBottom>
                <div className='bottom-top'>
                   <span> <a href="https://jubao.163.com/" target='_blank' rel="noopener noreferrer">廉正举报 </a></span>
                   <span>不良信息举报邮箱: 51jubao@service.netease.com</span>
                   <span>客服热线：95163298</span>
                </div>
                <div className='bottom-center'>
                    <span>互联网宗教信息服务许可证：浙（2022）0000120</span>
                    <span>增值电信业务经营许可证：浙B2-20150198 </span>
                    <span><a href="https://beian.miit.gov.cn/" target='_blank' rel="noopener noreferrer">粤B2-20090191-18  工业和信息化部备案管理系统网站</a></span>
                </div>
                <div className='bottom-bottom'>
                    <span>网易公司版权所有©1997-2023</span>
                    <span>杭州乐读科技有限公司运营：<a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24498695788/9de7/9e78/fc8d/35d33543c69c9f4c5ac8aeb937217597.png" rel="noopener noreferrer" target='_blank'>浙网文[2021] 1186-054号</a> </span>
                    <span><a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" rel="noopener noreferrer" target='_blank'>浙公网安备 33010902002564号</a></span>
                </div>
            </FooterBottom>

        </div>
    </FooterWrapper>
  )
})
