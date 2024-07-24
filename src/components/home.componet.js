import React from "react";
import style from "../css/home.module.css";

const Home = () => {
    const handleScroll = () => {
        const element = document.querySelector(`.${style.gap}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
      return(
        <div className={style.warpHead}>
        <div className={style.nn}></div>
        <div className={style.img}></div>
        <div className={style.head}>Design Excellence <p className={style.head1}>Collection</p></div>
        <div>
          <button className={style.scrollButton} onClick={handleScroll}>
            Scroll Down
          </button>
          <div className={style.gap}></div>
        </div>
      </div>
      )
}
export default Home;