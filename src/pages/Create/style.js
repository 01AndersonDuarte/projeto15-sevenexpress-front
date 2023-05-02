import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";

export const Container = styled.div`
    padding: 5%;
    display: flex;
    flex-direction: column;
`;

export const ContainerForm = styled.form`
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        margin-bottom: 1%;
    }
`;

export const ArrowBack = styled(BiArrowBack)`
    font-size: 25px;
    color: #000;
    cursor: pointer;
`;