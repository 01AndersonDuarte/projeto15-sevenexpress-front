
import { port } from "../../port"
import { useState } from "react"
import axios from "axios"
import { FormContainer, FormImage, PageContainer, FormButton, FormInput, PageForm, StyledLink } from "../../components/FormComponents"
import logo from "../../assets/Orange_Simple_Online_Shopping_Logo_1.png"
import { useNavigate } from "react-router-dom";
import { LoadingThreeDots } from "../../components/Loading/Loading"

export default function SignUp() {
    const [registrationData, setRegistrationData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const navigate = useNavigate();
    const [request, setRequest] = useState(false);

    function signUp(e) {
        setRequest(true);
        e.preventDefault()

        if (registrationData.password !== registrationData.confirmPassword){
            setRequest(false);
            return alert("As senhas nao sao compativeis");
        }

        const url = `${port}/cadastro`
        const { confirmPassword, ...register } = registrationData;
        axios.post(url, register)
            .then(sucess => {
                setRequest(false);
                alert(sucess.data);
                navigate("/login");
            }).catch(fail => {
                setRequest(false);
                alert(fail.response.data)
            })
    }

    function insertRegistrationData(event) {
        event.target.setCustomValidity('');
        const value = event.target.value;
        const attribute = event.target.name;

        setRegistrationData({ ...registrationData, [attribute]: value });
    }

    return (
        <PageContainer>
            <FormContainer>
                <FormImage src={logo}></FormImage>
                <PageForm onSubmit={signUp}>
                    <FormInput
                        placeholder="Nome"
                        name="name"
                        value={registrationData.name}
                        type="text"
                        required
                        onChange={insertRegistrationData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <FormInput
                        placeholder="E-mail"
                        type="email"
                        name="email"
                        value={registrationData.email}
                        required
                        onChange={insertRegistrationData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, insira um email válido.')}
                    />
                    <FormInput
                        placeholder="Senha"
                        type="password"
                        name="password"
                        value={registrationData.password}
                        required
                        onChange={insertRegistrationData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <FormInput
                        placeholder="Confirme a senha"
                        type="password"
                        name="confirmPassword"
                        value={registrationData.confirmPassword}
                        required
                        onChange={insertRegistrationData}
                        onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo.')}
                    />
                    <FormButton type="submit">
                        {request ? <LoadingThreeDots/> : "Cadastro"}
                    </FormButton>
                </PageForm>
                <StyledLink to={"/login"}>Ja tem cadastro? Entao siga para o seu login aqui!</StyledLink>
            </FormContainer>
        </PageContainer>
    )
}
