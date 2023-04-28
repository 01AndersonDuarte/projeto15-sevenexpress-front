import styled from "styled-components"

const MainContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
`

const HeaderIMG = styled.img`
    margin-top: 30px;
    width: 80%;
    height:340px;
    border-radius: 20px;
`
const ContainerLoading = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export {
    MainContainer,
    HeaderIMG,
    ContainerLoading
}