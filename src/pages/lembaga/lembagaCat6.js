import React from "react";
// import { Input } from '../../components';
import { useHistory } from "react-router-dom";
import styles from "../../scss/lembaga.module.scss";
import LembagaDisplay from "./lembagaDisplay";
import { Nominasi } from "../../assets";

const { nomKetuaHits, nomKategori } = Nominasi;

const Lembaga6 = () => {
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
            <h2>{nomKategori[5].nominasi_title}</h2>
            <p>{nomKategori[5].deskripsi}</p>
          </div>
          <div className={styles.info}>
            <div className={styles.infoWrapper}>
              {nomKetuaHits.map((x, index) => {
                return (
                  <LembagaDisplay
                    key={index}
                    index={index}
                    data={x}
                    ketua={x.ketua}
                    gambar={x.gambar}
                    kategori={nomKategori[5].id}
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
              <button onClick={() => history.push("/nominasi/lofavorit")}>
                BACK
              </button>
            </div>
            <div className={styles.instruction}>
              <p>Klik foto untuk melihat nama ketua lembaga</p>
            </div>
            <div className={styles.buttonNext}>
              <button onClick={() => history.push("/nominasi/confirm")}>
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lembaga6;
