import React, { useContext, useState } from "react";
import styles from "../../scss/login.module.scss";
import { Input } from "../../components";
import { useHistory } from "react-router-dom";
import { AuthContext, Actions } from "../../config";
import Axios from "axios";
import { message, Spin } from "antd";

const userLogin = async (nim, password, dispatch, history, setLoading) => {
  setLoading(true);
  // console.log("cek input", { nim, password });

  let nm = nim;
  let cekNIM = nm.substring(3, 6) === "150";

  if (nim.length === 15 && cekNIM) {
    try {
      // https://cors-anywhere.herokuapp.com/
      let resp = await Axios.post(
        "https://bemfilkom.ub.ac.id/secure/api/2020/LembagaAwards/auth.php",
        {
          nim,
          password,
        }
      );
      // console.log("cek respon", resp);
      if (resp.data) {
        if (resp.data.status === 1) {
          dispatch(
            Actions.set_login(
              resp.data.data.nama,
              resp.data.data.nim,
              resp.data.data.prodi,
              resp.data.data.token
            )
          );
          setLoading(false);
          history.push("/nominasi/terinovatif");
        }
      } else {
        setLoading(false);
        message.error("Nim atau password anda salah");
      }
    } catch (e) {
      setLoading(false);
      console.log("error1", e);
      message.error("Maaf terjadi masalah koneksi atau password salah");
    }
  } else {
    setLoading(false);
    message.error("Kriteria NIM tidak sesuai");
  }
};

const Login = () => {
  let history = useHistory();
  const [state, dispatch] = useContext(AuthContext);
  const [nim, setNim] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.header}>
        <h1>LEMBAGA AWARD 2020 </h1>
        <p>
          {" "}
          Lembaga Award adalah program kerja dari Kementerian Perhubungan BEM
          FILKOM yang bertujuan untuk mengapresiasi kerja keras lembaga yang ada
          di FILKOM selama satu periode kepengurusan.
        </p>
      </div>
      <div className={styles.divideTop} />

      <div className={styles.main}>
        <div className={styles.formWrapper}>
          <h1>Selamat Datang</h1>
          <p>Silahkan lakukan proses Login untuk melanjutkan proses voting</p>
          <Spin spinning={loading}>
            <div className={styles.formInput}>
              <Input
                className={styles.nim}
                type="text"
                label="NIM"
                placeholder="NIM"
                value={nim}
                onChange={(e) => setNim(e.target.value)}
              />
              <Input
                className={styles.pass}
                type="password"
                label="Password"
                placeholder="Password"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <div className={styles.buttonSubmit}>
                <button
                  onClick={() =>
                    userLogin(nim, pass, dispatch, history, setLoading)
                  }
                >
                  {" "}
                  Login{" "}
                </button>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </div>
  );
};

export default Login;
