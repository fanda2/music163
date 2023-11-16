import styled from "styled-components"

export const DjRadioItemWrapper=styled.div`
    
    width: 210px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    .avatar-image{
        cursor: pointer;
        display: flex;
        justify-content: center;
        img{
            width: 40px;
            height: 40px;
        }
    }
    .right{
        padding-left: 10px;
        .dj-name a{
            color: #333;
            font-size: 14px;
        }
        .dj-name:hover{
            text-decoration: underline;
        }
        .thide{
            color: #666;
            font-size: 12px;
        }
    }
`