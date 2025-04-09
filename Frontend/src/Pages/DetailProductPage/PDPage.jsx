import axios from "axios";
import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { PiShieldCheckFill } from "react-icons/pi";
import { BsFillAwardFill } from "react-icons/bs";
import TinTuc from "../../Components/Post/TinTuc";
import { useParams } from "react-router-dom";
const PDPage = () => {
    const { id } = useParams();
    const [keycap, setKeycap] = useState([]);
    const [soluong, setSoluong] = useState(0);
    const [mota, setMota] = useState(false);
    const [nhanxet, setNhanxet] = useState(false);
    useEffect(() => {
        const getKeycap = async () => {
            try {
                await axios({
                    method: 'GET',
                    url: `api/product/:id`,
                }).then((res) => {
                    setKeycap(res.data);
                }).catch((err) => {
                    console.log(err)
                })
            } catch (error) {
                console.log(error);
            }
        }
        getKeycap();
    }, [])
    const ChoiceStart = (e) => {
        // e.target.style.text = "yellow";
    }
    const Subtract = () => {
        if (soluong > 0) {
            setSoluong(soluong => soluong - 1)
        }
        return 0;
    }
    const Plus = () => {
        setSoluong(soluong => soluong + 1)
    }
    const MotaButton = () => {
        if (mota === false) {
            setMota(true);
            setNhanxet(false);
        }
    }
    const NhanXetButton = () => {
        if (nhanxet === false) {
            setNhanxet(true);
            setMota(false);
        }
    }

    return (
        <div className="w-[1140px] mx-auto gap-x-[10px] mt-[5px]">
            <div className="flex justify-start items-center border-y border-y-1 my-[10px] py-[10px] w-full">
                <a href="#" className="px-[10px] text-[14px]">Trang chủ </a>
                <div className="pt-[5px]"><MdNavigateNext /></div>
                <a href="#" className="px-[10px] text-[14px]">Keycap Cherry</a>
                <div className="pt-[5px]"><MdNavigateNext /></div>
                <a href="#" className="px-[10px] text-[14px]">Bộ keycap</a>
            </div>
            <div className="grid grid-cols-2 gap-x-5 mt-[30px]">
                <div className="bg-red-500">
                    {
                        keycap.slice(0, 1).map((item) => (
                            <div className="w-[full] h-full">
                                <img className="w-full h-full object-cover" src={item.download_url} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div className="">
                    {
                        keycap.slice(0, 1).map((item) => (
                            <div className="w-[full] h-auto">
                                <div className="text-[26px] leading-[29px] font-semibold uppercase mb-[5px] tracking-widest">{item.author}</div>
                                <div className="text-[12px] uppercase tracking-[1.2px] font-[600]">SKU: <strong>PNV960</strong></div>
                                <div className="text-[12px] uppercase tracking-[1.2px] flex font-[600]">Thương hiệu: <p className="text-red-500 px-[5px] font-semibold">CMK</p></div>
                                <div className="flex mb-[15px]">
                                    <CiStar className="mt-[3px]" style={{ fontSize: "20px" }} onClick={ChoiceStart} />
                                    <CiStar className="mt-[3px]" style={{ fontSize: "20px" }} />
                                    <CiStar className="mt-[3px]" style={{ fontSize: "20px" }} />
                                    <CiStar className="mt-[3px]" style={{ fontSize: "20px" }} />
                                    <CiStar className="mt-[3px]" style={{ fontSize: "20px" }} />
                                    <div className="text-green-400 ml-[10px]">Viết đánh giá của bạn</div>
                                </div>
                                <div className="">
                                    <div className="text-[24px] font-semibold inline-block">850.000đ </div>
                                    <p className="text-[14px] pl-[15px] inline-block">Giá thị trường:</p>
                                    <p className="inline-block px-[5px]" style={{
                                        textDecoration: "line-through",
                                        color: "#999999"
                                    }}>1.000.000đ</p>
                                </div>
                                <div className="text-[14px] inline-block font-[600]">
                                    Tiết kiệm:
                                    <p className="inline-block px-[5px] text-gray-300">150.000đ</p>
                                </div>
                                <div className="text-[14px] font-[600]">
                                    Tình trạng:
                                    <p className="inline-block px-[5px] text-red-500 font-[500]">Còn hàng </p>

                                </div>
                                <div className="flex">
                                    <div className="inline-block mt-[20px] font-[600]">
                                        Số lượng:
                                        <div className="inline-block border-1 bg-slate-400 ml-[20px]">
                                            <button onClick={Subtract} className="px-[15px] py-[5px] bg-zinc-300 inline-block">-</button>
                                            <div className="px-[15px] inline-block text-white w-[50px] text-center">{soluong}</div>
                                            <button onClick={Plus} className="px-[15px] py-[5px] bg-zinc-300">+</button>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-[75%] bg-black text-white mt-[15px] py-[12px] font-[500]">
                                    MUA NGAY VỚI GIÁ <strong>850.000đ</strong>
                                    <br></br>
                                    <div className="text-[13px]">Giao hàng toàn quốc</div>
                                </button>
                                <button className="flex border-2 mt-[15px]">
                                    <div className="my-auto p-[20px] text-[17px]">
                                        <FaRegHeart className="" />
                                    </div>
                                    <div className="border-[1px] p-[15px] font-semibold">Thêm vào yêu thích</div>
                                </button>
                                <div className="mt-[5px] font-semibold text-[15px]">Gọi đặt mua: <span className="ml-[5px] text-blue-500 font-semibold">0369161095</span>  (miễn phí 8:30 - 21:30).</div>
                                <div className="mt-[10px]">
                                    <div className="py-[7px] uppercase my-auto">
                                        <MdOutlineLocalShipping className="text-[45px] inline-block mr-[20px]" />
                                        <span className="font-[500]">FREESHIP</span> với đơn hàng <span className="font-[500]">từ 800.000đ</span>
                                    </div>

                                    <div className="py-[7px] uppercase ">
                                        <PiShieldCheckFill className="text-[45px] inline-block mr-[20px]" />
                                        <a className="text-blue-500" href="#">Chính sách bảo hành</a>
                                    </div>

                                    <div className="py-[7px] uppercase ">
                                        <BsFillAwardFill className="text-[45px] inline-block mr-[20px]" />
                                        Cam kết <span className="font-[500]">100% chính hãng</span> </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mt-[30px] relative">
                <div className="flex pt-[8px]">
                    <button onClick={MotaButton} className="py-[12px] mr-[22px] font-semibold uppercase text-[18px] border-b-2 hover:border-b-2 hover:border-neutral-950 relative z-10">Mô tả</button>
                    <button onClick={NhanXetButton} className="py-[12px] mx-[22px] font-semibold uppercase text-[18px] border-b-2 hover:border-b-2 hover:border-neutral-950 relative z-10">Nhận xét sản phẩm</button>
                </div>
                {/* Border của thẻ cha */}
                <div className="absolute inset-x-0 bottom-0 border-b-2"></div>
            </div>
            {mota &&
                <div className="mt-[20px]">
                    <p className="py-[5px]">Bộ keycap được sản xuất lại dựa trên thiết kế cả INKY x DOMIKEY</p>
                    <div>
                        <table className="w-[100%] border-2 border-black">
                            <tr className="border-2 font-semibold text-[15px] py-[10px] border-black">
                                <td className="py-[10px] w-[50%]">Thông số kỹ thuật</td>
                                <td className="py-[10px] w-[50%]">Giá trị</td>
                            </tr>
                            <tr>
                                <td>Profile</td>
                                <td>Cherry</td>
                            </tr>
                            <tr>
                                <td>Chất liệu</td>
                                <td>PBT dyesub</td>
                            </tr>
                            <tr>
                                <td>Số lượng phím</td>
                                <td>152</td>
                            </tr>
                            <tr>
                                <td>Độ dày</td>
                                <td>1.6mm</td>
                            </tr>
                            <tr>
                                <td>Tương thích</td>
                                <td>Hầu hết các bàn phím cơ</td>
                            </tr>
                        </table>
                    </div>
                    <div className="py-[5px]">
                        <strong >Chỉ là keycap, không bao gồm bàn phím.</strong>
                    </div>
                </div>
            }
            {nhanxet && <div className="mt-[20px]">
                <div className="w-full h-auto bg-green-200">
                    <div class="py-[35px] text-center boder-2 border-green-100">
                        <div>Hiện tại sản phẩm chưa có đánh giá nào. bạn hãy trở thành người đầu tiên đánh giá cho sản phẩm này</div>
                        <button className="bg-green-500 text-white px-[20px] py-[7px] ml-[10px] mt-[20px] rounded-lg">Gửi đánh giá của bạn </button>
                    </div>
                </div>
            </div>}
            <div className="py-[30px]">
                <div className="uppercase my-[30px] text-center text-[30px] tracking-wider">Sản phẩm <strong>liên quan</strong></div>
                <TinTuc />
            </div>

        </div>
    );
}
export default PDPage; 