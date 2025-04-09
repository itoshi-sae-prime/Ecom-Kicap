import ProductList from "./ProductList";
import { useSearchParams } from "react-router-dom";
const KCPage = () => {
    const [searchParams] = useSearchParams();
    const sortOption = searchParams.get("sort") || "az";
    const apiUrl = `/api/products/keycap_bo?sort=${sortOption}`;
    return <ProductList apiUrl={apiUrl} />;
};
export default KCPage;