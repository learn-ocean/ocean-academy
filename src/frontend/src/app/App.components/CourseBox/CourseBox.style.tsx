import styled from 'styled-components/macro'

export const ChaptersIconStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;    
`

export const CourseBoxStyled = styled.div`
    margin: 15px;
    background-color: rgba(196,196,196,.14);
    color: white;
    min-height: 180px;
    border: 1px solid #c4c4c4;
    h3 {
      text-align: left;
      padding-left: 1rem;
      padding-top: 1rem;
    }
    p {
      padding-right: 0.5rem;
    }

    &:hover {
      cursor: pointer;
      background-color:  rgba(196,196,196,.27);
    }
    .moduleContent {
      text-align: left;
      padding: 0 1rem 1rem 1rem;
      display: flex;
      flex-direction: row;
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
