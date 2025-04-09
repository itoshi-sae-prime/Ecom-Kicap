import { useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <footer className="w-full bg-gray-100 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-6 pb-4 mx-auto max-w-7xl px-5">
                {/* Logo và thông tin công ty */}
                <div className="text-center p-2 bg-slate-400 text-white rounded-md">
                    <h2 className="text-3xl uppercase tracking-widest font-bold mb-6 text-center">KICAP</h2>
                    <ul className="text-sm space-y-3">
                        <li className="font-medium uppercase">HỘ KINH DOANH KICAP</li>
                        <li className="font-medium uppercase ">
                            Chứng nhận ĐKKD số:<br /> 01A8035150 do phòng TC-KH UBND quận Ba Đình cấp ngày 07/11/2023
                        </li>
                        <li className="font-medium uppercase">38, ngõ 575 Kim Mã, Ba Đình, Hà Nội</li>
                        <li className="font-medium uppercase">0369161095</li>
                        <li className="font-medium uppercase">kicap.vn@gmail.com</li>
                    </ul>
                </div>

                {/* Chính sách khách hàng */}
                <div className="p-2">
                    <div
                        className="text-sm uppercase font-semibold cursor-pointer mb-3">
                        <div className="pb-2">
                            CHÍNH SÁCH KHÁCH HÀNG
                        </div>
                        <ul className="space-y-2 transition-all duration-300 ease-in-out">
                            <li className="text-sm uppercase font-normal py-2">Chính sách bảo mật</li>
                            <li className="text-sm uppercase font-normal pb-2">Chính sách đổi trả</li>
                            <li className="text-sm uppercase font-normal pb-2">Chính sách vận chuyển</li>
                            <li className="text-sm uppercase font-normal pb-2">Chính sách thanh toán</li>
                            <li className="text-sm uppercase font-normal pb-2">Chính sách bảo hành</li>
                            <li className="text-sm uppercase font-normal pb-2">Chính sách kiểm toán</li>
                        </ul>
                    </div>

                </div>

                {/* Đăng ký nhận tin */}
                <div className="p-2">
                    <h3 className="text-sm uppercase font-semibold mb-3">ĐĂNG KÝ NHẬN TIN</h3>
                    <p className="text-sm font-medium mb-3">
                        Mua bàn phím cơ, keycap bộ, keycap lẻ, keycap resin. Bảo hành chính hãng.
                        Ưu đãi khi mua online. Dịch vụ mods phím cơ uy tín, chất lượng.
                    </p>
                    <input
                        className="h-10 w-full px-3 outline-none bg-gray-300 border-2 border-gray-400 rounded-md text-sm mb-3"
                        placeholder="Email của bạn"
                        type="text"
                    />
                    <button className="w-full py-2 bg-black text-white text-sm uppercase font-semibold rounded-md">
                        Đăng Ký
                    </button>
                </div>

                {/* Liên kết mạng xã hội */}
                <div className="p-2 lg:block flex justify-between items-center">
                    <h3 className="text-sm uppercase font-semibold lg:mb-3">LIÊN KẾT MẠNG XÃ HỘI</h3>
                    <div className="flex space-x-4">
                        <FaFacebook className="w-8 h-8 text-blue-700 cursor-pointer hover:opacity-80" />
                        <FaYoutube className="w-8 h-8 text-red-500 cursor-pointer hover:opacity-80" />
                        <FaInstagram className="w-8 h-8 text-purple-600 cursor-pointer hover:opacity-80" />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center font-semibold py-4 border-t-2 bg-gray-200">
                © 2021 Kicap | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
