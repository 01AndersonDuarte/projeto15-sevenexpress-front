import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header/index";
import NotFound from "../../components/NotFound/NotFound";
import { ContainerSection, WindowSection, ProductCard, InfoProduct, StyledLink } from "./style";
import { LoadingRings } from "../../components/Loading/Loading";

import { port } from "../../port";
import WindowProducts from "../../components/SearchComponents/WindowProducts";

export default function SectionPage() {
    const [sectionProducts, setSectionProducts] = useState();
    const { section } = useParams();

    useEffect(() => {
        const url = `${port}/produtos?category=${section}`;

        axios.get(url).then((sucess) => {
            setSectionProducts(sucess.data);
            console.log(sucess.data);
        }).catch(fail => alert(fail.response.data));
    }, [section]);

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
        <WindowProducts products={sectionProducts}/>
    );
}