// ProductList.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { useOutletContext } from "react-router-dom";

const ProductList = ({ apiUrl }) => {
    const { selectedOption } = useOutletContext();
    const [loading, setLoading] = useState(true);
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        const getPicture = async () => {
            try {
                const res = await axios.get(apiUrl);
                console.log(res.data);
                setPicture(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getPicture();
    }, [apiUrl]);

    const filteredData = [...picture].sort((a, b) => {
        const priceA = Number(a.price.replace("₫", "").replace(/\./g, ""));
        const priceB = Number(b.price.replace("₫", "").replace(/\./g, ""));
        switch (selectedOption) {
            case "az":
                return a.name.localeCompare(b.name);
            case "za":
                return b.name.localeCompare(a.name);
            case "new":
                return new Date(b.created_at) - new Date(a.created_at); // Giả sử API có `created_at`
            case "low-high":
                return priceA - priceB;
            case "high-low":
                return priceB - priceA;
            default:
                return 0;
        }
    });

    return (
        <div className="">
            {loading ? (
                <div className="text-center">
                    <div className="flex justify-center items-center h-40">
                        <div className="animate-spin rounded-full h-20 w-20 border-[1em] border-t-transparent border-gray-900"></div>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-2 gap-y-3">
                    {filteredData.map((item, ind) => (
                        <Card key={ind} data={item} sizeImg="w-full h-full" />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;
