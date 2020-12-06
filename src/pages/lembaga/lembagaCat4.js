import React from "react";
// import { Input } from '../../components';
import { useHistory } from "react-router-dom";
import styles from "../../scss/lembaga.module.scss";
import LembagaDisplay from "./lembagaDisplay";
import { Nominasi } from "../../assets";

const { nomLsoFav, nomKategori } = Nominasi;

const Lembaga4 = () => {
  let history = useHistory();
  return (
    <div className={styles.lembagaWrapper}>
      <div className={styles.header}>
        <h1>LEMBAGA AWARD 2020</h1>
        <p>
          Lembaga Award adalah program kerja dari Kementerian Perhubungan BEM
          FILKOM yang bertujuan untuk mengapresiasi kerja keras lembaga yang ada
          di FILKOM selama satu periode kepengurusan.
        </p>
      </div>
      <div className={styles.divide} />

      <div className={styles.main}>
        <div className={styles.choiceWrapper}>
          <div className={styles.choiceHeading}>
            <h2>{nomKategori[3].nominasi_title}</h2>
            <p>{nomKategori[3].deskripsi}</p>
          </div>
          <div className={styles.info}>
            <div className={styles.infoWrapper}>
              {nomLsoFav.map((x, index) => {
                return (
                  <LembagaDisplay
                    key={index}
                    index={index}
                    data={x}
                    gambar={x.gambar}
                    kategori={nomKategori[3].id}
                  ></LembagaDisplay>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divide} />

      <div className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerContent}>
            <div className={styles.buttonBack}>
              <button onClick={() => history.push("/nominasi/terkreatif")}>
                BACK
              </button>
            </div>
            <div className={styles.buttonNext}>
              <button onClick={() => history.push("/nominasi/lofavorit")}>
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lembaga4;
