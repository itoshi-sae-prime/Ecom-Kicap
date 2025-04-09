import ProductList from "./ProductList";
const BPCPage = (props) => {
    return <ProductList apiUrl={`/api/products/banphimco`} />;
};
export default BPCPage;