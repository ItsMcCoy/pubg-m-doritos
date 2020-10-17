import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "../styles/Redeem.module.css";
import { getDoritosCode } from "../utils/api";

export default function Redeem({
  onOepnCodeModal,
  onRedeemSuccess,
  onOpenErrorModal,
}) {
  const [userCode, setUserCode] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);
  const onRedeemCode = async () => {
    const { isError, data } = await getDoritosCode(userCode);
    if (isError) {
      onOpenErrorModal();
    } else {
      onRedeemSuccess(data);
      onOepnCodeModal();
    }
  };

  const onChange = (value) => setDisableBtn(false);
  const onExpire = () => setDisableBtn(true);

  return (
    <>
      <div className={styles.redeem}>
        <span>สามารถ Redeem โค้ดได้ที่นี่</span>
        <div className={styles.redeemWrapper}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              maxLength="10"
              onChange={(e) => setUserCode(e.target.value)}
              placeholder="ใส่รหัส 10 หลัก"
            />
            <div className={styles.recaptchaWrapper}>
              <ReCAPTCHA
                sitekey={process.env.googleReCaptchaKey}
                onChange={onChange}
                onExpired={onExpire}
              />
            </div>
          </div>
          <button onClick={onRedeemCode} disabled={disableBtn}>
            REDEEM
          </button>
        </div>
      </div>
    </>
  );
}
