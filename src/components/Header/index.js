import { useRef, useState, useEffect } from "react";
import { HeaderContainer, HeaderLogo, Menu, HeaderInput, StyledLink, HeaderButton, SearchBar } from "./style";
import logo from "../../assets/Logo.png"
import { Link } from "react-router-dom";
import lupa from "../../assets/images.png"
import cart from "../../assets/cart icon.jpg"

import { useNavigate } from "react-router-dom";
import { port } from "../../port";
import axios from "axios";
import { Item } from "../../pages/HomePage/style";

import { CartIconEmpty } from "./style";
import useAuth from "../../hooks/useAuth";

export default function Header() {
    const [products, setProducst] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const { auth } = useAuth();

    useEffect(() => {
        const url = `${port}/produtos`;

        axios.get(url)
            .then(sucess => {
                setProducst(sucess.data);
            })
            .catch(fail => alert(fail.response.data));

        const filtered = products?.filter((p) => {
            if (searchValue !== '') return p.name.toLowerCase().includes(searchValue.toLowerCase());
        }
        );
        setFilteredProducts(filtered);
    }, [searchValue]);

    function getSuggestionsPosition() {
        const inputRect = inputRef.current.getBoundingClientRect();
        const top = inputRect.bottom;
        const left = inputRect.left;
        const width = inputRect.width;
        const position = "absolute";
        const backgroundColor = "white";
        const borderRadius = "2px";
        const border = "solid 1px rgba(212, 212, 212, 1)";
        const zIndex = "1";
        return { top, left, width, position, backgroundColor, borderRadius, border, zIndex };
    };

    return (
        <>
            <HeaderContainer>
                <div>
                    <Link to={"/"}><HeaderLogo src={logo}></HeaderLogo></Link>
                    <SearchBar>
                        <HeaderInput
                            type="text"
                            placeholder="Buscar produtos"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            ref={inputRef}
                        />
                        <hr></hr>
                        <HeaderButton><img src={lupa}></img></HeaderButton>
                    </SearchBar>
                    <Menu>
                        {auth ?
                            <>
                                <p>Olá, {auth.name}</p>
                                <StyledLink to={"/"}> <p>Meus pedidos</p> </StyledLink>
                                <StyledLink to={"/"}> <p>Sair</p> </StyledLink>
                            </>
                            :
                            <>
                                <StyledLink to={"/login"}> <p>Entre</p> </StyledLink>
                                <StyledLink to={"/cadastro"}> <p>Crie a sua conta</p> </StyledLink>
                            </>
                        }
                        <StyledLink to={"/carrinho"}>
                            <CartIconEmpty />
                        </StyledLink>
                    </Menu>
                </div>
                <ul>
                    <li>Eletrodoméstico</li>
                    <li>Tecnologia</li>
                    <li>Cuidados Pessoais</li>
                    <li>Vestuário</li>
                    <li>Mais Vendidos</li>
                </ul>
            </HeaderContainer>
            {
                !filteredProducts || filteredProducts.length === 0 ?
                    ''
                    :
                    <div style={{ ...getSuggestionsPosition() }}>
                        <ul>
                            {filteredProducts.map((product, index) => (
                                <Item key={index} onClick={() => {
                                    setSearchValue('');
                                    navigate(`/produto/${product._id}`);
                                }}>
                                    <p>{product.name}</p>
                                </Item>
                            ))}
                        </ul>
                    </div>
            }
        </>
    )
}

