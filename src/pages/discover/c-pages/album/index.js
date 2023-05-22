import React, { memo, useEffect } from 'react'
import { AlbumWrapper,Content } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotAlumsListAction, getNewAlbumsListAction } from './store/actionCreator';


import ThemeHeaderAlbum from '@/components/theme-header-album';
import AlbumCover from '@/components/album-cover'


const Album = memo(() => {

  const {newAlbums,hotAlbums}=useSelector(state=>({
    newAlbums:state.getIn(["album","newAlbums"]),
    hotAlbums:state.getIn(["album","hotAlbums"]),
  }),shallowEqual)

  const dispatch=useDispatch();

  //other hooks
  useEffect(()=>{
    dispatch(getNewAlbumsListAction(10));
    dispatch(getHotAlumsListAction(10));
  },[dispatch])

  
  return (
    <AlbumWrapper>
      <Content className='wrap-v2'>
        <div className='hot-list'>
        <ThemeHeaderAlbum title={{name:"热门新碟"}}/> 
          <div className='hot-list-content'>
            {
              newAlbums.map((item,index)=>{
                return(
                  <div className='hot-list-item' key={item.id}>
                     <AlbumCover info={item} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='all-list'>
        <ThemeHeaderAlbum title={{name:"全部新碟"}} keywords={["华语","流行","摇滚","民谣","电子"]}/> 
        <div className='all-list-content'>
        {
              hotAlbums.map((item,index)=>{
                return(
                  <div className='all-list-item' key={item.id}>
                     <AlbumCover info={item} />
                  </div>
                )
              })
            }
        </div>
        </div>
      </Content>
    </AlbumWrapper>
  )
})

export default Album