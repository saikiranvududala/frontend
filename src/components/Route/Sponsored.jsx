import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/dhnh2ofsk/image/upload/v1699063082/nike-logo_pmidnc.svg"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/dhnh2ofsk/image/upload/v1699063083/puma-logo_nhbuvg.svg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/dhnh2ofsk/image/upload/v1699063088/jordan-logo_kdey2s.svg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/dhnh2ofsk/image/upload/v1699063085/vans-logo_yugyru.svg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://res.cloudinary.com/dhnh2ofsk/image/upload/v1699063084/reebok-logo_vkbxyw.svg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
