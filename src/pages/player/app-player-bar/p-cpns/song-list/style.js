import styled from "styled-components"

export const SongListWrapper=styled.div`
    .playlist-content{
        width: 986px;
        height: 300px;
    }
    .playlist-bottom{
        display: flex;
    }

`

export const ListTop=styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  position: relative;
  background: url(${require("@/assets/img/playlist_bg.png")}) no-repeat;
  background-position: 0 0;

  .top-title-left{
    position: absolute;
    left: 25px;
    height: 40px;
    line-height: 40px;
    h4{
        color: #e2e2e2  !important;
    }
    a{
        color: #e2e2e2;
        font-size: 12px;
    }
    .line{
        position: absolute;
        top: 12px;
        left: 477px;
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
    }
    .addall,.clear{
        display: block;
        position: absolute;
        top: 12px;
        left: 398px;
        height: 15px;
        line-height: 15px;
        cursor: pointer;
        .ico{
            display: block;
            height: 16px;
            float: left;
            margin: 1px 6px 0 0;
        }
        .ico-add{
            width: 16px;
            background-position: -24px 0;
        }
        .ico-clear{
            width: 13px;
            background-position: -51px 0;
        }
    }
    .addall{
        width: 80px;
    }
    .clear{
          left: 484px;
        width: 43px;
   
     
    }

  }
  .top-title-right{
    display: flex;
    .song-name{
        color: #e2e2e2;
        position: absolute;
        left: 595px;
        top: 0;
        width: 346px;
        text-align: center;
        height: 39px;
        line-height: 39px;
        color: #fff;
        font-size: 14px;
    }
    .close{
        cursor: pointer;
        position: absolute;
        top: 5px;
       right: 8px;
        display: block;
        width: 30px;
        height: 30px;
        background-position: -194px 10px;
        text-indent: -999px;
    }
    .close:hover{
        background-position: -194px -20px;
    }

  }
    

`

export const ListBottom=styled.div`
   display: flex;
    position: absolute;
    left: 0;
    top: 40px;
    width: 984px;
    _width: 972px;
    height: 260px;
    overflow: hidden;
    background: url(${require("@/assets/img/playlist_bg.png")}) no-repeat;
    background-position: -1014px 0;
    _background-position: -1018px 0;
    background-repeat: repeat-y;
    .j-flag{
        z-index: 9;
    }
    .bottom-image{
        position: absolute;
        left: 2px;
        _left: 0;
        top: -1px;
        z-index: 1;
        width: 980px;
        height: auto;
        opacity: .2;

    }
    .listbdc{
        position: absolute;
        height: 260px;
        overflow: hidden;
       overflow-y: scroll;
        .f-cb{
            list-style: none;
            overflow: hidden;
            padding: 0;
            margin: 0;
        }
        .select-player-item{
            background: rgba(0,0,0,0.3);
        }
    }
    .bline{
        position: absolute;
        left: 555px;
        top: -1px;
        z-index: 2;
        opacity: .5;
        width: 6px;
        height: 260px;
        background: #000000;
        .b-scroll{
            position: absolute;
            left: 1px;
            top: 20px;
            width: 4px;
            cursor: pointer;
             background: #868686;
             border: 1px solid #a6a6a6;
             border-radius: 5px;
             opacity: calc().8;
             height: 100px;
        }
    }
    .bline-2{
        left: auto;
        right: 2px;
        .b-scroll-2{
            position: absolute;
            left: 2px;
            top: 20px;
            width: 4px;
            cursor: pointer;
             background: #868686;
             border: 1px solid #a6a6a6;
             border-radius: 5px;
             opacity: calc().8;
             height: 100px;
        }
    }
    .ask{
        width: 21px;
        height: 21px;
        /* background: saddlebrown; */
        left: auto;
        right: 25px;
        position: absolute;
        top: 12px;
        cursor: pointer;
        z-index: 5;

        .ask-ico{
            display: inline-block;
            text-indent: 0;
            width: 21px;
            height: 21px;
            background-position: 0 -50px;

        }
        .ask-ico:hover{
            background-position: -24px -50px;
        }
    }
    .ask-upload{
        position: absolute;
        cursor: pointer;
        user-select: none;
        top: 39px;
        height: 32px ;
        line-height: 32px;
        text-align: center;
        left: auto;
        right: 10px;
        width: 81px;
        background: #e2e2e2;
        color: #666;
        z-index: 6;
        a{
            color: #666;
        }
    }
    .mask2{
        position: absolute;
        left: 560px;
        _left: 560px;
        top: 0;
        z-index: 3;
        width: 420px;
        height: 250px;
        background: #121212;
        opacity: .01;
    }
    .listlyric{
        position: absolute;
       right: 40px;
       top: 0;
       z-index: 4;
       margin: 21px 0 20px 0;
       height: 219px;
       width: 354px;
       overflow: hidden;
       overflow-y: scroll;
       p{
        font-size: 12px;
        color: #989898;
        word-wrap: break-word;
        text-align: center;
        line-height: 32px;
        height: auto !important;
        height: 32px;
        min-height: 32px;
        -webkit-transition: color 0.7s linear;
        -moz-transition: color 0.7s linear;
        -o-transition: color 0.7s linear;
        transition: color 0.7s linear;
       }

       .z-sel{
        color: #fff;
        font-size: 14px;
        -webkit-transition: color 0.7s linear;
        -moz-transition: color 0.7s linear;
        -o-transition: color 0.7s linear;
        transition: color 0.7s linear;
       }

    }
    .scroll::-webkit-scrollbar {
       display: none;
      /* height: 10px; */
    }

`
