import { Link } from "react-router-dom";
import styled from "styled-components"

const MainContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
`
const HeaderIMG = styled.img`
    margin-top: 30px;
    width: 80%;
    height:340px;
    border-radius: 20px;
`
const ContainerLoading = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Item = styled.li`
    padding: 2%;
    cursor: pointer;
    &:hover{
        background-color: #f2f2f2;
    }
`

const ProductsSlide = styled.div`
    width: 100%;
    max-width: 70%;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Carousel = styled.div`
    overflow: hidden;

    display: flex;
    align-items: center;
    scroll-behavior: smooth;
`

const Inner = styled.div`
    display: flex;
    height: 400px;    

    gap: 7px;
`

const CarouselItem = styled.div`
    height: 350px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid rgb(0 0 0 / 0.2);
    border-radius: 3px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

    img {
        width: 250px;
        height: 80%;
        border-radius: 12px;
        pointer-events: none;
    }
    p {
        font-family: "Roboto", sans-serif;
        font-size: 23px;
        color: #000000;
    }
    p:nth-child(2){
        color: green;
    }
`

const CarouselP = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    hr {
        color: rgba(0, 0, 0, 0.2);
        border-bottom: 0;
    }
    cursor: pointer;
`

const CarouselButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    button {
        background-color: white;
        border: none;
        width: 50px;
        height: 50px;
        svg {
            width: 40px;
            height: 40px;
            color: orange;
        }
    }
`

export {
    MainContainer,
    HeaderIMG,
    ContainerLoading,
    Item,
    ProductsSlide,
    Carousel,
    Inner,
    CarouselItem,
    CarouselP,
    StyledLink,
    CarouselButtons
}