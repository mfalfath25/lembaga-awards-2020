import React from "react";
import { Avatar } from "antd";
import styles from "../../scss/popContent.module.scss";
import { Nominasi } from "../../assets";

const { nomKetuaHits } = Nominasi;

const PopContent4 = ({ ketua }) => {
  return (
    <div className={styles.wrapper4}>
      <div className={styles.deskripsi}>
        <h3>{ketua}</h3>
      </div>
    </div>
  );
};

export default PopContent4;
