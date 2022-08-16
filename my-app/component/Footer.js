

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-main">
                        <div className="footer-bottom-item">
                            <span  className="footer-bottom-item__title">Lorem Company</span>
                            <p className="footer-bottom-item__text">
                                Pharetra pharetra massa massa ultricies mi. Mi in nulla
                                posuere sollicitudin aliquam ultrices sagittis orci. Lacus
                                laoreet curabitur gravida arcu ac tortor dignissim. Mi tempus
                                imperdiet nulla malesuada. Pharetra pharetra massa massa
                                ultricies mi. Lacus curabitur laoreet. Mi tempus imperdiet
                                nulla malesuada. Congue nisi vitae suscipit tellus mauris a diam.
                                Dui vivamus arcu felis
                                tempus Dui vivamus imperdiet nulla tempus masa malesuada.
                            </p>
                        </div>
                        <div className="footer-bottom-item">
                            <span  className="footer-bottom-item__title">Contact Us</span>
                            <p className="footer-bottom-item__text">
                                Pharetra pharetra massa massa ultricies mi.
                                Mi in nulla posuere sollicitudin aliquam ultrices.
                            </p>
                            <form  className="form-footer">
                                <input className="form-footer__input--text" type="text" placeholder="Enter your email address" />
                                <input className="form-footer__input--btn" type="button" value="Subscribe"  />
                            </form>
                        </div>
                        <div className="footer-bottom-item">
                            <span  className="footer-bottom-item__title">Get In Touch</span>
                            <p className="footer-bottom-item__text">
                                Pharetra pharetra massa massa ultricies mi.
                                Mi in nulla posuere sollicitudin aliquam ultrices.
                            </p>
                            <div className={"socialMedia"}>
                                <div className="socialMedia-item">
                                    <span className="socialMedia-item-left">
                                        <img className="socialMedia-item-left__img"src="image/icon3.png" />
                                    </span>
                                    <span className="socialMedia-item-right">
                                        <label>Whatsapp</label>
                                        <a>012-345-6789</a>
                                    </span>
                                </div>
                                <div className="socialMedia-item">
                                    <span className="socialMedia-item-left">
                                        <img className="socialMedia-item-left__img"src="image/icon1.png" />
                                    </span>
                                    <span className="socialMedia-item-right">
                                        <label>Whatsapp</label>
                                        <a>012-345-6789</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                </div>
                <div className="footer-bottom">
                    <ul className="footer-bottom-nav">
                        <li className="footer-bottom-nav__item">
                            Services
                        </li>
                        <li className="footer-bottom-nav__item">
                            Pricing
                        </li>
                        <li className="footer-bottom-nav__item">
                            About Us
                        </li>
                        <li className="footer-bottom-nav__item">
                            Privacy Policy
                        </li>
                        <li className="footer-bottom-nav__item">
                            Term of Use
                        </li>
                    </ul>
                    <h5 className="footer-bottom__text">Copyright ©  2010-2022 Lorem Company A.B. All rights reserved.</h5>
                </div>

            </div>

        </footer>
    )
}
