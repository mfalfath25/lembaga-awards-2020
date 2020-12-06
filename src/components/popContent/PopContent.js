import React, { useRef } from "react";
import { Avatar, Carousel, Image } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import styles from "../../scss/popContent.module.scss";
import { Nominasi } from "../../assets";

const { nomTerkreatif } = Nominasi;

const PopContent = ({ feed }) => {
  const carRef = useRef(null);

  const handleNext = () => carRef.current.next();
  const handlePrev = () => carRef.current.prev();
  return (
    <div className={styles.wrapper}>
      <div className={styles.dokum}>
        <LeftOutlined className={styles.ikonKiri} onClick={handlePrev} />
        <RightOutlined className={styles.ikonKanan} onClick={handleNext} />

        <Carousel dots={false} ref={carRef} className={styles.car}>
          {feed.map((item, index) => {
            return (
              <div>
                <div key={index}>
                  <Avatar
                    className={styles.img}
                    size={150}
                    shape="square"
                    src={item}
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default PopContent;
