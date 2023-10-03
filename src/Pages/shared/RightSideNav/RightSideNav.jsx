
import { FaGoogle, FaGithub,FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    login with google
                </button>

                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    login with Github
                </button>
            </div>

            <div className="p-4  mb-6">
                <h2 className="text-2xl mb-4">find us</h2>
           <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
            <FaFacebook className="mr-3"></FaFacebook>
          <span>facebook</span>
           </a>

           <a className="p-4 flex text-lg items-center  border-x " href="">
            <FaTwitter className="mr-3"></FaTwitter>
          <span> Twitter</span>
           </a>

           <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
            <FaInstagram className="mr-3"></FaInstagram>
          <span> Twitter</span>
           </a>
            </div>

            {/* q zone */}

            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl">q zone</h2>
              <img src={qZone1} alt="" />
              <img src={qZone2} alt="" />
              <img src={qZone3} alt="" />
            </div>
           
        </div>



            
    );
};

export default RightSideNav;