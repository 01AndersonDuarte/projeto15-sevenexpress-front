import Header from "../../components/Header";
import { MainContainer, HeaderIMG } from "./style";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import header2 from "../../assets/Beige and White Neutral eCommerce Spring Sale Banner  (2).jpg"
import header8 from "../../assets/header8.jpg"

export default function HomePage() {
    const slideImages = [
        {
          url: header8,
          caption: 'Slide 1'
        },
        {
          url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
          caption: 'Slide 2'
        },
        {
          url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
          caption: 'Slide 3'
        },
      ];
    return (
        <>
            <Header></Header>
            <MainContainer>
            <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span>{slideImage.caption}</span>
                        </div>
                        </div>
                    ))} 
            </Slide>
                    {/* <HeaderIMG src={header8}></HeaderIMG> */}
            </MainContainer>
        </>
    )
}

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }