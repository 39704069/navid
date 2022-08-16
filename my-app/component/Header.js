import {useTranslation} from "react-i18next";
import {useState} from "react";
import Language from "./Language";
export default function Header() {
    const { t, i18n } = useTranslation();
    const [mood , setMood] = useState("open")

    function openMenu(e){
        const element =document.getElementById("nav");
        const language =document.getElementById("language");
        if(mood=="open"){
            setMood("close")
        }
        else if(mood=="close"){
            setMood("open")
        }
        element.classList.toggle("openMenu")
        language.classList.toggle("openMenu")
    }

    return (
           <header className="header">
                <div className="menu">
                    <div className="hamburger-menu" onClick={openMenu}>
                        <img className="hamburger-menu__img" src={mood=="open"?"image/menu.svg":"image/close.svg"}/>
                    </div>
                    <div className="logo">
                        <img className="logo__img" src="image/logo_fb_2.png"/>
                    </div>

                    <ul id="nav" className="nav" >
                        <li className="nav__item hover_menu ">{t('name')}</li>
                        <li className="nav__item">home</li>
                        <li className="nav__item">home</li>
                        <li className="nav__item">home</li>
                    </ul>
                        <Language/>

                </div>
                <div className="main-header">
                    <div className="header-left">
                        <h1 className="header-left__title">Elementum ineg enim ney volutp</h1>
                        <p className="header-left__txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                        <button className="header-left__btn-blue">
                            Get A Free Quote
                        </button>
                        <button className="header-left__btn-white">
                            Download Catalog
                        </button>
                    </div>
                    <div className="header-right">
                        <img  className="header-right__img" src="image/jpghhh.png"/>
                    </div>
                </div>
           </header>
    )
}
