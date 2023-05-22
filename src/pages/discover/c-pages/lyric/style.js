import styled from "styled-components"

export const ReportWrapper =styled.div`
   .report-content{
     height: 700px;
     background: white;
   }    
   .lyric-report-content{
    padding: 40px;
   }
   .report-content-title{
    height: 30px;
    line-height: 30px;
    border-bottom: 2px solid #c20c0c;
    font-family: simsun;
    font-size: 14px;
    font-weight: bold;
    a:hover{
        text-decoration: underline;
    }
   }

   .report-content-select{
      margin-top: 30px;
      font-size: 12px;
      h3{
        font-weight: bold;
      }
      textare{
       
        margin-top: 5px;
        margin-bottom: 30px;
       
      }
      .u-txt{ 
        width: 260px;
        height: 70px;
         margin-right: -20px;
         resize: none;
      }
      .submit-report{
        width: 95px;
        height: 31px;
        line-height: 31px;
        text-align: center;
        user-select: none;
        color: #fff;
        background-position: right -385px;
      }
   }
`


