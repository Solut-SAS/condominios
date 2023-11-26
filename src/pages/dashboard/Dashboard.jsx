import { useState, useEffect } from "react";
import { Commerces } from "../../components/commerce";
import { getInfo } from "../../features/commerces";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Dashboard() {
  const navigate = useNavigate();
  const [commerces, setCommerces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.localStorage.setItem("commerce", null);
    let user = JSON.parse(window.localStorage.getItem("user"));
    if (user?.residentialcomplexes?.length > 0) {
      setCommerces(user.residentialcomplexes);
    }
  }, []);

  const handleCommerceSelect = async (commerce) => {
    setLoading(true);
    window.localStorage.setItem("commerce", JSON.stringify(commerce));
    let { structure } = await getInfo({ id: commerce.id });
    window.localStorage.setItem("structure", JSON.stringify(structure));
    setLoading(false);
    navigate("/commerce");
  };

  return (
    commerces && (
      <Commerces
        selectCommerce={handleCommerceSelect}
        commerces={commerces}
        loading={loading}
      />
    )
  );
}

export default Dashboard;
