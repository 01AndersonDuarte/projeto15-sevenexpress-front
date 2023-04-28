import Header from "../../components/Header";
import { MainContainer, HeaderIMG, ContainerLoading, Item } from "./style";
import { LoadingRings } from "../../components/Loading/Loading";

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import header1 from "../../assets/header1.jpg"
import header3 from "../../assets/header.jpg"
import header4 from "../../assets/header9.jpg"
import header5 from "../../assets/header11.jpg"
// import header2 from "../../assets/Beige and White Neutral eCommerce Spring Sale Banner  (2).jpg"
// import header4 from "../../assets/header4.png"
// import header5 from "../../assets/header5.png"
// import header8 from "../../assets/header8.jpg"

import React, { useState, useEffect, useRef } from "react";
import { port } from "../../port";
import axios from "axios";

export default function HomePage() {
    const [products, setProducst] = useState();
    const [searchValue, setSearchValue] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const url = `${port}/produtos`;

        axios.get(url)
            .then(sucess => {
                setProducst(sucess.data);
            })
            .catch(fail => alert(fail.response.data));

        const filtered = products?.filter((p) =>
            {
                if(searchValue!=='') return p.name.toLowerCase().includes(searchValue.toLowerCase());
            }
        );
        console.log(filtered);
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
            url: header1
        },
        {
            url: header3
        },
        {
            url: header4
        },
        {
            url: header5
        },
    ];

    function getSuggestionsPosition(){
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
        <div style={{ position: "relative"}}>
            <Header setResearch={setSearchValue} searchValue={searchValue} inputRef={inputRef}></Header>
            {
                !filteredProducts || filteredProducts.length===0 ?
                    ''
                    :
                    <div style={{ ...getSuggestionsPosition() }}>
                        <ul>
                            {filteredProducts.map((product, index) => (
                                <Item key={index} onClick={()=>console.log("Ir para página do produto")}>
                                    <p>{product.name}</p>
                                </Item>
                            ))}
                        </ul>
                    </div>
            }
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
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
