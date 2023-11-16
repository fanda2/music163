import React, { memo } from 'react'
import { ContentWrapper,ContentOne, AlubmItem, ArtistItem } from './style'
import {Popover,Button} from "antd"
const Download = memo(() => {
  const text = <center>选择下载</center>;
   const content = (
     <div className='select-download-item'>
      <a href="#/" hidefocus="true" className='btn'><i className='btn-ico'></i><em>Android</em> </a>
      <a href="#/" hidefocus="true" className='btn'><i className='btn-ico'></i><em>Android</em> </a>
      <a href="#/" hidefocus="true" className='btn'><i className='btn-ico'></i><em>Android</em> </a>
      <a href="#/" hidefocus="true" className='btn'><i className='btn-ico'></i><em>Android</em> </a>
      <a href="#/" hidefocus="true" className='btn'><i className='btn-ico'></i><em>Android</em> </a>
      <a href="#/" hidefocus="true" className='btn'><i className='btn-ico'></i><em>Android</em> </a>
      <a href="#/" hidefocus="true" className='btn'><i className='btn-ico'></i><em>Android</em> </a>
      <a href="#/" hidefocus="true" className='btn'><i className='btn-ico'></i><em>Android</em> </a>
     </div>
   )
  return (
   <ContentWrapper>
     <ContentOne>
     <div className='top-item'>
     <div className='download-top'>
        <Popover placement="bottom" title={text} content={content} trigger="click">
         <Button className='download-top-btn'>其他操作系统客户端</Button>
        </Popover>
      </div>
     </div>
      <div className='download-item'>
        <div className='download-item-left'>
        <h3>手机上听</h3>
        <div className='image'><img src="https://p1.music.126.net/PGNd0EAtUgA7iRCWXPnUuA==/109951164207162781.png?param=800x0" alt="" /></div>
        <div className='down-ico'><span><i className='mac-ico'></i></span><span><i className='window-ico'></i></span></div>
        <div className='download-btn'><span>下载电脑端</span></div>
        </div> 
       <div className='download-item-right'>
        <h3>手机上听</h3>
        <div className='image'><img src="https://p1.music.126.net/sLtya87wVHWn-HWJ33oN4g==/109951164207180884.png?param=450x0" alt="" /></div>
        <div className='down-ico'><span><i className='mac-ico'></i></span><span><i className='window-ico'></i></span></div>
        <div className='download-btn'><span>下载手机端</span></div>
       </div>
      </div>
     </ContentOne>
     <AlubmItem>
      <div className='content-item'>
        <div className='album-left'>
          <div className='album-title'>千万曲库  首首CD音质</div>
          <div className='album-content'>
           <p> 囊括百万无损SQ音乐，你在用手机听歌时，</p>
           <p>也能感受到纤毫毕现的CD音质，更能免费离线收听</p>
          </div>
        </div>
        <div className='album-right'>
          <div className='album-image'>
            <img src="	https://p1.music.126.net/KP4aN9umGMNnCS8iCgiV9w==/109951164206415504.jpg" alt="" />
          </div>
        </div>
      </div>

     </AlubmItem>
     <ArtistItem>
      <div className='content-item'>
        <div className='artist-left'>
          <div className='artist-image'>
            <img src="https://p1.music.126.net/rpwYXqZt_UpO_de46JyYwQ==/109951164488922626.jpg" alt="" />
          </div>
        </div>
        <div className='artist-right'>
          <div className='artist-title'>千位明星 亲自推荐音乐</div>
          <div className='artist-content'>
           <p> 韩红，戴佩妮等<span>千位明星已入驻</span>，亲自创建私房歌单，录制独</p>
           <p>家DJ节目，推荐他们心中的好音乐</p>
          </div>
        </div>
      </div>
     </ArtistItem>
     <AlubmItem>
      <div className='content-item'>
        <div className='album-left'>
          <div className='album-title'>社交关系 发现全新音乐</div>
          <div className='album-content'>
           <p>你可以<span>关注明星</span>、DJ和好友，通过浏览他们的动态、收藏和</p>
           <p>分享，发现更多全新好音乐</p>
          </div>
        </div>
        <div className='album-right'>
          <div className='album-image'>
            <img src="https://p1.music.126.net/9CQFSDAZN7TcOWz7UNEqmQ==/109951164488924083.jpg" alt="" />
          </div>
        </div>
      </div>
     </AlubmItem>
     <ArtistItem>
      <div className='content-item'>
        <div className='artist-left'>
          <div className='artist-image'>
            <img src="https://p1.music.126.net/IZIgZjpBv9WkyMZ53i043w==/109951164206417003.jpg" alt="" />
          </div>
        </div>
        <div className='artist-right'>
          <div className='artist-title'>手机电脑 歌单实时同步</div>
          <div className='artist-content'>
           <p> 只要一个帐号，你就可以同步在手机、电脑上创建、收藏</p>
           <p>的歌单，<span>随时随地畅享好音乐</span></p>
          </div>
        </div>
      </div>
     </ArtistItem>
     <AlubmItem>
      <div className='content-item'>
        <div className='album-left'>
          <div className='album-title'>听歌识曲 助你疯狂猜歌</div>
          <div className='album-content'>
           <p>歌曲很动听却不知道歌名，歌名在嘴边却想不起来……</p>
           <p>用<span>听歌识曲</span>功能，几秒钟就知道歌名</p>
          </div>
        </div>
        <div className='album-right'>
          <div className='album-image'>
            <img src="	https://p1.music.126.net/MGGp3L7AerIVlskMkAk1HA==/109951164488904737.jpg" alt="" />
          </div>
        </div>
      </div>
     </AlubmItem>
   </ContentWrapper>
  )
})

export default Download