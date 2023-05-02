import { FormContainer, FormImage, PageContainer, FormButton, FormInput, PageForm, StyledLink } from "../../components/FormComponents"
import axios from "axios"
import { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { port } from "../../port"
import logo from "../../assets/Orange_Simple_Online_Shopping_Logo_1.png"
import { LoadingThreeDots } from "../../components/Loading/Loading"

export default function SingIn() {
    const [loginData, setLoginData] = useState({ email: "", password: "" })

    const { auth, login } = useAuth()
    const navigate = useNavigate()
    const [request, setRequest] = useState(false);

    useEffect(() => {
        if (auth) {
            navigate("/")
        }
    }, [])

    function singIn(e) {
        setRequest(true);
        e.preventDefault()

        const url = `${port}/login`

        axios.post(url, loginData)
            .then(sucess => {
                setRequest(false);
                console.log(sucess.data);
                login(sucess.data);
                navigate("/");
            })
            .catch(fail => {
                setRequest(false);
                alert(fail.response.data)
            })
    }


    function insertLoginData(event) {
        event.target.setCustomValidity('');
        const value = event.target.value;
        const attribute = event.target.name;

        setLoginData({ ...loginData, [attribute]: value });
    }

    return (
        <PageContainer>
            <FormContainer>
                <FormImage src={logo}></FormImage>
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
                    <FormButton type="submit">
                        {request ? <LoadingThreeDots/> : "Entrar"}
                    </FormButton>
                </PageForm>
                <StyledLink to={"/cadastro"}>Nao possui uma conta? Faca o cadastro aqui!</StyledLink>
            </FormContainer>
        </PageContainer>
    )
}
