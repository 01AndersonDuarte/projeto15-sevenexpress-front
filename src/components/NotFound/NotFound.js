import Header from "../Header/index";
import { Link } from "react-router-dom";

import { ContainerNotFound } from "./style";

export default function NotFound() {
    return (
        <ContainerNotFound>
            <Header />
            <h1>DESCULPE</h1>
            <h2>não conseguimos encontrar essa página</h2>
            <Link to={"/"}>Voltar para a página inicial</Link>
        </ContainerNotFound>
    );
}