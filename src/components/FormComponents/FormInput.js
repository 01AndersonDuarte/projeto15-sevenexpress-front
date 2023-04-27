import styled from "styled-components"

export const FormInput = styled.input`
    width: 60%;
    height: 45px;

    border: solid 1px rgba(212, 212, 212, 1);
    border-radius: 5px;
    outline: 0;

    box-sizing: border-box;
    padding: 10px;
    font-size: 18px;
    font-weight: 400;
    @media screen and (max-width: 700px) {
        width: 100%;
    }
`
