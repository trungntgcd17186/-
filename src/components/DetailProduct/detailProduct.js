import React from "react";
import "./detailProduct.css";
import shirt1 from "../../img/shirt1.jpeg";
import shirt2 from "../../img/shirt2.jpeg";
import shirt3 from "../../img/shirt3.jpeg";

function detailProduct(props) {
  return (
    <div>
      <div class="grid">
        <ul class="breadcrumb">
          <li>
            <a href="./index.html">Trang chính</a>
          </li>
          <li>Chi tiết sản phẩm</li>
        </ul>
        <div class="grid-row">
          <div class="content">
            <div class="content-image">
              <div id="image-large" class="content-image__large"></div>
              <div class="content-image__sml">
                <div class="content-image__sml-detail">
                  <img src={shirt1} alt="image" onclick="zoomout(this)" />
                </div>
                <div class="content-image__sml-detail">
                  <img src={shirt2} alt="image" onclick="zoomout(this)" />
                </div>
                <div class="content-image__sml-detail">
                  <img src={shirt3} alt="image" onclick="zoomout(this)" />
                </div>
                <div class="content-image__sml-detail">
                  <img src={shirt2} alt="image" onclick="zoomout(this)" />
                </div>
                <div class="content-image__sml-detail">
                  <img src={shirt3} alt="image" onclick="zoomout(this)" />
                </div>
              </div>
              <div class="content-sticker">
                <i class="fas fa-check"></i>
                <span class="content-sticker__name">Yêu thích</span>
              </div>
              <div class="content-item__sale-off">
                <span class="content-item__percent">10%</span>
                <span class="content-item__sale-off-label">GIẢM</span>
              </div>
            </div>
            <div class="content-description">
              <h2 class="content-description-title">
                HOTÁo Sơ Mi Nam Hàn Quốc Đẹp Hàng Cao Cấp SM0044
              </h2>
              <p class="content-description-solid">
                Đã bán 100+ | 100+ đánh giá
              </p>

              <div class="content-description__star">
                <div class="content-description__star-icon">
                  <i class="description__star-icon fas fa-star"></i>
                  <i class="description__star-icon fas fa-star"></i>
                  <i class="description__star-icon fas fa-star"></i>
                  <i class="description__star-icon fas fa-star"></i>
                  <i class="description__star-icon fas fa-star"></i>
                </div>

                <div class="content-description__des">
                  <span>100% đánh giá 5 sao</span>
                </div>
              </div>

              <div class="content-description__price">
                <h3 class="content__price-name">Giá bán</h3>
                <span class="content__price-sale-off">350.000đ</span>
                <span class="content__price-current">262.500đ</span>
              </div>

              <div class="content-description__color">
                <h3 class="content__color-name">Màu sắc</h3>
                <div class="content__color-detail">
                  <span class="content__color content__color-active">Hồng</span>
                  <span class="content__color">xám</span>
                  <span class="content__color">Nâu</span>
                  <span class="content__color">Đen</span>
                  <span class="content__color">Khói</span>
                  <span class="content__color">Tím</span>
                  <span class="content__color">Trắng</span>
                  <span class="content__color">Xanh</span>
                  <span class="content__color">Vàng nhạt</span>
                  <span class="content__color">Hồng đậm</span>
                  <span class="content__color">Vàng nhạt</span>
                  <span class="content__color">Nâu đen</span>
                  <span class="content__color">Xám khói</span>
                </div>
              </div>

              <div class="content-description__size">
                <h3 class="content__size-name">Kích cỡ</h3>
                <span class="content__size size1 content__size-active">S</span>
                <span class="content__size size2">M</span>
                <span class="content__size size3">L</span>
                <span class="content__size size4">XL</span>
                <span class="content__size size5">XXL</span>
              </div>

              <div class="content-description__quanlity">
                <h3 class="content__quanlity-name">Chọn số lượng </h3>
                <input type="button" value="-" id="inc" onclick="decNumber()" />
                <label id="display">1</label>
                <input type="button" value="+" id="dec" onclick="incNumber()" />
                <p class="description__quanlity-solid">69 sản phẩm có sẵn</p>
              </div>

              <div class="buy__now">
                <button class="btn-add buy__now-cart">
                  <i class="fas fa-shopping-bag"></i>
                  Thêm Vào Giỏ Hàng
                </button>
                <button class="btn-add buy__now-live">Mua Ngay</button>
              </div>
            </div>
          </div>
        </div>
        <div class="description-product">
          <div class="description-product__btn">
            <button
              class="btn-add description-product__detail"
              onclick="showPanelDes(0,'#fa6400')"
            >
              Chi tiết
            </button>
            <button
              class="btn-add description-product__detail"
              onclick="showPanelDes(1,'#fa6400')"
            >
              Cam kết
            </button>
          </div>
          <div class="description-product__dt">
            <div class="product__dt-box">
              <h3 class="description-product__dt-title">chi tiết sản phẩm</h3>
              <div class="product-dt">
                <div class="product-dt__list">
                  <h4 class="product-dt__item">Danh Mục</h4>
                  <p class="product-dt__item-dt">Ganz - Áo - Áo Sơ Mi</p>
                </div>
                <div class="product-dt__list">
                  <h4 class="product-dt__item">Màu Sắc</h4>
                  <p class="product-dt__item-dt">Màu xám khói</p>
                </div>
                <div class="product-dt__list">
                  <h4 class="product-dt__item">Kiểu Áo</h4>
                  <p class="product-dt__item-dt">Áo sơ mi tay dài</p>
                </div>
                <div class="product-dt__list">
                  <h4 class="product-dt__item">Số lượng sản phẩm còn lại</h4>
                  <p class="product-dt__item-dt">69</p>
                </div>
                <div class="product-dt__list">
                  <h4 class="product-dt__item">Địa điểm</h4>
                  <p class="product-dt__item-dt">Gò Vấp, HCM city</p>
                </div>
              </div>
              <h3 class="description-product__dt-title description-product__dt-title-2">
                Mô tả sản phẩm
              </h3>
              <div class="product-dt">
                <p class="product-dt__des">
                  <span>
                    <i class="des-icon fas fa-check"></i>
                  </span>{" "}
                  Đây sẽ là chiếc áo đầu tiên trong tủ đồ của bạn với chất liệu
                  bền vững và thân thiện với môi trường!<br></br>
                  <span>
                    <i class="des-icon fas fa-check"></i>
                  </span>{" "}
                  Nếu bạn đang tìm 1 chiếc áo mỏng nhẹ và có chức năng khử mùi
                  để hạn chế được mùi cơ thể trong suốt ngày dài thì hãy lựa
                  chọn Áo sơ mi nam Café-DriS.<br></br>
                  <span>
                    <i class="des-icon fas fa-check"></i>
                  </span>{" "}
                  Nếu bạn là người yêu môi trường và đang tìm 1 chiếc áo với
                  chất liệu tái chế thân thiện thì hãy lựa chọn Áo sơ mi nam
                  Café-DriS.<br></br>
                  <span>
                    <i class="des-icon fas fa-check"></i>
                  </span>{" "}
                  Nếu bạn muốn tìm một chiếc áo mặc trong những ngày nắng nóng
                  hoặc chiếc áo giúp giảm bớt căng thẳng trong những ngày chạy
                  deadline thì hãy lựa chọn Áo sơ mi nam Café-DriS.<br></br>
                  <span>
                    <i class="des-icon fas fa-check"></i>
                  </span>{" "}
                  Vì Coolmate tin đây chính là chiếc áo thực sự xứng đáng có
                  trong tủ đồ của bạn với công nghệ xử lý và may vượt trội đem
                  lại trải nghiệm tốt nhất đến bạn. <br></br>
                </p>
              </div>
              <div class="product-dt__image"></div>
              <div class="product-dt__material">
                <h3 class="product-dt__material-title">
                  Vải sợi Café là ứng dụng thông minh từ công nghệ vào ngành dệt
                  may, công nghệ sản xuất vải từ bã cafe và chai nhựa, nhằm tạo
                  ra vòng đời mới và đem đến sản phẩm thân thiện với môi trường.
                </h3>
                <p class="product-dt__material-des">
                  Bạn có biết chất thải từ hạt cafe chưa nhiều CH4 - chất thải
                  thúc đẩy nhanh quá trình làm Trái Đất nóng lên và cứ mỗi 3
                  tách cafe và 5 chai nhựa tái chế, sẽ đủ nguyên liệu để tạo ra
                  1 sản phẩm áo cafe. Và chiếc áo bạn mặc chính là sản phẩm
                  tuyệt vời và thông minh vừa giải quyết vấn đề môi trường, vừa
                  đem đến trải nghiệm tuyệt vời bởi các ưu điểm từ hạt cafe.
                </p>
              </div>
              <div class="product-dt__material-img"></div>
            </div>
            <div class="product__dt-box">
              <div class="product-commit">
                <div class="product-commit__detail">
                  <i class="commit-icon fas fa-phone-volume"></i>
                  <span class="commit__detail-des">
                    Hotline <span>1900.27.27.37</span> hỗ trợ từ 8h30 - 22h mỗi
                    ngày
                  </span>
                </div>
                <div class="product-commit__detail">
                  <i class="commit-icon fas fa-truck"></i>
                  <span class="commit__detail-des">
                    Miễn phí vận chuyển <span>đơn từ 0đ</span>
                  </span>
                </div>
                <div class="product-commit__detail">
                  <i class="commit-icon fas fa-box-open"></i>
                  <span class="commit__detail-des">
                    <span>60 ngày đổi</span> trả vì bất kỳ lý do gì
                  </span>
                </div>
                <div class="product-commit__detail">
                  <i class="commit-icon fas fa-history"></i>
                  <span class="commit__detail-des">
                    Giao hàng <span>2-5 ngày</span> (có thể lâu hơn do Covid19)
                  </span>
                </div>
                <div class="product-commit__detail">
                  <i class="commit-icon fas fa-home"></i>
                  <span class="commit__detail-des">
                    Đến <span>tận nơi</span> nhận hàng trả, hoàn tiền trong{" "}
                    <span>24h</span>
                  </span>
                </div>
                <div class="product-commit__detail">
                  <i class="commit-icon fas fa-phone-volume"></i>
                  <span class="commit__detail-des">
                    Đổi trả <span>cực dễ</span> chỉ cần số điện thoại
                  </span>
                </div>
              </div>
              <div class="commit-check">
                <h2 class="commit-check-title">✨✨ Cam kết sản phẩm ✨✨</h2>
                <p class="commit-check-detail">
                  <i class="fas fa-check"></i>
                  Người mẫu: 1m84 - 73kg * Mặc size 2XL
                </p>
                <p class="commit-check-detail">
                  <i class="fas fa-check"></i>
                  Chất liệu: 95% Cotton Compact - 5% Spandex
                </p>
                <p class="commit-check-detail">
                  <i class="fas fa-check"></i>
                  Mềm mại và không gây khó chịu khi mặc
                </p>
                <p class="commit-check-detail">
                  <i class="fas fa-check"></i>
                  Chất liệu co giãn 4 chiều đem lại sự thoải mái suốt ngày dài
                </p>
                <p class="commit-check-detail">
                  <i class="fas fa-check"></i>
                  Bền dai, không bai, nhão, xù lông
                </p>
                <p class="commit-check-detail">
                  <i class="fas fa-check"></i>
                  Sản xuất tại xưởng 8 năm kinh nghiệm tại TP Hồ Chí Minh
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="product-evaluate">
          <h3 class="product-evaluate__title">Đánh giá sản phẩm</h3>
          <div class="product-evaluate__statistic">
            <div class="product-evaluate__statistic-star">
              <h4 class="statistic-star__detail">
                <span>5</span> trên 5
              </h4>
              <div class="statistic-star__list">
                <i class="statistic-star-icon fas fa-star"></i>
                <i class="statistic-star-icon fas fa-star"></i>
                <i class="statistic-star-icon fas fa-star"></i>
                <i class="statistic-star-icon fas fa-star"></i>
                <i class="statistic-star-icon fas fa-star"></i>
              </div>
            </div>
            <div class="product-evaluate__statistic-components">
              <ul class="components-list">
                <li class="components-list__item components-list__item--active">
                  Tất Cả
                </li>
                <li class="components-list__item">5 Sao (28)</li>
                <li class="components-list__item">4 Sao (0)</li>
                <li class="components-list__item">3 Sao (0)</li>
                <li class="components-list__item">2 Sao (0)</li>
                <li class="components-list__item">1 Sao (0)</li>
                <li class="components-list__item">Có Bình Luận (25)</li>
                <li class="components-list__item">Có Hình Ảnh / Video (12)</li>
              </ul>
            </div>
          </div>
          <div class="product__evaluate-box"></div>
        </div>
        <div class="recommend__product">
          <h2 class="recommend__product-title">Recommend For You</h2>
        </div>
      </div>
    </div>
  );
}

export default detailProduct;
