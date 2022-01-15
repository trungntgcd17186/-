import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import yup from "../../validate/yupGlobal";
import Footer from "../Footer/footer";
import "./register.css";

function Register() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const schema = yup.object().shape({
    name: yup.string().required("Vui lòng nhập tên!"),
    password: yup.string().required("Vui lòng nhập mật khẩu!"),
    confirmpassword: yup.string().required("Vui lòng nhập lại mật khẩu!"),
    phone: yup
      .string()
      .min(10, "Số điện thoại quá ngắn, vui lòng nhập đủ 10 số!")
      .max(10, "Số điện thoại quá dài, vui lòng chỉ nhập 10 số!")
      .matches(phoneRegExp, "Vui lòng nhập số điện thoại gồm 10 số!"),
    email: yup
      .string()
      .required("Vui lòng nhập địa chỉ email!")
      .email("Email invalid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onOrderSubmit = (data) => {
    pushData({ ...data, role: "user" });
  };
  const pushData = async (data) => {
    await axios.post("http://localhost:3001/users", data);
    alert("dang ki thanh cong");
  };
  console.log(errors);
  return (
    <div>
      <header className="header">
        <div className="grid">
          <div className="header-with-search">
            <Link to="/" className="header__logo">
              <i className="header__logo-icon fas fa-cannabis"></i>
              <span className="header-search__logo-name">GanZ</span>
            </Link>
          </div>
        </div>
      </header>
      <div className="app__container_register">
        <div className="grid">
          <div className="form-container">
            <form id="form-register" onSubmit={handleSubmit(onOrderSubmit)}>
              <div className="form-login">
                <h1 className="form-header">Đăng kí tài khoản</h1>
                <div className="row">
                  <div hidden>
                    <input name="role" id="role" value="user" />
                  </div>
                </div>
                <div className="row">
                  <div className="input-container">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nhập tên của bạn..."
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="errors">{errors.name.message}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="input-container">
                    <input
                      className="input"
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      placeholder="Nhập số điện thoại của bạn..."
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="errors">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="input-container">
                    <input
                      className="input"
                      type="text"
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
                      className="input"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Nhập mật khẩu..."
                      {...register("password")}
                    />
                    {errors.password && (
                      <p className="errors">{errors.password.message}</p>
                    )}
                    <p
                      className="form-message"
                      id="form-message-phonenumber"
                    ></p>
                  </div>
                </div>
                <div className="row">
                  <div className="input-container">
                    <input
                      className="input"
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="Xác nhận mật khẩu..."
                      {...register("confirmpassword")}
                    />
                    {errors.confirmpassword && (
                      <p className="errors">{errors.confirmpassword.message}</p>
                    )}
                    <p className="form-message"></p>
                  </div>
                </div>
                <div className="row">
                  <div className="btn-register-container">
                    <button type="submit" id="register">
                      TẠO TÀI KHOẢN
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
                  <h5 className="text-forget-password">
                    Bạn đã có tài khoản !
                    <Link to="/login">
                      <a href="./login" className="text-to-go-login">
                        Đăng nhập
                      </a>
                    </Link>
                  </h5>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
