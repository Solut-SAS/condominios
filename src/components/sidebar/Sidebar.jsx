import { Sidebar } from "flowbite-react";
import { menu } from "../../data/menu";
import { useNavigate } from "react-router-dom";


function SidebarComponent() {
  let navigate = useNavigate();

  const handleLogout = () => {
    console.log("logout");
    window.localStorage.removeItem("commerce");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("structure");
    window.location.reload();
  };

  return (
    <Sidebar aria-label="Menu navigation condominios">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {menu.map((el) => (
            <Sidebar.Item
              key={el.name}
              href={el.path}
              onClick={() => {
                navigate(e.path);
              }}
              className="text-lg font-medium tracking-tighter  mb-4 hover:text-red-500"
            >
              {el.name}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/"
            className="text-lg font-bold tracking-tighter mb-4 hover:text-red-500"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}

export default SidebarComponent;
