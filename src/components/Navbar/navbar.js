import { Link } from "react-router-dom";
import "../Navbar/navbar.css";

import MiniCart from "../MiniCart/index";
import { useState } from "react";

function Navbar(props) {
  const [quantity, setQuantity] = useState(0);
  const handleSetQuantity = (childData) => {
    setQuantity(childData);
  };

  return (
    <div>
      <header className="header">
        <div className="grid">
          <div className="header__navbar">
            <ul className="header__navbar-list hide-tab-mobile">
              <li className="header__navbar-item header__navbar-item--separate">
                Vào cửa hàng trên ứng dụng E-commerce
              </li>
              <li className="header__navbar-item">
                <span className="header__navbar-item-no-poiter"> Kết nối </span>
                <a href="" className="header__navbar-icon-link">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="" className="header__navbar-icon-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <ul
              id="mobile-menu"
              className="header__navbar-list header__navbar-list-mobile"
            >
              <li className="header__navbar-item header__navbar-item--has-notify">
                <a href="" className="header__navbar-item-link">
                  <i className="header__navbar-icon far fa-bell"></i>
                  Thông báo
                </a>
                <div className="header__notify">
                  <header className="header__notify-header">
                    <h3>Thông báo mới nhận</h3>
                  </header>
                  <ul className="header__notify-list">
                    <li className="header__notify-item header__notify-item--viewed">
                      <a href="" className="header__notify-link">
                        <img
                          src="./asset/img/shirt1.jpeg"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Áo khoát tay dài màu trắng tuyệt đẹp cho nam giới.
                          </span>
                          <span className="header__notify-discription">
                            Sản phẩm được làm bằng chất liệu thoáng mát
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="header__notify-item header__notify-item--viewed">
                      <a href="" className="header__notify-link">
                        <img
                          src="./asset/img/underwear2.jpeg"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Quần lót nam đẹp, sành điệu, thoáng mát dành riêng
                            cho nam giới.
                          </span>
                          <span className="header__notify-discription">
                            Quần mang thoải mái không bị bí
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="header__notify-item header__notify-item--viewed">
                      <a href="" className="header__notify-link">
                        <img
                          src="./asset/img/shirt3.jpeg"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Áo lông mùa đông cho nam giới
                          </span>
                          <span className="header__notify-discription">
                            Sản phẩm cực kì ấm cúm
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <footer className="header__notify-footer">
                    <a
                      href="./notification.html"
                      className="header__notify-footer-btn"
                    >
                      Xem tất cả
                    </a>
                  </footer>
                </div>
              </li>
              <li className="header__navbar-item">
                <Link to="/help" className="header__navbar-item-link">
                  <i className="header__navbar-icon far fa-question-circle"></i>
                  Trợ giúp
                </Link>
              </li>
              <li className="header__navbar-item">
                <Link to="/about" className="header__navbar-item-link">
                  <i className="header__navbar-icon fas fa-spa"></i>
                  About
                </Link>
              </li>
              <li className="header__navbar-item header__navbar-item-none-user header__navbar-item--separate">
                <Link to="/login" className="header__navbar-item-link">
                  Đăng nhập
                </Link>
              </li>
              <li className="header__navbar-item header__navbar-item-none-user">
                <Link to="/register" className="header__navbar-item-link">
                  Đăng kí
                </Link>
              </li>
              <li className="header__navbar-item header__navbar-user">
                <img
                  src="https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn"
                  alt=""
                  className="header__navbar-user-img"
                />
                <span className="header__navbar-user-name">Thanh Trung</span>

                <ul className="header__navbar-user-menu">
                  <li className="header__navbar-user-item">
                    <a href="">Tài khoản của tôi</a>
                  </li>
                  <li className="header__navbar-user-item">
                    <a href="">Địa chỉ của tôi</a>
                  </li>
                  <li className="header__navbar-user-item">
                    <a href="notification.html">Đơn mua</a>
                  </li>
                  <li className="header__navbar-user-item">
                    <button id="logout" onClick="handleLogout()">
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </li>
              <div className="icon-cancel" onclick="closeMenu()">
                <i className="fas fa-times"></i>
              </div>
            </ul>
          </div>
          <div className="header-with-search">
            <a href="./index.html" className="header__logo">
              <Link to="/">
                <i className="header__logo-icon fas fa-cannabis"></i>
                <span className="header-search__logo-name">GanZ</span>
              </Link>
            </a>
            <div className="header__search-container">
              <div className="header__search">
                <div className="header__search-input-wrap">
                  <input
                    type="text"
                    placeholder="Nhập để tìm kiếm sản phẩm..."
                    className="header__search-input"
                  />
                  <div className="header__search-history">
                    <h3 className="header__search-history-heading">
                      Lịch sử tìm kiếm
                    </h3>
                    <ul className="header__search-list">
                      <li className="header__search-history-item">
                        <a href="">Áo Khoát Nam</a>
                      </li>
                      <li className="header__search-history-item">
                        <a href="">Áo Sơ Mi</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="header__search-btn">
                  <i className="header__search-btn-icon fas fa-search"></i>
                </button>
              </div>
              <div className="header__search-item">
                <div className="search-item-list">
                  <div className="item-list dropdown">
                    <a href="" className="header__item">
                      <span className="header__item-name">sale</span>
                      <i className="header__item-icon fas fa-chevron-down"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
                        GanZ Outlet ưu đãi giảm 50%
                      </a>
                    </div>
                  </div>
                  <a href="" className="item-list header__item">
                    <span className="header__item-name">bộ sưu tập</span>
                    <i className="header__item-icon fas fa-chevron-down"></i>
                  </a>

                  <div className="item-list dropdown">
                    <a href="category.html" className="header__item">
                      <span className="header__item-name">áo</span>
                      <i className="header__item-icon fas fa-chevron-down"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
                        Áo sơ mi
                      </a>
                      <a href="#" className="dropdown-item">
                        Áo Polo
                      </a>
                      <a href="#" className="dropdown-item">
                        Áo thể thao
                      </a>
                      <a href="#" className="dropdown-item">
                        Áo thun
                      </a>
                    </div>
                  </div>
                  <a href="" className="item-list header__item">
                    <span className="header__item-name">quần short</span>
                  </a>
                  <div className="item-list dropdown">
                    <a href="" className="header__item">
                      <span className="header__item-name">quần lót</span>
                      <i className="header__item-icon fas fa-chevron-down"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
                        quần lót Trunk
                      </a>
                      <a href="#" className="dropdown-item">
                        quần lót Brief
                      </a>
                      <a href="#" className="dropdown-item">
                        quần lót Boxer Brief
                      </a>
                    </div>
                  </div>
                  <div className="item-list dropdown">
                    <a href="" className="header__item">
                      <span className="header__item-name">phụ kiện</span>
                      <i className="header__item-icon fas fa-chevron-down"></i>
                    </a>
                    <div className="dropdown-menu">
                      <a href="#" className="dropdown-item">
                        tất
                      </a>
                      <a href="#" className="dropdown-item">
                        khẩu trang
                      </a>
                      <a href="#" className="dropdown-item">
                        phụ kiện khác
                      </a>
                    </div>
                  </div>
                  <Link to="/about" className="item-list header__item">
                    <span className="header__item-name">ganZblog</span>
                  </Link>
                  <Link to="/choosesize" className="item-list header__item">
                    <span className="header__item-name">chọn size</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="header__card">
              <i
                className="search-icon-mobile fas fa-search"
                onclick="inputOpenSearch()"
              ></i>
              <i
                className="menu-icon-mobile fas fa-bars"
                onclick="mobileMenu()"
              ></i>
              <div className="header__cart-wrap">
                <Link to="/cart">
                  <i className="header__card-icon fas fa-shopping-bag"></i>

                  <a className="header__cart-notice">{quantity}</a>
                </Link>
                <div className="header__cart-list">
                  <MiniCart parentCallback={handleSetQuantity} />

                  <div className="header__cart-footer">
                    <p></p>
                    <Link to="/cart">
                      <a href="" className="header__cart-view-cart btn-pay2">
                        Xem giỏ hàng
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
