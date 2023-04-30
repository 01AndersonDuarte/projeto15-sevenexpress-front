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

export default function Carrinho() {
    const { id } = useParams()
    const { auth } = useAuth()
    const [products, setProducts] = useState()

    useEffect(() => {
        const url = `${port}/carrinho/${id}`
        axios.get(url)
            .then(sucess => setProducts(sucess.data))
            .catch(fail => console.log(fail.response.data))

    }, [])

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
                        {products.map(e => {
                            return (
                                <ProductLi>
                                    <div>
                                        <img src={e.image}></img>
                                        <div>
                                            <p>{e.name}</p>
                                            <p>R$ {e.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <FaTrashAlt></FaTrashAlt>
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
                                <p>Total: <strong>R${products.reduce((prev, e ) => prev + e.price, 0)}</strong></p>
                                <p>Frete: <strong>R$0</strong></p>
                            </div>
                            <button>IR PARA O PAGAMENTO</button>
                        </div>
                    </Payment>
                </Container>
            </MainContainer>
        </>
    )
}