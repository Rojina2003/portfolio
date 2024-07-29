import React, { useState, useEffect, useRef } from "react";
import style from "../css/mobile.module.css";

const Mobile = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);

  const images = {
    Puntsquad: {
      hedding: "Sports",
      description:
        "Puntsquad is an exclusive app for punters. They get tips , news and articles from the Top Punters.",
      images: [
        "/image/mobile/puntsquad/puntsquad.png",
        "/image/mobile/puntsquad/puntsquad1.png",
        "/image/mobile/puntsquad/puntsquad3.png",
        "/image/mobile/puntsquad/puntsquad4.png",
        "/image/mobile/puntsquad/puntsquad5.png",
        "/image/mobile/puntsquad/puntsquad2.png",
      ],
    },
    Sancharam: {
      hedding: "Travel and Tourism",
      description:
        "Sancharam is a private tour company. Aesthetically built website provides crisp and clear information about the tours packages they provide.",
      images: [
        "/image/mobile/sancharam/sancharam.png",
        "/image/mobile/sancharam/sancharam1.png",
        "/image/mobile/sancharam/sancharam2.png",
        "/image/mobile/sancharam/sancharam3.png",
        "/image/mobile/sancharam/sancharam4.png",
      ],
    },
    Connxus: {
      hedding: "Job Portal",
      description:
        "Connxus introduces an innovative new approach to delivering a unique job-matching experience within an easy to use interactive mobile app.",
      images: [
        "/image/mobile/connxus/connxus.png",
        "/image/mobile/connxus/connxus1.png",
        "/image/mobile/connxus/connxus2.png",
        "/image/mobile/connxus/connxus3.png",
        "/image/mobile/connxus/connxus4.png",
        "/image/mobile/connxus/connxus5.png",
        "/image/mobile/connxus/connxus6.png",
        "/image/mobile/connxus/connxus7.png",
      ],
    },
    Mov: {
      hedding: "Charity",
      description:
        "Mov is a sports person/ athlete charity app, Aims to provide support to different charity organisation.",
      images: [
        "/image/mobile/mov/mov.png",
        "/image/mobile/mov/mov1.png",
        "/image/mobile/mov/mov2.png",
        "/image/mobile/mov/mov3.png",
        "/image/mobile/mov/mov4.png",
        "/image/mobile/mov/mov5.png",
        "/image/mobile/mov/mov6.png",
        "/image/mobile/mov/mov7.png",
        "/image/mobile/mov/mov8.png",
        "/image/mobile/mov/mov9.png",
      ],
    },
    Letshego: {
      hedding: "Fintech",
      description:
        "Let'shego provides inclusive financial solutions across Africa, focusing on accessible loans and savings products to empower individuals and communities.",
      images: [
        "/image/mobile/letshego/letshego.png",
        "/image/mobile/letshego/letshego1.png",
        "/image/mobile/letshego/letshego2.png",
        "/image/mobile/letshego/letshego3.png",
        "/image/mobile/letshego/letshego4.png",
      ],
    },
    ColorSticky: {
      hedding: "Utilities",
      description:
        "Stay on top of your busy life with our powerful Color Sticky app. From grocery lists to big ideas, Color Sticky makes it easy to capture and organize your thoughts on the go.",
      images: [
        "/image/mobile/ColorSticky/color sticky.png",
        "/image/mobile/ColorSticky/color sticky1.png",
        "/image/mobile/ColorSticky/color sticky2.png",
        "/image/mobile/ColorSticky/color sticky3.png",
      ],
    },
    Scandlearn: {
      hedding: "E learning ",
      description:
        "Scandlearn specializes in aviation training solutions, delivering innovative e-learning platforms and compliance management systems to enhance pilot and crew knowledge worldwide.",
      images: [
        "/image/mobile/Scandlearn/scandlearn.png",
        "/image/mobile/Scandlearn/scandlearn1.png",
        "/image/mobile/Scandlearn/scandlearn2.png",
        "/image/mobile/Scandlearn/scandlearn3.png",
      ],
    },
    HRMFitClub: {
      hedding: "Fitness",
      description:
        "Level up your fitness game! HRMfit Club offers personalized workout plans, real-time tracking, and expert guidance - all in one app to help you crush your fitness goals.",
      images: [
        "/image/mobile/HrmFitClub/hrm fit club.png",
        "/image/mobile/HrmFitClub/hrm fit club1.png",
        "/image/mobile/HrmFitClub/hrm fit club2.png",
        "/image/mobile/HrmFitClub/hrm fit club3.png",
      ],
    },
    Electo: {
      hedding: "Civic Solution",
      description:
        "Eleckto is a dynamic opinion poll website designed to gather and analyze public opinion on a wide range of topics. Users can participate in polls, express their views, and see real-time results, making it a valuable tool for gauging public sentiment and trends.",
      images: [
        "/image/mobile/Electo/electo.png",
        "/image/mobile/Electo/electo1.png",
        "/image/mobile/Electo/electo2.png",
        "/image/mobile/Electo/electo3.png",
        "/image/mobile/Electo/electo4.png",
        "/image/mobile/Electo/electo5.png",
      ],
    },
    Sworkit: {
      hedding: "Fitness",
      description:
        "Sworkit is your on-demand gym in your pocket. Get personalized workouts, mindfulness exercises, and nutrition coaching - all in one easy-to-use app.",
      images: [
        "/image/mobile/Sworkit/sworkit.png",
        "/image/mobile/Sworkit/sworkit1.png",
        "/image/mobile/Sworkit/sworkit2.png",
        "/image/mobile/Sworkit/sworkit3.png",
      ],
    },
    Jumbly: {
      hedding: "Game",
      description:
        "Embark on a savory journey with jumbly, a fast paced word game designed to sharpen your mind and enrich your vocabulary that you can play for free.",
      images: [
        "/image/mobile/Jumbly/jumbly.png",
        "/image/mobile/Jumbly/jumbly1.png",
        "/image/mobile/Jumbly/jumbly2.png",
        "/image/mobile/Jumbly/jumbly3.png",
        "/image/mobile/Jumbly/jumbly4.png",
        "/image/mobile/Jumbly/jumbly5.png",
        "/image/mobile/Jumbly/jumbly6.png",
        "/image/mobile/Jumbly/jumbly7.png",
        "/image/mobile/Jumbly/jumbly8.png",
      ],
    },
    Sellbyowner: {
      hedding: "Real-estate",
      description:
        "Sellbyowner is a real estate platform empowering homeowners to sell their properties without the need for a realtor, saving on commission fees. The site offers tools and resources to create listings, manage showings, and navigate the selling process efficiently. ",
      images: [
        "/image/mobile/Sellbyowner/sellbyowner.png",
        "/image/mobile/Sellbyowner/sellbyowner1.png",
        "/image/mobile/Sellbyowner/sellbyowner2.png",
        "/image/mobile/Sellbyowner/sellbyowner3.png",
        "/image/mobile/Sellbyowner/sellbyowner4.png",
      ],
    },
    Biotecknika: {
      hedding: "E learning",
      description:
        "BioTecNika is a leading platform dedicated to biotechnology news, career guidance, and education, serving the global biotech community with insightful content and resources.",
      images: [
        "/image/mobile/Biotecknika/Biotecknika.png",
        "/image/mobile/Biotecknika/Biotecknika1.png",
        "/image/mobile/Biotecknika/Biotecknika2.png",
        "/image/mobile/Biotecknika/Biotecknika3.png",
        "/image/mobile/Biotecknika/Biotecknika4.png",
      ],
    },
    Fairyhub: {
      hedding: "E commerce",
      description:
        "Fairy hub is an ecommerce platform which Spark imaginations and ignite wonder with enchanting toys for young dreamers.",
      images: [
        "/image/mobile/Fairyhub/fairyhub.png",
        "/image/mobile/Fairyhub/fairyhub1.png",
        "/image/mobile/Fairyhub/fairyhub2.png",
        "/image/mobile/Fairyhub/fairyhub3.png",
        "/image/mobile/Fairyhub/fairyhub4.png",
        "/image/mobile/Fairyhub/fairyhub5.png",
      ],
    },
  };

  useEffect(() => {
    const firstButton = Object.keys(images)[0];
    setSelectedButton(firstButton);

    // click outside to close dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    setDropdownOpen(false);
    if (containerRef.current) {
      containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount =
        direction === "left"
          ? -containerRef.current.clientWidth
          : containerRef.current.clientWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={style.mobile}>
      <div className={style.mobHeadBack}>
        <div className={style.moblieHead}>Mobile Designs</div>
      </div>
      <div className={style.mobileContainer}>
        <div className={style.mobWebButtonArea}>
          {Object.keys(images).map((buttonName) => (
            <button
              key={buttonName}
              className={`${style.mobWebButton} ${
                selectedButton === buttonName ? style.active : ""
              }`}
              onClick={() => handleButtonClick(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
        <div className={style.dropdown} ref={dropdownRef}>
          <button
            className={style.dropdownButton}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {selectedButton || "Select an option"}
            {"  "}
          </button>
          {dropdownOpen && (
            <div className={style.dropdownContent}>
              {Object.keys(images).map((buttonName) => (
                <button
                  key={buttonName}
                  onClick={() => handleButtonClick(buttonName)}
                >
                  {buttonName}
                </button>
              ))}
            </div>
          )}
        </div>
        {selectedButton && (
          <div className={style.selectedContent}>
            <div className={style.descriptionArea}>
              <div className={style.hedding}>
                {images[selectedButton].hedding}
              </div>
              <div className={style.description}>
                {images[selectedButton].description}
              </div>
            </div>
            <div className={style.imageContainer} ref={containerRef}>
              {images[selectedButton].images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedButton}-${index}`}
                  className={style.displayedImage}
                />
              ))}
            </div>
            <div className={style.paginationButton}>
              <button
                className={style.prevButton}
                onClick={() => scroll("left")}
              >
                &#8592;
              </button>
              <button
                className={style.nextButton}
                onClick={() => scroll("right")}
              >
                &#8594;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;
