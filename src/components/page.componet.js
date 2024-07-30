import React, { useEffect, useRef } from "react";
import style from "../css/page.module.css";

const Page = () => {
  const buttonsRef = useRef([]);

  useEffect(() => {
    const buttons = buttonsRef.current; // Create a stable reference to buttons
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.animate);
          } else {
            entry.target.classList.remove(style.animate);
          }
        });
      },
      { threshold: 0.1 } // Adjust this value as needed
    );

    buttons.forEach((button) => observer.observe(button));

    return () => {
      buttons.forEach((button) => observer.unobserve(button));
    };
  }, []); // No dependencies, so this effect runs only once on mount

  return (
    <div className={style.warpDiv2}>
      <div className={style.Text}>
        <span className={style.span}>Our </span>Comprehensive Digital Solutions
      </div>
      <div className={style.div2AllButton}>
        {["Fitness", "Fintech", "Corporate Website", "Social Media", "Travel & Tourism", "Game", "Sports", "Utilities", "Charity"].map((text, index) => (
          <button
            key={index}
            className={style.div2Button}
            ref={(el) => (buttonsRef.current[index] = el)}
          >
            {text}
          </button>
        ))}
      </div>
      <div className={style.PageScroll}>
        Scroll Down to Uncover Our Mobile and Web Solutions
      </div>
    </div>
  );
};

export default Page;
