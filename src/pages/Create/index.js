import { Container, ArrowBack, ContainerForm } from "./style";
import { FormButton, FormInput } from "../../components/FormComponents";
import { useState } from "react";
import { LoadingThreeDots } from "../../components/Loading/Loading"
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { StyledLink } from "../HomePage/style";

export default function CreateItem() {
    const [data, setData] = useState({ name: "", price: 0, image: "", description: "", amount: "", category: "" });
    const [request, setRequest] = useState(false);
    const { auth } = useAuth();
    const config = { headers: { Authorization: `Bearer ${auth.token}` } };

    function sendItem(e) {
        setRequest(true);
        e.preventDefault();

        const url = process.env.REACT_APP_POST_PRODUCT;

        axios.post(url, data, config)
            .then(sucess => {
                setRequest(false);
                setData({ name: "", price: 0, image: "", description: "", amount: "", category: "" });
                alert(sucess.data);
            })
            .catch(fail => {
                setRequest(false);
                alert(fail.response.data)
            })

    }

    function insertData(event) {
        event.target.setCustomValidity('');
        const value = event.target.value;
        const attribute = event.target.name;

        setData({ ...data, [attribute]: value });
    }
    return (
        <Container>
            <StyledLink to={"/"}><ArrowBack /> </StyledLink>
            <ContainerForm onSubmit={sendItem}>
                <FormInput
                    placeholder="Nome do produto"
                    type="text"
                    name="name"
                    required
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo')}
                />
                <FormInput
                    placeholder="Preço do produto"
                    type="number"
                    name="price"
                    required
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo')}
                />
                <FormInput
                    placeholder="Imagem do produto"
                    type="text"
                    name="image"
                    required
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo')}
                />
                <FormInput
                    placeholder="Descrição do produto"
                    type="text"
                    name="description"
                    required
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo')}
                />
                <FormInput
                    placeholder="Quantidade em estoque do produto"
                    type="number"
                    name="amount"
                    required
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo')}
                />
                <FormInput
                    placeholder="Categoria do produto"
                    type="text"
                    name="category"
                    required
                    onChange={insertData}
                    onInvalid={(event) => event.target.setCustomValidity('Por favor, preencha este campo')}
                />
                <FormButton type="submit">
                    {request ? <LoadingThreeDots /> : "Cadastrar item"}
                </FormButton>
            </ContainerForm>
        </Container>
    );
}


