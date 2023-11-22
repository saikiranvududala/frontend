import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          // "url(https://res.cloudinary.com/dhnh2ofsk/image/upload/v1699060805/Untitled_design_3_exk2it.png)",
          "url(https://res.cloudinary.com/dhnh2ofsk/image/upload/v1699125382/Untitled_design_5_ot8742.png)",
          
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[30px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Discover Your <br /> Dream Sneakers
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        "Explore our affordable, quality sneakers, and find your perfect<br/>Pair. We have the styles you desire."




<br/> .{" "}
          <br />  
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[18px]">
                    Shop Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
