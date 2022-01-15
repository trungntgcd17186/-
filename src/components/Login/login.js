import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logoSaleNoti from "../../../src/img/logoSaleNoti.png";
import yup from "../../validate/yupGlobal";
import "../Login/login.css";

function Login() {
  const schema = yup.object().shape({
    password: yup.string().required("Vui lòng nhập mật khẩu!"),
    email: yup
      .string()
      .required("Vui lòng nhập địa chỉ email!")
      .email("Email invalid"),
  });
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onOrderSubmit = (dataLogin) => {
    axios.get("http://localhost:3001/users").then((response) => {
      const checkUser = response.data.find((el) => el.email == dataLogin.email);
      if (checkUser) {
        if (checkUser.password == dataLogin.password) {
          if (checkUser.role == "user") {
            return navigate("/");
          }
          if (checkUser.role == "admin") {
            return navigate("/dashboard");
          }
        } else {
          alert("sai mat khau");
        }
      } else {
        alert("tai khoan khong ton tai");
      }
    });
  };

  return (
    <div>
    
      <div className="app__container2">
        <div className="grid">
          <div className="form-container">
            <div><Link to="/">Trang chủ</Link></div>
            <form id="form-login" onSubmit={handleSubmit(onOrderSubmit)}>
              <div className="form-login">
                <h1 className="form-header">Đăng Nhập</h1>
                <div className="row">
                  <div className="input-container">
                    <input
                      type="text"
                      className="input-email"
                      name="email"
                      id="email"
                      placeholder="Nhập địa chỉ email của bạn..."
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="errors">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="input-container">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Nhập mật khẩu..."
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="errors">{errors.password.message}</p>
                    )}
                  </div>
                  <div className="row" hidden>
                    <div className="role">
                      <input name="role" id="role" value="user" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="btn-login-container"></div>
                    <button type="submit" id="login">
                      ĐĂNG NHẬP
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="or">hoặc</div>
                </div>
                <div className="row">
                  <div className="btn-container">
                    <button className="btn facebook-btn">
                      <p className="loginbyfacebook-text">
                        Đăng nhập bằng tài khoản Facebook
                      </p>
                      <i className="fab fa-facebook-f"></i>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <h5 className="text-forget-password">Quên mật khẩu?</h5>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="footerLogin">
        <div className="grid">
          <div className="content__certification">
            <div className="content__certification-title">
              <h2 className="content__certification-text">
                @ CÔNG TY TNHH GANZ ASIA
              </h2>
              <p className="content__certification-des">
                Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh
                nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày
                20/02/2019.
              </p>
            </div>
            <div className="content__certification-logo">
              <img
                src={logoSaleNoti}
                alt=""
                className="content__certification-img"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
