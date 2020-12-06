import React, { useContext } from "react";
import styles from "../../scss/lembagaDisplay.module.scss";
import { Avatar, Popover, Popconfirm, Button } from "antd";
import { AuthContext, Actions } from "../../config";
import {
  PopContent,
  PopContent2,
  PopContent3,
  PopContent4,
} from "../../components";

const content = () => <div></div>;

function LembagaDisplay(props) {
  // console.log(props.data);
  const [state, dispatch] = useContext(AuthContext);
  // console.log("cek kontext, ", state);

  const check_kategori = () => {
    switch (props.kategori) {
      case "terinovatif":
        return PopContent3(props.data);
      case "terinspiratif":
        return PopContent2(props.data);
      case "terkreatif":
        return PopContent(props.data);
      case "ketuaHits":
        return PopContent4(props.data);
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={styles.structure}>
        <div className={`${styles.choice}`}>
          <Popover
            className="popover-page"
            content={check_kategori()}
            trigger="click"
            placement="bottom"
          >
            <div className={styles.imgCover}>
              <div className={styles.imgCenter}>
                <Avatar
                  className={styles.img}
                  size={150}
                  shape="square"
                  src={props.gambar || "/images/bemfilkom.png"}
                />
              </div>
            </div>
          </Popover>

          <div className={styles.name}>{props.data.lembaga}</div>
          <div className={styles.buttonVote}>
            <Popconfirm
              title={`Apa anda yakin memilih ${props.data.lembaga}？`}
              okText="Iya"
              cancelText="Tidak"
              disabled={state.pilihan[props.kategori] === props.data.key}
              onConfirm={() => {
                dispatch(Actions.set_choice(props.kategori, props.data.key));
              }}
            >
              <Button
                type="primary"
                shape="round"
                size="large"
                disabled={state.pilihan[props.kategori] === props.data.key}
              >
                Vote
              </Button>
            </Popconfirm>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LembagaDisplay;
