import Footer from "./footer";
import SideBar from "../components/sidebar/Sidebar";
import MenuMobile from "../components/mobile/MenuMobile";
import { logo } from "../assets";

const LayoutWrapper = ({ children }) => (
  <>
    <div className="pl-0 pt-0 sm:pt-6">
      <div className="mb-0 hidden sm:block">
        <img src={logo} className={"w-1/6 ml-8 mb-8"} />
      </div>
      <div className={"flex flex-row"}>
        <div className="hidden sm:block">
          <SideBar />
        </div>
        <main className="w-full mb-10">{children}</main>
      </div>
    </div>
    <div className="block md:hidden">
      <MenuMobile />
    </div>
    {/* <Footer /> */}
  </>
);

const AuthLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default AuthLayout;
