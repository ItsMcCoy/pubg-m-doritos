import styles from "../styles/FailModal.module.css";

export default function FailModal({ show, onModalClose }) {
  if (!show) return null;

  return (
    <div className={styles.root}>
      <div className={styles.modalContainer}>
        <div className={styles.close}>
          <img src="/images/close-black.png" onClick={onModalClose} />
        </div>
        <div className={styles.modalBody}>
          <div className={styles.tryTxt}>
            โค้ดที่คุณกรอกไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง
          </div>
          <div onClick={onModalClose} className={styles.okBtn}>
            OK
          </div>
        </div>
      </div>
      <div className={styles.backdropContainer} onClick={onModalClose} />
    </div>
  );
}
