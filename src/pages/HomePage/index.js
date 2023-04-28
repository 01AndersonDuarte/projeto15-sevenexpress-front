import Header from "../../components/Header";
import { MainContainer, HeaderIMG, ContainerLoading } from "./style";
// import 'react-slideshow-image/dist/styles.css'
// import { Slide } from 'react-slideshow-image';
import header2 from "../../assets/Beige and White Neutral eCommerce Spring Sale Banner  (2).jpg"
import header4 from "../../assets/header4.png"
import header5 from "../../assets/header5.png"
import header8 from "../../assets/header8.jpg"
import React, { useState, useEffect, useRef } from "react";
import { port } from "../../port";
import axios from "axios";
import { LoadingRings } from "../../components/Loading/Loading";

export default function HomePage() {
    const [products, setProducst] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const url = `${port}/produtos`;

        axios.get(url)
            .then(sucess => {
                // console.log(sucess);
                setProducst(sucess.data);
            })
            .catch(fail => alert(fail.response.data));
        const filtered = products?.filter((p) =>
            {
                if(searchValue!=='') return p.name.toLowerCase().includes(searchValue.toLowerCase());
            }
        );
        setFilteredProducts(filtered);
    }, [searchValue]);

    if (!products) {
        return (
            <ContainerLoading>
                <Header />
                <LoadingRings />
            </ContainerLoading>
        );
    }

    const slideImages = [
        {
            url: header8
        },
        {
            url: header4
        },
        {
            url: header5
        },
    ];
    /* return (
        <>
            <Header></Header>
            <MainContainer>
                <HeaderIMG src={header8}></HeaderIMG>
            </MainContainer>
        </>
    ) */

    return (
        <>
            <Header setResearch={setSearchValue} searchValue={searchValue}></Header>
            {
                !filteredProducts ?
                    ''
                    :
                    <ContainerLoading>
                        <ul>
                            {filteredProducts.map((product, index) => (
                                <li key={product.index}>
                                    <p>{product.name}</p>
                                </li>
                            ))}
                        </ul>
                    </ContainerLoading>
            }
            <div className="slide-container">
                {/* <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            </div>
                        </div>
                    ))}
                </Slide> */}
            </div>
        </>
    )
}

const divStyle = {
    display: 'flex',
    marginTop: "100px",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
}
