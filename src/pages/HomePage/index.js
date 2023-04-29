import Header from "../../components/Header";
import { ContainerLoading, Item, ProductsSlide, Carousel, CarouselItem, Inner } from "./style";
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
import { motion } from "framer-motion"

export default function HomePage() {
    const [products, setProducst] = useState();
    const carousel = useRef()
    const [width, setWidth] = useState(0)

    console.log(width)
    console.log(carousel.current?.scrollWidth)
    console.log(carousel.current?.offsetWidth)

    useEffect(() => {

        const url = `${port}/produtos`;

        axios.get(url)
            .then(sucess => {
                setProducst(sucess.data);
                setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
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
        <div style={{ position: "relative"}}>
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
                <Carousel ref={carousel} as={motion.div} whileTap={{cursor: "grabbing"}}>
                    <Inner as={motion.div} drag="x" dragConstraints={{right: 0, left: -width}} /* initial={{x: 300}} animate={{x: 0}} transition={{duration: 0.6}} */>
                        {products.map(p => (
                            <CarouselItem as={motion.div} key={p.image}>
                                <img src={p.image}></img>
                            </CarouselItem>
                        ))}
                    </Inner>
                </Carousel>
            </ProductsSlide>
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
