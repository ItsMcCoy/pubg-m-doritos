import styles from "../styles/HowToBuy.module.css";

export default function HowToBuy() {
  return (
    <div className={styles.howToBuy}>
      <span>หาซื้อได้แล้วที่</span>
      <div className={styles.howToBuyImgWrapper}>
        <img src="/images/tesco.png" />
        <img src="/images/cj.png" />
        <img src="/images/7-eleven.png" />
        <img src="/images/familymart.png" />
      </div>
      <span>ทุกสาขา</span>
    </div>
  );
}
