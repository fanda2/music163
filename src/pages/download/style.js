import styled from "styled-components"


export const ContentWrapper=styled.div`
   height: 100%;
  overflow-y: hidden;

`


export const ContentOne=styled.div`
      width: 100%;
      background: url(${require("@/assets/img/download-background.png")});
    .top-item{
        width: 100%;
        height: 60px;
        line-height: 60px;
        position: relative;
        .download-top{
            cursor: pointer;
            font-size: 14px;
            width: 1200px;
            margin: 0 auto;
            height: 60px;
            line-height: 60px;
            color: #ccc;
        
        .ant-btn{
           float: right;
           margin-top: 10px;
            padding: 0 30px;
            background: none;
            color: #e2e2e2;
            border: none;
            background: url(${require("@/assets/img/download-btn.png")}) no-repeat left;
            background-size: 10%;
            background-position: 5px 8px;
         
        }
    }
    }
    .download-item{
        width: 1100px;
        height: 668px;
        padding: 80px 0px 112px;
        margin: 0 auto;
        /* background:#222 ; */
        display: flex;
        h3{
            color: #e2e2e2;
            font-size: 22px;
            padding-bottom: 23px;
            text-align: center;
        }
        &-left{
            width: 556px;
            .image{
                width: 100%;
                display: flex;
                justify-content: center;
                img{
                   width: 464px;
               }
          }

        }
        &-right{
            width: 556 px;
            margin-left: 100px;
            .image{
                width: 100%;
                display: flex;
                justify-content: center;
                img{
                width: 246px;
            }
            }
           
        }
        .down-ico{
            width: 556px;
            height: 44px;
            margin: 20px 0;
            display: flex;
            justify-content: center;
            i{
               display: inline-block;
               height: 44px;
            }
            span{
                display: inline-block;
                height: 28px;
                line-height: 24px;
            }
            .mac-ico{
                width: 154px;
                background: url(${require("@/assets/img/mac-download.png")}) no-repeat;
                background-size: 100%;
                background-position: 0 0;
            }
            .window-ico{
                margin-left: 40px;
                width: 140px;
                background: url(${require("@/assets/img/window-download.png")}) no-repeat;
                background-size: 100%;
                background-position: 0 0;
            }
        }
        .download-btn{
            width: 556px;
            display: flex;
            justify-content: center;
            height: 65px;
            span{
                cursor: pointer;
                display: inline-block;
                height: 65px;
                line-height: 65px;
                text-align: center;
                width: 300px;
                background: white;
                font-size: 22px;
                color: #d10000;
                border-radius: 40px;
            }
            span:hover{
                opacity: 0.8;
            }
        }
    }
`

export const AlubmItem=styled.div`
    width: 100%;
    height: 434px;
    background: white;
    border-bottom: 1px solid rgba(0,0,0,.2);
    .content-item{
        width: 928px;
        height: 434px;
        margin: 0 auto;
        display: flex;
    }
    .album-left{
        padding-top: 120px;
        width: 500px;
        .album-title{
            font-size: 40px;
            color: #333333;
            padding: 45px 0px 5px;
        }
        .album-content{
            padding-top: 10px;
            font-size: 16px;
            color: #666666;
            p{
                line-height: 10px;
            }
            span{
                color: #D10000;
            }
        }
    }
    .album-right{
        right: 40%;
        height: 434px;
      
        .album-image{
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
    
`

export const ArtistItem=styled.div`
    height: 438px;
    width: 100%;
    background: white;
    border-bottom: 1px solid rgba(0,0,0,.2);
    .content-item{
        width: 982px;
        height: 100%;
        margin: 0 auto;
        display: flex;
    }
    .artist-left{
        right: 40%;
        height: 100%;
        .artist-image{
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

    }
    .artist-right{
        padding-top: 120px;
        width: 540px;
        .artist-title{
            font-size: 40px;
            color: #333333;
            padding: 25px 0px 5px 90px;
        }
        .artist-content{
            padding: 10px 0 0 90px;
            font-size: 16px;
            color: #666666;
            p{
                line-height: 10px;
            }
            span{
                color: #D10000;
            }
        }
    }
   
`