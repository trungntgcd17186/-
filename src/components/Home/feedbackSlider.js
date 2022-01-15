import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";

export default class FeedbackSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      vertical: true,
    };
    return (
      <div>
        <Slider
          {...settings}
          style={{
            width: "100%",
            height: "550px",
          }}
        >
          <div>
            <div className="customer__content-container first">
              <div className="customer__content-box">
                <div className="customer__content-info">
                  <div className="customer__content-star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="customer__content-des">
                    Sản phẩm rất ưng ý. Đóng gói chuyên nghiệp. Một người mua
                    hàng thông thái, không chỉ cần 1 sp (sản phẩm) chất lượng,
                    đóng gói sản phẩm đẹp mà bên cạnh điều đó thái độ Phục Vụ
                    chuyên nghiệp là điều quan trọng nhất, thái độ phục vụ tốt
                    sẽ làm kh(khách hàng) hl (hài lòng), và sec(sẽ) giới thiệu
                    cho nhiều người khác doanh thu tăng trưởng Các bạn đang làm
                    rất tốt điều đó, cố gắng phát huy và nâng cấp phục vụ lên
                    nhé Chúc các bạn thành công hơn nữa..
                  </p>
                  <h4 className="customer__content-name">Sơn Tùng</h4>
                </div>
                <div className="customer__content-img"></div>
              </div>
              <div className="customer__content-box customer__content-box-mobile">
                <div className="customer__content-info">
                  <div className="customer__content-star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="customer__content-des">
                    Mình đã mua set này về mặc thấy rất thích. Vải xịn, mặc
                    thoáng mát, không nóng nực. Sợi vải mềm, co giãn tốt. Còn
                    quần thì dày, cho cảm giác cao cấp, màu đẹp nữa. Đặc biệt
                    giao cực nhanh luôn, sáng nhân viên gọi để xác nhận, chiều
                    5h mình nhận được hàng rồi. Hàng đóng gọi đẹp và chỉn chu,
                    mình rất thích. Chỉ có quần boxer đai quần bóp hơi chật với
                    mình thôi. Và mình thấy giá rất cạnh tranh, combo này có lẽ
                    là best choice rồi. Mình chắc chắn sẽ quay lại gom thêm vài
                    set này nữa, vì mình đơn giản, y như set này vậy.
                  </p>
                  <h4 className="customer__content-name">Đen Vâu</h4>
                </div>
                <div className="customer__content-img"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="customer__content-container">
              <div className="customer__content-box">
                <div className="customer__content-info">
                  <div className="customer__content-star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="customer__content-des">
                    Sản phẩm rất ưng ý. Đóng gói chuyên nghiệp. Một người mua
                    hàng thông thái, không chỉ cần 1 sp (sản phẩm) chất lượng,
                    đóng gói sản phẩm đẹp mà bên cạnh điều đó thái độ Phục Vụ
                    chuyên nghiệp là điều quan trọng nhất, thái độ phục vụ tốt
                    sẽ làm kh(khách hàng) hl (hài lòng), và sec(sẽ) giới thiệu
                    cho nhiều người khác doanh thu tăng trưởng Các bạn đang làm
                    rất tốt điều đó, cố gắng phát huy và nâng cấp phục vụ lên
                    nhé Chúc các bạn thành công hơn nữa..
                  </p>
                  <h4 className="customer__content-name">Hồ Ngọc Hà</h4>
                </div>
                <div className="customer__content-img"></div>
              </div>
              <div className="customer__content-box customer__content-box-mobile">
                <div className="customer__content-info">
                  <div className="customer__content-star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="customer__content-des">
                    Mình đã mua set này về mặc thấy rất thích. Vải xịn, mặc
                    thoáng mát, không nóng nực. Sợi vải mềm, co giãn tốt. Còn
                    quần thì dày, cho cảm giác cao cấp, màu đẹp nữa. Đặc biệt
                    giao cực nhanh luôn, sáng nhân viên gọi để xác nhận, chiều
                    5h mình nhận được hàng rồi. Hàng đóng gọi đẹp và chỉn chu,
                    mình rất thích. Chỉ có quần boxer đai quần bóp hơi chật với
                    mình thôi. Và mình thấy giá rất cạnh tranh, combo này có lẽ
                    là best choice rồi. Mình chắc chắn sẽ quay lại gom thêm vài
                    set này nữa, vì mình đơn giản, y như set này vậy.
                  </p>
                  <h4 className="customer__content-name">Ngọc Trinh</h4>
                </div>
                <div className="customer__content-img"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="customer__content-container">
              <div className="customer__content-box">
                <div className="customer__content-info">
                  <div className="customer__content-star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="customer__content-des">
                    Sản phẩm rất ưng ý. Đóng gói chuyên nghiệp. Một người mua
                    hàng thông thái, không chỉ cần 1 sp (sản phẩm) chất lượng,
                    đóng gói sản phẩm đẹp mà bên cạnh điều đó thái độ Phục Vụ
                    chuyên nghiệp là điều quan trọng nhất, thái độ phục vụ tốt
                    sẽ làm kh(khách hàng) hl (hài lòng), và sec(sẽ) giới thiệu
                    cho nhiều người khác doanh thu tăng trưởng Các bạn đang làm
                    rất tốt điều đó, cố gắng phát huy và nâng cấp phục vụ lên
                    nhé Chúc các bạn thành công hơn nữa..
                  </p>
                  <h4 className="customer__content-name">Kỳ Duyên</h4>
                </div>
                <div className="customer__content-img"></div>
              </div>
              <div className="customer__content-box customer__content-box-mobile">
                <div className="customer__content-info">
                  <div className="customer__content-star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="customer__content-des">
                    Mình đã mua set này về mặc thấy rất thích. Vải xịn, mặc
                    thoáng mát, không nóng nực. Sợi vải mềm, co giãn tốt. Còn
                    quần thì dày, cho cảm giác cao cấp, màu đẹp nữa. Đặc biệt
                    giao cực nhanh luôn, sáng nhân viên gọi để xác nhận, chiều
                    5h mình nhận được hàng rồi. Hàng đóng gọi đẹp và chỉn chu,
                    mình rất thích. Chỉ có quần boxer đai quần bóp hơi chật với
                    mình thôi. Và mình thấy giá rất cạnh tranh, combo này có lẽ
                    là best choice rồi. Mình chắc chắn sẽ quay lại gom thêm vài
                    set này nữa, vì mình đơn giản, y như set này vậy =)))
                  </p>
                  <h4 className="customer__content-name">Sơn Tùng</h4>
                </div>
                <div className="customer__content-img"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="customer__content-container">
              <div className="customer__content-box">
                <div className="customer__content-info">
                  <div className="customer__content-star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="customer__content-des">
                    Sản phẩm rất ưng ý. Đóng gói chuyên nghiệp. Một người mua
                    hàng thông thái, không chỉ cần 1 sp (sản phẩm) chất lượng,
                    đóng gói sản phẩm đẹp mà bên cạnh điều đó thái độ Phục Vụ
                    chuyên nghiệp là điều quan trọng nhất, thái độ phục vụ tốt
                    sẽ làm kh(khách hàng) hl (hài lòng), và sec(sẽ) giới thiệu
                    cho nhiều người khác doanh thu tăng trưởng Các bạn đang làm
                    rất tốt điều đó, cố gắng phát huy và nâng cấp phục vụ lên
                    nhé Chúc các bạn thành công hơn nữa..
                  </p>
                  <h4 className="customer__content-name">Đen Vâu</h4>
                </div>
                <div className="customer__content-img"></div>
              </div>
              <div className="customer__content-box customer__content-box-mobile">
                <div className="customer__content-info">
                  <div className="customer__content-star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="customer__content-des">
                    Mình đã mua set này về mặc thấy rất thích. Vải xịn, mặc
                    thoáng mát, không nóng nực. Sợi vải mềm, co giãn tốt. Còn
                    quần thì dày, cho cảm giác cao cấp, màu đẹp nữa. Đặc biệt
                    giao cực nhanh luôn, sáng nhân viên gọi để xác nhận, chiều
                    5h mình nhận được hàng rồi. Hàng đóng gọi đẹp và chỉn chu,
                    mình rất thích. Chỉ có quần boxer đai quần bóp hơi chật với
                    mình thôi. Và mình thấy giá rất cạnh tranh, combo này có lẽ
                    là best choice rồi. Mình chắc chắn sẽ quay lại gom thêm vài
                    set này nữa, vì mình đơn giản, y như set này vậy.
                  </p>
                  <h4 className="customer__content-name">Hồ Ngọc Hà</h4>
                </div>
                <div className="customer__content-img"></div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
