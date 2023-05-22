import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import {Link} from "react-router-dom"

import PropTypes from "prop-types"


const ThemeHeaderAlbum = memo((props) => {

 const {title,keywords}=props;

  return (
    <HeaderWrapper>
        <div className='left'>
            <div className='title'>{title.name}</div>
            <div className='keyword'>
                {
                    keywords.map((item,index)=>{
                        return(
                            <div className='item' key={item}> 
                                <Link className='album-link' to={{pathname:"/discover/album/m/",state:{area:"ALL"}}}>{item}</Link>
                                {index<keywords.length-1 && <span className='divider'>|</span>}
                            </div>
                        )

                    })
                }
            </div>
        </div>
    </HeaderWrapper>
  )
})
ThemeHeaderAlbum.propTypes={
    title:PropTypes.object.isRequired,
    keywords:PropTypes.array
}
ThemeHeaderAlbum.defaultProps={
    keywords:[]
}


export default ThemeHeaderAlbum