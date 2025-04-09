import ProductList from "./ProductList";
const ModsPage = (props) => {
    return <ProductList apiUrl={`/api/products/modsphim`} />;
};
export default ModsPage;