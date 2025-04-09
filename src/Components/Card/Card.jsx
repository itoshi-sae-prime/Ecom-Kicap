import React, { useState } from "react";
import { addCard } from "../../Redux/Slice/cardSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Card = ({ data, sizeImg }) => {
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();
    const handleAddToCart = (e) => {

        dispatch(addCard(e));
        const alertDiv = document.createElement("div");
        alertDiv.innerText = "✅ Đã thêm vào giỏ hàng!";
        alertDiv.style.position = "fixed";
        alertDiv.style.top = "90px";
        alertDiv.style.right = "20px";
        alertDiv.style.padding = "10px 20px";
        alertDiv.style.background = "green";
        alertDiv.style.color = "white";
        alertDiv.style.borderRadius = "5px";
        alertDiv.style.zIndex = "1000";
        document.body.appendChild(alertDiv);
        // Xóa thông báo sau 2 giây
        setTimeout(() => {
            alertDiv.remove();
        }, 2000);
    };
    return (
        <>
            <div className="p-2 rounded-lg transition duration-300 ease-in-out"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to={`/product/${data.id}`} className="block">
                    <div className={`${sizeImg} flex justify-center datas-center overflow-hidden rounded-xl `}>
                        <img
                            src={isHovered ? data.images[4] : data.images[0]}
                            alt={data.title || "Sản phẩm"}
                            className="object-cover w-full h-full transition-all  duration-500 ease-in-out transform hover:scale-105"
                        />
                    </div>
                </Link>
                <div className="mt-3 text-center relative">
                    {/* Thông tin sản phẩm - xuất hiện trước */}
                    <div
                        className={`w-full p-1 text-center transition-all duration-500 ease-in-out z-0 ${isHovered ? "opacity-0 translate-y-0" : "opacity-100 translate-y-100"}`}
                    >
                        <h4 className="text-[12px] font-semibold text-gray-400 uppercase ">{data.name || "..."}</h4>
                        <h3 className="text-sm text-gray-500 truncate font-bold uppercase">{data.title || "Mô tả sản phẩm"}</h3>
                        <div className="text-[12px] font-bold text-black font-mono -tracking-wider">
                            <span>{data.price}</span>
                            <strong></strong>
                        </div>
                    </div>

                    <div className="">
                        <button onClick={() => handleAddToCart(data)}
                            className={`absolute left-0 top-[-15px] w-full py-3 border-2 text-sm font-semibold rounded-lg transition-all duration-500 z-10 hover:text-white hover:bg-black ${isHovered ? "opacity-100 translate-y-5" : "opacity-0 translate-y-0"
                                }`}
                        >
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Card;
