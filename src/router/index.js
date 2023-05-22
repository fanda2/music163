
import React from "react"

import DisCover from "../pages/discover";
import Recommend from "../pages/discover/c-pages/recommend"
import TopList from "../pages/discover/c-pages/toplist"
import Artist from "../pages/discover/c-pages/artist"
import PlayList from "../pages/discover/c-pages/playlist"
import DjRadio from "../pages/discover/c-pages/djradio"
import Album from "../pages/discover/c-pages/album"
import Player from "../pages/player";
import LyricReport from "../pages/discover/c-pages/lyric";

import Friends from "../pages/friends";
import Mine from "../pages/mine";
import Download from "../pages/download"


import {Redirect} from "react-router-dom"


const routes=[
    {
        path:"/",
        exact:true,
        //渲染组件重定向    
        render:()=>(
            <Redirect to="/discover"/>
        )
    },
    {
        path:"/discover",
        component:DisCover,
        routes:[
            {
                path:"/discover",
                exact:true,
                 //渲染组件重定向    
                 render:()=>(
                     <Redirect to="/discover/recommend"/>
                 ),
            },
            {
                path:"/discover/recommend",
                component:Recommend
            },
            {
                path:"/discover/toplist",
                component:TopList
            },
            {
                path:"/discover/playlist",
                component:PlayList
            },
            {
                path:"/discover/artist",
                component:Artist
            },
            {
                path:"/discover/djradio",
                component:DjRadio
            },
            {
                path:"/discover/album",
                component:Album
            },
            {
                path:"/discover/player",
                component:Player
            },
            {
                path:"/discover/report",
                component:LyricReport
            }

        ]
    },{
        path:"/friends",
        component:Friends
    },{
        path:"/mine",
        component:Mine
    },
    {
        path:"/download",
        component:Download
    }

];


export default  routes;