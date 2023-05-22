import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import {Link} from "react-router-dom"

import PropTypes from "prop-types"


const ThemeHeaderRecommend = memo((props) => {

    const {title,keywords}=props;
  return (
    <HeaderWrapper className='index'>
        <div className='left'>
            <Link to={title.link} className='title'>{title.name}</Link>
            <div className='keyword'>
                {
                    keywords.map((item,index)=>{
                        return(
                            <div className='item' key={item}> 
                                <Link className='rcm-link' to={{pathname:"/discover/playlist",state:{cat:item}}}>{item}</Link>
                                {/* <a  href="todo">{item}</a> */}
                                {index<keywords.length-1 && <span className='divider'>|</span>}
                            </div>
                        )

                    })
                }
            </div>
        </div>
        <div className='right'>
            <Link className='rcm-link' to={title.link}>更多</Link>
            <i className='icon index'></i>
        </div>
    </HeaderWrapper>
  )
})
ThemeHeaderRecommend.propTypes={
    title:PropTypes.object.isRequired,
    keywords:PropTypes.array
}
ThemeHeaderRecommend.defaultProps={
    keywords:[]
}


export default ThemeHeaderRecommend