import React, { memo, useEffect } from 'react'
import { HotRecommendWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


import ThemeHeaderRecommend from "@/components/theme-header-rcm"
import { getHotRecommendsAction } from '../../store/actionCreators';
import SongsCover from '@/components/songs-cover';

const HotRecommend = memo(() => {
      // 使用到useDispatch和useSelector两个hooks使得代码更加简洁
      const {hotRecommends}= useSelector(state => ({
        hotRecommends: state.getIn(
            ["recommend", "hotRecommends"]
        )
    }), shallowEqual);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getHotRecommendsAction(8))
    },[dispatch])
  return (
    <HotRecommendWrapper>
        <ThemeHeaderRecommend title={{name:"热门推荐",link:"/discover/playlist"}} keywords={["华语","流行","摇滚","民谣","电子"]}/> 
        <div className='recommend-list'>
            {
                hotRecommends.map((item,index)=>{
                    return <SongsCover key={item.id}  info={item}/>
                })
            }
        </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend