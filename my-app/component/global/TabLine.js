import React, {useState} from 'react';

const TabLine = () => {
    const tabArray = [
        {
            "id": 1,
            "name": "navid",
            "desc": "wwwwwwwwwqqqqqqqqqqwwwwwwww"
        },
        {
            "id": 2,
            "name": "sara",
            "desc": "'lkfhfsujo;l;d"
        },
        {
            "id": 3,
            "name": "ali",
            "desc": "uuuufkjbnfjahwfauflalehfyegfr"
        },
    ]

    const [desc, setDesc] = useState(tabArray[1].desc);

    const [act, setAct] = useState(1)


    function open_tab(i) {
        setDesc(i.desc);
        setAct(i.id);

    }

    return (
        <div className="tab-main">
            <ul id="check" className="tab-menu">
                {tabArray.map((i, index) => {
                    return (
                        <li id={i.id}
                            key={index}
                            className={`tab-menu__opt ${act === i.id || act === "1" ? "activeTab" : ""}`}
                            onClick={() => open_tab(i)}>
                            <p> {i.name}</p>
                        </li>
                    )
                })}
            </ul>
            <div className="content">
                {undefined ? "error" : desc}
            </div>
        </div>

    );
};

export default TabLine;