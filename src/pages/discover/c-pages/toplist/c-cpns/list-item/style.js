import styled from "styled-components"

export const ListItemWrapper=styled.div`
    .item-content{
        width: 240px;
        height: 40px;
        display: flex;
        justify-content:flex-start;
        .left{
            display: flex;
            justify-content: center;
             align-items: center;
             padding-left: 30px;
             img{
                width: 40px;
                height: 40px;
             }
        }
        .right{
            padding-left: 10px;
            .list-name{
                width: 150px;
                font-size: 12px;
                font-weight: 550;
                overflow: hidden;
                text-overflow: clip;
                white-space: nowrap;

            }
            .new{
                font-size: 12px;
                color: #999999;
            }
        }
    }
`