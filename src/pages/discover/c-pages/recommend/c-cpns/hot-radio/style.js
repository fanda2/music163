import styled from "styled-components"


export const HotRadioWrapper=styled.div`
    margin-top: 40px;
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
        }
        &-content{
            ul,li{
                padding: 0;
                margin: 0;
                list-style: none;
            }
            ul{
                margin-top: 10px;
            }
        }
    }

`