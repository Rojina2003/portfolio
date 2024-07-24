import React from "react";
import style from "../css/portfolio.module.css";
import Home from "../components/home.componet";
import Page from "../components/page.componet";
import Mobile from "../components/mobile.components";
import Website from "../components/website.componet";
import Footer from "../components/footer.componet";

const Portfolio = () => {
  return (
    <div className={style.container}>
     <Home/>
      <Page/>
      <Mobile/>
      <Website/>
      <Footer/>
      
    </div>
  );
};

export default Portfolio;
