import React from "react";
import Footer from "../Footer/footer";
import "./about.css";

function About(props) {
  return (
    <div>
      <div className="grid about-container">
        <ul className="breadcrumb2"></ul>

        <h1 className="heading">
          Câu chuyện về <span>GanZ</span>
        </h1>
        <div className="main-container">
          <img
            src="https://www.coolmate.me/images/about-us-model.webp"
            className="about-us-Image"
            alt=""
          />

          <div className="about-us-Content">
            <div className="content-AboutGanZ">
              <p>
                Được hình thành trong thời đại 4.0, GanZ áp dụng sức mạnh của
                công nghệ vào thời trang để đưa ra{" "}
                <span className="text-orange">
                  Giải pháp mua sắm đồ cơ bản cho nam giới
                </span>{" "}
                với mô hình tiện lợi hơn, tiết kiệm hơn - khách hàng có thể mua
                cả tủ đồ đảm bảo chất lượng, giá tốt, giao hàng nhanh chóng, và
                dịch vụ chăm sóc vượt trội.
              </p>
              <p>
                Sứ mệnh của GanZ là giúp nam giới mua sắm dễ dàng hơn bởi GanZ
                tin rằng các đấng mày râu xứng đáng có được điều đó. Bằng chính
                những trải nghiệm lâu dài và nghiên cứu tâm huyết, chúng tôi tin
                rằng bằng cách đưa đến{" "}
                <span className="text-orange">
                  sự đơn giản, tiện lợi và giá cả hợp lý
                </span>{" "}
                sẽ là con đường giúp chúng tôi thực hiện sứ mệnh của mình.
              </p>
              <p>
                Câu chuyện được sinh ra từ tủ đồ của các cánh mày râu, nơi được
                cho là ‘1 màu’, ‘đơn điệu’ và ‘ít được chăm chút’. Bởi lẽ thực
                tế, việc mua sắm đối với các anh là không thường xuyên, ngại
                phải đi nhiều nơi để mua đủ những đồ mình muốn, đặc biệt là
                những món đồ cơ bản nhất. GanZ hiểu được rằng những chiếc áo
                phông, đôi tất hay quần lót sẽ không bao giờ thiếu vắng trong tủ
                đồ và bằng chính sứ mệnh của mình, GanZ sẽ dần thay đổi thói
                quen của các anh bằng cách thức mua hàng tiện lợi nhất và những
                sản phẩm chất lượng tốt nhất.
              </p>
            </div>

            <div className="content-Slogan">
              <h2 className="slogan">Slogan:</h2>
              <p>
                Tăng thêm độ ngầu đến bất tận với áo phông đen slogan 'GanZ'.
                Không đơn thuần là chiếc áo phông đen cổ tròn, phiên bản áo in
                sẽ tăng thêm sự ngầu cho người mặc với công nghệ in hiện đại,
                không gây bí mà còn tăng thêm sự mạnh mẽ và thoải mái.
              </p>
            </div>
          </div>
        </div>

        <h1 className="heading">Lợi ích nổi bật</h1>
        <div className="information">
          <img
            src="https://www.coolmate.me/images/about-us-2.webp"
            className="information--image"
            alt=""
          />
          <div className="information--content information--content-1">
            <p className="title">
              Giải pháp mua đồ mới lạ
              <span className="text-orange">.</span>
            </p>
            <p>
              Quên đi những khoản chi trả kha khá và phải đi nhiều nơi lẻ tẻ để
              có được những món đồ cơ bản nhất như áo thun, quần short, quần
              sịp, tất (vớ), chúng tôi mong muốn thay đổi mọi thứ. Chỉ bằng vài
              cú click chuột và một tủ đồ đầy đủ sẽ đến gõ cửa nhà bạn ngay sau
              đó.
            </p>
          </div>
        </div>

        <div className="information right">
          <div className="information--content information--content-2">
            <p className="title">
              Trải nghiệm mua sắm thông minh
              <span className="text-orange">.</span>
            </p>
            <p>
              GanZ đem lại sự thoải mái nhất trong mua sắm. Bạn có thể tự do xem
              bất kỳ món hàng nào, theo dõi những món đồ muốn mua, mua hàng
              trong tích tắc và thậm chí là có thể đổi trả 60 ngày miễn phí vì
              bất kỳ lý do gì.
            </p>
          </div>
          <img
            src="https://nhatthucmedia.com/images_upload/1c36760797477e192756.jpg"
            className="information--image"
            alt=""
          />
        </div>

        <div className="information">
          <img
            src="https://1.bp.blogspot.com/-DLG9e2Hwjco/XseEzKy2iHI/AAAAAAAAWIY/vy-ZN1repCcgZBMHgf-U8-R0dUBeI5qUwCPcBGAYYCw/s1600/cach-phoi-do-nam-chat2.jpg?dl=1"
            className="information--image"
            alt=""
          />
          <div className="information--content information--content-3">
            <p className="title">
              Giá cả hợp lý
              <span className="text-orange">.</span>
            </p>
            <p>
              Tất cả những gì bạn thấy trên web là tất cả những gì bạn phải trả,
              cam kết không có chi phí phát sinh trong quá trình mua và đổi trả
              hàng.
            </p>
          </div>
        </div>

        <div className="choose-GanZ">
          <h2>Thoải mái hơn - Tiện lợi hơn - Hợp lý hơn</h2>
          <div className="choose-GanZ-2">
            <p>Chọn</p>
            <button className="btn-pay2">GanZ</button>
            <p>?</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
