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
    display: flex;
    align-items: center;
    justify-content: center;
`

const Carousel = styled.div`
    cursor: grab;
    overflow: hidden;

    //height: 400px;
    display: flex;
    align-items: center;
`

const Inner = styled.div`
    display: flex;
`

const CarouselItem = styled.div`
    height: 200px;
    width: 100%;
    padding: 14px;
    img {
        width: 300px;
        height: 100%;
        border-radius: 12px;
        pointer-events: none;
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
    CarouselItem
}