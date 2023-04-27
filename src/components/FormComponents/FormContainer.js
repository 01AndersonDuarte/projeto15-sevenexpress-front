import styled from "styled-components"

export const FormContainer = styled.div`
    background-color: #faa94a;
    width: 700px;
    height: 700px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    box-shadow: 2px 2px #888888;

    @media screen and (max-width: 700px){
        width: 90%;
    }
`