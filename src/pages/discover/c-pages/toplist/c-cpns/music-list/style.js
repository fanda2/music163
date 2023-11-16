import styled from "styled-components"

export const MusicListWrapper=styled.div`
    .top-title{
        width: 670px;
        height: 35px;
        line-height: 35px;
        border-bottom: 2px solid #c20c0c;
        display: flex;
        justify-content: space-between;
        h3{
            font-size: 20px;
             line-height: 28px;
        }
        &-left{
            display: flex;
        }
        &-musiccount{
            font-size: 12px;
            padding-left: 20px;
            color: #666;
        }
        &-play{
            font-size: 12px;
            color: #666;
            strong{
                color: #c20c0c;
            }
           
        }
    }
    .music-list{
        table{
            border-collapse: collapse;
            border-spacing: 0;
            table-layout: fixed;
             display: table;
             border-collapse: separate;
             box-sizing: content-box;
             text-indent: initial;
             div{
                box-sizing: content-box;
             }
             .first-td{
                display: flex;
                justify-content: space-between;
             }
             .item-index{
                color: #999;
                font-size: 12px;
             }
             .item-index{
                height: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
             }
             .index-icon{
                 margin: 5px 8px;
                 display: block;
                 width: 16px;
                 height: 17px;
                 background-position: -67px -283px;
              }
              .music-name{
                display: flex;
                align-items: center;
                .name-play{
                  display: block;
                  width: 17px;
                  height: 17px;
                  cursor: pointer;
                 background-position: 0 -103px;
                }
                .name-link{
                    margin-left: 10px;
                }
              }
             
            
             
        }
        .m-table{
            width: 100%;
            border: 1px solid #d9d9d9;
            .first{
                width: 77px;
            }
            .w2-1{
                width: 91px;
                text-align: left;
            }
            .w3-1{
                width: 26%;
                text-align: left;
            }
            .wp{
                text-align: left;
                padding-left: 10px;
                font-weight: 500;
                font-size: 12px;
                height: 18px;
                line-height: 18px;
                padding: 8px 10px;
                background-position: 0 -60px;
             }
            th{
                height: 38px;
                 background-color: #f7f7f7;
                 color: #666;
                 background-position: 0 0;
                 background-repeat: repeat-x;
           }
           tr{
            display: table-row;
            vertical-align: inherit;
            border-color: inherit;
           }
           td {
             padding: 6px 8px;
            a{
                color: #333;

            }
            a:hover{
                text-decoration: underline;
            }
            div, .artist-name{
                  overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                -o-text-overflow: ellipsis; 
            }
                     
           }
           .even{
              background-color: #f7f7f7;
            }
        }
        thead{
            display: table-header-group;
              vertical-align: middle;
              border-color: inherit;
        }
        .table-line{
            height: 30px;
            line-height: 30px;
            cursor: pointer;
            .btnshow{
                display: none;
                .icn{
                    float: left;
                     width: 18px;
                     height: 16px;
                     margin-top: 2px;
                     margin-left: 2px;
                     overflow: hidden;
                     text-indent: -999px;
                     cursor: pointer;
                }
                .icn-b{
                    width: 13px;
                }
                .ico-play{
                    background-position: 0 -700px;
                }
                .ico-play:hover{
                    background-position: -22px -700px;
                }
                .ico-add{
                    background-position: 0 -174px;
                }
                .ico-add:hover{
                    background-position: -20px -174px;
                }
                .ico-share{
                    background-position: 0 -195px;
                }
                .ico-share:hover{
                    background-position: -20px -195px;
                }
                .ico-download{
                    background-position: -81px -174px;
                }
                .ico-download:hover{
                    background-position: -104px -174px;
                }
            }
            .music-duration{
                display: block;
            }

        }
        .table-line:hover .music-duration{
            display: none;             
        }
        .table-line:hover .btnshow{
                display: block;
        } 
       
    }
`