import React, { useState } from "react";

const Accordion = () => {
  const [mood, setMood] = useState();

  const tabArray = [
    {
      id: 1,
      name: "navid",
      desc: "wwwwwwwwwqqqqqqqqqqwwwwwwww",
    },
    {
      id: 2,
      name: "sara",
      desc: "'lkfhfsujo;l;d",
    },
    {
      id: 3,
      name: "ali",
      desc: "uuuufkjbnfjahwfauflalehfyegfr",
    },
  ];

  return (
    <div className="accordion">
      {tabArray.map((i, index) => {
        return (
          <div
            key={index}
            className="accordion-item"
            onClick={setMood.bind(null, i.id)}
          >
            <div className="accordion-item__head">
              {i.name}

              <span>
                <img
                  src={
                    mood === i.id ? "image/Vector1.png" : "image/Vector2222.png"
                  }
                  alt=""
                />
              </span>

              <div
                className={`accordion-item__main ${
                  mood === i.id ? "openAccordion" : ""
                }`}
              >
                {i.desc}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
