import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    margin-top: 15px;
    width: 60%;
    text-align: center;

    color: white;
    font-weight: 700;
    @media screen and (max-width: 700px){
        width: 90%;
    }
`
