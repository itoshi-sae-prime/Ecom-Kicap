import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const Slide = () => {
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        try {
            const getPicture = async () => {
                await axios({
                    method: 'GET',
                    url: `https://picsum.photos/v2/list?page=2&limit=3`,
                }).then((res) => {
                    setPicture(res.data)
                }).catch((err) => {
                    console.log(err)
                });
            };
            getPicture();
        }
        catch (err) {
            console.log(err);
        }
    }, []);
    return (
        <>
            <div className="relative pt-2">
                <Swiper
                    className="w-full"
                    grabCursor={true}
                    spaceBetween={0}
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 3000, disableOnInteraction: false }} // Tự động chạy mượt mà
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]} // Kích hoạt module Pagination & Autoplay
                >
                    <SwiperSlide>
                        <div className="px-3">
                            <img
                                src="https://bizweb.dktcdn.net/100/436/596/themes/980306/assets/slider_1.jpg?1739064839042"
                                className="w-full rounded-lg"
                                alt="Slide 1"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-3">
                            <img
                                src="https://bizweb.dktcdn.net/100/436/596/themes/980306/assets/slider_3.jpg?1734244256858"
                                className="w-full rounded-lg"
                                alt="Slide 2"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="px-3">
                            <img
                                src="https://bizweb.dktcdn.net/100/436/596/themes/980306/assets/slider_4.jpg?1739064839042"
                                className="w-full rounded-lg"
                                alt="Slide 3"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Custom Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white">
                    {
                        [...Array(3)].map((_, i) => (
                            <button
                                key={i}
                                className="w-3 h-3 bg-white rounded-full opacity-50 hover:opacity-100 transition"
                            ></button>
                        ))}
                </div>
            </div>
        </>
    )
}
export default Slide;