import React, { useContext } from "react";
// import { Input } from '../../components';
import { useHistory } from "react-router-dom";
import styles from "../../scss/lembaga.module.scss";
import LembagaDisplay from "./lembagaDisplay";
import { Nominasi } from "../../assets";
import { Actions, AuthContext } from "../../config";

const { nomTerinovatif, nomKategori } = Nominasi;

const Lembaga1 = () => {
  const [, dispatch] = useContext(AuthContext);
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
            <h2>{nomKategori[0].nominasi_title}</h2>
            <p>{nomKategori[0].deskripsi}</p>
          </div>
          <div className={styles.info}>
            <div className={styles.infoWrapper}>
              {nomTerinovatif.map((x, index) => {
                return (
                  <LembagaDisplay
                    key={index}
                    index={index}
                    data={x}
                    gambar={x.gambar}
                    kategori={nomKategori[0].id}
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
              <button onClick={() => dispatch(Actions.set_logout())}>
                Logout
              </button>
            </div>
            <div className={styles.instruction}>
              <p>Klik logo lembaga untuk informasi proker lebih lanjut</p>
            </div>
            <div className={styles.buttonNext}>
              <button onClick={() => history.push("/nominasi/terinspiratif")}>
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lembaga1;
