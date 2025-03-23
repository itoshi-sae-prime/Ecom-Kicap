
import { useSelector, useDispatch } from "react-redux";
import { removeCard, addCard } from "../../Redux/Slice/cardSlice";
import { Link } from "react-router-dom";

const CartPage = () => {
    const cart = useSelector((state) => state.allCart);
    const dispatch = useDispatch();
    console.log(typeof (cart.cart));
    const handlePlus = (e) => {
        dispatch(addCard(e));
    };
    const handleSubstract = (e) => {
        dispatch(removeCard(e));
    };

    return (
        <div className="container mx-auto p-5">
            <h2 className="text-2xl font-bold mb-4">🛒 Giỏ Hàng</h2>

            {cart.cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-100 rounded-lg shadow-md">
                    <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="Giỏ hàng trống" className="w-24 h-24 mb-4 opacity-75" />
                    <p className="text-lg text-gray-600 font-semibold">Giỏ hàng của bạn đang trống!</p>
                    <Link
                        to="/"
                        className="mt-3 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition"
                    >
                        Tiếp tục mua sắm
                    </Link>
                </div>
            ) : (
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <div className="flex max-w-[100%]">
                        <div className="w-[75%]">
                            <div className="w-[100%]">
                                {
                                    cart.cart.map((item, ind) => (
                                        <div key={ind} className="flex items-center">
                                            <div className="p-3 flex items-center">
                                                <img src={item.images} alt={item.name} className="w-40 h-40 object-cover rounded mr-3" />

                                            </div>
                                            <div className="pl-[40px] w-[40%]">
                                                <div className=" truncate">{item.title}</div>
                                            </div>
                                            <div className="p-3 text-green-500 font-bold">{item.price.toLocaleString()}</div>
                                            <div className="w-[30%] flex items-center justify-center p-2 text-[12px]">
                                                <button className="w-8 h-8 flex items-center justify-center border-1 transition" onClick={() => handleSubstract(item)}>
                                                    −
                                                </button>
                                                <div className="w-12 h-8 flex justify-center items-center text-md font-semibold text-gray-700 bg-white border border-gray-300" setLocalQuantity={item.quantity}>
                                                    {item.quantity}
                                                </div>
                                                <button className="w-8 h-8 flex items-center justify-center border-1 transition" onClick={() => handlePlus(item)}>
                                                    +
                                                </button>
                                            </div>

                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="w-[25%]">
                            <div className="max-w-[100%] p-3">
                                <div className="flex justify-between items-center py-2">
                                    <span className="font-semibold">
                                        Tạm tính:
                                    </span>
                                    <div className="font-semibold">
                                        {cart.total.toLocaleString()}.000đ
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="font-semibold">
                                        Thành tiền:
                                    </span>
                                    <div className="text-xl text-gray-300 font-bold">
                                        {cart.total.toLocaleString()}.000đ
                                    </div>
                                </div>
                                <button className="text-sm py-3 text-center bg-black w-full my-2 text-white font-bold uppercase rounded-lg border-2">
                                    <Link to="/checkout">Thanh toán ngay</Link>
                                </button>
                                <button className="text-sm py-3 text-center bg-white w-full my-2 font-bold uppercase rounded-lg border-2">
                                    Tiếp tục mua hàng
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
