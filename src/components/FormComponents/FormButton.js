import styled from "styled-components"

export const FormButton = styled.button`
    width: 60%;
    height: 45px;
    border-radius: 5px;
    border: none;
    font-weight: 700;

    background-color: #000000;
    color: #ffffff;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @media screen and (max-width: 700px) {
        width: 100%;
    }
`
