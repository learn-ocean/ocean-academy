import styled from 'styled-components/macro'

export const ChaptersIconStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const StatItem = styled.div`
margin-top: 5px !important;
margin-bottom: 0px !important;
font-size: 16px !important; 
margin-right: 8px;
color: #f7f7f7 !important;
font-weight: 700;
`

export const CourseStats = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;


  img {
    position: relative;
    top: 0;
    width: 26px;
    height: 18px;
  }
  &-icons {
    display: flex;
    flex-direction: column-reverse;
  }
`

export const CourseBoxStyled = styled.div`

  .courseBox{
    max-width: 350px;
    height: 350px;
    background-color: rgba(0, 0, 0, 0.4);  
    border-radius: 15%;
    padding: 40px;
    margin: 8px;
    display:flex;
    justify-content: space-between;
    flex-direction: column;  
    transition: all .3s ease-in-out;
    box-shadow: rgba(10, 10, 10, 0.6) 0px 2px 8px 0px;;
  }

  .courseBox:hover{
    transform: scale(1.02);
    box-shadow: rgba(10, 10, 10, 0.25) 0px 30px 80px -15px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    box-shado2w: rgba(0, 0, 0, 0.6) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  }


  h3{
    font-weight: 700;
    font-size: 32px;
    height: 50px;
    align-self: center;
    color: #ff4092;
  }

  p{
    font-size:18px !important;
  }

    .moduleContent {
      margin-top: 10px;
      text-align: left;
      display: flex;
      color: #e2e2e2;
      flex-direction: column;
      img {
        position: relative;
        top: 0;
        width: 26px;
        height: 18px;
      }
      &-icons {
        display: flex;
        flex-direction: column-reverse;
      }
    }
`
