import Header from "../../components/Header";
import { Container, Payment, Products, MainContainer, ProductLi } from "./style";
import { FaTrashAlt } from "react-icons/fa"
import { AiOutlineShoppingCart } from "react-icons/ai"
import {CiBank} from "react-icons/ci"

export default function Carrinho() {
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
                        <ProductLi>
                            <div>
                                <img src="https://http.cat/100"></img>
                                <div>
                                    <p>PlayStation 5</p>
                                    <p>R$ 9000</p>
                                </div>
                            </div>
                            <div>
                                <FaTrashAlt></FaTrashAlt>
                            </div>
                        </ProductLi>
                        <ProductLi>
                            <div>
                                <img src="https://http.cat/100"></img>
                                <div>
                                    <p>NOME</p>
                                    <p>PRECO</p>
                                </div>
                            </div>
                            <div>
                                <FaTrashAlt></FaTrashAlt>
                            </div>
                        </ProductLi>
                        <ProductLi>
                            <div>
                                <img src="https://http.cat/100"></img>
                                <div>
                                    <p>NOME</p>
                                    <p>PRECO</p>
                                </div>
                            </div>
                            <div>
                                <FaTrashAlt></FaTrashAlt>
                            </div>
                        </ProductLi>
                        <ProductLi>
                            <div>
                                <img src="https://http.cat/100"></img>
                                <div>
                                    <p>NOME</p>
                                    <p>PRECO</p>
                                </div>
                            </div>
                            <div>
                                <FaTrashAlt></FaTrashAlt>
                            </div>
                        </ProductLi>
                    </Products>
                    <Payment>
                        <div>
                            <div>
                                <CiBank></CiBank>
                                <h1>RESUMO</h1>
                            </div>
                            <div>
                                <p>Valor dos produtos: <strong>R$ 5000</strong></p>
                                <p>Frete: <strong>R$ 5000</strong></p>
                            </div>
                            <button>IR PARA O PAGAMENTO</button>
                        </div>
                    </Payment>
                </Container>
            </MainContainer>
        </>
    )
}