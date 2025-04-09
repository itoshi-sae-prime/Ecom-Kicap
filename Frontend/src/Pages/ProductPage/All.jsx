import ProductList from "./ProductList";
const AllPage = (props) => {
    return <ProductList apiUrl={`products/sanpham/all`} />;
};
export default AllPage;