import { useState } from "react";
import { Commerce } from "../../components/commerce";

const CommercePage = () => {
  const structure = JSON.parse(window.localStorage.getItem("structure"));
  const commerce = JSON.parse(window.localStorage.getItem("commerce"));
  return <Commerce commerce={commerce} structure={structure} />;
};

export default CommercePage;
