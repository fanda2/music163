import styled from "styled-components"

export const TopRanlingWrapper=styled.div`
  flex: 1;

  .header{
    height: 100px;
    display: flex;

    margin: 20px 0 0 20px;
     
    .image{
        width: 80px;
        height: 80px;
        position: relative;

        img{
            width: 80px;
            height:80px;

        }
    }
    .info{
        margin: 5px 0 0 10px;
        a{
            color: #333;
            font-size: 14px;
            font-weight: 700;
        }
        a:hover{
            text-decoration: underline;
        }
        .btn{
            cursor: pointer;
            border: none;
             display: inline-block;
             text-indent: -9999px;
             width: 25px;
             height: 25px;
             margin: 8px 10px 0 0;
        }
        .play{
            background-position: -267px -205px;
        }
        .play:hover{
            background-position: -267px -235px;
        } 
       .favor{
           background-position: -300px -205px;
         }
         .favor:hover{
            background-position: -300px  -235px;;
         }
    }
  }
  .list{
    .list-item{
        position: relative;
        display: flex;
        align-items: center;
        height: 32px;

        &:nth-child(-n+3) .rank{
            color: #c10d0c;
        }
        .rank{
            width: 35px;
            text-align: center;
            margin-left: 10px;
            font-size: 16px;
        }
        .name{
            width: 170px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #000;
        }
        .name a{
            color: #000;
        }
        .name:hover{
            text-decoration: underline;
        }
        .operate{
            position: absolute;
            display: flex;
            align-items: center;
            padding-top: 5px;
            right: 0;
            display: none;
            .btn{
                border: none;
                width: 17px;
                height: 17px;
                margin-right: 8px;
                cursor: pointer;
            }
            .play{
                background-position: -267px -268px;

            }
            .play:hover{
                background-position: -267px -288px;
            }
            .addto{
                position: relative;
                top: 2px;
                background-position: 0 -700px;
            }
            .addto:hover{
                background-position: -22px -700px;
            }
            .favor{
                background-position: -297px -268px;
            }
            .favor:hover{
                background-position: -297px -288px;
            }
        }

        &:hover{
            .operate{
                display: block;
            }
            .name{
                width: 110px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
  }

  .footer{
    height: 32px;
    display: flex;
    align-items: center;
    margin-right: 32px;
    justify-content: flex-end;
    font-size: 12px;
    a{
        color: #000;
    }
    a:hover{
        text-decoration: underline;
    }
  }
    
`