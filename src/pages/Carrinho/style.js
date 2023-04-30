import styled from "styled-components"

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    width: 85%;
    height: 100%;

    margin-top: 150px;
    gap: 20px;

`

const Payment = styled.div`
    width: 20%;
    height: 500px;
    font-family: "Roboto", sans-serif;

    background-color: #FFBD59;
    border: 0.5px solid rgba(0,0,0, 0.5);
    box-shadow: 0 1px 3px rgb(0 0 0 / 0.2);
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        padding-top: 15px;
        padding-bottom: 15px;
        box-sizing: border-box;
        width: 90%;
        height: 95%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div:nth-child(1){
            display: flex;
            width: 100%;
            align-items: center;
            gap: 10px;
            svg {
                width: 30px;
                height: 30px;
            }
            h1 {
                font-size: 25px;
                font-weight: 700;
            }
        }

        div:nth-child(2){
            font-size: 20px;
            strong {
                color: green;
            }
        }
    }

    button {
        font-family: "Roboto", sans-serif;
        font-size: 17px;
        font-weight: 700;
        width: 100%;
        background-color: #000000;
        color: #FFFFFF;
        border: none;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 5px;
        margin-top: 200px;
    }
`

const Products = styled.ul`
    width: 80%;
    height: 100%;

    padding: 20px;
    padding-top: 50px;
    box-sizing: border-box;
    border: 0.5px solid rgba(0,0,0, 0.5);
    border-radius: 5px;
    background-color: #FFBD59;
    

    div:nth-child(1){
        display: flex;
        align-items: center;
        gap: 18px;
        margin-bottom: 20px;
        svg {
            width: 30px;
            height: 30px;
        }
    }

    h1{
        font-family: "Roboto", sans-serif;
        font-size: 25px;
        font-weight: 700;
    }
`

const ProductLi = styled.li`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    img {
        width: 180px;
        height: 180px;
    }
    align-items: center;
    padding: 30px;
    box-sizing: border-box;

    border: 0.5px solid rgba(0,0,0, 0.5);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    margin-bottom: 10px;
    border-radius: 5px;

    div:nth-child(1){
        display: flex;
        align-items: center;
        gap: 10px;

        p{
            font-size: 20px;
            line-height: 90px;
            font-family: "Roboto", sans-serif;
        }
        p:nth-child(2){
            color: green;
        }
    }
`

export {
    Container,
    Payment,
    Products,
    MainContainer,
    ProductLi
}