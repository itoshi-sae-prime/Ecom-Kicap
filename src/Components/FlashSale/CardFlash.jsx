import { useState } from "react";

const CardFlash = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="card bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="w-full h-[200px] flex justify-center items-center overflow-hidden rounded-lg">
                <img src={isHovered ? product.hoverImg : product.img} alt={product.title} className="object-cover w-full h-full" />
            </div>
            <div className="mt-3 text-center">
                <h3 className="text-md font-semibold text-gray-800 py-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.title}</p>
                <p className="text-lg font-bold text-red-500 mt-2">{product.price} đ</p>

                {/* Nút Mua ngay */}
                <button className="mt-3 px-4 py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-semibold rounded-lg shadow-md hover:from-orange-500 hover:to-red-600 transition duration-300">
                    Mua ngay
                </button>
            </div>
        </div>
    )
}

export default CardFlash;
