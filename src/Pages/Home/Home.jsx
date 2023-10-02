import Navbar from "../shared/Navbar/Navbar";
import Header from "../shared/header/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <h2 className="text-3xl font-poppins font-bold">this is home</h2> 
        </div>
    );
};

export default Home;