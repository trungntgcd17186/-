function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="grid">
                    <div class="footer__content">
                        <div class="footer__content-box">
                            <h2 class="content__box-title">Địa chỉ liên hệ</h2>
                            <p class="content__box-description">
                                HUB Hà Nội: <span>Số 103, Đường Vạn Phúc, Phường Vạn Phúc, Quận Hà Đông, TP. Hà Nội</span>
                                HUB Tp HCM: <span>Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh</span>
                                
                            </p>
                        </div>
                        <div class="footer__content-box">
                            <h2 class="content__box-title">Truy cập nhanh</h2>
                            <p class="content__box-description">
                                <span><a href="#">Câu chuyện về GanZ</a></span>
                                <span><a href="#">Lựa chọn size đồ phù hợp</a></span>
                                <span><a href="#">Thế mạnh của GanZ</a></span>
                                <span><a href="#">Điều khoản sử dụng</a></span>
                                <span><a href="#">Dịch vụ giao hàng</a></span>
                                <span>Website: <a class="link-url" href="#">https://www.ganz.com</a> </span>
                            </p>
                        </div>
                        <div class="footer__content-box">
                            <h2 class="content__box-title">Chính sách</h2>
                            <p class="content__box-description">
                                <span><a href="contact.html">Liên hệ</a></span>
                                <span><a href="#">Hỏi đáp</a></span>
                                <span><a href="#">Thông tin tài khoản</a></span>
                                <span><a href="#">Đơn hàng của bạn</a></span>
                                <span><a href="#">Tủ đồ định kỳ của bạn</a></span>
                            </p>
                        </div>
                        <div class="footer__content-box">
                            <h2 class="content__box-title">Liên hệ với chúng tôi</h2>
                            <form class="input-box">
                                <input type="text" class="input-text" placeholder="Enter your Email" />
                                    <a type="submit" class="box-icon-link">
                                        <i class="icon-link fas fa-arrow-right"></i>
                                    </a>
                            </form>
                            <div class="social-box">
                                <a href="#" class="social-link">
                                    <i class="icon-box fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i class="icon-box fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i class="icon-box fab fa-google"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i class="icon-box fab fa-pinterest-p"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="content__certification">
                        <div class="content__certification-title">
                            <h2 class="content__certification-text">@ CÔNG TY TNHH GANZ ASIA</h2>
                            <p class="content__certification-des">Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.</p>
                        </div>

                        <div class="content__certification-logo">
                            <img src="./asset/img/logoSaleNoti.png" alt="" class="content__certification-img" />
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer