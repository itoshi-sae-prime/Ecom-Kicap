import { MdNavigateNext } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
        <div className="w-[1140px] mx-auto gap-x-[10px] mt-[5px]">
            <div className="flex justify-start items-center border-y border-y-1 my-[10px] py-[10px] mb-[40px] w-full">
                    <Link to="/" className="px-[10px] text-[14px]">Trang chủ </Link>
                    <div className="pt-[5px]"><MdNavigateNext /></div>
                    <a href="#" className="px-[10px] text-[14px]"> Đăng nhập tài khoản</a>
            </div>
        </div>
        <div className="w-[760px] mx-auto gap-x-[10px] mt-[5px]">
            <div>
                <div className="text-[26px] font-[400] leading-[28px] uppercase tracking-[2.4px] text-center">Đăng nhập tài khoản</div>
                <div className="flex justify-center items-center mt-[30px]">
                    <a href="" className="bg-[#0657a3] text-white mx-[7px] w-[140px]">
                        <FaFacebookF className="" style={{
                            display: "inline-block",
                            fontSize: "33px",
                            backgroundColor: "#0657a3 important!",
                            padding: "5px",
                    }}/>
                        <p className="text-[15px] mx-[20px]" style={{display: "inline-block"}}>Facebook</p>
                    </a>
                    <a href="" className="bg-[#d33912] text-white mx-[7px] w-[140px]">
                        <FaGooglePlusG className="" style={{
                            display: "inline-block",
                            fontSize: "35px",
                            backgroundColor: "#0657a3 important!",
                            padding: "5px",

                    }}/>
                        <p className="text-[15px] mx-[20px] text-center" style={{display: "inline-block"}}>Gmail</p>
                    </a>
                </div>
            </div>
             <div className="mt-[20px] mb-[20px]">
                    <p className="my-[10px] text-[20px]">Email <span className="text-red-500">*</span></p>
                    <input className="w-full p-[12px] bg-zinc-200" type="text" placeholder="Nhập địa chỉ Email" />
                    <p className="mb-[10px] mt-[30px] text-[20px]"> Mật Khẩu <span className="text-red-500">*</span> </p>
                    <input className="w-full p-[12px] bg-zinc-200" type="text" placeholder="Nhập địa chỉ mật khẩu" />
                    <div className="grid place-items-center mt-[40px]">
                        <button className="bg-black text-white px-[100px] py-[12px] tracking-wider text-[15px]">ĐĂNG NHẬP</button>
                        <div className="py-[10px] text-zinc-400 text-[15px]"><Link to="/">Quên mật khẩu</Link></div>
                    </div>
                    <div className="grid place-items-center mt-[5px]">
                        <span className="text-[16px] font-semibold">BẠN CHƯA CÓ TÀI KHOẢN. ĐĂNG KÝ <Link className="text-gray-400 hover:text-black" to="/">TẠI ĐÂY.</Link></span>
                    </div>
             </div>
        </div>
        </>
        
    );
}
export default Login;