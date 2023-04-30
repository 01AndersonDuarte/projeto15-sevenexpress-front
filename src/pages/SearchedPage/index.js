import NotFound from "../../components/NotFound/NotFound";
import WindowProducts from "../../components/SearchComponents/WindowProducts";
import { useLocation } from "react-router-dom";

export default function SearchedPage(){
    const location = useLocation();
    const filteredProducts = location.state;
    
    if(filteredProducts.length===0) return <NotFound/>;

    return(
        <WindowProducts products={filteredProducts}/>
    );
}