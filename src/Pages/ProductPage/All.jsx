import ProductList from "./ProductList";
const AllPage = (props) => {
    return <ProductList apiUrl={`/api/products/sanpham/all`} />;
};
export default AllPage;