import React from "react";
import { Avatar, Image } from "antd";
import styles from "../../scss/popContent.module.scss";
import { Nominasi } from "../../assets";

const { nomTerinspiratif } = Nominasi;

const PopContent2 = ({ title, link, deskripsi, cover }) => {
  return (
    <div className={styles.wrapper2}>
      <div className={styles.imgCover}>
        <Avatar
          classname={styles.img}
          size={150}
          shape="square"
          src={cover || "/images/bemfilkom.png"}
        />
      </div>

      <div className={styles.deskripsi}>
        <h2>{title}</h2>
        <div className={styles.podcastDesc}>
          <p>{deskripsi}</p>
        </div>
        <p>
          {"Link Podcast : "}
          <a href={link} target="_blank" rel="noopener">
            {link}
          </a>
        </p>
      </div>
    </div>
  );
};

export default PopContent2;
