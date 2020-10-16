import Head from "next/head";
import { useState } from "react";
import HowToBuy from "../components/HowToBuy";
import CodeModal from "../components/CodeModal";
import FailModal from "../components/FailModal";
import Redeem from "../components/Redeem";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [openCodeModal, setOpenCodeModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [redeemCode, setRedeemCode] = useState("");

  const handleCloseCodeModal = () => {
    setOpenCodeModal(false);
    setRedeemCode("");
  };
  const handleCloseErrorModal = () => setOpenErrorModal(false);
  const handleOpenCodeModal = () => setOpenCodeModal(true);
  const handleOpenErrorModal = () => setOpenErrorModal(true);

  return (
    <div className={styles.container}>
      <Head>
        <title>PubG - Doritos</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.topBg}>
          <img src="/images/bg-top.png" width="100%" height="auto" />
        </div>
        <div className={styles.bottomBg}>
          <img src="/images/BG.png" width="100%" height="auto" />
        </div>
        <div className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.logoWrapper}>
              <img src="/images/pubg-m-logo.png" className={styles.pubgLogo} />
              <img
                src="/images/doritos-logo.png"
                className={styles.doritosLogo}
              />
            </div>
            <img src="/images/banner.png" className={styles.banner} />
            <HowToBuy />
            <div className={styles.freeItemTxt}>
              ลุ้นรับฟรี! ไอเทมแบบสุ่ม ผู้ร่วมสนุกอาจได้รับตั้งแต่ 1 ถึง 10
              ไอเทม มูลค่ากว่า 70 บาท จากโดริโทส ในเกม PUBG MOBILE
            </div>
            <Redeem
              onOepnCodeModal={handleOpenCodeModal}
              onRedeemSuccess={setRedeemCode}
              onOpenErrorModal={handleOpenErrorModal}
            />
            <div className={styles.mainTxt}>
              <div>
                เพียงซื้อ โดริโทส รสชาติใดก็ได้ PUBG MOBILE Limited Edition ที่
                7-Eleven, CJ Express, Family mart, Tesco Lotus Express
                และร้านสะดวกซื้อชั้นนำทั่วประเทศ
              </div>
              <div className={styles.highlightTxt}>
                แล้วกรอกรหัส 10 หลักในซองขนม
              </div>
              <div className={styles.dateTxt}>
                ตั้งแต่ 5 พ.ย. 63 – 28 ก.พ. 64{" "}
              </div>
            </div>
            <div className={styles.note}>
              <div className={styles.topTxt}>หมายเหตุ</div>
              <ul>
                <li>
                  รหัสไอเทมโค้ดจะอยู่ในซองขนม โดริโทส ลายลิมิเตท PUBG Mobile
                  เท่านั้น
                </li>
                <li>รหัสไอเทมโค้ด 1 รหัสจะสามารถแลกได้ 1 ครั้งเท่านั้น</li>
                <li>คุณสามารถเติมไอเทมโค้ดได้ไม่จำกัดจำนวนครั้งต่อไอดี</li>
                <li>ไอเทมโค้ดสามารถใช้ได้ถึงวันที่ 28 กุมภาพันธ์ 2564</li>
                <li>ของรางวัลไม่สามารถจำหน่าย หรือแลกเปลี่ยนเป็นเงินสดได้</li>
                <li>
                  บริษัทฯ
                  สงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า{" "}
                </li>
              </ul>
              กรณีมีข้อพิพาทคำตัดสินของบริษัทฯ ถือเป็นสิ้นสุด
            </div>
            <div className={styles.footer}>
              <img src="/images/footer.png" />
            </div>
          </div>
        </div>
        <CodeModal
          show={openCodeModal}
          onModalClose={handleCloseCodeModal}
          code={redeemCode}
        />
        <FailModal show={openErrorModal} onModalClose={handleCloseErrorModal} />
      </main>
    </div>
  );
}
