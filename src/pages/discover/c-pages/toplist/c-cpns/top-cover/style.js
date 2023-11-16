import styled from "styled-components"

export const CoverContentWrapper=styled.div`
    height: 155px;
    display: flex;
    .cover-image{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 161px;
        height: 161px;
        border: 1px solid #ccc;
        img{
            width: 155px;
            height: 155px;
        }
    }
    .right{
        margin-left: 17px;
        &-title{
            line-height: 24px;
            margin: 16px 0 4px;
        }
        &-update{
            font-size: 12px;
            line-height: 35px;
            margin: 0 0 20px;
            .icon-time{
                display: inline-block;
                width: 13px;
                height: 13px;
                background-position: -18px -682px;
            }
            &-time{
                font-size: 12px;
                color: #666;
                margin-left: 5px;
            }
            &-time2{
                font-size: 12px;
                color: #999;
            }
        }
        &-button{
            display: flex;
            font-family: simsun;
            .btn{
                margin-left: 10px;
            }
            i{
                float: left;
                font-style: normal;
                height: 31px;
                line-height: 30px;
                min-width: 23px;
                cursor: pointer;
                font-size: 12px;
            }
            .btn-play{
                height: 31px;
                line-height: 32px;
                display: flex;
              &-left{
                cursor: pointer;
                width: 66px;
                padding: 0 0 0 10px;
                background-position: 0 -387px;
                color: #ffffff;
                i{
                    float: left;
                    padding-left: 10px;
                    width: 20px;
                    height: 18px;
                    margin: 6px 2px 2px 0;
                    background-position: 0 -1622px;
                    overflow: hidden;
                }
              }
              &-right{
                cursor: pointer;
                width: 32px;
                margin-left: -3px;
                padding-right: 0;
                background-position: 0 -1588px;
              }
            }
            .btn-add{
                width: 95px;
                height: 31px;
                background-position: right -1020px;
                i{
                    width: 90px;
                    padding-left: 28px;
                    background-position: 0 -977px;
                }

            }
            .btn-share{
                width: 77px;
                height: 31px;
                background-position: right -1020px;
                i{
                    width: 73px;
                    padding-left: 26px;
                    background-position: 0 -1225px;
                }

            }
            .btn-download{
                width:59px;
                height: 31px;
                background-position: right -1020px;
                i{
                    width: 55px;
                    padding-left: 28px;
                    background-position: 0 -2761px;
                }

            }
            .btn-comment{
                width: 83px;
                height: 31px;
                background-position: right -1020px;
                i{
                    width: 81px;
                    padding-left: 28px; 
                    background-position: 0 -1465px;
                }

            }
        }
    }
`