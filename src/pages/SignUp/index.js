import styled from "styled-components"
import { Link } from "react-router-dom"
import { port } from "../../port"
import { useState } from "react"
import axios from "axios"

export default function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function signUp(e){
        e.preventDefault()

        if(password !== confirmPassword) return alert("As senhas nao sao compativeis")

        const url = `${port}/cadastro`
        const body = {name, email, password}

        axios.post(url, body).then(sucess => alert(sucess.data)).catch(fail => alert(fail.response.data))
    }

    return (
        <PageContainer>
                <SignupForm onSubmit={signUp}>
                    <FormInput placeholder="Nome" type="text" required onChange={(e) => setName(e.target.value)}></FormInput>
                    <FormInput placeholder="E-mail" type="email" required onChange={(e) => setEmail(e.target.value)}></FormInput>
                    <FormInput placeholder="Senha" type="password" required onChange={(e) => setPassword(e.target.value)}></FormInput>
                    <FormInput placeholder="Confirme a senha" type="password" required onChange={(e) => setConfirmPassword(e.target.value)}></FormInput>
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

    width: 700px;
    gap: 15px;
    @media screen and (max-width: 700px){
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
    @media screen and (max-width: 700px) {
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
    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    margin-top: 15px;
    width: 60%;
    text-align: center;
    @media screen and (max-width: 700px){
        width: 90%;
    }
`