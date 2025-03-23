import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import "./ListPost.css";
import Card from "../../Card/Card";

const ListPost = ({ data, title }) => {

    return (
        <>
            <div className="w-full">
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        640: { slidesPerView: 3 }, // Hiển thị 2 sản phẩm từ 640px trở lên
                        1024: { slidesPerView: 4 } // Hiển thị 4 sản phẩm từ 1024px trở lên

                    }}
                    loop={false}
                    speed={1000}
                    // autoplay={{ delay: 3000, disableOnInteraction: false }}
                    // pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card data={item} sizeImg={"w-full h-[350px]"} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mx-auto pt-10 flex justify-center items-center">
                <button className="list-post-btn">
                    {title}
                </button>
            </div>
        </>
    );
};

export default ListPost;
