import React, { useState } from "react";
import style from "../css/website.module.css";

// Image data mapping each button name to an object containing images, heading, and description
const imageData = {
  Nocoin: {
    heading: "Crypto",
    description:
      "No coin is a people point of Sale (POS) service app that streamlines transactions, inventory management, and sales reporting for businesses, enhancing efficiency and customer service.",
    images: ["/image/website/Nocoin.png"],
  },
  Futuresurprises: {
    heading: "Gifting",
    description:
      "Future Surprises automates thoughtful gifting, ensuring you celebrate every occasion with ease. Set it, forget it, and never miss a moment again.",
    images: ["/image/website/Futuresurprises.png"],
  },
  Jumbly: {
    heading: "Game",
    description:
      "Embark on a savory journey with jumbly, a fast paced word game designed to sharpen your mind and enrich your vocabulary that you can play for free.",
    images: ["/image/website/Jumbly.png"],
  },
  Wiz: {
    heading: "AI Chatbot",
    description:
      "Wiz.ai offers advanced AI-powered solutions, revolutionizing workplace productivity with intuitive automation and data-driven insights for streamlined operations and decision-making.",
    images: ["/image/website/wiz.png"],
  },
  Briind: {
    heading: "Social & business network",
    description:
      "Briind is a platform for groups of all types that help individuals find communities of people with like passions they can belong to online and offline.",
    images: ["/image/website/Briind.png"],
  },
  Nowgen: {
    heading: "AI Chatbot",
    description:
      "Wiz.ai offers advanced AI-powered solutions, revolutionizing workplace productivity with intuitive automation and data-driven insights for streamlined operations and decision-making.",
    images: ["/image/website/Nowgen.png"],
  },
  Sancharam: {
    heading: "Travel and Tourism",
    description:
      "Discover the breathtaking beauty of Kerala through Sancharam's immersive travel experiences and expert guides. Dive into unique cultural adventures and scenic wonders with us.",
    images: ["/image/website/Sancharam.png"],
  },
  Crunch: {
    heading: "Fitness",
    description:
      "Crunch is a comprehensive platform offering financial tools and insights, empowering users with budgeting, investing, and financial planning resources tailored to personal and business needs.",
    images: ["/image/website/Crunch.png "],
  },
  OdinEducation: {
    heading: "Elearning",
    description:
      "Level up your skills! Odin Education offers personalized online courses to keep you learning and growing.",
    images: ["/image/website/Odin Education.png"],
  },
  Scandlearn: {
    heading: "Elearning",
    description:
      "Scandlearn specializes in aviation training solutions, delivering innovative e-learning platforms and compliance management systems to enhance pilot and crew knowledge worldwide.",
    images: ["/image/website/Scandlearn.png"],
  },
  Picterus: {
    heading: "Healthcare",
    description:
      "Picterus is a jaundice screening device approved for clinical use by healthcare professionals and caregivers. Helps doctors to understand jaundice in the newborns.",
    images: ["/image/website/Picterus.png"],
  },
  Fairyhub: {
    heading: "E-commerce",
    description:
      "Fairy hub is an ecommerce platform which Spark imaginations and ignite wonder with enchanting toys for young dreamers.",
    images: ["/image/website/Fairyhub.png"],
  },
  Sellbyowner: {
    heading: "Real estate",
    description:
      "Sellbyowner is a real estate platform empowering homeowners to sell their properties without the need for a realtor, saving on commission fees. The site offers tools & resources to create listings, manage showings, & navigate the selling process efficiently.",
    images: ["/image/website/Sellbyowner.png"],
  },
  Knanayology: {
    heading: "Religious",
    description:
      "Knanayology.org is a dedicated platform that explores and preserves the cultural heritage, history, and achievements of the Knanaya community, fostering awareness and unity among its members worldwide.",
    images: ["/image/website/Knanayology.png"],
  },
};

const Website = () => {
  const [selectedButton, setSelectedButton] = useState(
    Object.keys(imageData)[0]
  );

  return (
    <>
      <div className={style.mobWebGap}></div>
      <div className={style.web}>
        <div className={style.webHead}>Website Designs</div>
        <div className={style.webContainer}>
          <div className={style.mobWebButtonArea}>
            {Object.keys(imageData).map((buttonName) => (
              <button
                key={buttonName}
                className={`${style.mobWebButton} ${selectedButton === buttonName ? style.active : ''}`}
                onClick={() => setSelectedButton(buttonName)}
              >
                {buttonName}
              </button>
            ))}
          </div>
          <div className={style.imageDisplay}>
            {selectedButton && (
              <>
                <div className={style.descriptionArea}>
                  <div className={style.heading}>
                    {imageData[selectedButton].heading}
                  </div>
                  <div className={style.description}>
                    {imageData[selectedButton].description}
                  </div>
                </div>
                <div className={style.imageContainer}>
                  {imageData[selectedButton].images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedButton} ${index + 1}`}
                      className={style.displayedImage}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Website;
