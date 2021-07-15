import React, { useState, useEffect, useContext } from "react";
import CaseloadCard from "../components/CaseloadCard/CaseloadCard";
import Title from "../components/Title/Title";

import AuthContext from "../context/auth-context";

const Caseload = () => {
  const authCtx = useContext(AuthContext);
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchCaseloadHandler(authCtx.id);
  }, []);

  async function fetchCaseloadHandler(id) {
    const response = await fetch(
      `http://localhost:3001/api/get/counselor-residents/${id}`
    );
    const data = await response.json();
    setResidents(data);
  }

  return (
    <div>
      <Title title={"Caseload"} />
      <CaseloadCard residents={residents} />
    </div>
  );
};

export default Caseload;
