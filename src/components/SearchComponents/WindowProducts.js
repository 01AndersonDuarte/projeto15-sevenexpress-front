import { ContainerSection, WindowSection } from "../../pages/SectionsPage/style";
import Header from "../Header";
import Product from "./Product";

export default function WindowProducts({products}) {
    return (
        <ContainerSection>
            <Header />
            <WindowSection>
                {products.map((p) => <Product key={p._id} product={p} />)}
            </WindowSection>
        </ContainerSection>
    );
}