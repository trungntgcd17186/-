import React from "react";
import "./contact.css";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";
function Contact(props) {
  return (
    <div>
      <div class="navbar">
        <h1 class="title1">Xin chào. GanZ có thể giúp gì cho bạn?</h1>

        <div class="dropdown">
          <a href="help.html">
            <input
              type="text"
              id="myInput"
              onclick=""
              onkeyup="filterFunction()"
              placeholder="Search for names.."
            />
          </a>
        </div>
      </div>

      <div class="contact-content">
        <h1 class="contact-header">Đội chăm sóc khách hàng GanZ</h1>
        <p>
          Chúng tôi muốn lắng nghe câu hỏi và ý kiến đóng góp từ bạn. Hãy phản
          hồi cho GanZ biết vấn đề của bạn nhé! Chúng tôi sẽ liên hệ lại bạn
          trong 24h tiếp theo.
        </p>
      </div>

      <div class="contact-fill-info">
        <div class="fill-info">
          <div>
            <p>
              <span class="change-color">*</span> Bạn cần hỗ trợ với vai trò là
              người bán hay người mua?
            </p>
            <select name="user" id="user" onchange="onChangeOption()">
              <option value="seller">Người bán</option>
              <option value="customer">Người mua</option>
            </select>

            <p>
              <span class="change-color">*</span> Bạn thắc mắc về vấn đề nào?
            </p>
            <select name="topic" id="topic" onchange="onChangeOption()">
              <option value="Về việc giao hàng của GanZ">
                Về việc giao hàng của GanZ
              </option>
              <option value="Trải nghiệm mua hàng trực tiếp">
                Trải nghiệm mua hàng trực tiếp
              </option>
              <option value="Đổi/trả hàng với GanZ">
                Đổi/trả hàng với GanZ
              </option>
              <option value="Các vấn đề liên quan đến đơn hàng">
                Các vấn đề liên quan đến đơn hàng
              </option>
            </select>

            <p>
              <span class="change-color">*</span> Địa chỉ email của bạn
            </p>
            <input
              class="contact-email-input1"
              id="support-email"
              name="support-email"
              type="email"
              placeholder="Điền địa chỉ email của bạn"
            />

            <p>
              <span class="change-color">*</span> Nội dung phản hồi
            </p>
            <input
              class="contact-input2"
              id="support-content"
              name="support-content"
              type="text"
              placeholder="Điền thêm thông tin chi tiết về thắc mắc/vấn đề của bạn"
            />

            <p>
              Bạn có thể đính kèm tệp với đuôi là jpg/jpeg/png/pdf/mp4. Dung
              lượng tệp không quá 4.5MB.
            </p>

            <input type="file" id="file-uploader" />

            <button type="submit" id="send-request">
              Gửi phản hồi
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
