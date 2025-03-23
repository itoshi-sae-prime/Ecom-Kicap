const LHPage = () => {
    return (
        <div className="pt-[7px]">
            <div className="grid place-items-center">
                <img className="object-cover w-full h-[250px] relative" src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/evo-page-banner.jpg?1704470384648" alt="" />
                <div className="absolute text-[30px] tracking-widest uppercase">LIÊN HỆ</div>
            </div>
            <div className="w-[1140px] mx-auto gap-x-[10px] mt-[30px] font-semibold px-[110px]">
                <div className="flex justify-center items-center">
                    <div className="text-center">
                        <div className="text-[26px] leading-[28px] font-normal tracking-[2.4px]">GỬI THÔNG TIN</div>
                        <div className="text-[16px] leading-[24px] font-normal tracking-[2.4px] mt-[10px] mb-[30px]">Bạn hãy điền nội dung tin nhắn vào form dưới đây và gửi cho chúng tôi. Chúng tôi sẽ trả lời bạn sau khi nhận được.</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                    <div className="">
                        <div className="text-[15px] uppercase font-medium tracking-[1.5px] mb-[10px] pl-[5px]">Họ và tên<span className="text-red-600">*</span></div>
                        <input className="bg-[#f7f7f7] w-full shadow-lg h-[50px] px-[15px] border-2 outline-none" type="text" placeholder="Nhập họ và tên"/>
                    </div>
                    <div className="">
                        <div className="text-[15px] uppercase font-medium tracking-[1.5px] mb-[10px] pl-[5px]">Email<span className="text-red-600">*</span></div>
                        <input className="bg-[#f7f7f7] w-full shadow-lg h-[50px] px-[15px] border-2 outline-none" type="text" placeholder="Nhập email"/>
                    </div>
                </div>
                <div className="mt-[20px]">
                        <div className="text-[15px] uppercase font-medium tracking-[1.5px] mb-[10px] pl-[5px]">Điện thoại<span className="text-red-600">*</span></div>
                        <input className="bg-[#f7f7f7] w-full shadow-lg h-[50px] px-[15px] border-2 outline-none" type="text" placeholder="Nhập số điện thoại"/>
                </div>
                <div className="mt-[20px]">
                        <div className="text-[15px] uppercase font-medium tracking-[1.5px] mb-[10px] pl-[5px]">Nội dung<span className="text-red-600">*</span></div>
                        <input className="bg-[#f7f7f7] w-full shadow-lg h-[150px] px-[15px] border-2 outline-none" type="text" placeholder="Nhập số điện thoại"/>
                </div>
                <button className="my-[30px] py-[20px] bg-black text-center w-full text-white uppercase text-[15px] tracking-widest">Gửi tin nhắn</button>
                <div className="text-[26px] leading-[28px] font-normal tracking-[2.4px] text-center uppercase mt-[50px]">Bản đồ cửa hàng</div>
                <div className="mt-[10px] mb-[30px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62705.62252617997!2d106.61198696845847!3d10.80354476123839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293818af3a73%3A0xcd8d16d1180acc8b!2zVMOibiBCw6xuaCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1705584115891!5m2!1svi!2s" 
                    style={{
                        width :"100" + "%",
                        height : "300" + "px",
                    }}
                ></iframe>
                </div>
            </div>

        </div>
    );
}
export default LHPage;