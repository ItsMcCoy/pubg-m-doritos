import { useState } from "react";
import styles from "../styles/Redeem.module.css";
import { getDoritosCode } from "../utils/api";

export default function Redeem({
  onOepnCodeModal,
  onRedeemSuccess,
  onOpenErrorModal,
}) {
  const [userCode, setUserCode] = useState("");
  const onRedeemCode = async () => {
    const { isError, data } = await getDoritosCode(userCode);
    if (isError) {
      onOpenErrorModal();
    } else {
      onRedeemSuccess(data);
      onOepnCodeModal();
    }
  };

  return (
    <div className={styles.redeem}>
      <span>สามารถ Redeem โค้ดได้ที่นี่</span>
      <div className={styles.redeemWrapper}>
        <input
          type="text"
          maxLength="10"
          onChange={(e) => setUserCode(e.target.value)}
          placeholder="ใส่รหัส 10 หลัก"
        />
        <button onClick={onRedeemCode}>REDEEM</button>
      </div>
    </div>
  );
}
