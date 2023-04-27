import { PageContainer, FormButton, FormInput, PageForm, StyledLink} from "../../components/FormComponents"
import axios from "axios"
import { useState, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { port } from "../../port"

export default function SingIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {auth, login} = useAuth()
    const navigate = useNavigate()

    console.log(auth)

    useEffect(() => {
        if(auth){
            navigate("/home")
        }
    }, [])

    function singIn(e){
        e.preventDefault()

        const url = `${port}/`
        const body = {email, password}
        axios.post(url, body)
            .then(sucess => {
                login(sucess.data)
                navigate("/home")
            })
            .catch(fail => alert(fail.response.data))
    }

    return(
        <PageContainer>
            <PageForm onSubmit={singIn}>
                <FormInput placeholder="E-Mail" type="email" required onChange={(e) => setEmail(e.target.value)}></FormInput>
                <FormInput placeholder="Senha" type="password" required onChange={(e) => setPassword(e.target.value)}></FormInput>
                <FormButton type="submit">Login</FormButton>
            </PageForm>
            <StyledLink to={"/cadastro"}>Nao possui uma conta? Faca o cadastro aqui!</StyledLink>
        </PageContainer>
    )
}