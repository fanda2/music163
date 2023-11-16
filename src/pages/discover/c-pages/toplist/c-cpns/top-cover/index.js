import React, { memo } from 'react'
import { CoverContentWrapper } from './style'

const TopCoverContent = memo((props) => {
    const {info}=props;
  return (
    <CoverContentWrapper>
        <div className='cover-image'>
            <img src={info.coverImgUrl} alt="" />
        </div>
        <div className='right'>
            <div className='right-title'>
               <h2> {info.name}</h2>
            </div>
            <div className='right-update'>
                <i className='icon icon-time'></i>
                <span className='right-update-time'>最近更新：5.26</span>
                <span className='right-update-time2'>(刚刚更新)</span>
            </div>
            <div className='right-button'>
                <div className='btn-play'>
                  <div className='btn-play-left button2'>
                    <i className='button2'></i>
                    <span>播放</span>
                  </div>
                  <div className='btn-play-right button2'>
        
                  </div>
                </div>
                <div className='btn-add btn button2'>
                    <i className='button2'>{`(${1112232})`}</i>
                </div>
                <div className='btn-share btn button2'>
                    <i className='button2'>{`(${123456})`}</i>
                </div>
                <div className='btn-download btn button2'>
                    <i className='button2'>下载</i>
                </div>
                <div className='btn-comment btn button2'>
                    <i className='button2'>{`(${892837})`}</i>
                </div>
            </div>
        </div>
    </CoverContentWrapper>   
  )
})

export default TopCoverContent