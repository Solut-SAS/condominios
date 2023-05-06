import Footer from "./footer";
import SideBar from "../components/sidebar/Sidebar";
import MenuMobile from "../components/mobile/MenuMobile";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import { logo } from "../assets";
import { useState } from "react";

const AuthLayout = ({ children }) => {
  const [mobileNav, setMobileNav] = useState(false);

  const changeMobileNav = (mobileNavStatus) => {
    console.log(mobileNavStatus, "holi");
    setMobileNav(mobileNavStatus);
    console.log(mobileNav, "holi 2");
  };

  return (
    <div>
      <div className="pl-0 pt-0 sm:pl-6 sm:pt-6">
        {/* <div className="mb-0 hidden sm:mb-10 sm:block ml-8"> */}
        <img src={logo} className={"w-1/12 ml-8"} />
        {/* </div> */}
        <div className={"flex flex-row"}>
          <div className="hidden sm:block">
            <SideBar />
          </div>
          {/* <main className="w-full mb-10">{children}</main> */}
        </div>
      </div>
      <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
        {mobileNav ? (
          <HiOutlineX className="text-3xl text-secondary mr-2" />
        ) : (
          <HiMenuAlt4 className="text-3xl text-secondary mr-2" />
        )}
      </button>
      <div
        className={`${
          mobileNav ? "left-0" : "-left-full"
        } fixed top-0 bottom-0 w-[100vw] lg:hiddeb transition-all`}
      >
        <MenuMobile changeMobileNav={changeMobileNav} />
      </div>
    </div>
  );
};

export default AuthLayout;
