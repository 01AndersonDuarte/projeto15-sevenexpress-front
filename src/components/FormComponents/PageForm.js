import styled from "styled-components"

export const PageForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 700px;
    gap: 15px;
    @media screen and (max-width: 700px){
        width: 90%;
    }
`