import Header from "../../components/Header";
import { MainContainer, HeaderIMG } from "./style";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import header2 from "../../assets/Beige and White Neutral eCommerce Spring Sale Banner  (2).jpg"
import header4 from "../../assets/header4.png"
import header5 from "../../assets/header5.png"
import header8 from "../../assets/header8.jpg"
import React from "react"

export default function HomePage() {
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
            <Header></Header>
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
