import ProductList from "./ProductList";
const ChuotPage = (props) => {
    return <ProductList apiUrl={`/api/products/chuot`} />;
};
export default ChuotPage;