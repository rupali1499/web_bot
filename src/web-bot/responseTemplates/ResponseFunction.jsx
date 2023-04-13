import React, { useState } from "react";
import styles from "../WebChatBot.module.css";
import { chatBotJson } from "./webbotResponse";
import bot from "../../../services/bot";

const ResponseFunction = ({ name, botresponse, aiCode, btnFun }) => {
  const [showButtons, setShowButtons] = useState(true);
  var obj = chatBotJson.find((item) => item.aiCode == aiCode);
  const text = botresponse.text_en;

  return (
    <div>
      <div className={styles.other} id="other">
        <p>{text.split("*").join("")}</p>
      </div>
      {botresponse.res_arr_en && (
        <div
          className={styles.btn_div}
          style={{ display: showButtons ? "flex" : "none" }}
        >
          {botresponse.res_arr_en.map((item, index) => (
            <div
              className={styles.res_btn}
              onClick={() => {
                btnFun(item);
                setShowButtons(!showButtons);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResponseFunction;
