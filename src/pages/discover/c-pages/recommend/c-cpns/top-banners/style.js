import styled from "styled-components"


export const BannerWrapper=styled.div`
background:url(${props=>props.bgimage}) center center/6000px;
.banner{
    height: 285px;
    background-color: red;
    display: flex;
    position: relative;
}
`


export const BannerLeft=styled.div` 
   width: 730px;
   .banner-item{
    overflow: hidden;
    width: 100%;
    height: 285px;
    a{
        text-decoration: none;
        color: #333;
    }
    .image{
        cursor: pointer;
        height: 100%;
    }
   }

`

export const BannerRight=styled.div`
  width:254px;
  height:285px;
  background:url(${require("@/assets/img/download.png")});
  position: relative;
 .btn{
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background-position: 0 9999px;
    text-indent: -9999px;
 }
  p{
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
    font-size: 10px;
  }
  .shadow{
    display: block;
    _display: none;
    position: absolute;
    top: 0;
    left: -20px;
    width: 20px;
    height: 285px;
    background: url(${require("@/assets/img/banner.png")}) no-repeat  0 9999px;
    background-position: -1px 0;
  }
  .shadowr{
    display: block;
    _display: none;
    position: absolute;
    top: 0;
    /* left: auto; */
    right: -20px;
    width: 20px;
    height: 285px;
    background: url(${require("@/assets/img/banner.png")}) no-repeat  0 9999px ;
    background-position: -20px 0;
  }
`



export const BannerControl=styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top:50%;
  transform: translateY(-50%);
   .btn{
    border: none;
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover{
        background-color: rgba(0,0,0,.1);
    }
   }
   .left{
    left: -68px;
    background-position: 0 -360px;
   }
   .right{
    right: -68px;
    background-position: 0 -508px;
   }
  `
