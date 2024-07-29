import React from "react";
import style from "../css/page.module.css";

const Page = () => {
  return (
    <div className={style.warpDiv2}>
      <div className={style.Text}>
        <span className={style.span}>Our </span>Comprehensive Digital Solutions
      </div>
      <div className={style.div2AllButton}>
        <button className={style.div2Button}>Fitness</button>
        <button className={style.div2Button}>Fintech</button>
        <button className={style.div2Button}>Corporate Website</button>
        <button className={style.div2Button}>Social Media</button>
        <button className={style.div2Button}>Travel & Tourism</button>
        <button className={style.div2Button}>Game</button>
        <button className={style.div2Button}>Sports</button>
        <button className={style.div2Button}>Utilities</button>
        <button className={style.div2Button}>Charity</button>
      </div>
      <div className={style.PageScroll}>
        Scroll Down to Uncover Our Mobile and Web Solutions
      </div>
    </div>
  );
};
export default Page;
