import Slider from "react-slick";

export default function Section4() {
  let settings = {
    dots: false,
    infinite: false,
    fade: true,
    speed: 50,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="client-slider">
      <div className="container">
        <h1 className="client-slider__text">Felis imperdiet proin fermentum</h1>
        <p className="client-slider__title">
          Erat pellentesque adipiscing commodo elit at imperdiet. Tellus mauris
          a diam maecenas. Vitae congue eu consequat ac. Malesuada fames ac
          turpis egestas maecenas pharetra convallis posuere. Sed ullamcorper
          morbi tincidunt ornare. Pellentesque diam volutpat commodo sed
          egestas.
        </p>

        <Slider className="slider" {...settings}>
          <div className="slider-item">
            <div className="slider-left">
              <h1 className="slider-left__title">Pretium aenean pharetra</h1>
              <p className="slider-left__text">
                Erat pellentesque adipiscing commodo elit at imperdiet. Tellus
                mauris a diam maecenas. Vitae congue eu consequat ac. Malesuada
                fames ac turpis egestas maecenas pharetra convallis posuere. Sed
                ullamcorper morbi tincidunt ornare. Pellentesque diam volutpat
                commodo sed egestas.
              </p>
            </div>
            <div className="slider-right">
              <img className="slider-right__img" />
            </div>
          </div>
          <div className="slider-item">
            <div className="slider-left">
              <h1 className="slider-left__title">Pretium aenean pharetra</h1>
              <p className="slider-left__text">
                Erat pellentesque adipiscing Amet mauris commodo quis imperdiet
                massa tincidunt.
              </p>
            </div>
            <div className="slider-right">
              <img className="slider-right__img" src={"image/jpg.png"} />
            </div>
          </div>
        </Slider>
        <button className="client-slider__btn">Get A Free Quote</button>
      </div>
    </section>
  );
}
