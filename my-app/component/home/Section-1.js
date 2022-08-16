
export default function Section1() {
    return (
        <section className="about">
            <div className="container">
                <div className="about-left">
                    <img className="about-left__img" src={"image/about.png"}/>
                </div>
                <div className="about-right">
                    <h1 className="about-right__title">Quam portitor masa</h1>
                    <p className="about-right__text">
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna
                        aliqua. Adipiscing at in tellus integer
                        feugiat scelerisque. A erat nam at lectus
                        urna duis convallis. Elementum curabitur
                        vitae nunc sed velit dignissim sodales ut
                        . Dui id ornare arcu odio ut sem nulla. Purus
                        faucibus ornare suspendisse sed. Sed cras
                        ornare arcu dui vivamus arcu felis. Pulvinar
                        etiam non quam lacus suspendisse faucibus
                        interdum. Arcu cursus euismod quis
                        viverra nibh cras pulvinar mattis.
                    </p>
                    <button className="about-right__btn">Read more
                        <img className="about-right__btn--arrow" src="image/arrow right.png"/>

                    </button>
                </div>
            </div>
        </section>
    )
}
