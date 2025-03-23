import { useLocation, useRoutes } from "react-router-dom";
import Home from "./Index/Home";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { KCPage } from "./KeycapPage/KCPage";
import PDPage from "./ProductPage/PDPage";
import Blog from "./Blog/Blog";
import GTPage from "./GioiThieu/GTPage";
import LHPage from "./LienHe/LHPage";
import CSBHPage from "./ChinhSachBaoHanh/CSBHPage";
import CSDTPage from "./ChinhSachDoiTra/CSDTPage";
import Login from "./Login/Login";
import CartPage from "./Cart/CartPage";
import Checkout from "./Checkout/CheckoutPage";

export const View = () => {
    const location = useLocation(); // Lấy đường dẫn hiện tại
    const element = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/keycap-bo', element: <KCPage /> },
        { path: '/keycap-bo/keycap-pbt', element: <PDPage /> },
        { path: '/blog', element: <Blog /> },
        { path: '/gioi-thieu', element: <GTPage /> },
        { path: '/lien-he', element: <LHPage /> },
        { path: '/chinh-sach-bao-hanh', element: <CSBHPage /> },
        { path: '/chinh-sach-doi-tra', element: <CSDTPage /> },
        { path: '/login', element: <Login /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/checkout', element: <Checkout /> }, // Checkout riêng biệt
    ]);

    return (
        <>
            {/* Nếu không phải trang checkout thì hiển thị Header & Footer */}
            {location.pathname !== "/checkout" && <Header />}
            {element}
            {location.pathname !== "/checkout" && <Footer />}
        </>
    );
}