import styled from "styled-components"
import { Link } from "react-router-dom"

export default function SignUp() {

    return (
        <PageContainer>
                <SignupForm>
                    <FormInput placeholder="Nome"></FormInput>
                    <FormInput placeholder="E-mail"></FormInput>
                    <FormInput placeholder="Senha"></FormInput>
                    <FormInput placeholder="Confirme a senha"></FormInput>
                    <FormButton type="submit">Cadastro</FormButton>
                </SignupForm>
                <StyledLink>Ja tem cadastro? Entao siga para o seu login aqui!</StyledLink>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

`

const SignupForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50%;
    gap: 15px;
    @media screen and (max-width: 900px){
        width: 90%;
    }
`

const FormInput = styled.input`
    width: 60%;
    height: 45px;
    border-radius: 5px;

    box-sizing: border-box;
    padding: 10px;
    font-size: 18px;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

const FormButton = styled.button`
    width: 60%;
    height: 45px;
    border-radius: 5px;
    border: none;
    font-weight: 700;

    background-color: orange;
    color: #FFFFFF;
    font-size: 18px;
    @media screen and (max-width: 900px) {
        width: 100%;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    margin-top: 15px;
    width: 60%;
    text-align: center;
    @media screen and (max-width: 900px){
        width: 90%;
    }
`