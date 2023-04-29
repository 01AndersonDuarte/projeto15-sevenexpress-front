import Header from "../../components/Header";
import { ContainerLoading, Item, ProductsSlide, Carousel, CarouselItem, Inner, CarouselP, StyledLink, CarouselButtons } from "./style";
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
import {IoArrowBackCircle, IoArrowForwardCircle} from "react-icons/io5"


export default function HomePage() {
    const [products, setProducst] = useState();
    const carousel = useRef()

    function right(e) {
        e.preventDefault()

        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    function left(e) {
        e.preventDefault()

        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    useEffect(() => {
        const url = `${port}/produtos`;

        axios.get(url)
            .then(sucess => {
                setProducst(sucess.data);
            })
            .catch(fail => alert(fail.response.data));
    }, []);

    if (!products) {
        return (
            <ContainerLoading>
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

    return (
        <>
            <Header/>
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

            <ProductsSlide>
                <Carousel ref={carousel}>
                    <Inner>
                        {products.map(p => (
                            <StyledLink to={`/produto/${p._id}`}>
                                <CarouselItem>

                                    <img src={p.image}></img>
                                    <hr></hr>
                                    <CarouselP>
                                        <p>{p.name}</p>
                                        <p>R${p.price}</p>
                                    </CarouselP>

                                </CarouselItem>
                            </StyledLink>
                        ))}
                    </Inner>
                </Carousel>
            </ProductsSlide>
            <CarouselButtons>
                <button onClick={left}>
                    <IoArrowBackCircle></IoArrowBackCircle>
                </button>
                <button onClick={right}>
                    <IoArrowForwardCircle></IoArrowForwardCircle>
                </button>
            </CarouselButtons>
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
