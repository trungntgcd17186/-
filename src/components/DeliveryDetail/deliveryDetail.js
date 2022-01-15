import React from "react";
import "./deliveryDetail.css";
import delivery from "../../img/download.png";
import delivery2 from "../../img/delivery.png";
import Footer from "../../components/Footer/footer";

function DeliveryDetail(props) {
  return (
    <div>
      <div class="delivery-container">
        <div class="grid">
          <div class="delivery-content">
            <h1 class="delivery-container__heading">
              11 DỊCH VỤ TẠI GANZ <br></br>
              CÓ THỂ BẠN CHƯA BIẾT
            </h1>
            <p class="delivery-container__description">
              Thương mại điện tử (TMĐT) là một hình thức mua sắm mới ở Việt Nam
              trong mấy năm trở lại đây. Không ai phủ nhận được những sự tiện
              lợi mà TMĐT mang lại. Chỉ việc ngồi nhà, một chiếc Smartphone vài
              cú click chuột là đã có ngay một món đồ được giao tới tận cửa.
            </p>
            <p class="delivery-container__description">
              Tuy nhiên, cũng như một "đứa trẻ mới lớn" thì TMĐT cũng mang lại
              không ít những vấn đề rắc rối.
            </p>
            <p class="delivery-container__description">
              Việc nhận được những sản phẩm khác hoàn toàn mô tả và hình ảnh
              đăng tải không còn là hiếm gặp. <br></br>
              Sau khi liên hệ với Dịch vụ khách hàng thì việc đổi/trả diễn ra
              cực kỳ phiền toái và không phải lúc nào người mua cũng được hỗ trợ
              xứng đáng.<br></br>
              Mua một sản phẩm mà sau 4-5 ngày mới nhận được, và khi nhận thì
              hộp đồ không còn được nguyên vẹn nữa...
            </p>
            <p class="delivery-container__description">
              Đây là những vấn đề đã và đang xảy ra hàng ngày, và chính điều này
              đang làm cản trở TMĐT phát triển ở Việt Nam.<br></br>
              Ganz tin tưởng rằng TMĐT là một mô hình tốt, và mang lại rất nhiều
              lợi ích cho khách hàng, có chăng vấn đề phát sinh là do người bán
              hàng chưa thực sự làm tốt nhất vai trò của mình. Và GanZ muốn thay
              đổi điều đó!
            </p>
            <p class="delivery-container__description">
              Tại GanZ bạn sẽ thấy rất nhiều những chính sách, những dịch vụ và
              trải nghiệm mà RẤT ÍT KHI TÌM THẤY ở những nơi khác. Tất cả những
              điều chúng tôi đang và sẽ theo đuổi chỉ để đảm bảo rằng 100% khách
              hàng mua hàng tại GanZ hài lòng.
            </p>
            <p class="delivery-container__description">
              Cùng xem trải nghiệm mua sắm Online tại GanZ có gì hay ho nhé!
            </p>
            <div class="delivery-content__color"></div>
          </div>
        </div>
        <div class="delivery-parallax">
          <div class="delivery-parallax-icon">
            <img src={delivery} alt="" class="delivery-parallax__img" />
          </div>
        </div>
        <div class="grid">
          <div class="delivery-content__detail">
            <div class="delivery-content__detail-des">
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">01.</span>
                  <br></br>
                  Liên hệ Chăm sóc khách hàng dễ dàng
                </h3>
                <p class="detail__des-dt">
                  Tổng đài Ganz với số Hotline 1900272737 rất dễ tìm kiếm và
                  xuất hiện khắp mọi nơi từ Website, Email, Fanpage, trong nhãn
                  mác, bao bì đóng gói... Hơn thế nữa, đội ngũ chăm sóc khách
                  hàng Ganz cam kết 100% cuộc gọi sẽ được trả lời, nếu như bị
                  gọi nhỡ (do quá tải) sẽ được gọi lại ngay lập tức.
                </p>
                <p class="detail__des-dt">
                  Tổng đài CSKH Ganz sẽ thực sự là nơi luôn luôn nghe khi khách
                  hàng gọi, theo đúng ý nghĩa của 1 tổng đài chăm sóc khách hàng
                  thực sự.
                </p>
                <p class="detail__des-dt">
                  Ngoài ra khách hàng có thể liên hệ với Ganz thông qua rất
                  nhiều kênh khác nhau như: Email, Chat, Để lại đánh giá, bình
                  luận ở các kênh mạng xã hội của Ganz.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">02.</span>
                  <br></br>
                  Thời gian trao đổi với các bạn tổng đài viên là không hạn chế
                </h3>
                <p class="detail__des-dt">
                  Ganz không giới hạn thời gian phải kết thúc một cuộc gọi.
                  Chúng tôi khuyến khích nhân viên CSKH nói chuyện và trao đổi
                  với khách hàng nhiều hơn. Cuộc gọi dài nhất tới thời điểm hiện
                  tại chúng tôi ghi nhận là kéo dài 48 phút.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">03.</span>
                  <br></br>
                  Văn hoá say YES trong xử lý tình huống
                </h3>
                <p class="detail__des-dt">
                  Đội ngũ CSKH của chúng tôi cam kết rằng 99.99% các vấn đề của
                  khách hàng khi gọi tới sẽ được giải quyết NHANH, ĐẦY ĐỦ, và
                  ĐÁNG NHỚ. CSKH của Ganz được trao nhiều công cụ, và quyền hành
                  để giúp có thể hỗ trợ khách hàng ngay lập tức, với mục tiêu
                  cuối cùng là mang lại trải nghiệm khách hàng hài lòng 100%.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">04.</span>
                  <br></br>
                  Sự tương tác mang tính cá nhân hoá{" "}
                </h3>
                <p class="detail__des-dt">
                  Khác với các tổng đài viên trả lời theo cấu trúc có sẵn
                </p>
                <p class="detail__des-dt">
                  Khác với các Fanpage phản hồi tự động, và theo những form lặp
                  lại
                </p>
                <p class="detail__des-dt">
                  Ở Ganz, mọi thứ đều không có kịch bản trước. CSKH của chúng
                  tôi được đào tạo để có thể xử lý theo từng trường hợp cụ thể
                  theo yêu cầu của khách hàng. Ganz tin rằng mỗi khách hàng có
                  những vấn đề và nhu cầu khác nhau, do đó không thể áp dụng
                  những công thức giống nhau được.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">05.</span>
                  <br></br>
                  CSKH hoạt động 13,5h/1 ngày và 7 ngày/1 tuần
                </h3>
                <p class="detail__des-dt">
                  Trong bất cứ khi nào thuộc khung thời gian từ 8h30 tới 22:00
                  trong tất cả các ngày trong tuần, bạn đều có thể tâm sự với
                  team CSKH Ganz. Chúng tôi hướng tới một tổng đài hỗ trợ 24/7
                  trong tương lai.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">06.</span>
                  <br></br>
                  Dịch vụ đổi trả miễn phí 60 ngày với BẤT CỨ LÝ DO GÌ{" "}
                </h3>
                <p class="detail__des-dt">
                  Minh hoạ đơn giản cho dịch vụ này đó là bạn có thể mua 1 chiếc
                  áo Ganz và mặc nó trong vòng 59 ngày. Sau đó, nếu cảm thấy
                  không hài lòng, bạn hoàn toàn có thể gửi yêu cầu đổi sang
                  chiếc áo mới hoặc hoàn tiền. Mọi thứ sẽ được xử lý trong vòng
                  24 tiếng mà không hề có bất cứ khó khăn gì.
                </p>
                <p class="detail__des-dt">
                  Tổng đài CSKH Ganz sẽ thực sự là nơi luôn luôn nghe khi khách
                  hàng gọi, theo đúng ý nghĩa của 1 tổng đài chăm sóc khách hàng
                  thực sự.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">06.</span>
                  <br></br>
                  Dịch vụ đổi trả tận nơi của Ganz{" "}
                </h3>
                <p class="detail__des-dt">
                  Việc mua 1 sản phẩm và cần đổi trả vì không vừa là một sự bất
                  tiện. Không phải ai cũng có thể sắp xếp thời gian để mang ra
                  bưu điện gửi lại và đợi 1 thời gian sau đó mới nhận lại món đồ
                  mới.
                </p>
                <p class="detail__des-dt">
                  Với Ganz, mọi thứ đơn giản hơn rất nhiều. Bưu tá của chúng tôi
                  sẽ mang sản phẩm mới và thu hồi sản phẩm cũ tại nhà hoặc cơ
                  quan theo yêu cầu của khách hàng trong 1 lần duy nhất.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">07.</span>
                  <br></br>
                  Trả hàng hoàn tiền và có bưu tá lấy hàng tận nơi{" "}
                </h3>
                <p class="detail__des-dt">
                  Có lẽ chỉ có Ganz mới có thể xử lý trả hàng hoàn tiền trong
                  vòng 24h. Vâng, nếu bạn không hài lòng thì chúng tôi sẽ hoàn
                  tiền vào ví điện tử hoặc tài khoản của bạn trong vòng TỐI ĐA
                  LÀ 24H kể từ khi gửi yêu cầu.
                </p>
                <p class="detail__des-dt">
                  Ngoài ra, hàng cần gửi trả cũng sẽ có bưu tá của chúng tôi tới
                  tận nơi để lấy, bạn không cần phải mang đi đâu cả.
                </p>
                <p class="detail__des-dt">
                  ⇒ Toàn bộ quá trình này là KHÔNG THU PHÍ.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">08.</span>
                  <br></br>
                  Giao hàng nhanh mà không thu thêm phí
                </h3>
                <p class="detail__des-dt">
                  Ganz hiểu rằng khách hàng đặt hàng Online luôn kỳ vọng nhận
                  hàng sớm nhất có thể, vì thế chúng tôi hợp tác với các đơn vị
                  vận chuyển hàng đầu để đáp ứng yêu cầu này.
                </p>
                <p class="detail__des-dt">
                  Đa số đơn hàng được giao tối đa 24h trong nội thành Hà Nội
                  hoặc Hồ Chí Minh là bạn đã nhận được sản phẩm (trừ trường hợp
                  đơn hàng dạng đặt trước hoặc chưa đủ tồn kho Ganz sẽ gửi đi từ
                  kho vận hành khác tỉnh thì thời gian sẽ là 2-3 ngày và với các
                  tỉnh còn lại cũng chỉ mất 2-3 ngày là đơn hàng sẽ đến tay bạn
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">09.</span>
                  <br></br>
                  Đóng gói cẩn thận
                </h3>
                <p class="detail__des-dt">
                  Mỗi đơn hàng của Ganz được đóng gói 2 lớp, như một gói quà,
                  đảm bảo khách hàng nhận được sản phẩm sẽ thực sự trọn vẹn.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">10.</span>
                  <br></br>
                  Liên hệ Chăm sóc khách hàng dễ dàng
                </h3>
                <p class="detail__des-dt">
                  Tổng đài Ganz với số Hotline 1900272737 rất dễ tìm kiếm và
                  xuất hiện khắp mọi nơi từ Website, Email, Fanpage, trong nhãn
                  mác, bao bì đóng gói... Hơn thế nữa, đội ngũ chăm sóc khách
                  hàng Ganz cam kết 100% cuộc gọi sẽ được trả lời, nếu như bị
                  gọi nhỡ (do quá tải) sẽ được gọi lại ngay lập tức.
                </p>
                <p class="detail__des-dt">
                  Tổng đài CSKH Ganz sẽ thực sự là nơi luôn luôn nghe khi khách
                  hàng gọi, theo đúng ý nghĩa của 1 tổng đài chăm sóc khách hàng
                  thực sự.
                </p>
                <p class="detail__des-dt">
                  Ngoài ra khách hàng có thể liên hệ với Ganz thông qua rất
                  nhiều kênh khác nhau như: Email, Chat, Để lại đánh giá, bình
                  luận ở các kênh mạng xã hội của Ganz.
                </p>
              </div>
              <div class="content__detail--des">
                <h3 class="detail__des-title">
                  <span class="detail__des-title-num">11.</span>
                  <br></br>
                  Dịch vụ tặng chiếc tất/vớ bị mất
                </h3>
                <p class="detail__des-dt">
                  Hiểu rằng đàn ông rất hay mất 1 chiếc vớ (mà không hiểu lý do
                  vì sao), và như thế chiếc còn lại hầu như bị bỏ đi. Ở Ganz,
                  khách hàng sẽ nhận được 1 chiếc tất thay thế cho chiếc bị mất.
                  Hãy gửi yêu cầu cho chúng tôi khi bạn gặp tình trạng tương tự,
                  và tôi chắc chắn là sẽ gặp phải thôi.
                </p>
              </div>
            </div>
            <div class="delivery-content__detail-img">
              <div class="detail-img__image">
                <img src={delivery2} alt="" class="image__real" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DeliveryDetail;
