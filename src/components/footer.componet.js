import React from "react";
import style from "../css/footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.gap}></div>
      <div className={style.footerHead}>Contact Us</div>
      <div className={style.footBody}>
        <div>
          <h1 className={style.footH1}>India (HO)</h1>
          <p className={style.footPlace}>Phase-II Carnival Infopark, Kochi 682 042F</p>
          <p className={style.footWeb}>info@ileafsolutions.com +91-8121300643</p>
        </div>
        <div>
          <h1 className={style.footH1}>USA</h1>
          <p className={style.footPlace1}>701 Tillery Street Unit 12, 2194 Austin, TX 78702 USA</p>
          <p className={style.footWeb}>usbuzz@ileafsolutions.com +1(201)3101074</p>
        </div>
        <div>
          <h1 className={style.footH1}>UK</h1>
          <p className={style.footPlace2}>2 Westcott Street, TS183EQ, Stockton on Tees, Durham </p>
          <p className={style.footWeb}>ukbuzz@ileafsolutions.com +44 7825787146</p>
        </div>
      </div>
      <div className={style.footerEnd}>ileafsolutions.com</div>
    </div>
  );
};

export default Footer;
