import styled from "styled-components"


export const PlayListItemWrapper=styled.div`
    width: 553px;
    height: 28px;
    line-height: 28px;
    display: flex;
    .item-content{
        position: relative;
        left: 2px;
        width: 100%;
    }
    .item-content:hover{
        background-color: rgba(0,0,0,0.3);
        .col-name,.song-artist-name,.col-duration{
            color: #e2e2e2;
        }
        .icns-all{
            display: block;
        }
       
    }
    .col {  
     box-sizing: content-box;
     float: left;
     padding-left: 10px;
     height: 28px;
     line-height: 28px;
     _line-height: 29px;
     overflow: hidden;
     cursor: pointer;
     color: #e2e2e2;
    }
    .col-play-icon{
         
        width: 10px;
        .playicn{
            margin-top: 8px;
            width: 10px;
            height: 13px;
            background-position: -182px 0;
        }
    }
    .col-name{
        color: #ccc;
        width: 256px;
    }
    .col-icns{
        width: 78px;
        position: relative;
        .icns-all{
          position: absolute;
          right: 0;
          top: 0;
          width: 100px;
          height: 23px;
         display: none;
           .icns{
              /* display: block; */
              margin: 7px 0 0 10px;
               height: 16px;
              float: right;
              overflow: hidden;
              text-indent: -9999px;
            
          }
          .icns-add{
              width: 16px;
             background-position: -24px 0;
          }
          .icns-add:hover{
            background-position: -24px -20px;
          }
          .icns-share{
              width: 14px;
             background-position: 0 0;
          }
          .icns-share:hover{
            background-position: 0 -20px;
          }
          .icns-download{
              width: 14px;
              background-position: -57px -50px;
          }
          .icns-download:hover{
            background-position: -80px -50px;
          }
          .icns-delete{
              width: 13px;
              background-position: -51px 0;
          }
          .icns-delete:hover{
            background-position: -51px -20px;
          }
        }
        
    }
    .col-artist{
        width: 80px;
        color: #9B9B9B;
        .song-artist-name{
            color: #9B9B9B;
            font-size: 12px;
        }
        .song-artist-name:hover{
            text-decoration: underline;
            color: #e2e2e2;
        }
    }
    .col-artist:hover{
        color: #e2e2e2;
    }
    .col-duration{
        color: #9B9B9B;
        font-size: 12px;
    }
    .col-link{
        width: 37px;
        padding-left: 6px;
        .icns-link{
           float: right;
            width: 14px;
            height: 28px;
            margin-left: 0;
            background-position: -80px 7px;
        }
        .icns-link:hover{
            background-position: -80px -13px;
        }
    }
`