import React from "react";
import "./categories.css";
import Footer from "../Footer/footer";
function UserCategories(props) {
  return (
    <div>
      <div class="container">
        <div class="grid">
          <div class="grid__row">
            <div class="grid__col-2 grid__col-2-cateModblie">
              <h2 class="menu-filter" onclick="showmenu()">
                <i class="fas fa-filter"></i>
                Danh sách
              </h2>
              <div class="menu-list">
                <h3 class="menu-title">Theo Danh Mục</h3>
                <ul class="menu-list-lt">
                  <li class="menu-list-item menu-list-item--active">
                    <button
                      class="menu-item-link"
                      onclick="showPanelCate(0,'')"
                    >
                      Áo Sơ mi dài
                    </button>
                  </li>
                  <li class="menu-list-item">
                    <button
                      class="menu-item-link"
                      onclick="showPanelCate(1,'')"
                    >
                      Quần Boxer
                    </button>
                  </li>
                  <li class="menu-list-item">
                    <button
                      class="menu-item-link"
                      onclick="showPanelCate(2,'')"
                    >
                      Áo Phông Gió
                    </button>
                  </li>
                  <li class="menu-list-item">
                    <button
                      class="menu-item-link"
                      onclick="showPanelCate(3,'')"
                    >
                      Áo Sơ mi ngắn
                    </button>
                  </li>
                  <li class="menu-list-item">
                    <button
                      class="menu-item-link"
                      onclick="showPanelCate(4,'')"
                    >
                      Áo Len Cao Cấp
                    </button>
                  </li>
                </ul>
                <div data-role="page" class="range-price">
                  <div data-role="header">
                    <h1>Theo giá bán</h1>
                  </div>

                  <div data-role="main" class="ui-content">
                    <form method="post" action="/action_page_post.php">
                      <div data-role="rangeslider" class="ui-rangeslider">
                        <label for="price-min">Giá:</label>
                        <input
                          type="range"
                          name="price-min"
                          id="price-min"
                          value="200"
                          min="0"
                          max="1000"
                        />
                      </div>
                      <input type="submit" data-inline="true" value="Submit" />
                      <p>
                        Thanh trượt phạm vi có thể hữu ích khi cho phép người
                        dùng chọn phạm vi giá cụ thể khi duyệt qua sản phẩm.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid__col-10">
              <div class="home-filter">
                <span class="home-filter__label">Sắp xếp theo</span>
                <button data-filter="popular" class="home-filter__btn btn">
                  Phổ biến
                </button>
                <button data-filter="new" class="home-filter__btn btn">
                  Mới Nhất
                </button>
                <button
                  data-filter="all"
                  class="home-filter__btn btn btn-active"
                >
                  Bán chạy
                </button>

                <div class="home-filter__page">
                  <span class="home-filter__page-num">
                    {" "}
                    <span class="home-filter__page-current">1</span>
                    /14
                  </span>
                  <div class="home-filter__page-control">
                    <a href="" class="home-filter__page-btn">
                      <i class="home-filter__page-icon fas fa-angle-left"></i>
                    </a>
                    <a href="" class="home-filter__page-btn">
                      <i class="home-filter__page-icon fas fa-angle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="grid__row-cate grid__row-cate-tab"></div>
              <div class="grid__row-cate grid__row-cate-shirt"></div>
              <div class="grid__row-cate grid__row-cate-short"></div>
              <div class="grid__row-cate grid__row-cate-jeans"></div>
              <div class="grid__row-cate grid__row-cate-jeansShort"></div>

              <ul class="pagination">
                <li class="pagination-item">
                  <a href="" class="pagination-item__link">
                    <i class="pagination-item__icon fas fa-angle-left"></i>
                  </a>
                </li>
                <li class="pagination-item pagination-item-active">
                  <a href="" class="pagination-item__link">
                    1
                  </a>
                </li>
                <li class="pagination-item">
                  <a href="" class="pagination-item__link">
                    2
                  </a>
                </li>
                <li class="pagination-item">
                  <a href="" class="pagination-item__link">
                    3
                  </a>
                </li>
                <li class="pagination-item">
                  <a href="" class="pagination-item__link">
                    4
                  </a>
                </li>
                <li class="pagination-item">
                  <a href="" class="pagination-item__link">
                    ...
                  </a>
                </li>
                <li class="pagination-item">
                  <a href="" class="pagination-item__link">
                    14
                  </a>
                </li>
                <li class="pagination-item">
                  <a href="" class="pagination-item__link">
                    <i class="pagination-item__icon fas fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserCategories;
