import { useState } from "react";
import { HeaderContainer, HeaderLogo, Menu, HeaderInput, StyledLink, HeaderButton, SearchBar } from "./style";
import logo from "../../assets/Logo.png"
import { Link } from "react-router-dom";
import lupa from "../../assets/images.png"
import cart from "../../assets/cart icon.jpg"

export default function Header({ setResearch, searchValue, inputRef }) {

    return (
        <HeaderContainer>
            <HeaderLogo src={logo}></HeaderLogo>
            <SearchBar>
                <HeaderInput type="text" placeholder="Faça sua pesquisa"></HeaderInput>
                <hr></hr>
                <HeaderButton><img src={lupa}></img></HeaderButton>
            </SearchBar>
            <Menu>
                <StyledLink to={"/login"}>Entre</StyledLink>
                <StyledLink to={"/cadastro"}>Crie a sua conta</StyledLink>
                <StyledLink src={cart} to={"/carrinho"}></StyledLink>
            </Menu>
        </HeaderContainer>
    )
}

