import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header/index";
import NotFound from "../../components/NotFound/NotFound";
import { ContainerSection, WindowSection, ProductCard, InfoProduct, StyledLink } from "./style";
import { LoadingRings } from "../../components/Loading/Loading";

import { port } from "../../port";

export default function SectionPage() {
    const [sectionProducts, setSectionProducts] = useState();
    const { section } = useParams();

    useEffect(() => {
        const url = `${port}/produtos?category=${section}`;

        axios.get(url).then((sucess) => {
            setSectionProducts(sucess.data);
            console.log(sucess.data);
        }).catch(fail => alert(fail.response.data));
    }, []);

    if (section !== 'eletrodomestico' && section !== 'cuidado pessoal'
        && section !== 'mais vendidos' && section !== 'tecnologia' && section !== 'vestuario') {
        console.log("entrou");
        return (<NotFound />);
    }
    if (!sectionProducts) {
        return (
            <ContainerSection>
                <LoadingRings />
            </ContainerSection>
        );
    }

    return (
        <ContainerSection>
            <Header />
            <WindowSection>
                {sectionProducts.map((p) => <Product key={p._id} product={p} />)}
            </WindowSection>
        </ContainerSection>
    );
}

function Product({ product }) {
    const { name, image, price, description, amount, _id } = product;
    return (
        <StyledLink to={`/produto/${_id}`}>
            <ProductCard>
                <img src={image}></img>
                <InfoProduct>
                    <div>
                        <h1>{name}</h1>
                        <h2>{description}</h2>
                    </div>
                    <div>
                        <h3>R$ {parseFloat(price).toFixed(2)}</h3>
                        <h4>Disponível em estoque: {amount}</h4>
                    </div>
                </InfoProduct>
            </ProductCard>
        </StyledLink>
    );
}