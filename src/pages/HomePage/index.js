import Header from "../../components/Header";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import header1 from "../../assets/header1.jpg"
import header3 from "../../assets/header.jpg"
import header4 from "../../assets/header9.jpg"
import header5 from "../../assets/header11.jpg"
import React from "react"

export default function HomePage() {
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
