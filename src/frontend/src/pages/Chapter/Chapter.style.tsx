import styled from 'styled-components/macro'
import { backgroundColorLight, backgroundColorDark } from 'styles'

export const ChapterStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  height: calc(100vh - 140px);
  margin: 70px 20px 0;

  @media (max-width: 900px) {
    grid-template-columns: auto;
    height: initial;
    margin: 70px 10px;
  }
`

export const ChapterGrid = styled.div<{ hasTabs?: boolean }>`
  display: grid;
  grid-template-rows: ${(props) => (props.hasTabs ? '30px 500px auto' : '500px auto')};
  grid-gap: 0;
  overflow-y: scroll;

  @media (max-width: 900px) {
    overflow-y: initial;
    grid-template-rows: ${(props) => (props.hasTabs ? 'auto auto auto' : 'auto auto')};
    margin-bottom: 20px;
  }
`

export const ChapterCourse = styled.div`
  background: ${backgroundColorLight};
  padding: 20px;
  font-size: 14px;
  white-space: pre-wrap;
  overflow: auto;
  position: relative;
`

export const ChapterH1 = styled.div`
  font-size: 32px;
  line-height: 38px;

  @media (max-width: 900px) {
    font-size: 24px;
    line-height: 28px;
    text-align: center;
  }
`

export const ChapterH2 = styled.div`
  font-size: 24px;
  line-height: 28px;
  margin-top: 20px;

  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 24px;
  }
`

export const ChapterValidator = styled.div`
  position: relative;
  margin-top: 10px;

  &.ok {
  }
`

export const ChapterValidatorInside = styled.div`
  height: 100%;
  padding: 16px;
  background-color: ${backgroundColorLight};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &.ok {
    background: #124e19;
  }
`

export const ChapterValidatorTitle = styled.div`
  font-size: 32px;
`

export const ChapterValidatorContent = styled.div`
  font-size: 12px;
`

export const ChapterValidatorContentWrapper = styled.div`
  width: 200px;
`

export const ChapterMonaco = styled.div``

export const ChapterItalic = styled.em`
  color: #42edf8 !important;
  /* text-shadow: 0px 0px 25px rgba(11, 183, 226, 0.65), 0px 0px 15px rgba(0, 112, 202, 0.6); */
  text-transform: none;
  font-style: normal;
`

export const ChapterTab = styled.div<{ isSelected?: boolean }>`
  height: 30px;
  line-height: 20px;
  margin-right: 10px;
  padding: 5px 10px;
  display: inline-block;
  cursor: pointer;
  border-top: 1px solid ${backgroundColorLight};
  border-right: 1px solid ${backgroundColorLight};
  border-left: 1px solid ${backgroundColorLight};
  background-color: ${(props) => (props.isSelected ? backgroundColorLight : 'initial')};
`
