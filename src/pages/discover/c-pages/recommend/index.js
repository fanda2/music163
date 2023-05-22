import React, { memo} from 'react'
import { RecommendWrapper,Content,RecommendLeft,RecommendRight } from './style';

import TopBanner from './c-cpns/top-banners';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import RankingList from './c-cpns/ranking-list';

import UserLogin from './c-cpns/user-login';
import SettleSinger from './c-cpns/settle-singer';
import HotRadio from './c-cpns/hot-radio';

const Recommend = memo((props) => {


  return (
   <RecommendWrapper> 
    <TopBanner/>
    <Content className='wrap-v2'>
      <RecommendLeft>
        <HotRecommend/>
        <NewAlbum/>
        <RankingList/>
      </RecommendLeft>
      <RecommendRight>
        <UserLogin/>
        <SettleSinger/>
        <HotRadio/>
      </RecommendRight>
    </Content>
   </RecommendWrapper>
  )
})


export default Recommend;











//未使用hooks时候的代码

// const Recommend = memo((props) => {
//   const {getBanners,topBanners}=props;

//   useEffect(()=>{
//     getBanners();
//   },[getBanners])
//   return (
//     <div>
//       <h2>Recommend</h2>
//     </div>
//   )
// })

// const mapStateToProps=state=>({
//   topBanners:state.recommend.topBanners
// });


// const mapDispatchToProps=dispatch=>({
//   getBanners:()=>{
//     dispatch(getTopBannerAction());
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Recommend);