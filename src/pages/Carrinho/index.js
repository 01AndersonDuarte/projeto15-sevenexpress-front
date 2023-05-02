import Header from "../../components/Header";
import { Container, Payment, Products, MainContainer, ProductLi } from "./style";
import { FaTrashAlt } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { CiBank } from "react-icons/ci"
import { port } from "../../port";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom";
import { LoadingThreeDots } from "../../components/Loading/Loading";
import { FormButton } from "../../components/FormComponents";

export default function Carrinho() {
    const { id } = useParams()
    const { auth, login } = useAuth()
    const [products, setProducts] = useState()
    const [request, setRequest] = useState(false);
    const config = { headers: { Authorization: `Bearer ${auth.token}` } };

    useEffect(() => {
        const url = `${port}/carrinho/${id}`
        axios.get(url, config)
            .then(sucess => setProducts(sucess.data))
            .catch(fail => console.log(fail.response.data))

    }, [products])

    function deleteProduct(e, idProduct, idUser) {
        e.preventDefault()

        const body = { idProduct, idUser }
        const url = `${port}/carrinho/${idUser}`

        axios.post(url, body, config).then(sucess => {
            alert(sucess.data)
        }).catch(fail => console.log(fail.response.data))


        const user = JSON.parse(localStorage.getItem("auth"));
        const newCart = user.cart.filter(i => i.idProduct !== idProduct);
        login({ ...user, cart: newCart }); //Enviando produtos adicionados para o localStorage
    }

    function finishPurchase(e) {
        e.preventDefault()

        setRequest(true)
        const url = `${port}/carrinho/${id}`
        const body = products.map(element => element.idProduct)

        axios.put(url, body, config).then(sucess => {
            alert(sucess.data)
            setRequest(false)
            const user = JSON.parse(localStorage.getItem("auth"));
            login({ ...user, cart: [] });
        }).catch(fail => {
            console.log(fail.response.data)
            setRequest(false)
        })
    }

    if (!auth || auth.id !== id || !products) {
        return (
            <>
                <Header></Header>
            </>
        )
    }

    if (products.length === 0) {
        return (
            <>
                <Header></Header>
                <MainContainer>
                    <Container>
                        <Products>
                            <div>
                                <h1>Carrinho Vazio</h1>
                            </div>
                        </Products>
                    </Container>
                </MainContainer>
            </>
        )
    }

    return (
        <>
            <Header></Header>
            <MainContainer>
                <Container>
                    <Products>
                        <div>
                            <AiOutlineShoppingCart></AiOutlineShoppingCart>
                            <h1>Produtos do seu carrinho</h1>
                        </div>
                        {products.map(element => {
                            return (
                                <ProductLi key={element._id}>
                                    <div>
                                        <img src={element.image}></img>
                                        <div>
                                            <p>{element.name}</p>
                                            <p>R$ {element.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <FaTrashAlt onClick={(e) => deleteProduct(e, element.idProduct, element.idUser)}></FaTrashAlt>
                                    </div>
                                </ProductLi>
                            )
                        })}
                    </Products>
                    <Payment>
                        <div>
                            <div>
                                <CiBank></CiBank>
                                <h1>RESUMO</h1>
                            </div>
                            <div>
                                <p>Total: <strong>R${products.reduce((prev, e) => prev + e.price, 0)}</strong></p>
                                <p>Frete: <strong>R$0</strong></p>
                            </div>
                            <span>
                                <FormButton onClick={finishPurchase} disabled={request}>
                                    {request ? <LoadingThreeDots></LoadingThreeDots> : "FINALIZAR COMPRA"}
                                </FormButton>
                            </span>
                        </div>
                    </Payment>
                </Container>
            </MainContainer>
        </>
    )
}