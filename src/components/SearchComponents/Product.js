import { ProductCard, InfoProduct, StyledLink } from "../../pages/SectionsPage/style";

export default function Product({ product }) {
    const { name, image, price, description, amount, _id } = product;
    return (
        <StyledLink to={`/produto/${_id}`}>
            <ProductCard>
                <img src={image}></img>
                <InfoProduct>
                    <div>
                        <h1>{name}</h1>
                        <h2>{description}</h2>
                    </div>
                    <div>
                        <h3>R$ {parseFloat(price).toFixed(2)}</h3>
                        <h4>Disponível em estoque: {amount}</h4>
                    </div>
                </InfoProduct>
            </ProductCard>
        </StyledLink>
    );
}