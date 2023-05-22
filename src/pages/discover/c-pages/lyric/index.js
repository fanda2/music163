import React, { memo } from 'react'
import { ReportWrapper } from './style'
import {Link} from "react-router-dom"

const LyricReport = memo((props) => {
    // const {currentsong}=props;
  return (
       <ReportWrapper>
        <div className='report-content wrap-v2'>
            <div className='lyric-report-content'>
              <div className='report-content-title'>
                <Link to={{pathname:"/song"}}>{"currentsong.name"}</Link>
                <span>&gt;</span>
                <span> 歌曲/歌词报错</span>
              </div>
              <div className='report-content-select'>
                <h3>请填写原因</h3>
                <form id="report-form">
                    <input type="hidden"  name="songid" />
                    <p><label ><input type="checkbox" className='f-rdi' />&nbsp;&nbsp;歌曲错误</label></p>
                    <p><label ><input type="checkbox" className='f-rdi' />&nbsp;&nbsp;歌词不同步</label></p>
                    <p><label ><input type="checkbox" className='f-rdi' />&nbsp;&nbsp;歌曲文字错误</label></p>
                    <p><label ><input type="checkbox" className='f-rdi' />&nbsp;&nbsp;歌曲翻译错误</label></p>
                    <textarea name="detail"  placeholder='详细信息描述' className='u-txt' cols="30" rows="5"></textarea>
                    <div className='submit-report button2'>提交</div>
                </form>
              </div>
            </div>
        </div>
       </ReportWrapper>
  )
})

export default LyricReport