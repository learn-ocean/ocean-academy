import styled from 'styled-components/macro'
import { AnimatedCard, primaryColor, textColor } from 'styles'

export const TokenStyled = styled.div`
  margin: 100px auto 20px auto;
  width: 800px;
  height: 80vh
`

export const TokenButton = styled.div`
  position: relative;
  width: 200px;
  margin: 100px auto;
`

export const TokenNone = styled.div`
  font-size: 40px;
  left: 0px;
  color: #fff;
  position: relative;
  text-align: center;
  top: 100px;
`

export const CertificateLink = styled.a`
text-decoration: underline !important;
color: #ff4092 !important;
`

export const TokenCardStyled = styled(AnimatedCard)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1b1b1f;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  height: 650px;
  margin: auto;
  width: 550px;
  margin-top: 100px;
  border-radius: 10%;
  padding: 55px 50px 50px 50px;
`

export const TokenCardTitle = styled.div`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 30px;
`

export const TokenContent = styled.div`
  display: flex;
  flex-direction: column;

  a{
    word-wrap: break-word;
    color: #ff4092 !important;
    width: 550px;


  }
`

export const TokenCardInfo = styled.div`
  margin-top: 25px;
  font-size: 20px;
  width: 100%;

  a{
    font-size: 18px;

  }

`

export const TokenCardCreature = styled.div`

  img{
    position: absolute;
    top: 420px;
    left: 750px;
    width: 250px;
  }
`

export const TokenCardBottom = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
`

export const TokenCardSpan = styled.span`
  font-weight: 600;
  color: white;
  margin-top: 8px;
`

export const TokenCardDate = styled.div`
font-weight: 600;
`