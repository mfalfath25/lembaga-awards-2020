import React, { useContext } from "react";
import styles from "../../scss/closing.module.scss";
import Check from "../../assets/check.png";
import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { Actions, AuthContext } from "../../config";

const Closing = () => {
  const [state, dispatch] = useContext(AuthContext);
  let history = useHistory();
  return (
    <div className={styles.lembagaWrapper}>
      <div className={styles.header}>
        <h1>LEMBAGA AWARD 2020</h1>
        <p>
          {" "}
          Lembaga Award adalah program kerja dari Kementerian Perhubungan BEM
          FILKOM yang bertujuan untuk mengapresiasi kerja keras lembaga yang ada
          di FILKOM selama satu periode kepengurusan.
        </p>
      </div>
      <div className={styles.divide} />

      <div className={styles.main}>
        <div className={styles.closingWrapper}>
          <div className={styles.info}>
            <div className={styles.checkpic}>
              <img src={Check} alt="Logo" />
            </div>
            <h1>Terima Kasih!</h1>
            <h2>
              Pilihan kamu sudah disimpan, silahkan tunggu pengumuman pemenang
              pada malam Lembaga Award 2020!
            </h2>
            <Button
              type="primary"
              size="large"
              shape="round"
              onClick={() => dispatch(Actions.set_logout())}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* <div className={styles.divide} />
            <div className={styles.footer}>
                <div className={styles.footerWrapper}>
                    <div className={styles.footerContent}>
                        <div className={styles.buttonBack}>
                            <button> BACK </button>
                        </div>
                        <div className={styles.buttonNext}>
                            <button> NEXT </button>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default Closing;
