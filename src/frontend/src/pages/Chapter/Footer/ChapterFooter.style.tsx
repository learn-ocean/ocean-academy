import styled from 'styled-components/macro'

export const ChapterFooterStyled = styled.div`
  height: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 15px;

  > a:nth-child(1) {
    display:block;
    position: relative;
    bottom: 0;
    left: 20px;
    width: 200px;
  }

  > a:nth-child(2) {
    margin: auto
    display:block;
    position: relative;
    bottom: 0;
    right: 20px;
    width: 200px;
  }

  @media (max-width: 900px) {
    > a:nth-child(1) {
      display: none;
    }
  }
`
