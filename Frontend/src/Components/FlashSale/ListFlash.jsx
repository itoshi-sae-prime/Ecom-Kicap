import CardFlash from "./CardFlash";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';
const data = [
    {
        "id": 1,
        "img": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/nano68-1735564992710.png?v=1735565084273",
        "hoverImg": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/z6181472070454-38a39dc63242500710ffd84f053d35c7-1735564807004.jpg?v=1735565084293",
        "name": "Keycap Bộ",
        "title": "Bàn phím cơ gaming Nano68 HE - Rapid Trigger",
        "price": "1.150.000",
    },
    {
        "id": 2,
        "img": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/1-1704085050344.png?v=1704085055527",
        "hoverImg": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/8-1704085050355.png?v=1704085057273",
        "name": "Keycap Bộ",
        "title": "Bàn phím cơ gaming Nano68 HE - Rapid Trigger",
        "price": "1.150.000",
    },
    {
        "id": 3,
        "img": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/2-1682148657325.png?v=1682148663577",
        "hoverImg": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/7-1682148680673.png?v=1682148725667",
        "name": "Keycap Bộ",
        "title": "Bàn phím cơ gaming Nano68 HE - Rapid Trigger",
        "price": "1.150.000",
    },
    {
        "id": 4,
        "img": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/o1cn0165pddw2e0psxe4cc2-903738682-1678120177557.jpg?v=1678120332077",
        "hoverImg": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/o1cn01r9hiir2e0psxe7hsn-903738682-1678120177565.jpg?v=1678120332077",
        "name": "Keycap Bộ",
        "title": "Bàn phím cơ gaming Nano68 HE - Rapid Trigger",
        "price": "1.150.000",
    },
    // {
    //     "id": 1,
    //     "img": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/ban-phim-co-rk61.png?v=1654140000000",
    //     "name": "Royal Kludge RK61",
    //     "title": "Bàn phím cơ không dây 60% - Hot Swap, RGB",
    //     "price": "1.390.000",
    // },
    // {
    //     "id": 2,
    //     "img": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/ban-phim-akko-3068b.png?v=1654140000001",
    //     "name": "Akko 3068B Plus",
    //     "title": "Bàn phím cơ 65% - Bluetooth & Type-C",
    //     "price": "1.890.000",
    // },
    // {
    //     "id": 3,
    //     "img": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/ban-phim-keychron-k6.png?v=1654140000002",
    //     "name": "Keychron K6",
    //     "title": "Bàn phím cơ không dây - Gateron Switch",
    //     "price": "2.190.000",
    // },
    // {
    //     "id": 4,
    //     "img": "https://bizweb.dktcdn.net/thumb/large/100/436/596/products/ban-phim-ducky-one2.png?v=1654140000003",
    //     "name": "Ducky One 2 Mini",
    //     "title": "Bàn phím cơ gaming 60% - Cherry MX Switch",
    //     "price": "2.790.000",
    // },
]

const ListFlash = () => {
    return (
        <div className="list p-2">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={2}
                breakpoints={{
                    480: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
                loop={false}
                speed={1000}
            // autoplay={{ delay: 3000, disableOnInteraction: false }}
            // pagination={{ clickable: true }}
            // modules={[Pagination, Autoplay]}
            >
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <CardFlash key={item.id} product={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div >
    )
}

export default ListFlash;
