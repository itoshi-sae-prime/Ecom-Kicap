import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5"; // Icon đóng menu
import { IoMdArrowDropdown } from "react-icons/io";
import { Data1 } from '../../data/Navbar'
import "../Navbar/navbar.css";
const NavbarMB = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    console.log(Data1);
    return (
        <nav>
            <div className="lg:hidden">
                <button onClick={() => setIsOpen(true)} className="text-[30px]">
                    <IoMdMenu />
                </button>
                <div
                    className={`fixed top-0 left-0 w-[65%] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >

                    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg relative">

                        <h1 className="text-[30px] font-bold tracking-wide">KICAP</h1>


                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-2xl text-gray-600 hover:text-black transition-all"
                        >
                            <IoClose />
                        </button>
                    </div>

                    <ul className="text-black text-lg space-y-6 mt-2 mx-2">
                        <li>

                            <Link to="/" onClick={() => setIsOpen(false)} className="border-b-2  block py-2 px-4 tracking-wider hover:tracking-widest duration-300 rounded-lg">
                                Trang Chủ
                            </Link>
                        </li>
                        <li>
                            <div className="flex justify-between items-center border-b-2">
                                <Link to="/products" onClick={() => setIsOpen(false)} className="  block py-2 px-4 tracking-wider hover:tracking-widest duration-300 rounded-lg">
                                    KeyCap Bộ
                                </Link>
                                <button className="mr-4" onClick={() => setIsDropdown(!isDropdown)}>
                                    <IoMdArrowDropdown size={20} />
                                </button>
                            </div>
                            {isDropdown && (
                                <ul className="duration-300 ease-in-out translate-x-5 animate_dropdown">
                                    <li className="text-[12px] py-2 px-[4px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                        <a href="https://example.com">Keycap Cherry</a>
                                    </li>
                                    <li className="text-[12px] py-2 px-[4px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                        <a href="https://example.com">Keycap MOA</a>
                                    </li>
                                    <li className="text-[12px] py-2 px-[4px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                        <a href="https://example.com">Keycap xuyên led</a>
                                    </li>
                                    <li className="text-[12px] py-2 px-[4px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                        <a href="https://example.com">Keycap SA</a>
                                    </li>
                                    <li className="text-[12px] py-2 px-[4px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                        <a href="https://example.com">Keycap XDA</a>
                                    </li>
                                    <li className="text-[12px] py-2 px-[4px] uppercase font-semibold text-gray-700 hover:text-black hover:font-bold transition duration-200 ease-in-out">
                                        <a href="https://example.com">Keycap OEM</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/about" onClick={() => setIsOpen(false)} className="border-b-2  block py-2 px-4 tracking-wider hover:tracking-widest duration-300 rounded-lg">
                                Mobs Phím
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="border-b-2  block py-2 px-4 tracking-wider hover:tracking-widest duration-300 rounded-lg">
                                Pre-Order
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="border-b-2  block py-2 px-4 tracking-wider hover:tracking-widest duration-300 rounded-lg">
                                Chuột
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="border-b-2  block py-2 px-4 tracking-wider hover:tracking-widest duration-300 rounded-lg">
                                Sản Phẩm
                            </Link>
                            <div className="hidden group-hover:block absolute bg-white shadow-lg rounded-lg p-4 w-[250px]">
                                {/* Danh mục Keycap Bộ */}
                                <div className="border-b pb-2 mb-2">
                                    <p className="text-[13px] uppercase text-gray-700 font-bold text-center">Keycap Bộ</p>
                                    <ul className="grid gap-2 text-center mt-2">
                                        <li><a href="https://example.com" className="text-[12px] text-gray-700 hover:text-black font-semibold transition">Silent Plateau</a></li>
                                        <li><a href="https://example.com" className="text-[12px] text-gray-700 hover:text-black font-semibold transition">Japan Cloud</a></li>
                                        <li><a href="https://example.com" className="text-[12px] text-gray-700 hover:text-black font-semibold transition">Keycap Yogurt</a></li>
                                    </ul>
                                </div>

                                {/* Danh mục Keycap Lẻ */}
                                <div className="border-b pb-2 mb-2">
                                    <p className="text-[13px] uppercase text-gray-700 font-bold text-center">Keycap Lẻ</p>
                                    <ul className="grid gap-2 text-center mt-2">
                                        <li><a href="https://example.com" className="text-[12px] text-gray-700 hover:text-black font-semibold transition">Silent Plateau</a></li>
                                        <li><a href="https://example.com" className="text-[12px] text-gray-700 hover:text-black font-semibold transition">Japan Cloud</a></li>
                                        <li><a href="https://example.com" className="text-[12px] text-gray-700 hover:text-black font-semibold transition">Keycap Yogurt</a></li>
                                    </ul>
                                </div>

                                {/* Danh mục Chuột */}
                                <div>
                                    <p className="text-[13px] uppercase text-gray-700 font-bold text-center">Chuột</p>
                                    <ul className="grid gap-2 text-center mt-2">
                                        <li><a href="https://example.com" className="text-[12px] text-gray-700 hover:text-black font-semibold transition">Silent Plateau</a></li>
                                        <li><a href="https://example.com" className="text-[12px] text-gray-700 hover:text-black font-semibold transition">Japan Cloud</a></li>
                                        <li><a href="https://example.com" className="text-[12px] text-gray-700 hover:text-black font-semibold transition">Keycap Yogurt</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="border-b-2  block py-2 px-4 tracking-wider hover:tracking-widest duration-300 rounded-lg">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="border-b-2  block py-2 px-4 tracking-wider hover:tracking-widest duration-300 rounded-lg">
                                Về Kicap
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Background overlay khi mở menu */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}
            </div>


        </nav>
    );
};

export default NavbarMB;
