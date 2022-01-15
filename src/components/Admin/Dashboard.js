import React, { useState, useEffect } from "react";
import "./dashboard.css";
import axios from "axios";
import DataTableDashboard from "./DataTable/DataTableDashboard";

function Dashboard(props) {
  const [users, setUsers] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [revenue, setRevenue] = useState(0);
  axios.get("http://localhost:3001/users").then((response) => {
    setUsers(response.data.length);
  });

  useEffect(() => {
    axios.get("http://localhost:3001/orders").then((response) => {
      setTotalOrders(response.data.length);
      //Tính tổng doanh thu bằng cách reduce key total sau khi get api.
      let totalRevenue = response.data.reduce((accumulator, currentValue) => {
        return (accumulator = currentValue.total + accumulator);
      }, 0);
      setRevenue(totalRevenue);
    });
  }, []);
  return (
    <div className="dashboard-container">
      <h1>Trang Quản Lý</h1>
      <div class="main-content active">
        <div class="row mt-72">
          <div class="col-md-4 col-sm-12">
            <div class="box box-hover">
              <div class="counter">
                <div class="counter-title">Người dùng</div>
                <div class="counter-info">
                  <div class="counter-count counter-count-user">{users}</div>
                  <i class="bx bx-shopping-bag"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="box box-hover">
              <div class="counter">
                <div class="counter-title">Đơn hàng</div>
                <div class="counter-info">
                  <div class="counter-count counter-count-orders">
                    {totalOrders}
                  </div>
                  <i class="bx bx-chat"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-12">
            <div class="box box-hover">
              <div class="counter">
                <div class="counter-title">Doanh thu</div>
                <div class="counter-info">
                  <div class="counter-count counter-count-total">
                    {revenue.toLocaleString("vi-VN")} đ
                  </div>
                  <i class="bx bx-line-chart"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="box f-height">
              <div class="box-header">Doanh thu</div>
              <div class="box-body">
                <div id="customer-chart"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-12 col-sm-12">
            <div class="box f-height">
              <div class="box-header">Danh mục sản phẩm</div>
              <div class="box-body">
                <div id="category-chart"></div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-12 col-sm-12">
            <div class="box f-height">
              <div class="box-header">Phản hồi</div>
              <div class="box-body">
                <div id="feedback-chart"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <div class="box f-height">
              <div class="box-header">Những đơn đặt hàng gần đây</div>
              <div class="box-body">
                <DataTableDashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
