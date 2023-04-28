import styled from "styled-components"
import { Link } from "react-router-dom"


const HeaderContainer = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;

    background-color: #ffbd59;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Menu = styled.div`
    width: 200px;

    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 700px){
        display: none;
    }


`

const HeaderLogo = styled.img`
    height: 100px;
    width: auto;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #333333;

    font-size: 18px;
    font-weight: 600;
`

const HeaderInput = styled.input`
    height: 50px;
    border: none;
    outline: 0;
    padding: 0;
    box-sizing: border-box;
    padding: 7px;

    width: 300px;
    border-radius: 5px 0px 0px 5px;

    @media screen and (max-width: 700px){
        width: 100%;
    }
`

const HeaderButton = styled.button`
    height: 50px;
    border: none;
    
    background-color: #ffffff;

    width: 50px;
    border-radius: 0px 5px 5px 0px;

    img {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5px;
    }
`

const SearchBar = styled.div`
    display: flex;
    align-items: center;

    hr{
        height: 50px;
        color: black;
        background-color: black;
        width: 1px;
        border: none;
    }

    @media screen and (max-width: 700px){
        width: 60%;
    }
`



export {
    HeaderContainer,
    Menu,
    HeaderLogo,
    StyledLink,
    HeaderInput,
    HeaderButton,
    SearchBar

}