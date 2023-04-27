import { PageContainer, FormButton, FormInput, PageForm, StyledLink } from "../../components/FormComponents"
import axios from "axios"
import { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { port } from "../../port"

export default function SingIn() {
    const [loginData, setLoginData] = useState({ email: "", password: "" })

    const { auth, login } = useAuth()
    const navigate = useNavigate()

    console.log(auth)

    useEffect(() => {
        if (auth) {
            navigate("/home")
        }
    }, [])

    function singIn(e) {
        e.preventDefault()

        const url = `${port}/`
        axios.post(url, loginData)
            .then(sucess => {
                login(sucess.data)
                navigate("/home")
            })
            .catch(fail => alert(fail.response.data))
    }

    function insertLoginData(event) {
        event.target.setCustomValidity('');
        const value = event.target.value;
        const attribute = event.target.name;

        setLoginData({ ...loginData, [attribute]: value });
    }
    // Função para ajudar na formatação do objeto que vai pra requisição de login
    
    return (
        <PageContainer>
            <PageForm onSubmit={singIn}>
                <FormInput
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    required
                    onChange={insertLoginData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um e-mail válido.')}
                />
                <FormInput
                    placeholder="Senha"
                    type="password"
                    name="password"
                    required
                    onChange={insertLoginData}
                    onInvalid={(event) => event.target.setCustomValidity('Insira sua senha.')}
                />
                <FormButton type="submit">Login</FormButton>
            </PageForm>
            <StyledLink to={"/cadastro"}>Nao possui uma conta? Faca o cadastro aqui!</StyledLink>
        </PageContainer>
    )
}