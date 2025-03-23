
import FlashSale from "../../Components/FlashSale/FlashSale";
import Post from "../../Components/Post/Post";
import Slide from "../../Components/Slide/Slide";


const Home = () => {
    return (
        <div>
            <Slide />
            <div className="container">
                <FlashSale />
                <div className="px-[30px] mx-auto">
                    <Post />
                </div>
            </div>
        </div>
    )
}
export default Home;    