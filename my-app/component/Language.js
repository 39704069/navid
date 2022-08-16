import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const Language = () => {
  const apiLanguage = [
    {
      id: 1,
      name: "en",
      nameLanguage: "English",
    },
    {
      id: 2,
      name: "fa",
      nameLanguage: "Persian",
    },
  ];

  const [language, setLanguage] = useState("English");
  const { t, i18n } = useTranslation();
  const [mood, setMood] = useState(1);
  const [open, setOpen] = useState(false);

  const changeLanguageHandler = (e) => {
    setLanguage(e.nameLanguage);
    i18n.changeLanguage(e.name);
    setMood(e.id);
  };
  function openOpt() {
    setOpen(prev => !prev);
  }
  return (
    <button id="language" className="language" onClick={()=>openOpt()}>
      <span>{language}</span>
      <img className="language__img--com" src={'image/Vector.png'} alt="" />
      <img className="language__img--mob" src={'image/Vectorkkk.png'} alt="" />

      {open ? (
        <div id={"opt"} className="optgroup">
          {apiLanguage.map((i, index) => {
            return (
              <input
                key={index}
                type="button"
                className={`optgroup__item ${
                  mood === i.id ? "activeItem" : ""
                }`}
                value={i.nameLanguage}
                onClick={() => changeLanguageHandler(i)}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </button>
  );
};

export default Language;
