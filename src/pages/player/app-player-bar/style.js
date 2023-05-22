import styled from "styled-components"

export const AppPlayerWrapper=styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    background-position: 0 0;
    z-index: 44;
    background-repeat:repeat ;

    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        height: 47px;
        z-index: 55;
    }
    .m-play-list{
       position: absolute;
       width: 986px;
       height: 301px;
       border-radius: 5px 5px 0 0;
       overflow: hidden;
       z-index: 22;
       bottom: 45px;
       left: 50%;
       transform: translateX(-50%);
       box-shadow: 2px -2px 2px #ccc;
    }
`


export const Control=styled.div`
    display: flex;
    align-items: center;
    .prev,.next{
        cursor: pointer;
        border: none;
        width: 29px;
        height: 29px;
    }
    .prev{
        background-position: 0 -130px;
    }
    .prev:hover{
        background-position: -30px -130px;
    }
    .play{
        cursor: pointer;
        width: 36px;
        height: 36px;
        margin: 0 8px;
        border: none;
        background-position: 0 ${props=>props.isplaying ==="1"? "-165px":"-204px"};
    }
    .play:hover{
        background-position: -40px ${props=>props.isplaying==="1" ? "-165px":"-204px"};
    }
    .next{
        background-position: -80px -130px;
    }
    .next:hover{
        background-position: -110px -130px;
    }
`


export const PlayInfo=styled.div`
    
    display: flex;
    align-items: center;
    .image{
        overflow: hidden;
        width: 34px;
        height: 34px;
        border-radius: 5px;
        background-position: -310px -345px;
    }

    .info{
        flex: 1;
        color: #a1a1a1;
        margin-left: 10px;
     }
    .song{
        color: #e1e1e1;
        position: relative;
        top: 5px;
        height: 18px;
        line-height: 18px;
        left: 8px;
        display: flex;
        a:hover{
            text-decoration: underline;
        }
        .song-name a{
            color: #e8e8e8;
            font-size: 12px;
        }
        .singer-name a{
            color: #9b9b9b;
            margin-left: 10px;
            font-size: 12px;
        }
        .vedio{
            display: block;
            width: 18px;
            height: 18px;
            background-position: 0 -55px;
            margin: 0 0 0 3px;
            cursor: pointer;
        }
        .vedio:hover{
            
            background-position: -20px -55px;
        }
        .link{
            display: block;
            width: 20px;
            height: 20px;
            background-position: -105px -100px;
            cursor: pointer;
        }
        .link:hover{
            background-position: -125px  -100px;
        }
    }
     .progress{
           display: flex;
           align-items: center;

           .ant-slider{
              width: 493px;
              margin-left: 10px;

              &-rail{
                 height: 9px ;
                 background: url(${require("@/assets/img/statbar.png")}) right 0;
              }
              
              &-track{
                 height: 9px;
                 background: url(${require("@/assets/img/statbar.png")}) left -66px;
              }
              
             &-handle{
                 width:22px;
                 height:24px;
                 border:none;
                 margin-top:-7px;
                 background:url(${require("@/assets/img/iconall.png")}) 0 -250px;
             }
         }
        .time{
            font-size: 12px;
          .now-time{
            color: #e1e1e1;
          }
          .divider{
            margin: 0 3px;
          }
        }
    }
`

export const Operator=styled.div`
    
    display: flex;
    position: relative;
    .btn{
        border: none;
        outline: none;
        padding: 0;
        width: 25px;
        height: 25px;
        cursor: pointer;
        margin-right: 1px;

    }
    .icn{
        background-position: 0 0;
    }
    .icn:hover{
        background-position: 0 -25px;
    }
    .favor{
        background-position: -88px -163px;
    }
    .favor:hover{
        background-position: -88px -189px;
    }
    .share{
        background-position: -114px -163px;
    }
    .share:hover{
        background-position: -114px -189px;
    }
    .left{
        display: flex;
        align-items: center;
    }
    .right{
        width: 126px;
        height: 47px;
        line-height: 47px;;
        padding-left: 12px;
        display: flex;
        align-items: center;
        background-position: -147px -240px;
        .volume{
            background-position:${props=>props.vlumeNum!==0 ? " -2px -248px":"-105px -68px"};
        }
        .volume:hover{
            background-position:${props=>props.vlumeNum!==0 ? " -31px -248px":"-127px -68px"};
            /* background-position: -28px -248px; */
        }
        .loop{
            /* background-position: -3px -344px; */
            background-position: ${props=>{
                switch(props.sequence){
                    case 1:
                        return "-66px -248px";
                    case 2:
                        return "-66px -344px";
                    default:
                        return "-3px -344px";
                }
            }};
        }
        .loop:hover{
            /* background-position: -33px -344px; */
            background-position: ${props=>{
                switch(props.sequence){
                    case 1:
                        return "-93px -248px";
                    case 2:
                        return "-93px -344px";
                    default:
                        return "-33px -344px";
                }
            }};
        }
        .playlist{
            width: 60px;
            background-position: -42px -68px;
            color: #7e7e7e;
            font-size: 8px;
            display: flex;
            justify-content: center;
            padding-left: 10px;
            align-items: center;
        }
        .playlist:hover{
            background-position: -42px -98px;
        }

        .m-vol{
            position: absolute;
            top: -112px;
            left: 83px;
            width: 32px;
            height: 113px;
            background-position: 0 -503px;
            .ant-slider{
              height: 90px;
              margin-top: 15px;
             &-track{
                width: 4px;
                background: url(${require("@/assets/img/playbar.png")}) -40px -519px;
             }
             &-handle{
                 width:20px;
                 height:14px;
                 border:none;
                 margin-top:-7px;
                 background:url(${require("@/assets/img/iconall.png")}) -42px -252px;;
             }
         }
        }
    }
`


export const LockTag=styled.div`
   position: relative;
   right: 0px;
   bottom: 10px;
   float: right;
   height: 90px;
  width: 50px;
  margin-right: 20px;
  z-index: 11;
  
   .tag{ 
    height: 100%;
    /* background: saddlebrown; */
    background-position:0 -383px ;
    display: flex;
    justify-content: center;
   }
   .lock{
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-position: ${props=>props.islock==="1"? "-98px": "-77px"} -376px;
    /* background-position: -98px -376px ; */
   }
   .lock:hover{
      /* background-position: -77px -396px ; */
      /* background-position: -98px -396px ; */
      background-position: ${props=>props.islock==="1"? "-98px": "-77px"} -396px;
   }
`

