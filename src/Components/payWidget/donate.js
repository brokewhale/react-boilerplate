import React, { useState } from "react";
import { ReactComponent as Hmm } from "../../Components/icons/hmm.svg";
import { ReactComponent as Aha } from "../../Components/icons/aha.svg";
import { ReactComponent as GoOn } from "../../Components/icons/go on.svg";
import { ReactComponent as Yes } from "../../Components/icons/yes.svg";

function Donate() {
  //Making the btn background colour change

  const [activeBtn, setActiveBtn] = useState(0);
  const [prices] = useState(["$0", "$5", "$50", "$500"]);
  let tel = [
    {
      svg: <Hmm />,
      text: "humm..",
    },
    {
      svg: <Aha />,
      text: "ahaa?!",
    },
    {
      svg: <GoOn />,
      text: "go on!",
    },
    {
      svg: <Yes />,
      text: "yess!",
    },
  ];

  const [msg] = useState(tel);

  const changeBg = (index, price) => {
    setActiveBtn(index);
  };

  return (
    <div className="widget_contain">
      <div className="widget">
        <div className="widget_top">
          <div className="top__msg">
            {msg[activeBtn].svg}
            {/* {msg[activeBtn].text} */}
          </div>
        </div>
        <div className="widget_middle">
          <div className="prices">
            {prices.map((price, index) => {
              return (
                <div
                  className={
                    activeBtn === index ? "price selected" : "price back"
                  }
                  onClick={() => changeBg(index, price)}
                >
                  <div className="price_text">{price}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="widget_bottom">
          <div className="widget_bottom-text">donate now</div>
        </div>
      </div>
    </div>
  );
}

export default Donate;
