import styled from 'styled-components'

export const CoursesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    height: calc(100vh - 130px);
    margin: 70px 20px 0;

    @media (max-width: 900px) {
    grid-template-columns: auto;
    height: initial;
    margin: 70px 10px;
    }
`

export const CoursesGrid = styled.div`
    padding: 2% 2% 2% 2%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 100px;
`