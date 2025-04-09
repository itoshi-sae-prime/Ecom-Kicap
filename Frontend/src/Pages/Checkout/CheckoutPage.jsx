import React, { useEffect, useState } from 'react';
import { MdLocalShipping } from "react-icons/md";
import { IoStorefront } from "react-icons/io5";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";
// import { removeCard, addCard } from "../../Redux/Slice/cardSlice";
import { useSelector } from 'react-redux';
import axios from 'axios';
const Checkout = () => {
    const [formData, setFormData] = useState({
        email: "",
        fullName: "",
        phone: "",
        address: "",
        city: "",
        district: "",
        note: "",
        cart: []
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [place, setPlace] = useState("shipper");
    const cart = useSelector((state) => state.allCart);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/OrderKicap", formData);
            console.log(formData);
            console.log(response.data);
            alert("Email sent successfully!");
        }
        catch (err) {
            console.log(err);
            alert("Error sending email.");
        }
    }
    useEffect(() => {
        console.log("Cart updated:", cart);
        setFormData((prevData) => ({
            ...prevData,
            cart: cart
        }));
    }, [cart]);
    return (
        <div className="w-full lg:flex sm: container">
            <div className="lg:w-[70%] gap-x-2 px-3 py-4">
                <div className="text-2xl font-semibold text-blue-500 px-4 text-left w-full hidden lg:block">
                    Kicap
                </div>
                <div className="text-3xl font-semibold text-blue-500 px-4 text-center w-full lg:hidden pb-2 block border-b-2">
                    Kicap
                </div>
                <div className="lg:hidden block">
                    <div className="pt-2 pb-3 text-[20px] font-semibold border-b-2">Đơn hàng của bạn
                    </div>

                    <div className="pt-2 pb-3 border-b-2">
                        {
                            cart.cart.length > 0 ? cart.cart.map((item, ind) => (
                                <div className="flex justify-between items-center py-2" key={ind}>
                                    <div className="flex items-center gap-x-2 text-[13px]">
                                        <img src={item.images} alt="" className='h-[50px] w-[50px]' />
                                        <div className="truncate w-[200px]">{item.title}</div>
                                        <div className="">
                                            <div className="">{item.price}</div>
                                            <div className="">SL: <strong>{item.quantity} </strong></div>
                                        </div>
                                    </div>
                                    <div className="text-[15px]">  {parseInt(item.price.replace(/[^0-9]/g, "")) / 1000 * item.quantity}.000đ</div>
                                </div>
                            )) : <div className="py-[0.75rem] px-[1.25rem] bg-blue-800 text-[12px] font-semibold text-white text-center animate-pulse">
                                Giỏ hàng của bạn đang trống!
                            </div>
                        }
                    </div>
                </div>
                <div className="lg:flex max-w-[100%] lg:px-5">
                    <div className="lg:w-[50%] w-[100%] flex">
                        <div className="mb-2 bg-white rounded-lg">
                            <div className="text-sm font-medium text-gray-700 flex justify-between items-center py-3">
                                <span className="text-[18px] font-semibold">Thông tin nhận hàng</span>
                                <Link to="/login" className="text-blue-500 hover:text-blue-700 underline transition duration-200">
                                    Đăng nhập
                                </Link>
                            </div>
                            <div className="space-y-4 ">
                                <input type="email" placeholder="Email (tùy chọn)" value={formData.email} onChange={handleChange} name='email'
                                    className="w-full border py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition duration-200" />

                                <input type="text" placeholder="Họ và tên" value={formData.fullName} onChange={handleChange} name='fullName'
                                    className="w-full border py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition duration-200" />

                                <input type="tel" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} name='phone'
                                    className="w-full border py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition duration-200" />

                                <input type="text" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} name='address'
                                    className="w-full border py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition duration-200" />

                                <input type="text" placeholder="Tỉnh thành" value={formData.city} onChange={handleChange} name='city'
                                    className="w-full border py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition duration-200" />

                                <input type="text" placeholder="Quận/huyện" value={formData.district} onChange={handleChange} name='district'
                                    className="w-full border py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition duration-200" />

                                <textarea placeholder=" Ghi chú (nếu có)" rows="3" value={formData.note} onChange={handleChange} name='note'
                                    className="w-full border py-2 px-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition duration-200"></textarea>
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-[50%] w-[100%] lg:px-5">
                        <div className="text-sm font-medium text-gray-700 flex justify-start py-2">
                            <span className="text-[18px] font-semibold">Vận chuyển</span>
                        </div>
                        <div className="rounded-lg">
                            <div className="">
                                <div className="py-[0.75rem] px-[1.25rem] bg-[#bee5eb] text-[12px] font-semibold">
                                    Vui lòng nhập thông tin giao hàng
                                </div>
                            </div>
                            <div className="">
                                <div className="text-[12px]">
                                    {/* Shipper */}
                                    <label className="flex justify-between items-center cursor-pointer hover:bg-gray-100 py-3 transition duration-200 border-2">
                                        <div className="flex space-x-3">
                                            <input type="radio" name="place" value="shipper" checked={place === 'shipper'} onChange={() => setPlace('shipper')} className="hidden peer" />
                                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                                                <div className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                                            </div>
                                            <span className="text-gray-700">Giao hàng tận nơi</span>
                                        </div>
                                        <div className="mr-[15px] text-[30px]">
                                            <MdLocalShipping />
                                        </div>
                                    </label>

                                    {/* Store */}
                                    <label className="flex justify-between items-center cursor-pointer hover:bg-gray-100 py-3 transition duration-200 border-2">
                                        <div className="flex space-x-3">
                                            <input type="radio" name="place" value="store" checked={place === 'store'} onChange={() => setPlace('store')} className="hidden peer" />
                                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                                                <div className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                                            </div>
                                            <span className="text-gray-700">Nhận tại cửa hàng</span>
                                        </div>
                                        <div className="mr-[15px] text-[30px]">
                                            <IoStorefront />
                                        </div>
                                    </label>

                                </div>
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <div className="text-sm font-medium text-gray-700 flex justify-start py-2">
                                <span className="text-[18px] font-semibold">Thanh toán</span>
                            </div>
                            <div className="border-gray-300 rounded-lg p-1 bg-white">
                                <div className="text-[12px]">
                                    {/* Momo */}
                                    <label className="flex justify-between items-center cursor-pointer hover:bg-gray-100 py-3 transition duration-200 border-2">
                                        <div className="flex space-x-3">
                                            <input type="radio" name="payment" value="momo" className="hidden peer" />
                                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                                                <div className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                                            </div>
                                            <span className="text-gray-700">Thanh toán qua Momo</span>
                                        </div>
                                        <div className="mr-[15px] text-[30px]">
                                            <FaMoneyCheckAlt />
                                        </div>
                                    </label>

                                    {/* VietQR */}
                                    <label className="flex justify-between items-center cursor-pointer hover:bg-gray-100 py-3 transition duration-200 border-2">
                                        <div className="flex space-x-3">
                                            <input type="radio" name="payment" value="vietqr" className="hidden peer" />
                                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                                                <div className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                                            </div>
                                            <span className="text-gray-700">Thanh toán qua VietQR</span>
                                        </div>
                                        <div className="mr-[15px] text-[30px]">
                                            <FcMoneyTransfer />
                                        </div>
                                    </label>

                                    {/* COD */}
                                    <label className="flex justify-between items-center cursor-pointer hover:bg-gray-100 py-3 transition duration-200 border-2">
                                        <div className="flex space-x-3">
                                            <input type="radio" name="payment" value="cod" className="hidden peer" />
                                            <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:border-blue-500 peer-checked:bg-blue-500">
                                                <div className="w-2.5 h-2.5 bg-white rounded-full hidden peer-checked:block"></div>
                                            </div>
                                            <span className="text-gray-700">Thanh toán khi giao hàng (COD)</span>
                                        </div>
                                        <div className="mr-[15px] text-[30px]">
                                            <FaMoneyCheckDollar />
                                        </div>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="hidden justify-end items-center pt-3 border-t-2 border-gray-300 space-x-4 text-[15px] lg:flex">
                    <Link to="/chinh-sach-doi-tra" className=" text-blue-500 hover:underline transition duration-200">Chính sách hoàn trả</Link>
                    <Link to="/chinh-sach-bao-hanh" className=" text-blue-500 hover:underline transition duration-200">Chính sách bảo mật</Link>
                    <Link to="/gioi-thieu" className=" text-blue-500 hover:underline transition duration-200">Điều khoản sử dụng</Link>
                </div>
            </div>
            <div className="lg:w-[30%] bg-slate-100 lg:min-h-[100vh] px-4 py-2">

                <div className="lg:block hidden">
                    <div className="pt-2 pb-3 text-[20px] font-semibold border-b-2">Đơn hàng của bạn
                    </div>

                    <div className="pt-2 pb-3 border-b-2">
                        {
                            cart.cart.length > 0 ? cart.cart.map((item, ind) => (
                                <div className="flex justify-between items-center py-2" key={ind}>
                                    <div className="flex items-center gap-x-2 text-[13px]">
                                        <img src={item.images} alt="" className='h-[50px] w-[50px]' />
                                        <div className="truncate w-[200px]">{item.title}</div>
                                        <div className="">
                                            <div className="">{item.price}</div>
                                            <div className="">SL: <strong>{item.quantity} </strong></div>
                                        </div>
                                    </div>
                                    <div className="text-[15px]">  {parseInt(item.price.replace(/[^0-9]/g, "")) / 1000 * item.quantity}.000đ</div>
                                </div>
                            )) : <div className="py-[0.75rem] px-[1.25rem] bg-blue-800 text-[12px] font-semibold text-white text-center animate-pulse">
                                Giỏ hàng của bạn đang trống!
                            </div>
                        }
                    </div>
                </div>

                <div className="pt-2 pb-2 border-b-2 text-[14px]">
                    <div className="flex justify-between items-center py-2 gap-x-3">
                        <input type="discount" placeholder="Nhập mã giảm giá" name='discount'
                            className="w-full border py-3 px-2 rounded-md focus:ring-2 focus:ring-blue-300 outline-none transition duration-200" />
                        <button className='py-2 bg-blue-300 hover:bg-blue-200 w-[40%] text-white font-bold rounded-lg'>Áp dụng</button>
                    </div>
                </div>

                <div className="pt-2 pb-2 border-b-2 text-[14px]">
                    <div className="flex justify-between items-center py-2">
                        <div className="">Tạm tính</div>
                        <div className="text-[15px]">{cart.total.toLocaleString()}.000đ</div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <div className="">Phí vận chuyển</div>
                        {
                            place === 'shipper' ? <div className="text-[15px]">30.000đ</div> : <div className="text-[15px]">Miễn phí</div>
                        }
                    </div>
                </div>

                <div className="pt-2 pb-2 border-b-2 text-[14px]">
                    <div className="flex justify-between items-center py-2">
                        <div className="text-[18px]">Tổng cộng</div>
                        <div className="text-[20px] text-blue-500 font-bold">   {
                            place === 'shipper' ? (cart.total + 30).toLocaleString() : cart.total.toLocaleString()
                        }.000đ</div>
                    </div>
                </div>

                <div className="pt-2 pb-2 border-b-2 text-[14px]">
                    <div className="flex justify-between items-center py-2">
                        <Link to="/cart" className="text-blue-500 hover:underline transition duration-200">Quay lại giỏ hàng</Link>
                        <button className='py-3 bg-blue-600 hover:bg-blue-800 w-[40%] text-white font-bold rounded-lg' onClick={handleSubmit}>Đặt hàng</button>
                    </div>
                </div>
                <div className="flex justify-center items-center py-3 border-t-2 border-gray-300 space-x-4 text-[12px] lg:text-[15px] lg:hidden">
                    <Link to="/chinh-sach-doi-tra" className=" text-blue-500 hover:underline transition duration-200">Chính sách hoàn trả</Link>
                    <Link to="/chinh-sach-bao-hanh" className=" text-blue-500 hover:underline transition duration-200">Chính sách bảo mật</Link>
                    <Link to="/gioi-thieu" className=" text-blue-500 hover:underline transition duration-200">Điều khoản sử dụng</Link>
                </div>
            </div>
        </div >
    );
};
export default Checkout;