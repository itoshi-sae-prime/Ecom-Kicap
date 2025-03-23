import { useEffect, useState } from "react";
import axios from "axios";
import TinTuc from "../../Components/Post/TinTuc";
// import ReactPaginate from 'react-paginate';
const Blog = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    const [totalUser, setTotaluser] = useState(0);
    const [listUser, setListUser] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        getBlog();
    }, []);
    const getBlog = async (page) => {
        await axios({
            method: 'GET',
            url: `/post`,
        }).then((res) => {
            console.log(res)
            setBlog(res.data)
            setTotaluser(6)
            setListUser(res.data)
            // setPageNumber(8)
        }).catch((err) => {
            console.log(err)
        });
    };

    const handlePageClick = (event) => {
        console.log("event.selected", event)
        getBlog(event.selected + 1);
    }
    return (
        <div className="container mx-auto my-[20px]">
            <div className="py-[20px] text-center">
                <h1 className="text-[35px] font-semibold leading-[28px] tracking-widest mb-[10px] py-[20px] ">TIN TỨC</h1>
                <p className="pb-[20px] font-bold">
                    Nơi chúng tôi chia sẻ những bài viết thú vị dựa trên những kinh nghiệm sau nhiều năm sử dụng và làm việc...</p>
            </div>
            <TinTuc />
            {/* <div className="w-full h-[350px] grid place-items-center mb-[20px] pt-[7px]">
                <img className="relative w-full h-[350px] object-cover z-10" src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/evo-blog-banner.jpg?1704470384648" alt="" />
                <div className="w-[1140px] absolute text-white text-center">
                    <h1 className="text-[26px] font-semibold leading-[28px] tracking-widest mb-[10px] text-white">TIN TỨC</h1>
                    <p className="">
                        Nơi chúng tôi chia sẻ những bài viết thú vị dựa trên những kinh nghiệm sau nhiều năm sử dụng và làm việc...</p>
                </div>
            </div>
            <div className="text-center text-[40px] my-[30px] pt-[20px] font-semibold tracking-widest uppercase"> Tin Tức Của Kicap </div>
            <div className="w-[1140px] mx-auto">
                <div className="grid grid-cols-3 gap-[20px]">
                    {
                        blog.map((item) => (
                            <div className="w-full my-[10px]">
                                <img className="w-[370px] h-[247px] object-cover" src={item.download_url} alt="" />
                                <div className="my-[5px] font-semibold tracking-wider leading-7 text-[16px]">HƯỚNG DẪN SỬ DỤNG BÀN PHÍM CƠ M71</div>
                                <div className="my-[10px]">
                                    Bàn phím cơ FL CMK75 là thế hệ mới nhất của hãng FL-Esports. Kicap cũng vinh dự khi là một trong những nhà bán lẻ trực tiếp sản phẩm này. Tuy nhiên...
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center my-[30px]">
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
                </div>
            </div> */}
        </div>
    )
}
export default Blog;