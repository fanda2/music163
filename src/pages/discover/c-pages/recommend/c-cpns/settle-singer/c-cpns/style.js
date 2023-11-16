import styled from "styled-components"

export const SettleListItemWrapper=styled.div`
    width: 210px;
    height: 62px;
    margin: 0 auto;
    display: flex;
    background: #fafafa;
    border-left: none;
    border: 1px solid #e9e9e9;
    .cover-image{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 62px;
            height: 62px;
        }
    }
    .right-content{
        .artist{
            font-size: 14px;
            padding-left: 10px;
            font-weight: bold;
            margin-top: 8px;
        }
        .thide{
            padding-left: 10px;
            padding-top: 8px;
            font-size: 12px;
            width: 120px;
            color: #666;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            -o-text-overflow: ellipsis;
        }
    }
`