import React, { memo } from 'react'
import { MusicListWrapper } from './style'
import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/format-utils';
import { shallowEqual, useSelector } from 'react-redux';


const MusicList = memo((props) => {
    const {info}=props;
    const {listDetail}=useSelector((state)=>({
        listDetail:state.getIn(["toplist","listDetail"])
    }),shallowEqual)

    let  musicList=[];
    musicList=info;
    console.log("数组",musicList,"   ",listDetail && listDetail.tracks,info);

  return (
    <MusicListWrapper>
        <div className='top-title'>
            <div className='top-title-left'>
               <h3>歌曲列表</h3>
               <div className='top-title-musiccount'>{111}首歌</div>
            </div>
            <div className='top-title-play'>播放：<strong>12354353</strong> 次</div>
        </div>
        <div className='music-list'>
          <table className='m-table m-table-rank'>
            <thead>
                <tr className='table'>
                    <th className='first w1 table'></th>
                    <th className='table'><div  className='wp table'>标题</div></th>
                    <th className='w2-1 table'><div  className='wp table'>时长</div></th>
                    <th className='w3-1 table'><div  className='wp table'>歌手</div></th>
                </tr>
                {
                   musicList.map((item,index)=>{
                        return(
                            <tr key={item.id} className={index%2===0? "even table-line":"table-line"}>
                                <td className='first-td'>
                                    <span className='item-index'>{index+1}</span>
                                    <div className='music-rank'>
                                        <span className='icon index-icon'></span>
                                    </div> 
                                </td>
                                <td>
                                    <div className='music-name'>
                                        <span className='table name-play'></span>
                                        <Link to="/song" className="name-link">{item.name}</Link>
                                    </div>
                                </td>
                                <td>
                                    <div className='s-f3'>
                                        <span className='music-duration'>{formatDate(item.mark,"mm:ss")}</span>
                                        <div className='opt btnshow'>
                                            <span className='icon icn icn-b ico-play' title='添加到播放列表'></span>
                                            <span  className='table icn ico-add' title="收藏"></span>
                                            <span  className='table  icn ico-share' title='分享'></span>
                                            <span  className='table icn ico-download' title='下载'></span>
                                        </div>
                                    </div>
                                </td>
                                <td className='artist-name'>
                                    {
                                        item.ar.map((iten,indey)=>{
                                            return <Link key={iten.id} to="artist">{iten.name}{indey<1? "/":""}</Link>
                                        })
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </thead>

          </table>
        </div>
    </MusicListWrapper>
  )
})

export default MusicList