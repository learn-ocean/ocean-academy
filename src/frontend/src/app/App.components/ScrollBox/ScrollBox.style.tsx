import styled from 'styled-components/macro'

export const ScrollBoxStyled = styled.div`
    overflow: scroll;
    
    #scrollBoxContainer::-webkit-scrollbar {
        width: 10px;
    }

    #scrollBoxContainer::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
   
    #scrollBoxContainer::-webkit-scrollbar-thumb {
        background: #888; 
    }
  
    #scrollBoxContainer::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
`

export const ScrollBoxContent = styled.div`
    position: relative;
`