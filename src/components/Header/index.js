import { useState } from "react";
import { HeaderContainer, HeaderLogo, Menu, HeaderInput, StyledLink, HeaderButton, SearchBar } from "./style";
import logo from "../../assets/Orange_Simple_Online_Shopping_Logo.jpg"
import { Link } from "react-router-dom";
import lupa from "../../assets/images.png"

export default function Header() {

    return (
        <HeaderContainer>
            <HeaderLogo src={logo}></HeaderLogo>
            <SearchBar>
                <HeaderInput type="text" placeholder="Faca sua pesquisa"></HeaderInput>
                <hr></hr>
                <HeaderButton><img src={lupa}></img></HeaderButton>
            </SearchBar>
            <Menu>
                <StyledLink to={"/login"}>Login</StyledLink>
                <StyledLink to={"/cadastro"}>Cadastro</StyledLink>
                <StyledLink to={"/carrinho"}>Carrinho</StyledLink>
            </Menu>
        </HeaderContainer>
    )
}

