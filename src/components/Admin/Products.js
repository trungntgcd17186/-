import axios from "axios";
import React, { useState, useEffect } from "react";
import DataTableProducts from "./DataTable/DataTableProducts";

function Products(props) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((response) => {
      setDatas(response.data);
    });
  }, []);

  return (
    <div className="dashboard-container">
      <DataTableProducts />
    </div>
  );
}

export default Products;
