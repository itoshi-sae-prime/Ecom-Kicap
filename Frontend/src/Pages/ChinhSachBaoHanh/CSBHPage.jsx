const CSBHPage = () => {
    return (
        <div className="pt-[7px]">
            <div className="grid place-items-center">
                <img className="object-cover w-full h-[250px] relative" src="https://bizweb.dktcdn.net/100/436/596/themes/834446/assets/evo-page-banner.jpg?1704470384648" alt="" />
                <div className="absolute text-[30px] tracking-widest uppercase">Chính sách bảo hành</div>
            </div>
            <div className="w-[1140px] mx-auto gap-x-[10px] mt-[20px]">
                <div className="w-[1140px] mx-auto gap-x-[10px] mt-[20px] font-semibold tracking-wide leading-6">
                    <p>Kicap bảo hành qua số điện thoại đặt hàng của quý khách. Kể từ khi xuất kho, hệ thống sẽ tự tạo phiếu bảo hành cho sản phẩm của quý khách theo thời gian bảo hành đã thông báo trên website (trừ các sản phẩm không sử dụng điện như keycap, núm xoay, dụng sụ mods, switch, v.v.v) </p>
                    <div className="my-[10px]"><strong>A. Địa điểm bảo hành:</strong></div>
                    - Toàn bộ sản phẩm được phân phối và bán lẻ bởi Kicap đều được bảo hành tại địa chỉ của Kicap
                    <br></br>
                    - Đối với những đơn hàng mua hàng từ xa, quý khách vui lòng gọi điện, nhắn tin qua Fanpage, Shopee, Zalo để được Kicap hỗ trợ xác định tình trạng sản phẩm
                    <br></br>
                    - Với các trường hợp bảo hành từ xa, quy trình bảo hành thực hiện như sau:
                    <br></br>
                    + Quý khách vui lòng đóng gói kỹ sản phẩm để đảm bảo an toàn khi vận chuyển hàng. Kicap sẽ không chịu trách nhiệm khi có các lỗi phát sinh do quá trình vận chuyển.
                    <br></br>
                    + Bên ngoài kiện hàng vui lòng ghi Tên, SĐT và Địa chỉ của quý khách để shop tiện liên lạc và gửi hàng lại.
                    <br></br>
                    - Gửi sản phẩm về địa chỉ của Kicap. Chi phí chuyển phát chiều gửi đi quý khách vui lòng tự thanh toán.
                    <br></br>
                    - Sau khi bảo hành xong, Kicap sẽ liên hệ gửi lại sản phẩm về địa chỉ mà quý khách cung cấp. Chi phí vận chuyển chiều gửi lại do Kicap thanh toán
                    <br></br>

                    <div className="my-[10px]"><strong>B. Những trường hợp sau không được bảo hành:</strong></div>
                    - Các sản phẩm không còn nguyên tem niêm phong, tem QC, có hiện tượng bị tháo rời để tự ý can thiệp vào kết cấu bên trong của sản phẩm.
                    <br></br>
                    - Sử dụng nguồn sạc điện trực tiếp đối với các thiết bị không dây, dẫn tới hỏng hóc linh kiện và chức năng sử dụng pin của bàn phím
                    <br></br>
                    - Hư hỏng do tác động vật lý của người tiêu dùng như rơi vỡ, va chạm, vào nước, ẩm thấp, chập cháy.
                    <br></br>
                    - Hư hỏng do thiên tai, động vật, công trùng và do con người gây ra;
                    <br></br>
                    - Hiện tượng rỉ sét do yếu tố thời tiết, độ ẩm, thói quen người dùng đều không được bảo hành;
                    <br></br>
                    - Hết thời hạn bảo hành kể từ ngày nhận được hàng;
                    <br></br>
                    - Khách hàng tự ý can thiệp vào firmware của sản phẩm.
                    <br></br>
                    <div className="my-[10px]">
                        <strong>C. Các trường hợp khác sẽ được bảo hành theo tiêu chuẩn của nhà sản xuất.</strong>
                    </div>
                    - Cụ thể với bàn phím cơ sẽ được bảo hành các lỗi phát sinh do nhà sản xuất mà không phải do người dùng: Hỏng mạch, chết led, lỗi kết nối.
                    <br></br>
                    - Các sản phẩm không sử dụng điện như Keycap, Switch, Keypuller, Swich Puller, Lube Station... đều không bảo hành
                </div>
            </div>
        </div>
    );
}
export default CSBHPage;