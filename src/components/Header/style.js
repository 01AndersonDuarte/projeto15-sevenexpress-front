import styled from "styled-components"
import { Link } from "react-router-dom"
import { BsCartDash, BsCartPlusFill } from "react-icons/bs";

const HeaderContainer = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    top: 0;
    left: 0;

    background-color: #FFBD59;

    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    ul{
        font-size: 13px;
        font-weight: 100;
        color: #2c2c2c;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

        background-color: rgba(255, 255, 255, 0.1);
        padding: 1%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            cursor: pointer;
            &:hover{
                transform: scale(1.15);
                color: #000;
                font-weight: 400;
            }
        }
    }
`

const Menu = styled.div`
    width: 40%;
    font-family: 'Roboto';

    p{
        font-size: 15px;
        font-weight: 300;
        color: #2c2c2c;
        cursor: pointer;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
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
    color: 	#2c2c2c;

    /* font-size: 18px; */
    /* font-weight: 600; */
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
    cursor: pointer;

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
const CartIconEmpty = styled(BsCartDash)`
    font-size: 25px;
    color: #FFF;
    cursor: pointer;
`;

const CartIconFull = styled(BsCartPlusFill)`
    font-size: 25px;
    color: #2c2c2c;
    cursor: pointer;
`;

export {
    HeaderContainer,
    Menu,
    HeaderLogo,
    StyledLink,
    HeaderInput,
    HeaderButton,
    SearchBar,
    CartIconEmpty,
    CartIconFull
}