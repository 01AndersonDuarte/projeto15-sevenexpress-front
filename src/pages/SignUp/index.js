
import { port } from "../../port"
import { useState } from "react"
import axios from "axios"
import { PageContainer, FormButton, FormInput, PageForm, StyledLink} from "../../components/FormComponents"


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
                <PageForm onSubmit={signUp}>
                    <FormInput placeholder="Nome" type="text" required onChange={(e) => setName(e.target.value)}></FormInput>
                    <FormInput placeholder="E-mail" type="email" required onChange={(e) => setEmail(e.target.value)}></FormInput>
                    <FormInput placeholder="Senha" type="password" required onChange={(e) => setPassword(e.target.value)}></FormInput>
                    <FormInput placeholder="Confirme a senha" type="password" required onChange={(e) => setConfirmPassword(e.target.value)}></FormInput>
                    <FormButton type="submit">Cadastro</FormButton>
                </PageForm>
                <StyledLink>Ja tem cadastro? Entao siga para o seu login aqui!</StyledLink>
        </PageContainer>
    )
}
