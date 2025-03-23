import { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import ReactPaginate from 'react-paginate';
import axios from "axios";
import Card from "../../Components/Card/Card";
export const KCPage = (props) => {
    const [loading, setLoading] = useState(true);
    const [opens, setOpens] = useState({})
    const [picture, setPicture] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [count, setCount] = useState(1);
    useEffect(() => {
        getPicture();
    }, []);
    const getPicture = async () => {
        await axios({
            method: 'GET',
            url: `/keycap_bo`
        }).then((res) => {
            console.log(res.data);
            setPicture(res.data);
            setPageNumber(5);
            setLoading(true);
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false); // Kết thúc loading
        });
    };

    const handlePageClick = (event) => {
        console.log("event.selected", event)
        getPicture(event.selected + 1);
    };

    const handleMuaHang = () => {
        alert(`Mua hàng thành công`);
        setCount(count + 1);
        console.log(count);
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
        <div>
            <div className="w-full h-[350px] grid place-items-center mb-[20px] pt-[7px]">
                <img className="w-full h-[350px] object-cover" src="https://bizweb.dktcdn.net/100/436/596/collections/n40pqa2hhof61.jpg?v=1631205634610" alt="" />
                <div className="w-[1140px] absolute text-white">
                    <h1 className="text-[26px] font-medium leading-[28px] tracking-widest mb-[10px]">KEYCAP BỘ</h1>
                    <p className="">
                        Những bộ keycaps độc đáo nhất giúp chiếc bàn phím của bạn trở lên khác biệt và đầy cảm hứng.</p>
                </div>
            </div>
            <div>
                <div className="w-[1140px] mx-auto flex gap-x-[10px]">
                    <div className="w-[25%] h-auto  rounded-[10px] p-[10px]">
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
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">cherry</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">sa</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">oem</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">asa</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">dyesub</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">doubleshot</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
                                <a href="https://example.com">pbt</a></li>
                            <li className="text-[14px] tracking-[2px] font-normal leading-[30px]">
                                <input className="mr-[7px]" type="checkbox" />
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
                    <div className="w-[75%] h-auto  rounded-[10px] p-[10px] mt-[5px]">
                        <div className="flex justify-start items-center">
                            <div className="pr-[20px]">Xếp theo: </div>
                            <div className="flex pr-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Tên A-Z</div>
                            </div>
                            <div className="flex px-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Tên Z-A</div>
                            </div>
                            <div className="flex px-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Hàng mới</div>
                            </div>
                            <div className="flex px-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Giá thấp tới cao</div>
                            </div>
                            <div className="flex px-[10px]">
                                <input type="radio" />
                                <div className="pl-[5px]">Giá cao xuống thấp</div>
                            </div>
                        </div>
                        <div className="w-full h-full mt-[20px]">
                            {
                                loading ? <div className="text-center">
                                    <div className="flex justify-center items-center h-40">
                                        <div className="animate-spin rounded-full h-20 w-20 border-[1em] border-t-transparent  border-gray-900">
                                        </div>
                                    </div>
                                </div> : <div className="grid grid-cols-3 gap-x-[7px] gap-y-[10px] ">
                                    {
                                        picture.map((item, ind) => (
                                            <Card key={ind} data={item} sizeImg={"w-full h-[270px]"} />
                                        ))
                                    }
                                </div>
                            }

                            {/* <div className="flex justify-center items-center mt-[10px]">
                                <ReactPaginate
                                    nextLabel="next >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={2}
                                    pageCount={pageNumber}
                                    previousLabel="< previous"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    breakLabel="..."
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link"
                                    containerClassName="pagination"
                                    activeClassName="active"
                                    style={{ color: "black", cursor: "pointer" }}
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}