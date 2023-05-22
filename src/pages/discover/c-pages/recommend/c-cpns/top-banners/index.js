import React, {memo,useEffect , useRef, useCallback,useState} from 'react'
import {BannerWrapper, BannerLeft, BannerRight, BannerControl} from './style'
import {Link} from 'react-router-dom'
import {Carousel} from "antd";

import { getTopBannerAction } from '../../store/actionCreators';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';


const TopBanner = memo(() => { 
    //内部hooks
    const [currentIndex,setCurrnetIndex]=useState(0);
    
    // 使用到useDispatch和useSelector两个hooks使得代码更加简洁
    const {topBanners}= useSelector(state => ({
        topBanners: state.getIn(
            ["recommend", "topBanners"]
        )
    }), shallowEqual);

    const dispatch = useDispatch();
    
    //其他hooks
    const bannerRef=useRef()
    //发送网络请求
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    const bannerChange=useCallback((from,to)=>{
        setCurrnetIndex(to);
    },[])

    //其他业务逻辑

    const bgImage=topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20")
    
    return (
        <BannerWrapper bgimage={bgImage}>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
                        {
                        topBanners.map((item, index) => {
                            return (
                                <div className='banner-item'key={item.imageUrl}>
                                   <a href={item.url} target='_blank' rel="noreferrer">
                                   <img className='image' src={item.imageUrl} alt={item.typeTitle}/>
                                   </a>
                                </div>
                            )
                        })
                    } </Carousel>
                </BannerLeft>
                <BannerRight>
                    {/* <a href="/download" className='btn'>下载客户端</a> */}
                    <Link to="/download" className="btn">下载客户端</Link>
                    <p className='tags'>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                    <span className='shadow'></span>
                    <span className='shadowr'></span>
                </BannerRight>
                <BannerControl>
                    <button className='btn left' onClick={e=>bannerRef.current.prev()}></button>
                    <button className='btn right'onClick={e=>bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

export default TopBanner
