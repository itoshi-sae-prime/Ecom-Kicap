import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { Outlet } from "react-router-dom";
const LayoutPD = () => {
    const [opens, setOpens] = useState({})
    const [selectedOption, setSelectedOption] = useState("");

    const handleFilterChange = (value) => {
        setSelectedOption(value);
        console.log("Đã chọn:", value); // Kiểm tra giá trị lọc
    };
    const handleToggle = (key) => {
        setOpens(prev => {
            return {
                ...prev,
                [key]: !prev[key]
            }
        })
    }

    return (
        <div className="container mx-auto">
            <div className="w-full h-[350px] grid place-items-center mb-[20px] pt-[7px]">
                <img className="w-full h-[350px] object-cover" src="https://bizweb.dktcdn.net/100/436/596/collections/n40pqa2hhof61.jpg?v=1631205634610" alt="" />
                <div className="w-[100%] absolute text-white container">
                    <h1 className="text-[26px] font-medium leading-[28px] tracking-widest mb-[10px]">KEYCAP BỘ</h1>
                    <p className="">
                        Những bộ keycaps độc đáo nhất giúp chiếc bàn phím của bạn trở lên khác biệt và đầy cảm hứng.</p>
                </div>
            </div>
            <div className="container">
                <div className="w-[100%] mx-auto flex gap-x-[10px]">
                    <div className="lg:w-[25%] hidden lg:block h-auto rounded-[10px] p-[10px]">
                        <h1 className="text-[20px] tracking-[2px] font-medium leading-[30px] uppercase mb-[15px] mt-[5px]">Danh Mục</h1>
                        <ul className="border-b-2 pb-[25px]">
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Trang chủ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <div className="flex justify-between items-center">
                                    <a href="http://localhost:3000/">Keycap bộ</a>
                                    <div>
                                        <span className="cursor-pointer" onClick={() => handleToggle("keycap")}>{!opens?.keycap ? <IoMdAdd /> : <TfiLayoutLineSolid />}</span>
                                    </div>
                                </div>
                            </li>
                            {opens?.keycap && <div className="ml-[10px]">
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap Cherry</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap MOA</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap xuyên led</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap SA</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap XDA</a></li>
                                <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap OEM</a></li>
                            </div>}
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Mods Phím</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Pre-order</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Chuột</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px] relative">
                                <div className="flex justify-between items-center">
                                    <a href="http://localhost:3000/">Sản phẩm</a>
                                    <button>
                                        <span className="cursor-pointer" onClick={() => handleToggle("product")}>{!opens?.product ? <IoMdAdd /> : <TfiLayoutLineSolid />}</span>
                                    </button>
                                </div>
                                {
                                    opens?.product && <div className="ml-[10px]">
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap Cherry</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap MOA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap xuyên led</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap SA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap XDA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap OEM</a></li>
                                    </div>
                                }
                            </li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Blog</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <div className="flex justify-between items-center">
                                    <a href="http://localhost:3000/">Về Kicap</a>
                                    <div>
                                        <span className="cursor-pointer" onClick={() => handleToggle("aboutkicap")}>{!opens?.aboutkicap ? <IoMdAdd /> : <TfiLayoutLineSolid />}</span>
                                    </div>
                                </div>
                                {
                                    opens?.aboutkicap && <div className="ml-[10px]">
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap Cherry</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap MOA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap xuyên led</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap SA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap XDA</a></li>
                                        <li className="text-[14px] tracking-[2px] font-normal leading-[30px]"><a href="https://example.com">Keycap OEM</a></li>
                                    </div>
                                }
                            </li>
                        </ul>
                        <h1 className="text-[20px] tracking-[2px] font-medium leading-[30px] uppercase mb-[5px] mt-[10px] pt-[25px]">Tìm theo</h1>
                        <h1 className="text-[18px] tracking-[2px] font-normal leading-[30px]">Trạng thái tồn kho</h1>
                        <ul className="pt-[10px]">
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Wu Liqi Keycap</a>
                            </li>
                        </ul>
                        <h1 className="text-[18px] tracking-[2px] font-normal leading-[30px] mt-[15px] mb-[15px]">Tags</h1>
                        <ul>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" name="tags" value="cherry" />
                                <a href="https://example.com">cherry</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" name="tags" value="sa" />
                                <a href="https://example.com">sa</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" name="tags" value="oem" />
                                <a href="https://example.com">oem</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" name="tags" value="asa" />
                                <a href="https://example.com">asa</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" name="tags" value="dyesub" />
                                <a href="https://example.com">dyesub</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" name="tags" value="doubleshot" />
                                <a href="https://example.com">doubleshot</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" name="tags" value="pbt" />
                                <a href="https://example.com">pbt</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" name="tags" value="abs" />
                                <a href="https://example.com">abs</a></li>
                        </ul>
                        <h1 className="text-[18px] tracking-[2px] font-normal leading-[30px] mt-[15px] mb-[15px]">Thương hiệu</h1>
                        <ul>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Titan Nation</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">TUT</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Wu Liqi Keycap</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Wukds</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Aifei</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Aifei SA</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Cat Keys</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">CMK</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">DRY MARTINI</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">DAGK</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">FL - Esports</a></li>
                        </ul>
                        <h1 className="text-[18px] tracking-[2px] font-normal leading-[30px] mt-[15px] mb-[15px]">Giá sản phẩm</h1>
                        <ul>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Giá dưới 100.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Giá 100.000đ - 200.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Giá 200.000đ - 300.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Giá 300.000đ - 500.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Giá 500.000đ - 1.000.000đ</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Giá trên 1.000.000đ</a></li>
                        </ul>
                        <h1 className="text-[18px] tracking-[2px] font-normal leading-[30px] mt-[15px] mb-[15px]">Loại</h1>
                        <ul>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">Kicap bộ</a></li>
                        </ul>
                    </div>
                    <div className="xl:w-[75%] w-[100%] h-auto rounded-[10px] p-[10px] mt-[5px]">
                        <div className="flex flex-wrap justify-start items-center text-sm sm:text-base xl:text-[15px]">
                            <div className="sm:block ml-[5px] font-semibold">Xếp theo:</div>
                            <div className="flex flex-wrap gap-2 sm:gap-3 pt-[10px]">
                                {[
                                    { value: "az", label: "Tên A-Z" },
                                    { value: "za", label: "Tên Z-A" },
                                    { value: "new", label: "Hàng mới" },
                                    { value: "low-high", label: "Giá thấp tới cao" },
                                    { value: "high-low", label: "Giá cao xuống thấp" },
                                ].map((option) => (
                                    <label key={option.value} className="flex items-center gap-1 px-[5px] sm:px-[10px] cursor-pointer">
                                        <input
                                            type="radio"
                                            name="sort"
                                            value={option.value}
                                            checked={selectedOption === option.value}
                                            onChange={(e) => handleFilterChange(e.target.value)}
                                            className="cursor-pointer"
                                        />
                                        <div className="text-xs sm:text-sm">{option.label}</div>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="sm:container w-full h-full mt-[20px]">
                            <Outlet context={{ selectedOption }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default LayoutPD;