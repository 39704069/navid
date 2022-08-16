import Slider from "react-slick";
import { useEffect } from "react";

export default function Section7() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="city">
      <div className="top">
        <img src={"image/city.svg"} className="city__img" />
      </div>
      <div className="bottom">
        <h1 className="city__title">Dui faucibus in ornare quam vivera</h1>
        <p className="city__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Slider className="nav-icon" {...settings}>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
          <li className="nav-icon-item">
            <img className="nav-icon-item__img" src={"image/Frame.png"} />
          </li>
        </Slider>
      </div>
    </section>
  );
}
