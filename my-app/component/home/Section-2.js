import Accordion from "../global/Accordion";
import TabLine from "../global/TabLine";
import React, {useState} from "react";

export default function Section2() {


    return (
        <section className="tab-line">
            <div className="container">
                <h1 className="tab-line__title">Ornare lectus sit amet est</h1>
                <p className="tab-line__text">
                    Lorem ipsum dolor sit amet
                    , consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua
                    . Adipiscing at in tellus integer
                    feugiat scelerisque. A erat nam at
                    lectus urna duis convallis.
                </p>

                <TabLine/>
                <Accordion/>
                <button className="tab-line__btn">
                    Get A Free Quote
                </button>

            </div>

        </section>
    )
}
