import styles from "../styles/CodeModal.module.css";
import Link from "next/link";

export default function CodeModal({ show, code, onModalClose }) {
  if (!show) return null;

  return (
    <div className={styles.root}>
      <div className={styles.modalContainer}>
        <div className={styles.close}>
          <img src="/images/close.png" onClick={onModalClose} />
        </div>
        <div className={styles.modalHeader}>คัดลอก PUBG MOBILE CODES </div>
        <div className={styles.modalBody}>
          <div className={styles.codeWrapper}>
            <div className={styles.code}>{code}</div>
            <div
              className={styles.copyBtn}
              onClick={() => {
                navigator.clipboard.writeText(code);
              }}
            >
              Copy Codes
            </div>
          </div>
          <Link href="https://www.pubgmobile.com/redeem">
            <div className={styles.redeemBtn}>REDEEM</div>
          </Link>
        </div>
      </div>
      <div className={styles.backdropContainer} onClick={onModalClose} />
    </div>
  );
}
