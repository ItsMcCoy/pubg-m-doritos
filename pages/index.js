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
    <>
      <Head>
        <title>PubG - Doritos</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.logoWrapper}>
              <img src="/images/pubg-m-logo.png" className={styles.pubgLogo} />
              <img
                src="/images/doritos-logo.png"
                className={styles.doritosLogo}
              />
            </div>
            <div className={styles.banner}>
              <img src="/images/banner.png" className={styles.bannerImg} />
              <HowToBuy />
            </div>

            <div className={styles.freeItemTxt}>
              ลุ้นรับฟรี! ไอเทมแบบสุ่ม ผู้ร่วมสนุกอาจได้รับตั้งแต่ 1 ถึง 10
              ไอเทม <br /> มูลค่ากว่า 70 บาท จากโดริโทส ในเกม PUBG MOBILE
            </div>
            <Redeem
              onOepnCodeModal={handleOpenCodeModal}
              onRedeemSuccess={setRedeemCode}
              onOpenErrorModal={handleOpenErrorModal}
            />
            <div className={styles.mainTxtWrapper}>
              <div className={styles.mainTxt}>
                <div>
                  เพียงซื้อ โดริโทส PUBG MOBILE Limited Edition
                  <br />
                  รสชาติใดก็ได้ ที่ 7-Eleven ทุกสาขาทั่วประเทศ
                </div>
                <div className={styles.highlightTxt}>
                  และกรอกรหัส 10 หลักในซองขนม*
                </div>
                <div className={styles.dateTxt}>
                  ตั้งแต่ วันนี้ – 28 ก.พ. 64
                </div>
              </div>
            </div>

            <div className={styles.noteWrapper}>
              <div className={styles.note}>
                <div className={styles.topTxt}>
                  หมายเหตุ: บริโภคแต่อย่างน้อย และออกกำลังกายเพื่อสุขภาพ
                </div>
                <div>
                  1. เปิดซองขนม ข้างในซองจะพบรหัสตัวเลข 10 หลัก 2. เข้าเว็บไซต์
                  https://www.pubgmobile.in.th/event/doritos เพื่อเติมรหัสตัวเลข
                  10 หลัก จากนั้นจะได้รับ รหัสไอเทมโค้ด 13 หลัก 3. คลิก
                  แลกไอเทมโค้ด เพื่อเข้าสู่เว็บไซต์ในการเติมรหัสไอเทมโค้ด 13
                  หลัก 4. เข้าไปในเกม PUBG Mobile เข้าไปที่หน้าข้อมูลตัวละคร
                  เลือก พื้นฐาน จากนั้นให้สังเกตด้านซ้าย ของจอจะมี ID ตัวละคร
                  ระบุอยู่ 5. กรอก ID ตัวละคร และรหัสไอเทมโค้ด 13 หลัก
                  พร้อมกดยืนยันในเว็บไซต์ 6.
                  เมื่อเติมสำเร็จจะได้รับไอเทมจากจดหมายในเกมทันที
                </div>
              </div>
            </div>

            <div className={styles.footer}>
              <img src="/images/footer.png" />
            </div>
          </div>
        </main>
        <CodeModal
          show={openCodeModal}
          onModalClose={handleCloseCodeModal}
          code={redeemCode}
        />
        <FailModal show={openErrorModal} onModalClose={handleCloseErrorModal} />
      </div>
    </>
  );
}
