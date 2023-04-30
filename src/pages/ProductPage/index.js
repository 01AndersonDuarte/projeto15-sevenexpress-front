import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { port } from "../../port";
import Header from "../../components/Header";
import { LoadingRings, LoadingThreeDots } from "../../components/Loading/Loading";
import { FormButton } from "../../components/FormComponents";

import axios from "axios";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState();

    const navigate = useNavigate();
    const [request, setRequest] = useState(null);


    const { auth, login } = useAuth()
    //console.log(auth, "AUTORIZACAO")

    useEffect(() => {
        const url = `${port}/produtos/${id}`;
        axios.get(url).then(sucess => {
            setProduct(sucess.data);
        }).catch(fail => alert(fail.response.data));
    }, [id]);
    //console.log(product)
    if (!product) {
        return (
            <ContainerProduct>
                <LoadingRings />
            </ContainerProduct>
        );
    }

    function postCarrinho(e) {
        setRequest(true);
        e.preventDefault()

        if (!auth) return navigate("/login");

        const url = `${port}/carrinho`
        const body = { idProduct: product._id, idUser: auth.id, name: product.name, price: product.price, image: product.image }

        axios.post(url, body)
            .then(sucess => {
                setRequest(false);
            })
            .catch(fail => fail.response.data)

        const user = JSON.parse(localStorage.getItem("auth"));
        login({ ...user, cart: [...user.cart, body] }); //Enviando produtos adicionados para o localStorage
    }

    return (
        <ContainerProduct>
            <Header />
            <WindowProduct request={request}>
                <ImageProduct src={product.image}></ImageProduct>
                <InfoProduct request={request}>
                    <div>
                        <h1>{product.name}</h1>
                        <h2>{product.description}</h2>
                    </div>
                    <div>
                        <h3>R$ {parseFloat(product.price).toFixed(2)}</h3>
                        <h4>Disponível em estoque: {product.amount}</h4>
                    </div>
                    <span>
                        <FormButton onClick={postCarrinho}  disabled={request}>
                            {request ? <LoadingThreeDots/> : "Adicionar ao carrinho" }
                        </FormButton>
                    </span>
                    
                </InfoProduct>
            </WindowProduct>
        </ContainerProduct>
    );
}

const ContainerProduct = styled.div`
    /* height: 100vh; */
    padding: 15% 10% 5% 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WindowProduct = styled.div`
    width: 100%;
    font-family: 'Roboto';
    border: ${({request})=> request===false ? "solid 1px #39ff39" : "solid 0.5px rgba(0, 0, 0, 0.09)"};
    border-radius: 10px;
    padding: 5%;
    display: flex;
    justify-content: space-between;
    /* background-color: red; */

`;
const ImageProduct = styled.img`
    max-width: 450px;
    max-height: 450px;
    width: auto;
    height: auto;
    border-radius: 5px;
    object-fit: cover;
`;

const InfoProduct = styled.div`
    width: 40%;
    max-height: 100%;
    padding: 1%;
    border: ${({request})=> request===false ? "solid 1px #39ff39" : "solid 0.5px rgba(0, 0, 0, 0.09)"};
    border-radius: 5px;
    color: #2c2c2c;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h1{
        font-weight: 400;
        font-size: 28px;
        line-height: 40px;
    }
    h2{
        font-weight: 100;
        font-size: 18px;
        line-height: 40px;
    }
    h3{
        font-weight: 300;
        font-size: 25px;
        line-height: 40px;
    }
    h4{
        font-weight: 300;
        font-size: 15px;
        line-height: 40px;
    }
    span{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;