import { styled } from "styled-components";

export const FooterWrapper=styled.div`
  width: 100%;
  background:  #f2f2f2;
  font-size: 12px;
  color: #333;
  border-top: 1px solid rgba(0,0,0,.1);
  ul,li{
    list-style: none;
    margin: 0;
    display: block;
  }
  a{
    text-decoration: none;
    margin: 0;
    padding: 0;
  }
  .content{
    position: relative;
    height: 325px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
  }

`


export const FooterTop=styled.div` 
  .icon-link-ul{
    display: flex;
    justify-content: center;
    margin-top: 33px;
    padding: 0;
    
    :nth-child(1) .list-icon{
        background-position: -170px -5px;;
    }
    :nth-child(2) .list-icon{
        background-position: -5px -170px;
    }
    :nth-child(3) .list-icon{
        background-position: -5px -60px;
    }
    :nth-child(4) .list-icon{
        background-position: -60px -60px;
    }
    :nth-child(5) .list-icon{
        background-position: -115px -115px;
    }
    :nth-child(6) .list-icon{
        background-position: -170px -115px;
    }
    :nth-child(7) .list-icon{
        background-position: -170px -60px;
    }
    /* hover触发 */
    :nth-child(1) .list-icon:hover{
        background-position: -5px -115px;;
    }
    :nth-child(2) .list-icon:hover{
        background-position: -60px -170px;
    }
    :nth-child(3) .list-icon:hover{
        background-position: -60px -5px;
    }
    :nth-child(4) .list-icon:hover{
        background-position: -115px -5px;
    }
    :nth-child(5) .list-icon:hover{
        background-position: -5px -5px;
    }
    :nth-child(6) .list-icon:hover{
        background-position: -60px -115px;
    }
    :nth-child(7) .list-icon:hover{
        background-position: -115px -60px;
    }

    .icon-item{
        width: 45px;
        height: 71px;
        margin-left: 80px;
        text-align: center;
        color: #666;
        .tt{
            display: inline-block;
            width: 100px;
            margin-top: 10px;
            margin-left: -27.5px;
            font-weight: 400;
            font-size: 12px;
            text-align: center;
            color: rgba(0,0,0, 0.5);
        }
    } 
    .icon-item:first-child{
        margin-left: 0px;
    }

  }
  .list-icon{
    float: none;
     width: 45px;
     height: 45px;
     display: block;
  }

   
`


export const FooterMiddle=styled.div`
  margin-top: 60px;
  .link-ul{
    display: flex;
    justify-content: center;
    padding: 0;
    li{
      
       padding: 0 15px;
    }
    li:not(:last-child)::after {
        content: "|";
        position: relative;
        left: 20px;
    }
  }
  .link-item{
    color: #666;
    line-height: 24px;
    text-align: center;
  }
  .link-item:hover{
    text-decoration: underline;
  }

`


export const FooterBottom=styled.div`
   text-align: center;
   .bottom-top,.bottom-center,.bottom-bottom{
    height: 24px;
    line-height: 24px;
   }
   span{
    padding: 0 5px;
   }
   a{
    color: #666;
    line-height: 24px;
    text-align: center;
   }
   a:hover{
    color: #666;
    text-decoration: underline;
   }



`