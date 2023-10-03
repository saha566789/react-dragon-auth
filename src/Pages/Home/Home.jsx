import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Header from "../shared/header/Header";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
          
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="border">
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="md:col-span-2 border">
                <h2 className="text-4xl">News coming soon...</h2>
            </div>
            <div className="border">
                <RightSideNav></RightSideNav>
            </div>
           </div>
        </div>
    );
};

export default Home;