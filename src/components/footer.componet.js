import React from "react";
import style from "../css/footer.module.css";

const Footer = () => {
    return(
        <div className={style.footer}>
        <div className={style.gap}></div>
        <div className={style.footerHead}>Contact Us</div>

        <table  className={style.footerTable}>
          <tbody>
          <tr className={style.tableHead}>
            <td className={style.tableHead}>India (HO)</td>
            <td className={style.tableHead}>USA</td>
            <td className={style.tableHead}>UK</td>
          </tr>
          <tr >
            <td>Phase-II Carnival Infopark, Kochi 682 042</td>
            <td>701 Tillery Street Unit 12, 2194 Austin, TX 78702 USA</td>
            <td>2 Westcott Street, TS183EQ,Stockton on Tees,Durham</td>
          </tr>
          <tr>
            <td >info@ileafsolutions.com +91-8121300643</td>
            <td>usbuzz@ileafsolutions.com +1(201)3101074;</td>
            <td>ukbuzz@ileafsolutions.com +44 7825787146</td>
          </tr>
          </tbody>
        </table>
        <div className={style.footerEnd}>ileafsolutions.com</div>
      </div>
    )
}

export default Footer;