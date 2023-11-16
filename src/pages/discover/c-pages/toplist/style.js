import styled from "styled-components"

export const TopListWrapper=styled.div`

    
`

export const Content=styled.div`
     display: flex;
    
`

export const PlayListLeft=styled.div`
    width: 260px;
    .minelist{
        padding-top: 20px;
        background: white;
        border-left: 1px solid rgba(0,0,0,.2);
        border-right: 1px solid rgba(0,0,0,.2);
        &-item{
            margin-top: 20px;
        }
        ul,li{
            list-style: none;
            padding: 0;
            margin: 0;
        }
        h2{
            padding: 0 10px 12px 15px;
            font-size: 14px;
            color: #000;
        }
    }
    .select-list-item{
        cursor: pointer;
         padding: 10px 0 !important;
    }
    .select-list-item:hover{
        background: #f1f1f1;
    }
    .selected-list-item{
        background: #e7e7e7 !important;
    }
    

`

export const PlayListRight=styled.div`
    width: 740px;
    border-right: 1px solid rgba(0,0,0,.2);
    background: white;
    .content-top{
        width: 100%;
        height: 238px;
    }
`

