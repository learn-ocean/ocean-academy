import styled from "styled-components"
import { activePink } from "styles"

export const StatPercentage = styled.div`
color: ${activePink};
font-size: 22px;
font-weight: bold;
`

export const ProgressStat = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 200px;

  > h1 {
    font-weight: bold;
    font-size: 18px;
  }

  > p{
    font-size: 20px;
  }
`