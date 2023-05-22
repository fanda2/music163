import styled from "styled-components"


export const HeaderWrapper=styled.div`
    height: 33px;
    border-bottom: 2px solid #C10D0C;
    padding: 0 10px 4px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    .left{
        display: flex;
        align-items: center;
        .title{
            font-size: 20px;
            font-family: "Microsoft Yahei",Arial, Helvetica, sans-serif;
            margin-right: 20px;
            color: black;
        }
        .keyword{
            display: flex;
            align-items: center;
            height: 33px;
            line-height: 33px;
            .album-link{
               color: #666;
               font-size: 10px;
             }
             .alnum-link:hover{
              text-decoration: underline;
            }
            .item{

                .divider{
                    
                    margin: 0 15px;
                    color: #ccc;
                }
            }
        }
    }

`