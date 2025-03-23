import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { IoMdMenu } from "react-icons/io";
import NavbarMB from "../Navbar/Navbar_Mb";
import { useSelector } from "react-redux";
const Header = () => {
    const { cart } = useSelector((state) => state.allCart);
    console.log(useSelector((state) => state.allCart));
    return (
        <div className="container">
            <div className='flex justify-between items-center pt-[20px] pb-[5px] text-[15px] px-3 w-full'>
                <div className='tracking-[2px] hidden lg:block'>
                    <span className="font-medium tracking-[0.25em]">HOTLINE TƯ VẤN:</span>
                    <a className='font-bold hover:text-gray-400 ml-[5px]' href=""> 0369161095</a>
                </div>
                <div className="lg:hidden">
                    <NavbarMB />
                </div>
                <div className='text-[33px] font-bold tracking-[15px] pl-[25px]'>KICAP</div>
                <div className='flex justify-around items-center gap-x-3'>
                    <button className="hover:text-gray-400 hidden lg:block">
                        <button className='font-medium px-[15px] tracking-[0.25em]'><Link className="hover:text-gray-400" to="/login">TÀI KHOẢN</Link></button>
                    </button>
                    <div className='flex'>
                        <button className="hidden lg:block">
                            <div className='font-medium tracking-[2px] hover:text-gray-500} tracking-[0.25em]'><Link className="hover:text-gray-400" to="/cart">GIỎ HÀNG</Link></div>
                        </button>
                        <button>
                            <div className="relative">
                                <i class="fa fa-shopping-cart pt-[0px] mx-[5px]" style={{
                                    fontSize: "18px",
                                }} aria-hidden="true"></i>
                                <div className="absolute bg-black top-[-18px] right-[-10px] px-[10px] py-[3px] text-white rounded-[20px] text-[12px] font-bold">{cart ? cart.length : 0}</div>
                            </div>
                        </button>
                    </div>

                    <button className="hover:text-gray-400">
                        <i class="fa fa-search" style={{
                            fontSize: "15px",
                        }} aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className="hidden lg:block">
                <Navbar />
            </div>
        </div>
    )
}
export default Header;