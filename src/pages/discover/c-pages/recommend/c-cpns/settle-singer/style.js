import styled from "styled-components"

export const SettleSingerWrapper=styled.div`
    padding-top: 10px;
    .settle-list{
        &-top{
            width: 210px;
            height: 24px;
            line-height: 24px;
            margin: 0 auto;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0,0,0,.3) ;
            a{
                color: #666;
                font-size: 12px;
            }
            a:hover{
                text-decoration: underline;
            }
        }
        &-content{
            ul,li{
                padding: 0;
                margin: 0;
                list-style: none;
            }
            .settle-list-item{
                margin-top: 14px;
                cursor: pointer;
            }
        }
        .add-btn{
            width: 250px;
            height: 31px;
            margin-top: 14px;
            &-link{
                margin-left: 20px;
                display: block;
                width: 210px;
                height: 31px;
                line-height: 31px;
                border-radius: 4px;
                color: #333;
                text-align: center;
                background-position: right -100px;
                /* border: 1px solid #9e9e9e; */
                .in-btn{
                    font-style: normal;
                    display: inline-block;
                    width: 209px;
                    font-weight: bold;
                    height: 31px;
                    line-height: 31px;
                    text-align: center;
                    background-position: 0 -59px;
                }
            }
        }
    }
`