import styled from 'styled-components/macro'
import { textColor } from 'styles'

export const ProfileSettings = styled.div`
  display: flex; 
  padding-left: 25px;
  padding-right: 50px;
  flex-direction: column;
  justify-content: space-around;

  > p {
    font-size: 18px;
  }

  > a {
    font-size: 12px !important;
    cursor: pointer;
    color: grey;
  }

  > a:hover{
    opacity: 0.7;
    cursor: pointer;
  }
`
export const EditIcon = styled.svg`
  width: 18px;
  height: 18px;
  display: inline-block;
  vertical-align: sub;
  margin: 0 0 0 8px;
  stroke: ${textColor};

  &:hover{
    opacity: 0.7;
    cursor: pointer;
  }
`

export const ProfileValue = styled.span`
  font-size: 18px;
  opacity: 0.9;
`
export const EmailAddressNotVerified = styled.span`
  font-size: 14px;
  opacity: 0.6;
  padding-left:10px;
`