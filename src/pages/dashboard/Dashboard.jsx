import { useState } from "react";
import { Commerce, Commerces } from "../../components/commerce";
import { commerces } from "../../data/dummyData";
import "./styles.css";

function Dashboard() {
  const [commerceSelected, setCommerceSelected] = useState();

  const handleCommerceSelect = (commerce) => {
    //TODO hacer petición para obtener la estructura dado id de comercio
    setCommerceSelected(commerce);
  };

  return commerces.length > 1 && !commerceSelected?.id ? (
    <Commerces selectCommerce={handleCommerceSelect} />
  ) : (
    <Commerce {...commerceSelected} />
  );
}

export default Dashboard;
