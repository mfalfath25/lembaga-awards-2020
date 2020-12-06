import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext, Actions } from "../../config";
import { Nominasi } from "../../assets";
import { Avatar, message, Spin } from "antd";
import styles from "../../scss/lembagaConfirm.module.scss";
import Axios from "axios";

const confirmVote = async (state, setLoading, history, dispatch) => {
  setLoading(true);
  let isEmpty = false;
  Object.values(state.pilihan).forEach((val, i) => {
    if (val === 0) {
      isEmpty = true;
    }
  });

  if (!isEmpty) {
    try {
      // https://cors-anywhere.herokuapp.com/
      let resp = await Axios.post(
        "https://bemfilkom.ub.ac.id/secure/api/2020/LembagaAwards/vote.php",
        {
          nim: state.nim,
          terinovatif: state.pilihan.terinovatif,
          terinspiratif: state.pilihan.terinspiratif,
          terkreatif: state.pilihan.terkreatif,
          lsoFavorit: state.pilihan.lsoFavorit,
          loFavorit: state.pilihan.loFavorit,
          ketuaTerhits: state.pilihan.ketuaHits,
          token: state.token,
        }
      );
      // console.log("cek respon", resp);
      if (resp.data) {
        if (resp.data.status === 1) {
          setLoading(false);
          history.push("/closing");
        } else {
          setLoading(false);
          message.error("Maaf anda sudah memilih, hasil vote tidak disimpan");
          setTimeout(() => dispatch(Actions.set_logout()), 3000);
        }
      } else {
        setLoading(false);
        message.error("Maaf vote tidak tersimpan, silahkan login kembali.");
      }
    } catch (e) {
      setLoading(false);
      console.log("error1", e);
      message.error("Maaf terjadi masalah koneksi atau anda sudah memilih");
      setTimeout(() => dispatch(Actions.set_logout()), 3000);
    }
  } else {
    setLoading(false);
    message.warning("Masih terdapat kategori yang kosong");
  }
};

const LembagaConfirm = () => {
  const [state, dispatch] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
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
        <div className={styles.choiceWrapper}>
          <div className={styles.info}>
            {/* Cek state terbaru setelah voting */}
            {/* <p>terinovatif : {state.pilihan.terinovatif} </p>
            <p>terinspiratif : {state.pilihan.terinspiratif}</p>
            <p>terkreatif : {state.pilihan.terkreatif}</p>
            <p>lsoFavorit : {state.pilihan.lsoFavorit}</p>
            <p>loFavorit : {state.pilihan.loFavorit}</p>
            <p>ketuaHits : {state.pilihan.ketuaHits}</p>
            <p>nim : {state.nim}</p>
            <p>nama : {state.nama}</p>
            <p>prodi : {state.prodi}</p>
            <p>token : {state.token}</p> */}
            <div className={styles.infoWrapper}>
              {Nominasi.nomKategori.map((val, i) => {
                let terpilih = val.objek.find(
                  (el) => el.key === state.pilihan[val.id]
                );
                {
                  /* console.log("cek11", terpilih); */
                }
                return (
                  <div key={val.id} className={styles.choice}>
                    <div className={styles.name}>
                      {terpilih ? terpilih.lembaga : "Nama Lembaga"}
                    </div>

                    <div className={styles.imgCover}>
                      <Avatar
                        size={150}
                        shape="square"
                        className={styles.choiceGambar}
                        src={
                          terpilih ? terpilih.gambar : "/images/bemfilkom.png"
                        }
                      />
                    </div>

                    <div className={styles.kategori}>
                      Dipilih sebagai
                      {val.nominasi_title.replace("Nominasi", "")}
                    </div>
                    {/* <p>{val.id}</p> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Spin spinning={loading}>
        <div className={styles.buttonConfirm}>
          <button
            onClick={() => confirmVote(state, setLoading, history, dispatch)}
          >
            {" "}
            CONFIRM{" "}
          </button>
        </div>
      </Spin>

      <div className={styles.divide} />

      <div className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerContent}>
            <div className={styles.buttonBack}>
              <button onClick={() => history.push("/nominasi/ketuahits")}>
                {" "}
                BACK{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LembagaConfirm;
