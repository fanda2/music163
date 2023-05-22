import styled from "styled-components"


export const AlbumWrapper=styled.div`
    

`


export const Content=styled.div`
   
   background-color: #fff;
   padding-top: 40px;
   /* display: flex; */
   .hot-list{
    width: 92%;
    margin: 0 auto;
    &-content{
        display: flex;
        flex-wrap: wrap;
    }
    .hot-list-item:not(:nth-child(1),:nth-child(6)) {
        padding: 0 0 30px 30px;
    }
   }
   .all-list{
    padding-top: 40px;
    width: 92%;
    margin: 0 auto;
    &-content{
        display: flex;
        flex-wrap: wrap;
    }
    .all-list-item:not(:nth-child(1),:nth-child(6),:nth-child(11),:nth-child(16),:nth-child(21),:nth-child(26),:nth-child(31)) {
        padding: 0 0 30px 30px;
    }
   }
`
