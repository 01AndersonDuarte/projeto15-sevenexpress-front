import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerSection = styled.div`
    /* height: 100vh; */
    padding: 15% 10% 5% 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WindowSection = styled.div`
    width: 100%;
    font-family: 'Roboto';
    border: solid 0.5px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 5%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* background-color: red; */
`;

export const ProductCard = styled.div`
    width: 250px;
    height: 450px;
    margin-right: 20px;
    padding: 1%;
    border: solid 0.5px rgba(0, 0, 0, 0.09);
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img{
        max-width: 250px;
        max-height: 250px;
        object-fit: cover;
    }
`;


export const StyledLink = styled(Link)`
    text-decoration: none;
    hr {
        color: rgba(0, 0, 0, 0.2);
        border-bottom: 0;
    }
    cursor: pointer;
`


export const InfoProduct = styled.div`
    width: 100%;
    max-height: 40%;
    padding: 1%;

    color: #2c2c2c;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1{
        font-weight: 400;
        font-size: 28px;
        line-height: 40px;
    }
    h2{
        font-weight: 100;
        font-size: 18px;
        line-height: 40px;
    }
    h3{
        font-weight: 300;
        font-size: 25px;
        line-height: 40px;
    }


`;