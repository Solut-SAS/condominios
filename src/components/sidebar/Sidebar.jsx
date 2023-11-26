import { Sidebar, Tooltip } from "flowbite-react";
import { menu } from "../../data/menu";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { premium } from "../../assets";

function SidebarComponent() {
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    setUser(user);
  }, []);

  const handleLogout = () => {
    console.log("logout");
    window.localStorage.removeItem("commerce");
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("structure");
    window.location.reload();
  };

  const canAccess = (roles) => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    if (user) {
      let rol = user.rol;
      if (roles.includes(rol)) {
        return true;
      }
    }
    return false;
  };

  return (
    <Sidebar aria-label="Menu navigation condominios">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {menu.map((el) => (
            <Sidebar.Item
              key={el.name}
              onClick={() => {
                el.status != "inactive" && navigate(el.path);
              }}
              className="text-lg font-medium tracking-tighter mb-4 hover:text-red-500 hover:cursor-pointer flex flex-row"
            >
              {canAccess(el.roles) && (
                <div className="flex flex-row">
                  <span className="mr-4">{el.name}</span>
                  {el.status == "inactive" && (
                    <Tooltip content="Esta funcionalidad es premium, comunícate con tu asesor">
                      <img src={premium} width={27}></img>
                    </Tooltip>
                  )}
                </div>
              )}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/"
            className="text-lg font-bold tracking-tighter mb-4 hover:text-red-500 hover:cursor-pointer"
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
