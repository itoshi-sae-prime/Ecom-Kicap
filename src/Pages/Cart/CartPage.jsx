
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
        <div className="container mx-auto p-">
            <h2 className="text-2xl font-bold mb-4 bg-white mt-[20px]">🛒 Giỏ Hàng</h2>

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
                <div className="bg-white xl:p-4 p-2 shadow-2xl rounded-lg border-2">
                    <div className="xl:flex block max-w-[100%]">
                        <div className="xl:w-[75%] w-full">
                            <div className="w-full">
                                {cart.cart.map((item, ind) => (
                                    <div key={ind} className="flex justify-between items-center border-b py-4">
                                        {/* Hình ảnh sản phẩm */}
                                        <div className="xl:p-3 flex items-center w-[25%]">
                                            <img
                                                src={item.images}
                                                alt={item.name}
                                                className="w-30 h-20 sm:w-50 sm:h-24 md:w-32 md:h-32 xl:w-40 xl:h-40 object-cover rounded"
                                            />
                                        </div>

                                        <div className="xl:flex justify-between items-center w-[50%]">
                                            {/* Tên sản phẩm */}
                                            <div className="pl-4  truncate ">
                                                <div className="text-sm sm:text-base font-semibold">{item.title}</div>
                                            </div>

                                            {/* Giá tiền */}
                                            <div className="p-3 w-[25%] text-green-500 font-bold text-sm sm:text-lg">
                                                {item.price.toLocaleString()}
                                            </div>
                                        </div>

                                        {/* Nút tăng giảm số lượng */}
                                        <div className="w-[25%] flex items-center justify-center p-2 text-sm sm:text-md">
                                            <button
                                                className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded transition hover:bg-gray-200"
                                                onClick={() => handleSubstract(item)}
                                            >
                                                −
                                            </button>
                                            <div className="w-12 h-8 flex justify-center items-center text-md font-semibold text-gray-700 bg-white border border-gray-300 mx-2">
                                                {item.quantity}
                                            </div>
                                            <button
                                                className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded transition hover:bg-gray-200"
                                                onClick={() => handlePlus(item)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="xl:w-[25%] w-full">
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
