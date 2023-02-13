import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import walletTop from "../public/assets/wallet-top.png";
import Image from "next/image";
function Header() {
  return (
    <>
      <div className="h-[60px] flex py-10    justify-between items-center">
        <div className="w-[40%] h-10 flex items-center justify-center ">
          <p className="bg-[#802dff] text-white text-xl h-[30px] w-[30px] sm:h-[33px] sm:w-[33px] md:h-[37px] md:w-[33px] lg:w-[40px] lg:h-[40px] rounded-full flex items-center justify-center mx-1 ">
            <FaFacebookF />
          </p>
          <p className="bg-[#802dff] text-white text-xl h-[30px] w-[30px] sm:h-[33px] sm:w-[33px] md:h-[37px] md:w-[33px] lg:w-[40px] lg:h-[40px] rounded-full flex items-center justify-center mx-1">
            <BsInstagram />
          </p>
        </div>
        <div className="w-[60%] h-10 flex items-center justify-center pt-2 ">
          <Image src={walletTop} height={200} width={200} />
        </div>
      </div>
    </>
  );
}

export default Header;
