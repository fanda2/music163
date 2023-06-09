import React, { memo} from 'react';
import { renderRoutes } from 'react-router-config'

import { DiscoverWrapper,TopMenu } from './style';
import {discoverMenu} from "@/common/local-data.js"
import { NavLink } from 'react-router-dom';



const DisCover = memo((props) => {
  const {route}=props;

  return (
    <div>
      <DiscoverWrapper>
        <div className='top'>
         <TopMenu className="wrap-v1 ">
          {
            discoverMenu.map((item,index)=>{
              return(
                <div className='item' key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
         </TopMenu>
        </div>
        {renderRoutes(route.routes)}
      </DiscoverWrapper>

    </div>
  )
})

export default DisCover