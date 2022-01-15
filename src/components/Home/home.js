import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";
import SimpleSlider from "./slider";
import ProductNewSlider from "./productNewSlider";
import ProductHightlight from "./productHightlight";
import FeedbackSlider from "./feedbackSlider";
//Import Image

import download from "../../img/download.png";
import daphop from "../../img/daphop.jpeg";
import daphop1 from "../../img/daphop1.jpeg";
import daphop2 from "../../img/daphop2.jpeg";
import daphop3 from "../../img/daphop3.jpeg";
import daphop4 from "../../img/3327_Ha_Thu_3.jpeg";
//==================================================//
import Footer from "../Footer/footer";
//==================================================//
import React from "react";

import Product from "../Product/index";
//==================================================//
function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productApi = "http://localhost:3001/products";
    fetch(productApi)
      .then(function (response) {
        return response.json();
      })
      .then(function (datas) {
        setProducts(datas);
      });
  }, []);

  return (
    <div className="app">
      <div className="grid__full-width">
        <div className="app__slider">
          <div className="slider__container">
            <div className="grid">
              <div className="slider__content">
                <div className="slider__container-delivery">
                  <h4 className="slider__container-delivery-name">
                    Delivering Happiness
                  </h4>
                  <h2 className="slider__container-delivery-date">
                    New Shopping
                  </h2>
                  <h2 className="slider__container-delivery-freeship">
                    Experience for Men
                  </h2>
                </div>
                <SimpleSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__express">
        <div className="grid">
          <div className="gird__row">
            <div className="slider__express slider__express-mobile">
              <div className="slider__express-box">
                <i className="express-icon far fa-clock"></i>
                <p className="slider__express-des">
                  Giao hàng <span>24h</span> ở HN & HCM 2-3 ngày ở tỉnh khác
                </p>
              </div>
              <div className="slider__express-box slider__express-box-border">
                <i className="express-icon fas fa-shipping-fast"></i>
                <p className="slider__express-des">
                  Miễn phí vận chuyển <span>cho đơn hàng trên 300k</span>
                </p>
              </div>
              <div className="slider__express-box slider__express-box-border">
                <i className="express-icon fas fa-undo"></i>
                <p className="slider__express-des">
                  <span>60 ngày</span> đổi trả cho bất kì lí do gì
                </p>
              </div>
              <div className="slider__express-box slider__express-box-border">
                <i className="express-icon fas fa-home"></i>
                <p className="slider__express-des">
                  Giao hàng <span>tận nơi</span> nhận hoàn trả, hoàn tiền trong{" "}
                  <span>24h</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__container">
        <div className="grid">
          <div className="grid__row grid__row-table">
            <div className="content__product-new">
              <h2 className="product__new-heading">mới ra mắt</h2>
              <div className="product__new-slide1">
                <ProductNewSlider />
              </div>
            </div>

            <div className="content__product-new">
              <h2 className="product__new-heading2">nổi bật</h2>
              <div className="product__new-slide2">
                <ProductHightlight />
              </div>
            </div>
          </div>

          <div className="feature__product">
            <h2 className="feature__product-title">Sản phẩm phổ biến</h2>
            <div className="feature__product-container">
              <div id="productRender" className="grid__col-2-5">
                {products.map((pr) => (
                  <Product
                    key={pr.id}
                    id={pr.id}
                    title={pr.title}
                    price={pr.price}
                    priceSale={pr.priceSale}
                    image={pr.image}
                    quantity={pr.quantity}
                  />
                ))}
              </div>
              <div className="grid__row grid__row-feature "></div>
            </div>

            <div className="recommend__product">
              <h2 className="recommend__product-title">Đề xuất cho bạn</h2>
              <div className="feature__product-container">
                <div id="productRender" className="grid__col-2-5">
                  {products.map((pr) => (
                    <Product
                      key={pr.id}
                      id={pr.id}
                      title={pr.title}
                      price={pr.price}
                      priceSale={pr.priceSale}
                      image={pr.image}
                      quantity={pr.quantity}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="feedback__customer">
              <div className="feedback__customer-title">
                <div className="feedback__customer-name">
                  <h2>khách hàng nói gì về ganz</h2>
                </div>
              </div>
              <FeedbackSlider />
            </div>
          </div>
        </div>
        <div className="product__process">
          <div className="grid__full-width">
            <div className="product__process-logo">
              <img src={download} alt="logo" className="product__process-img" />
              <h4 className="product__process-title">
                Trải nghiệm mua sắm <span>GanZ</span>
              </h4>
              <h2 className="product__process-text">
                Cam Kết 100% <span>Hài Lòng</span>
              </h2>
            </div>
            <div className="product__background">
              <img
                src={daphop}
                alt="daphop"
                className="product__image-background"
              />
              <img
                src={daphop4}
                alt="daphop"
                className="product__image-background1"
              />
              <img
                src={daphop1}
                alt="daphop"
                className="product__image-background2"
              />
              <img
                src={daphop2}
                alt="daphop"
                className="product__image-background3"
              />
              <img
                src={daphop3}
                alt="daphop"
                className="product__image-background4"
              />
            </div>
          </div>

          <div className="grid">
            <div className="product__process-content">
              <ul className="product__process-list">
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>01. Liên hệ chăm sóc khách hàng dễ dàng</span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>
                      02. Thời gian trao đổi với các bạn tổng đài viên là không
                      hạn chế
                    </span>
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>03. Văn hoá say YES trong xử lý tình huống</span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>04. Sự tương tác mang tính cá nhân hoá </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>
                      05. CSKH hoạt động 13,5h/1 ngày và 7 ngày/1 tuần{" "}
                    </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>
                      06. Dịch vụ đổi trả miễn phí 60 ngày với BẤT CỨ LÝ DO GÌ{" "}
                    </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>07. Dịch vụ đổi trả tận nơi của Coolmate</span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>
                      08. Trả hàng hoàn tiền và có bưu tá lấy hàng tận nơi{" "}
                    </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>09. Giao hàng nhanh mà không thu thêm phí</span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item">
                    <span>10. Đóng gói cẩn thận </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
                <a href="" className="product__process-item-link">
                  <li className="product__process-item product__process-item-end">
                    {" "}
                    <span>11. Dịch vụ tặng chiếc tất/vớ bị mất </span>{" "}
                    <i className="icon-process fas fa-plus"></i>
                  </li>
                </a>
              </ul>
            </div>
          </div>

          <div className="process__produc-url">
            <Link to="/deliverydetail" className="product__process-link">
              <span>Xem chi tiết</span>
            </Link>
          </div>
        </div>
        <div className="grid__full-width">
          <div className="banner">
            <div className="banner__box">
              <h2 className="banner__box-content">
                Mặc <span>Đẹp</span>{" "}
                <p>
                  Sống <span>Chất</span>
                </p>{" "}
                <p className="end">
                  cùng <span>GanZ</span>{" "}
                </p>
              </h2>
            </div>
            <div className="banner__box-image">
              <div className="banner__box1">
                <div className="banner__box-des">
                  <h3 className="banner__box-name">
                    <a href="">
                      Phim Netflix: Đừng bỏ lỡ 12 bộ phim Netflix tháng 9/2021
                      cực hấp dẫn này
                    </a>
                  </h3>
                  <a href="" className="banner__box-link">
                    xem chi tiết
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
              <div className="banner__box2">
                <div className="banner__box-des">
                  <h3 className="banner__box-name">
                    <a href="">Phim chiếu rạp tháng 9/2021 có gì hấp dẫn?</a>
                  </h3>
                  <a href="" className="banner__box-link">
                    xem chi tiết
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
              <div className="banner__box3">
                <div className="banner__box-des">
                  <h3 className="banner__box-name">
                    <a href="">
                      Điểm Danh 10 Địa Điểm Mua Áo Khoác Thể Thao Nam Đẹp Và Uy
                      Tín
                    </a>
                  </h3>
                  <a href="" className="banner__box-link">
                    xem chi tiết
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
              <div className="banner__box4">
                <div className="banner__box-des">
                  <h3 className="banner__box-name">
                    <a href="">
                      Điểm danh một số thrifting shop nổi tiếng nhất tại Hà Nội
                    </a>
                  </h3>
                  <a href="" className="banner__box-link">
                    xem chi tiết
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
