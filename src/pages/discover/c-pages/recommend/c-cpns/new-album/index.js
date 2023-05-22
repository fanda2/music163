import React, { memo, useEffect  } from 'react'
import { NewAlnumWrapper} from './style'
import {Carousel} from "antd"


import ThemeHeaderRecommend from '@/components/theme-header-rcm'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getNewAlbumsAction } from '../../store/actionCreators'
import { useRef } from 'react'
import AlbumCover from '@/components/album-cover'

const NewAlbum = memo(() => {
    //
    const albumRef=useRef();
    //获取数据
    const {newAlbums}=useSelector(state=>({
        newAlbums:state.getIn(["recommend","newAlbums"])
    }),shallowEqual)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getNewAlbumsAction(10))
    },[dispatch])
    
  return (
    <NewAlnumWrapper>
        <ThemeHeaderRecommend title={{name:"新碟上架",link:"/discover/album"}}/>
        <div className='content'>
            <button className='arrow arrow-left index' onClick={e=>albumRef.current.prev()}></button>
              <div className='album'>
                <Carousel ref={albumRef} dots={false}>
                  {
                      [0,1].map((item)=>{
                        return (
                            <div className='page' key={item}>
                                {
                                    newAlbums.slice(item*5,(item+1)*5).map((item2,index)=>{
                                      return   <AlbumCover key={item2.id} info={item2} size={100} width={118} bgp={-570}/>
                                    })
                                }
                            </div>
                        )
                      })
                  }
                </Carousel>
              </div>
            <button className='arrow arrow-right index' onClick={e=>albumRef.current.next()}></button>
            {/* {
                newAlbums.map((item,index)=>{
                    return(
                        <div key={item.id}>{item.name}</div>
                    )
                })
            } */}
        </div>
    </NewAlnumWrapper>
  )
})

export default NewAlbum