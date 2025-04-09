
import { Link } from "react-router-dom";
import React from "react";
import { Data1 } from '../../data/Navbar'
const Navbar = () => {
    console.log(Data1);
    return (
        <div className="">
            <ul className="flex justify-center items-center tracking-[2px] mt-[20px]">
                <li className="px-[22px] py-[7px] mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400"><Link to="/#">Trang Chủ</Link></li>
                <li className="item-navbar py-[7px] lg:px-[15px] xl:px-[22px]  xl:mx-[15px] text-[14px] uppercase font-semibold relative hover:text-gray-400">
                    <Link to="/keycap_bo">Keycap bộ</Link>
                    <ul className="navbar absolute bg-white w-[220px] left-[-10px] top-9 z-20  px-[20px] py-[15px] rounded-lg shadow-2xl transition-all duration-300 ease-in-out hover:shadow-2xl ">
                        <div className="grid grid-cols-1 gap-y-5">
                            <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out ">
                                <Link to='/blog'>Keycap Cherry</Link>
                            </li>
                            <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                <Link to='/blog'>Keycap MOA</Link>
                            </li>
                            <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                <Link to='/blog'>Keycap xuyên led</Link>
                            </li>
                            <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                <Link to='/blog'>Keycap SA</Link>
                            </li>
                            <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                <Link to='/blog'>Keycap XDA</Link>
                            </li>
                            <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                <Link to='/blog'>Keycap OEM</Link>
                            </li>
                        </div>
                    </ul>
                </li>
                <li className="px-[22px] py-[7px] mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400"><Link to="/banphimco">Bàn Phím Cơ</Link></li>
                <li className="px-[22px] py-[7px] mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400"><Link to="/modsphim">MODS PHÍM</Link></li>
                <li className="px-[22px] py-[7px] mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400"><Link to="/chuot">CHUỘT</Link></li>
                <li className="item-navbar py-[7px] px-[22px] mx-[10px] text-[14px] uppercase font-semibold relative  z-[999px]">
                    <Link to="/sanpham/all">SẢN PHẨM</Link>
                    <div className="w-full">
                        <ul className="navbar w-[1100px] max-h-[600px] absolute left-[-740px] mt-[5px] px-[20px] py-[10px] none z-20 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl bg-white">
                            <div className="grid grid-cols-3 gap-x-3 hover:text-gray-800">
                                <div className="px-[20px]">
                                    <div className="font-semibold pb-2 border-b-2">KEYCAP BỘ</div>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Silent Plateau</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Japan Cloud</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Keycap Yogurt</a></li>
                                </div>
                                <div className="px-[20px]">
                                    <div className="font-semibold pb-2 border-b-2">KEYCAP LẺ</div>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">PIKACHU ALU</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">CARD VGA</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">CỜ ĐẢNG BÚA LIỀM</a></li>
                                </div>
                                <div className="px-[20px]">
                                    <div className="font-semibold pb-2 border-b-2">CHUỘT</div>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Delux M800 Pro</a></li>

                                </div>
                                <div className="px-[20px] mt-[30px] ">
                                    <div className="font-semibold pb-2 border-b-2">BÀN PHÍM CƠ</div>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Rainy75</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Infi75</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Xinmeng A66</a></li>
                                </div>
                                <div className="px-[20px] mt-[30px]">
                                    <div className="font-semibold pb-2 border-b-2">SWITCH</div>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">HMX Ziwei</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Outemu silent peach</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Hyacinth V2U</a></li>
                                </div>
                                <div className="px-[20px] mt-[30px]">
                                    <div className="font-semibold pb-2 border-b-2">PHỤ KIỆN</div>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Túi đựng bàn phím</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Sản phẩm1</a></li>
                                    <li className="text-[12px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out py-1"><a href="#">Chổi quét phím</a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </li>
                <li to="/blog" className="px-[22px] py-[7px] mx-[10px] text-[14px] uppercase font-semibold hover:text-gray-400">
                    <Link to="/blog">Blog</Link>
                </li>
                <li className="item-navbar px-[22px] py-[7px] mx-[10px] text-[14px] uppercase font-semibold relative hover:text-gray-400">
                    <a href="/gioi-thieu">Về Kicap</a>
                    <ul className="navbar absolute w-[220px] left-[-10px] shadow-lg z-20 mt-[5px]">
                        <div className="grid grid-cols-1 gap-2">
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black">
                                <Link to="/gioi-thieu">Giới thiệu</Link>
                            </li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black">
                                <Link to="/lien-he" href="#">Liên hệ</Link>
                            </li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black">
                                <Link to="/chinh-sach-bao-hanh" href="#">Chính sách bảo hành</Link>
                            </li>
                            <li className="text-[12px] p-[15px] uppercase font-semibold  hover:text-black">
                                <Link to="/chinh-sach-doi-tra" href="#">Chính sách đổi trả</Link>
                            </li>
                        </div>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
export default Navbar;