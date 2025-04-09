

export const Data1 = [
    {
        id: 1,
        name: "Trang Chủ",
        link: "/",

    },
    {
        id: 2,
        name: "Keycap bộ",
        link: "/keycap_bo",
        submenu: [
            { name: "Keycap Cherry", link: "/keycap_bo/cherry" },
            { name: "Keycap MOA", link: "/keycap_bo/moa" },
            { name: "Keycap xuyên led", link: "/keycap_bo/xuyen-led" },
            { name: "Keycap SA", link: "/keycap_bo/sa" },
            { name: "Keycap XDA", link: "/keycap_bo/xda" },
            { name: "Keycap OEM", link: "/keycap_bo/oem" }
        ]
    },
    {
        id: 3,
        name: "Bàn phím cơ",
        link: "/banphim_co"

    },
    {
        id: 4,
        name: "Mods phím",
        link: "/modsphim"
    },
    {
        id: 5,
        name: "Chuột",
        link: "/chuot"
    },
    {
        id: 6,
        name: "Sản phẩm",
        link: "/sanpham/all",
        submenu: [
            {
                id: 1,
                name: "Keycap bộ",
                submenu_2: [
                    { name: "Silent Plateau", link: "/keycap_bo/silent-plateau" },
                    { name: "Japan Cloud", link: "/keycap_bo/japan-cloud" },
                    { name: "Keycap Yogurt", link: "/keycap_bo/keycap-yogurt" },
                ],
            },
            {
                id: 2,
                name: "Bàn phím cơ",
                submenu_2: [
                    { name: "Infi75", link: "/banphim/infi75" },
                    { name: "Xinmeng A66", link: "/banphim/xinmeng-a66" },
                ],
            },
            {
                id: 3,
                name: "Bàn phím cơ silent",
                submenu_2: [
                    { name: "M75 Pro", link: "/banphim/m75-pro" },
                    { name: "Monka 3067", link: "/banphim/monka-3067" },
                    { name: "M87 Pro", link: "/banphim/m87-pro" },
                ],
            },
            {
                id: 4,
                name: "Chuột",
                submenu_2: [{ name: "Delux M800 Pro", link: "/chuot/delux-m800-pro" }],
            },
            {
                id: 5,
                name: "Keycap lẻ",
                submenu_2: [
                    { name: "PIKACHU ALU", link: "/keycap_le/pikachu-alu" },
                    { name: "CARD VGA", link: "/keycap_le/card-vga" },
                    { name: "CỜ ĐẢNG BÚA LIỀM", link: "/keycap_le/co-dang-bua-liem" },
                ],
            },
            {
                id: 6,
                name: "Switch",
                submenu_2: [
                    { name: "HMX Ziwei", link: "/switch/hmx-ziwei" },
                    { name: "Outemu silent peach", link: "/switch/outemu-silent-peach" },
                    { name: "Hyacinth V2U", link: "/switch/hyacinth-v2u" },
                ],
            },
            {
                id: 7,
                name: "Phụ kiện",
                submenu_2: [
                    { name: "Túi đựng bàn phím", link: "/phukien/tui-ban-phim" },
                    { name: "Dụng cụ thay keycap", link: "/phukien/dung-cu-thay-keycap" },
                    { name: "Chổi quét phím", link: "/phukien/choi-quet-phim" },
                ],
            },
        ],
    },
    {
        id: 7,
        name: "Blog",
        link: "/blog"
    },
    {
        id: 8,
        name: "Về Kicap",
        link: "/gioi-thieu",
        submenu: [
            { name: "Giới thiệu", link: "/phukien/tui-ban-phim" },
            { name: "Liên hệ", link: "/phukien/dung-cu-thay-keycap" },
            { name: "Chính sách bảo hành", link: "/phukien/choi-quet-phim" },
            { name: "Chính sách đổi trả", link: "/phukien/choi-quet-phim" },
        ]
    },
]