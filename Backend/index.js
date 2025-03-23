const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
const bodyParse = require("body-parser");
const dotenv = require("dotenv");
const cheerio = require("cheerio");
const nodeMailer = require("nodemailer");
const Product = require("./model/product.model");
require('dotenv').config();
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
// app.get("/api/product", productRouter);
// app.get("/api/product/:id", productRouter);

const url_index = "https://kicap.vn/";
const url_keycao_bo = "https://kicap.vn/keycap-bo";
mongoose.connect("mongodb+srv://admin123:050825%21%40%23%24Tt@kicapdb.sxbgl.mongodb.net/?retryWrites=true&w=majority&appName=KicapDb")
    .then(() => console.log("✅ Kết nối MongoDB thành công!"))
    .catch(err => console.error("❌ Lỗi kết nối:", err));;
// const urlCharater = "https://kimetsu-no-yaiba.fandom.com/wiki/"
//Set up

app.use(bodyParse.json({ limit: "50mb" }));
app.use(cors());
dotenv.config();
app.use(
    bodyParse.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    })
);
app.get("/v1", (req, resp) => {
    const results = [];
    const limit = Number(req.query.limit);
    try {
        axios(url_index).then((res) => {
            const html = res.data;
            const $ = cheerio.load(html);

            $(".product-card", html).each(function () {
                const images = $(this).find(".product-card__image > picture > source").map((i, el) => $(el).attr("srcset")).get();
                const sold_out = $(this).find(".product-card__image > span.soldout").text().trim();
                const sale_box = $(this).find(".sale-box").text().trim();
                const name = $(this).find("h4.product-single__series").text().trim();
                const title = $(this).find("h3.product-card__title").text().trim();
                const price = $(this).find(".product-price > strong").text().trim();
                const sale_price = $(this).find(".product-price > span").text().trim();
                results.push({ images, sold_out, sale_box, name, title, price, sale_price });
            });
            if (limit && limit > 0) {
                resp.status(200).json(results.slice(0, limit));
            }
            else {
                resp.status(200).json(results);
            }
        })
    }
    catch {
        resp.status(500).json(err);
    }
});
app.get('/keycap_bo', (req, resp) => {
    const results = [];
    const limit = Number(req.query.limit);
    try {
        axios(url_keycao_bo).then((res) => {
            const html = res.data;
            const $ = cheerio.load(html);

            $(".product-card", html).each(function () {
                const images = $(this).find(".product-card__image > picture > source").map((i, el) => $(el).attr("srcset")).get();
                // const sold_out = $(this).find(".product-card__image > span.soldout").text().trim();
                // const sale_box = $(this).find(".sale-box").text().trim();
                const name = $(this).find("h4.product-single__series").text().trim();
                const title = $(this).find("h3.product-card__title").text().trim();
                const price = $(this).find(".product-price > strong").text().trim();
                const sale_price = $(this).find(".product-price > span").text().trim();
                results.push({ images, name, title, price, sale_price });
            });
            if (limit && limit > 0) {
                resp.status(200).json(results.slice(0, limit));
            }
            else {
                resp.status(200).json(results);
            }
        })
    }
    catch {
        resp.status(500).json(err);
    }
});
app.get("/post", (req, resp) => {
    const results = [];
    const limit = Number(req.query.limit);
    try {
        axios(url_index).then((res) => {
            const html = res.data;
            const $ = cheerio.load(html);

            $(".news-items", html).each(function () {
                const images = $(this).find(".evo-article-image > img").attr("data-lazyload");
                const title = $(this).find("h3").text().trim();
                const content = $(this).find("p").text().trim();
                results.push({ images, title, content });
            });
            if (limit && limit > 0) {
                resp.status(200).json(results.slice(0, limit));
            }
            else {
                resp.status(200).json(results);
            }
        })
    }
    catch {
        resp.status(500).json(err);
    }
});
app.get("/api/product", async (req, resp) => {
    try {
        const products = await Product.find();
        resp.status(200).json(products);
    } catch (err) {
        resp.status(500).json(err);
    }
});
app.get("/api/product/:id", async (req, resp) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        resp.status(200).json(product);
    } catch (err) {
        resp.status(500).json(err);
    }
});
app.post("/api/OrderKicap", async (req, resp) => {
    // try {
    //     resp.status(201).json(req.body.cart);
    // } catch (err) {
    //     resp.status(500).json(err);
    // }
    try {
        let transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        let cartHtml = req.body.cart.cart.map((item, index) => {
            return `
                <tr key=${index}>
                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;>
                        <img src="${item.images[0]}" alt="${item.name}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 5px;" />
                    </td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${item.title}</td>
                    <td style="padding: 10px; border: 1px solid #ddd; text-align: center;">${item.quantity}</td>
                    <td style="padding: 10px; border: 1px solid #ddd; text-align: right;">${item.price}</td>
                    <td style="padding: 10px; border: 1px solid #ddd; text-align: right; font-weight: bold;">
                        ${(Number(item.quantity) * Number(item.price.replace(/[^\d]/g, "")) / 1000).toFixed(0)}.000đ
                    </td>
                </tr>
            `;
        }).join("");

        var message = {
            from: process.env.EMAIL,
            to: req.body.email,
            subject: "Xác nhận đơn hàng của bạn",
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h2 style="text-align: center; color: #333;">🛒 Xác nhận đơn hàng</h2>
                <p><strong>Họ và Tên:</strong> ${req.body.fullName}</p>
                <p><strong>Điện thoại:</strong> ${req.body.phone}</p>
                <p><strong>Địa chỉ:</strong> ${req.body.address}, ${req.body.district}, ${req.body.city}</p>
                <p><strong>Ghi chú:</strong> ${req.body.note}</p>
                <h3 style="margin-top: 20px; color: #555;">📦 Chi tiết đơn hàng</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                    <thead>
                        <tr style="background-color: #f5f5f5;">
                            <th style="padding: 10px; border: 1px solid #ddd;">Hình ảnh</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Tên sản phẩm</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Số lượng</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Giá</th>
                            <th style="padding: 10px; border: 1px solid #ddd;">Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cartHtml}
                    </tbody>
                     <tfoot>
                    <tr>
                        <td colspan="4" style="padding: 10px; border: 1px solid #ddd; text-align: center; font-weight: bold;">Tổng tiền:</td>
                        <td style="padding: 10px; border: 1px solid #ddd; text-align: right; font-weight: bold; color: red;">
                            ${req.body.cart.total}.000 VNĐ
                        </td>
                    </tr>
            </tfoot>
                </table>

                <br>
                <p style="text-align: center; font-size: 16px; color: #007bff;">Cảm ơn bạn đã đặt hàng! 💙</p>
            </div>
            `,
        };
        await transporter.sendMail(message);
        return resp.status(200).json({ message: "Email đã gửi thành công!" });
        // transporter.sendMail(message, (err, info) => {
        //     if (err) {
        //         console.log("error in sending email", err);
        //         return resp.status(400).json({
        //             message: `error in sending email ${err}`
        //         })
        //     }
        //     else {
        //         console.log("succesful send the email", info);
        //         return resp.status(200).json({
        //             message: info
        //         })
        //     }
        // })
    } catch (err) {
        console.error("Lỗi server:", err);
        return resp.status(500).json({ message: "Lỗi server", error: err });
    }
});
///DB
app.post("/api/product", async (req, resp) => {
    try {
        const product = await Product.create(req.body);
        resp.status(201).json(product);
    } catch (err) {
        resp.status(500).json(err); x
    }
    resp.status(200).json(req.body);
});



const port = 8000;
app.listen(8000, () => {
    console.log(`Server is running on ${port}`);
})


