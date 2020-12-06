import React, { useRef } from "react";
import { Avatar, Carousel, Image } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import styles from "../../scss/popContent.module.scss";
import { Nominasi } from "../../assets";

const { nomTerinovatif } = Nominasi;

const PopContent3 = ({ title, deskripsi, dokumentasi }) => {
  const carRef = useRef(null);

  const handleNext = () => carRef.current.next();
  const handlePrev = () => carRef.current.prev();
  return (
    <div className={styles.wrapper3}>
      <div className={styles.proker}>
        <h2 className={styles.namaProker}>{title}</h2>
        <p className={styles.desc}>{deskripsi}</p>
      </div>
      <div className={styles.dokum}>
        <LeftOutlined className={styles.ikonKiri} onClick={handlePrev} />
        <RightOutlined className={styles.ikonKanan} onClick={handleNext} />

        <Carousel dots={false} ref={carRef} className={styles.car}>
          {dokumentasi.map((item, index) => {
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

export default PopContent3;
