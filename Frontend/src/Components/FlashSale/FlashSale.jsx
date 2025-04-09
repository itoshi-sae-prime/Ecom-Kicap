import ListFlash from "./ListFlash";
import { IoIosFlash } from "react-icons/io";
const FlashSale = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-orange-400 to-red-600 mx-[20px]">
                <div className="flex justify-center items-center tracking-[2px] mt-[40px] p-2">
                    <div className="w-full">
                        <div className="lg:flex lg:justify-between items-center">
                            <div className="flex  font-bold text-[20px] my-2">
                                <div className="p-1 rounded-xl bg-orange-700 shadow-lg mr-2 text-white"><IoIosFlash /></div>
                                FLASHSALE
                            </div>
                            <p className="text-white md:block lg:block">Giảm tới 20% giá trị sản phẩm</p>
                            <p className="text-[12px] font-medium md:block lg:block">Chương trình đã kết thúc!</p>
                        </div>
                        <div className="">
                            <ListFlash />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default FlashSale;
