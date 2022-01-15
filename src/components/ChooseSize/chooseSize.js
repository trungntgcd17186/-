import React from "react";
import "./chooseSize.css";
import size1 from "../../img/size_aosomidaitay.jpg";
import size2 from "../../img/size_aosomingantay.jpg";
import size3 from "../../img/size_aothun.jpg";
import size4 from "../../img/size_quanshort.jpg";
import size5 from "../../img/size_quankaki.jpg";
import size6 from "../../img/size_quanboxer.jpg";
import Footer from "../Footer/footer";

function ChooseSize(props) {
  return (
    <div>
      <div className="grid choose-size-container">
        <ul className="breadcrumb2"></ul>
        <h1 className="heading">HƯỚNG DẪN CHỌN SIZE CHUẨN</h1>
        <p className="note">
          * Thông số cơ bản của các sản phẩm coolmate: Lấy chiếc áo mà các bạn
          đang mặc và cảm thấy vừa nhất sau đó đo các kích thước của áo và đối
          chiếu với bảng thông số của chúng tôi theo các kích thước sau:
        </p>
        <ul className="link-to-size">
          <li>Bạn muốn chọn size cho:</li>
          <li>
            <a href="#sizeAo">Size áo</a>
          </li>
          <li>
            <a href="#sizeQuan">Size quần</a>
          </li>
          <li>
            <a href="#sizeUnderwear">Size underwear</a>
          </li>
        </ul>
        <div className="product-size-container" id="sizeAo">
          <div className="general-type">
            <p className="type-product">
              Size <span>ÁO</span>
            </p>
          </div>
          <p className="type-of-shirt">
            <span className="text-orange">1.</span>
            Áo sơ mi nam dài tay
          </p>
          <div className="guide-container">
            <div className="table-container">
              <table className="choose-size">
                <tr>
                  <th className="text-orange">Thông số(cm)</th>
                  <th>
                    <h4 className="text-orange">S</h4>
                    <p>1m55-1m59</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">M</h4>
                    <p>1m60-1m65</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">L</h4>
                    <p>1m66-1m72</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">XL</h4>
                    <p>1m73-1m77</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">2XL</h4>
                    <p>1m78-1m85</p>
                    <p>48kg-54kg</p>
                  </th>
                </tr>
                <tr>
                  <td className="text--dark">Dài áo</td>
                  <td>73</td>
                  <td>74</td>
                  <td>75</td>
                  <td>76</td>
                  <td>77</td>
                </tr>
                <tr>
                  <td className="text--dark">Ngang ngực</td>
                  <td>49</td>
                  <td>51</td>
                  <td>53</td>
                  <td>55</td>
                  <td>57</td>
                </tr>
                <tr>
                  <td className="text--dark">Dài tay</td>
                  <td>58</td>
                  <td>59</td>
                  <td>60</td>
                  <td>61</td>
                  <td>62</td>
                </tr>
                <tr>
                  <td className="text--dark">Rộng vai</td>
                  <td>44</td>
                  <td>45</td>
                  <td>46</td>
                  <td>47</td>
                  <td>48</td>
                </tr>
              </table>
            </div>
            <div className="container-img">
              <img
                src={size1}
                alt="Illustration image"
                className="illustration-img"
              />
            </div>
          </div>

          <p className="type-of-shirt text-center my-3">
            <span className="text-orange">2.</span>
            Áo sơ mi ngắn tay
          </p>
          <div className="guide-container">
            <div className="table-container">
              <table className="choose-size">
                <tr>
                  <th className="text-orange">Thông số(cm)</th>
                  <th>
                    <h4 className="text-orange">S</h4>
                    <p>1m55-1m59</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">M</h4>
                    <p>1m60-1m65</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">L</h4>
                    <p>1m66-1m72</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">XL</h4>
                    <p>1m73-1m77</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">2XL</h4>
                    <p>1m78-1m85</p>
                    <p>48kg-54kg</p>
                  </th>
                </tr>
                <tr>
                  <td className="text--dark">Dài áo</td>
                  <td>73</td>
                  <td>74</td>
                  <td>75</td>
                  <td>76</td>
                  <td>77</td>
                </tr>
                <tr>
                  <td className="text--dark">Ngang ngực</td>
                  <td>49</td>
                  <td>51</td>
                  <td>53</td>
                  <td>55</td>
                  <td>57</td>
                </tr>
                <tr>
                  <td className="text--dark">Dài tay</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                </tr>
                <tr>
                  <td className="text--dark">Rộng vai</td>
                  <td>44</td>
                  <td>45</td>
                  <td>46</td>
                  <td>47</td>
                  <td>48</td>
                </tr>
              </table>
            </div>
            <div className="container-img">
              <img
                src={size2}
                alt="Illustration image"
                className="illustration-img"
              />
            </div>
          </div>

          <p className="type-of-shirt text-center my-3">
            <span className="text-orange">3.</span>
            Áo thun trơn
          </p>
          <div className="guide-container">
            <div className="table-container">
              <table className="choose-size">
                <tr>
                  <th className="text-orange">Thông số(cm)</th>
                  <th>
                    <h4 className="text-orange">S</h4>
                    <p>1m55-1m59</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">M</h4>
                    <p>1m60-1m65</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">L</h4>
                    <p>1m66-1m72</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">XL</h4>
                    <p>1m73-1m77</p>
                    <p>48kg-54kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">2XL</h4>
                    <p>1m78-1m85</p>
                    <p>48kg-54kg</p>
                  </th>
                </tr>
                <tr>
                  <td className="text--dark">Dài áo</td>
                  <td>65</td>
                  <td>67</td>
                  <td>69</td>
                  <td>71</td>
                  <td>73</td>
                </tr>
                <tr>
                  <td className="text--dark">Ngang ngực</td>
                  <td>48</td>
                  <td>50</td>
                  <td>52</td>
                  <td>54</td>
                  <td>56</td>
                </tr>
                <tr>
                  <td className="text--dark">Dài tay</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td className="text--dark">Rộng vai</td>
                  <td>38</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                  <td>46</td>
                </tr>
              </table>
            </div>
            <div className="container-img">
              <img
                src={size3}
                alt="Illustration image"
                className="illustration-img"
              />
            </div>
          </div>
        </div>

        <div className="product-size-container" id="sizeQuan">
          <div className="general-type my-3">
            <p className="type-product">
              Size <span>QUẦN</span>
            </p>
          </div>
          <p className="type-of-shirt text-center my-3">
            <span className="text-orange">1.</span>
            Quần short thể thao
          </p>
          <div className="guide-container">
            <div className="container-img">
              <img
                src={size4}
                alt="Illustration image"
                className="illustration-img"
              />
            </div>
            <div className="table-container">
              <table className="choose-size">
                <tr>
                  <th className="text-orange">Thông số(cm)</th>
                  <th>
                    <h4 className="text-orange">M</h4>
                    <p>1m55-1m62</p>
                    <p>51kg-59kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">L</h4>
                    <p>1m63-1m69</p>
                    <p>60kg-68kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">XL</h4>
                    <p>1m70-1m76</p>
                    <p>69kg-77kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">2XL</h4>
                    <p>1m77-1m85</p>
                    <p>78kg-85kg</p>
                  </th>
                </tr>
                <tr>
                  <td className="text--dark">Rộng CAP 1/2</td>
                  <td>35</td>
                  <td>37</td>
                  <td>39</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td className="text--dark">Rộng mông</td>
                  <td>47</td>
                  <td>49</td>
                  <td>51</td>
                  <td>53</td>
                </tr>
                <tr>
                  <td className="text--dark">Rộng ngang ống 1/2</td>
                  <td>26.5</td>
                  <td>27</td>
                  <td>27.5</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td className="text--dark">Dài quần</td>
                  <td>45</td>
                  <td>47</td>
                  <td>49</td>
                  <td>51</td>
                </tr>
              </table>
            </div>
          </div>

          <p className="type-of-shirt text-center my-3">
            <span className="text-orange">2.</span>
            Quần short kaki
          </p>
          <div className="guide-container">
            <div className="container-img">
              <img
                src={size5}
                alt="Illustration image"
                className="illustration-img"
              />
            </div>
            <div className="table-container">
              <table className="choose-size">
                <tr>
                  <th className="text-orange">Thông số(cm)</th>
                  <th>
                    <h4 className="text-orange">M</h4>
                    <p>1m55-1m62</p>
                    <p>51kg-59kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">L</h4>
                    <p>1m63-1m69</p>
                    <p>60kg-68kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">XL</h4>
                    <p>1m70-1m76</p>
                    <p>69kg-77kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">2XL</h4>
                    <p>1m77-1m85</p>
                    <p>78kg-85kg</p>
                  </th>
                </tr>
                <tr>
                  <td className="text--dark">Rộng CAP 1/2</td>
                  <td>40</td>
                  <td>42</td>
                  <td>44</td>
                  <td>46</td>
                </tr>
                <tr>
                  <td className="text--dark">Rộng mông</td>
                  <td>49</td>
                  <td>51</td>
                  <td>53</td>
                  <td>55</td>
                </tr>
                <tr>
                  <td className="text--dark">Rộng ngang ống 1/2</td>
                  <td>24</td>
                  <td>24.5</td>
                  <td>25</td>
                  <td>25.5</td>
                </tr>
                <tr>
                  <td className="text--dark">Dài quần</td>
                  <td>48</td>
                  <td>50</td>
                  <td>52</td>
                  <td>54</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="product-size-container" id="sizeUnderwear">
          <div className="general-type my-3">
            <p className="type-product">
              Size <span>UNDERWEAR</span>
            </p>
          </div>
          <p className="type-of-shirt text-center my-3">
            <span className="text-orange">1.</span>
            Quần Boxer
          </p>
          <div className="guide-container">
            <div className="table-container">
              <table className="choose-size">
                <tr>
                  <th className="text-orange">Thông số(cm)</th>
                  <th>
                    <h4 className="text-orange">M</h4>
                    <p>1m55-1m62</p>
                    <p>51kg-59kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">L</h4>
                    <p>1m63-1m69</p>
                    <p>60kg-68kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">XL</h4>
                    <p>1m70-1m76</p>
                    <p>69kg-77kg</p>
                  </th>
                  <th>
                    <h4 className="text-orange">2XL</h4>
                    <p>1m77-1m85</p>
                    <p>78kg-85kg</p>
                  </th>
                </tr>
                <tr>
                  <td className="text--dark"> Lưng quần đo êm 1/2</td>
                  <td>31</td>
                  <td>33</td>
                  <td>35</td>
                  <td>37</td>
                </tr>
                <tr>
                  <td className="text--dark">Ống quần đo êm 1/2</td>
                  <td>18.5</td>
                  <td>19.5</td>
                  <td>20.5</td>
                  <td>21.5</td>
                </tr>
                <tr>
                  <td className="text--dark">Dài quần + cạp</td>
                  <td>26</td>
                  <td>27.5</td>
                  <td>29.5</td>
                  <td>30.5</td>
                </tr>
              </table>
            </div>
            <div className="container-img">
              <img
                src={size6}
                alt="Illustration image"
                className="illustration-img"
              />
            </div>
          </div>
        </div>

        <div className="note-container">
          <h4 className="note__heading text-orange">
            <i className="fas fa-certificate"></i>
            Trường hợp số đo của bạn nằm trong khoảng giữa các size với nhau:
          </h4>
          <p className="note__content">
            Với quần short, bạn hãy lựa chọn ưu{" "}
            <strong>tiên theo cân nặng</strong>.
          </p>
          <p className="note__content">
            Ví dụ chiều cao của bạn theo size M nhưng cân nặng theo size L, hãy
            chọn L.
          </p>
          <p className="note__content">
            <strong>97%</strong> khách hàng của chúng tôi đã{" "}
            <strong>chọn đúng size</strong> theo cách này.
          </p>
          <p className="note__content">
            * Lưu ý: Các hướng dẫn về chọn Size chỉ mang tính tương đối chính
            xác, nếu bạn chưa chắc chắn xin vui lòng liên hệ trực tiếp với chúng
            tôi để được tư vấn.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChooseSize;
