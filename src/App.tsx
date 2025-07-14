import React, { useState } from "react";

function App() {
  // State untuk slider di kartu pertama
  const [modalAmount, setModalAmount] = useState(500000);
  const minAmount = 100000;
  const maxAmount = 10000000;

  // State untuk mengontrol visibilitas landing page utama
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);

  // --- Fungsi untuk Kartu Simulator ---
  const calculateProfit = (amount: number) => {
    return Math.floor(amount * 102.1);
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID").format(amount);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalAmount(parseInt(e.target.value));
  };

  // --- Fungsi untuk menampilkan landing page dan scroll ---
  const handleShowMainContent = () => {
    setIsMainContentVisible(true);
    // Beri sedikit jeda agar elemennya sempat dirender oleh React
    setTimeout(() => {
      document.getElementById("main-content-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  // --- Fungsi untuk CTA di landing page utama ---
  const handleFinalCTAClick = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Cleanoz!",
      "_blank"
    );
  };

  return (
    <>
      {/* ================================================================== */}
      {/* BAGIAN 1: KARTU SIMULATOR YANG MUNCUL PERTAMA KALI                */}
      {/* ================================================================== */}
      <div className="simulator-wrapper">
        <div className="simulator-container">
          <div className="simulator-card">
            {/* Header Section */}
            <div className="simulator-header">
              <div className="simulator-header-text">
                <h1 className="simulator-header-title">
                  Berapa Juta yang
                  <br />
                  Bisa Dihasilkan dari
                  <br />
                  Modal Anda?
                </h1>
                <div className="simulator-header-desc">
                  <p className="simulator-desc-highlight">
                    <span style={{ marginRight: "8px" }}>⚡</span>
                    Geser & Lihat Sendiri.
                  </p>
                  <p className="simulator-desc-subtext">
                    Simulasikan kekuatan efek bola
                    <br />
                    salju pada modal awal Anda.
                  </p>
                </div>
              </div>
              <div className="simulator-profile-wrapper">
                <div className="simulator-profile-card">
                  <img
                    src="https://cdn.scalev.id/Image/BVB_8lpzBsiMyltdO8DuBpv6vJusuAg676TI1RzyfIM/1749889052787-freepik__arli-an-indone_iOoyP0I.webp"
                    alt="Arli Kurnia dengan produk Cleanoz"
                    className="simulator-profile-image"
                  />
                  <div className="simulator-live-indicator"></div>
                </div>
              </div>
            </div>

            {/* Slider Section */}
            <div style={{ marginBottom: "2rem" }}>
              <div className="simulator-slider-header">
                <p className="simulator-slider-title">
                  Mulai dengan Modal Awal:
                </p>
                <div className="simulator-live-badge">
                  <div className="simulator-live-pulse-yellow"></div>
                  <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>
                    Live
                  </span>
                </div>
              </div>
              <div style={{ position: "relative", marginBottom: "1.5rem" }}>
                <input
                  type="range"
                  min={minAmount}
                  max={maxAmount}
                  value={modalAmount}
                  onChange={handleSliderChange}
                  className="slider-thumb"
                  style={{
                    background: `linear-gradient(to right, #fbbf24 0%, #fbbf24 ${
                      ((modalAmount - minAmount) / (maxAmount - minAmount)) *
                      100
                    }%, #374151 ${
                      ((modalAmount - minAmount) / (maxAmount - minAmount)) *
                      100
                    }%, #374151 100%)`,
                  }}
                />
                <div className="simulator-slider-labels">
                  <span>Rp {formatRupiah(minAmount)}</span>
                  <span>Rp {formatRupiah(maxAmount)}</span>
                </div>
              </div>
              <div className="simulator-amount-display">
                <span className="simulator-amount-text">
                  Rp {formatRupiah(modalAmount)}
                </span>
              </div>
            </div>

            {/* Profit Potential Section */}
            <div className="simulator-profit-section">
              <p className="simulator-profit-title">
                POTENSI KEUNTUNGAN BERSIH ANDA
              </p>
              <p className="simulator-profit-subtitle">(setelah 5x putaran)</p>
              <div style={{ position: "relative" }}>
                <p className="simulator-profit-amount">
                  Rp {formatRupiah(calculateProfit(modalAmount))}
                </p>
                <div className="simulator-profit-glow"></div>
              </div>
              <div className="simulator-realtime-badge">
                <div className="simulator-live-bounce-green"></div>
                <span style={{ fontSize: "0.75rem", color: "#4ade80" }}>
                  Estimasi Real-time
                </span>
              </div>
            </div>

            {/* Tombol CTA Utama untuk Menampilkan Landing Page */}
            <button
              onClick={handleShowMainContent}
              className="simulator-cta-button"
            >
              <span className="simulator-cta-text">
                <span style={{ marginRight: "8px" }}>🚀</span>
                Jadiin Kenyataan, Praktek Sekarang!
              </span>
              <div className="simulator-cta-hover-glow"></div>
            </button>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* BAGIAN 2: LANDING PAGE CLEANOZ (MUNCUL SETELAH DIKLIK)            */}
      {/* ================================================================== */}
      {isMainContentVisible && (
        <div className="cleanoz-body">
          {/* Bagian Headline */}
          <header id="main-content-section" className="hero-section">
            <div className="hero-content">
              <h1 className="main-headline">
                Boros Bensin Bikin Dompet Tipis? <br />
                <span className="highlight-orange">
                  Gas Tipis Pakai Cleanoz!
                </span>
              </h1>
              <p className="sub-headline">
                Tiga Tetes Bukan Cuma Irit, Tapi Bikin Mesin Enteng, Suara
                Halus, Dan Hemat Biaya Servis!
              </p>
              <button onClick={handleFinalCTAClick} className="cta-button">
                KIRIM SAYA CLEANOZ SEKARANG
              </button>
            </div>
            <div className="hero-image-container">
              <img
                src="https://cdn.scalev.id/Image/_80DHjOh15B-7JCgbxr9fvoGNEeow1etLsnhm-ELi7s/1740124810449-headline_LP_scalev.webp"
                alt="Produk Cleanoz dengan latar belakang oranye"
                className="hero-image"
              />
            </div>
          </header>

          <main>
            {/* Bagian Provokatif Opening */}
            <section className="provocative-section">
              <div className="container">
                <h2 className="section-title text-center">
                  Pernah Ngerasa{" "}
                  <span className="highlight-orange">Gaji Habis</span> Cuma Buat
                  Isi Bensin?
                </h2>
                <div className="provocative-grid">
                  <div className="provocative-text">
                    <p>
                      Tarikan motor makin berat. Dompet makin sesak. Hidup
                      rasanya diem di tempat.
                    </p>
                    <p>
                      Padahal setiap hari harus ngerit di jalanan. Cari nafkah.
                      Kirim barang. Jemput anak.
                    </p>
                    <p className="strong-text">
                      Apa nggak capek kalau semua tenaga habis cuma buat bayar
                      bensin?
                    </p>
                    <p className="strong-text highlight-green">
                      Rakyat kecil kayak kita nggak boleh kalah sama krisis.
                      Karena hemat BBM itu bukan cuma soal bensin. Tapi soal
                      bisa bertahan hidup.
                    </p>
                  </div>
                  <div className="provocative-image">
                    <img
                      src="https://cdn.scalev.id/Image/WjYbTMfsRQ5_95XzAAe9aI8H88dv77H0suUWZm2CRds/1740110069436-images_3499951710837471855.webp"
                      alt="Pria memegang helm dengan ekspresi lelah"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Bagian Masalah */}
            <section className="problem-section">
              <div className="container">
                <div className="problem-content">
                  <div className="problem-image">
                    <img
                      src="https://cdn.scalev.id/Image/sfeKLm-8W4HKyeFU-Xyiisf50OPX1ygZwsxotFeCTfI/1740105354536-images_5739451732158302543.webp"
                      alt="Ilustrasi bensin mahal dan servis mahal"
                    />
                  </div>
                  <div className="problem-list">
                    <h3 className="list-title">"Gas Tipis, Anti Krisis.”</h3>
                    <p className="list-subtitle">
                      Kalau masih ngandelin cara lama, ya bakal ngerasa capek
                      terus.
                    </p>
                    <ul>
                      <li>
                        <span>❌</span> Bensin makin mahal, tapi kerja nggak
                        bisa berhenti.
                      </li>
                      <li>
                        <span>❌</span> Mesin motor/mobil makin berat, keluar
                        biaya servis makin mahal.
                      </li>
                      <li>
                        <span>❌</span> Udah irit-irit, tetap habis cuma buat
                        beli bensin.
                      </li>
                      <li>
                        <span>❌</span> Mau nabung, susah. Habis buat jalan
                        terus.
                      </li>
                      <li>
                        <span>❌</span> Capek rasanya, kayak kerja nggak pernah
                        cukup.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Bagian Solusi */}
            <section className="solution-section">
              <div className="container text-center">
                <h2 className="section-title">
                  Cleanoz Hadir Bukan Cuma Buat{" "}
                  <span className="highlight-orange">Irit Bensin.</span>
                </h2>
                <p className="solution-subtitle">
                  Cleanoz adalah cara rakyat kecil{" "}
                  <span className="highlight-green">ngelawan krisis.</span>
                </p>
                <div className="solution-flow">
                  <p>
                    Tetesin Cleanoz ke tangki bensin ➡️ Mesin bersih ➡️ BBM
                    lebih irit ➡️ Tarikan enteng ➡️ Dompet lebih aman.
                  </p>
                </div>
                <p className="strong-text">Ini bukan sulap. Ini solusi.</p>
                <p>
                  Karena setiap tetes Cleanoz nyimpen tenaga besar buat bikin
                  hidup tetap jalan.
                </p>
                <div className="solution-images">
                  <img
                    src="https://cdn.scalev.id/Image/d6J120s-MAiouxwubFFk9xShj-AJvDmWrm-jYqFC0Fg/1740105489408-images_8188821710837559593.webp"
                    alt="Pria mengacungkan jempol di samping mobilnya"
                  />
                  <img
                    src="https://cdn.scalev.id/Image/JUtBttAUoiW87a5FtXQkrp4Vh50Av4WGh6aq6qt_gzw/save.gif"
                    alt="Animasi GIF mesin bekerja"
                  />
                  <img
                    src="https://cdn.scalev.id/Image/Rp5bncNEKTSLhA5K_xPNamJBuH7xu4s3sST2R3zxgQg/1740105550114-images_7642981710837559675_1.webp"
                    alt="Produk Cleanoz"
                  />
                </div>
              </div>
            </section>

            {/* Bagian Benefit Utama */}
            <section className="benefits-section">
              <div className="container">
                <h2 className="section-title text-center">
                  Setiap Tetesnya Memberi{" "}
                  <span className="highlight-orange">Banyak Keuntungan</span>
                </h2>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <img
                      src="https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp"
                      alt="Ikon penghematan bensin"
                    />
                    <h3>Bensin Jadi Jauh Lebih Irit</h3>
                    <p>
                      Penghematan BBM hingga 20-40%, cocok untuk kendaraan
                      pribadi, usaha, hingga mesin kapal.
                    </p>
                  </div>
                  <div className="benefit-item">
                    <img
                      src="https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp"
                      alt="Ikon tarikan mesin responsif"
                    />
                    <h3>Tarikan Mesin Enteng & Responsif</h3>
                    <p>
                      Mesin lebih ringan saat akselerasi, tenaga lebih maksimal,
                      nyaman saat bawa beban berat atau tanjakan.
                    </p>
                  </div>
                  <div className="benefit-item">
                    <img
                      src="https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp"
                      alt="Ikon suara mesin halus"
                    />
                    <h3>Suara Mesin Lebih Halus & Senyap</h3>
                    <p>
                      Mengurangi suara kasar, bikin mesin lebih halus dan tenang
                      saat dipacu.
                    </p>
                  </div>
                  <div className="benefit-item">
                    <img
                      src="https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp"
                      alt="Ikon perlindungan mesin"
                    />
                    <h3>Mencegah Kerusakan Mesin</h3>
                    <p>
                      Membersihkan sisa pembakaran dan mencegah kerak karbon
                      yang menempel di piston.
                    </p>
                  </div>
                  <div className="benefit-item">
                    <img
                      src="https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp"
                      alt="Ikon hasil instan"
                    />
                    <h3>Nggak Perlu Nunggu Lama</h3>
                    <p>
                      Hasil bisa langsung dirasakan sejak pemakaian pertama,
                      mesin lebih enteng dan irit BBM.
                    </p>
                  </div>
                  <div className="benefit-item">
                    <img
                      src="https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp"
                      alt="Ikon oli lebih awet"
                    />
                    <h3>Oli Jadi Lebih Awet</h3>
                    <p>
                      Oli 2x lipat lebih bersih dan tahan lama karena ruang
                      bakar lebih bersih.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Bagian Testimoni */}
            <section className="testimonial-section">
              <div className="container">
                <h2 className="section-title text-center">
                  Sudah Teruji di Lebih Dari{" "}
                  <span className="highlight-orange">137.000 Kendaraan</span>
                </h2>
                <p className="testimonial-subtitle">
                  Banyak testimoni asli pengguna di media sosial, chat WhatsApp,
                  Telegram, dan video YouTube.
                </p>
                <div className="testimonial-grid">
                  <img
                    src="https://cdn.scalev.id/Image/yvVYvCfNskdCJpCCYr7hl_20JVaQc4NsSuwUC7paH6g/1740106471143-images_8242131732162002708.webp"
                    alt="Testimoni chat 1"
                  />
                  <img
                    src="https://cdn.scalev.id/Image/sEtUpeuCGwYjDRYSWOYN4nzW03p7sXTvy6KJUuReRTE/1740106560493-images_5368361732162116127_1.webp"
                    alt="Testimoni chat 2"
                  />
                  <img
                    src="https://cdn.scalev.id/Image/RrNcD8TLCq5Y_KFbNpi7M_PFcMri4MUNGoqFqG--h84/1740106664357-images_9440881732162370426.webp"
                    alt="Testimoni chat 3"
                  />
                  <img
                    src="https://i.ytimg.com/vi/vgjzF0JqfoM/hqdefault.jpg"
                    alt="Testimoni YouTube 1"
                  />
                  <img
                    src="https://i.ytimg.com/vi/BJ172CrlpfE/hqdefault.jpg"
                    alt="Testimoni YouTube 2"
                  />
                  <img
                    src="https://i.ytimg.com/vi/O_2V0sJOuGc/hqdefault.jpg"
                    alt="Testimoni YouTube 3"
                  />
                </div>
                <div className="influencer-testimonial">
                  <img
                    src="https://cdn.scalev.id/Image/Nn3jQwBzPY2gMVipmGZM6qAjIIwf-_fz7pZjVfK_qaw/1740106851040-images_1863501731913227260.webp"
                    alt="Ridwan Hanif memegang produk Cleanoz"
                  />
                  <div>
                    <h3>Direview oleh Ahlinya</h3>
                    <p>
                      "Cairan ini beneran bisa bantu bersihin kerak di mesin,
                      bikin pembakaran lebih sempurna. Efeknya, bensin jadi
                      lebih irit. Cocok buat yang kendaraannya dipakai harian."
                      - <strong>Ridwan Hanif, Otomotif Influencer</strong>
                    </p>
                    <img
                      src="https://i.ytimg.com/vi/bemupKqha2M/hqdefault.jpg"
                      alt="Thumbnail YouTube Ridwan Hanif"
                      className="yt-thumbnail"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Bagian Penawaran / CTA Akhir */}
            <section className="offer-section">
              <div className="container">
                <img
                  src="https://cdn.scalev.id/Image/PDu4pBDZ1P69C58iKpyUauDJ6isztnAofWHyt0EuY1U/1740108079282-images_9704621732158234215.webp"
                  alt="Tombol promo spesial hari ini"
                  className="promo-button-image"
                />
                <div className="offer-content">
                  <div className="offer-product">
                    <img
                      src="https://cdn.scalev.id/Image/qUNt4WgjgZop88jSw8Ssyte5ITCd2Fx0Sj09fzWT6Rw/1740105611249-images_7436651710837578894.webp"
                      alt="Satu kotak Cleanoz berisi 4 botol"
                    />
                  </div>
                  <div className="offer-details">
                    <h3 className="offer-title">
                      Apa yang Akan Anda Dapatkan?
                    </h3>
                    <ul>
                      <li>✅ Cairan aditif pembersih ruang bakar mesin</li>
                      <li>✅ Hemat BBM hingga 20-40%</li>
                      <li>✅ Mesin lebih enteng, performa terjaga</li>
                      <li>✅ Suara mesin lebih halus</li>
                      <li>✅ Penggunaan super praktis — tinggal tetes</li>
                      <li className="bonus-item">
                        <img
                          src="https://cdn.scalev.id/Image/eMITD5lVVjei4y2QcFcPT7ahFvyk7t55HpPv94fx_qA/1740108102829-images_7016781731659141551.webp"
                          alt="Bonus Emas 24K"
                        />
                        <span>
                          <span className="highlight-orange">
                            BONUS EMAS 24K
                          </span>{" "}
                          setiap pembelian 1 kotak (isi 4 botol)
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={handleFinalCTAClick}
                      className="cta-button final-cta"
                    >
                      KIRIM SAYA CLEANOZ + BONUS EMASNYA!
                    </button>
                    <img
                      src="https://cdn.scalev.id/Image/iuQDv_XWTq5qzugAqf9OhYuiRj8VdnmpwZ0f8KAmOXg/1740108823242-images_3171531710837787904.webp"
                      alt="Jaminan kualitas terbaik"
                      className="quality-badge"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Bagian Footer */}
          <footer className="footer-section">
            <div className="container text-center">
              <h2>Hidup memang berat.</h2>
              <h2 className="highlight-green">
                Tapi rakyat kecil nggak boleh kalah.
              </h2>
              <p>Cleanoz bukan cuma cairan irit bensin.</p>
              <p className="strong-text">
                Cleanoz adalah gerakan{" "}
                <span className="highlight-orange">#AntiKrisis.</span>
              </p>
              <p className="footer-closing">
                Karena setiap tetes Cleanoz, adalah tenaga buat hidup tetap
                jalan.
              </p>
              <small>
                &copy; {new Date().getFullYear()} Cleanoz Indonesia. All Rights
                Reserved.
              </small>
            </div>
          </footer>
        </div>
      )}

      {/* ================================================================== */}
      {/* GABUNGAN SEMUA CSS ADA DI SINI                                     */}
      {/* ================================================================== */}
      <style>{`
        /* =============================================================== */
        /* CSS BAGIAN 1: KARTU SIMULATOR (DI-UPDATE & LEBIH RESPONSIF)     */
        /* =============================================================== */
        .simulator-wrapper {
          min-height: 100vh;
          background-color: #0f172a;
          font-family: 'Montserrat', sans-serif;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          transition: opacity 0.5s ease-out;
        }
        .simulator-container {
          width: 100%;
          max-width: 56rem;
        }
        .simulator-card {
          border-radius: 1.5rem; /* Sudut lebih tumpul */
          border: 1px solid #334155;
          background-image: linear-gradient(145deg, #1e293b, #0f172a, #1e293b);
          padding: 1.5rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
        }
        @media (min-width: 768px) {
          .simulator-card {
            padding: 2.5rem;
          }
        }
        .simulator-header {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          text-align: center;
        }
        @media (min-width: 1024px) {
          .simulator-header { flex-direction: row; text-align: left; }
        }
        .simulator-header-text { flex: 1; }
        .simulator-header-title {
          margin-bottom: 1rem;
          font-family: 'Anton', sans-serif;
          font-size: clamp(2rem, 5vw, 2.5rem); /* Ukuran font responsif */
          line-height: 1.2;
          font-weight: 700;
          background-image: linear-gradient(to right, #ffffff, #d1d5db);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .simulator-desc-highlight {
          margin-bottom: 0.5rem;
          display: inline-flex; /* Agar center di mobile */
          align-items: center;
          font-size: 1.125rem;
          font-weight: 700;
          color: #facc15;
        }
        .simulator-desc-subtext {
          font-size: 0.875rem;
          line-height: 1.625;
          color: #9ca3af;
        }
        .simulator-profile-wrapper {
          display: flex;
          justify-content: center;
        }
        .simulator-profile-card {
          position: relative;
          height: 12rem; /* Diperbesar */
          width: 9rem; /* Diperbesar */
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .simulator-profile-card:hover { transform: scale(1.08) rotate(3deg); }
        
        .simulator-profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Memastikan gambar pas */
          object-position: center;
        }

        .simulator-live-indicator {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          height: 1rem;
          width: 1rem;
          border-radius: 50%;
          border: 2px solid #fff;
          background-color: #22c55e;
          animation: pulse 1.5s infinite;
        }
        .simulator-slider-header {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .simulator-slider-title { font-size: 1.125rem; font-weight: 600; color: #ffffff; }
        .simulator-live-badge { display: flex; align-items: center; gap: 0.5rem; }
        .simulator-live-pulse-yellow {
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 50%;
          background-color: #facc15;
          animation: pulse 1.5s infinite;
        }
        .slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 0.75rem;
          cursor: pointer;
          border-radius: 9999px;
          background-color: #334155;
          transition: background 0.3s ease;
        }
        .slider-thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 28px; /* Diperbesar */
          height: 28px; /* Diperbesar */
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
          border: 3px solid #fff;
          transition: all 0.2s ease;
        }
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 6px 16px rgba(251, 191, 36, 0.6);
        }
        .simulator-slider-labels {
          margin-top: 0.5rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 600;
        }
        .simulator-amount-display {
          border-radius: 0.75rem;
          border: 1px solid #334155;
          background-color: rgba(30, 41, 59, 0.5);
          padding: 1rem;
          text-align: center;
          backdrop-filter: blur(4px);
        }
        .simulator-amount-text {
          font-size: clamp(1.5rem, 6vw, 2.25rem); /* Ukuran font responsif */
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #facc15;
        }
        .simulator-profit-section {
          margin-bottom: 2rem;
          border-radius: 0.75rem;
          border: 1px solid #334155;
          background-image: linear-gradient(to right, #0f172a, #1e293b, #0f172a);
          padding: 1.5rem;
          box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06);
          text-align: center;
        }
        .simulator-profit-title {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #9ca3af;
          text-transform: uppercase;
        }
        .simulator-profit-subtitle {
          margin-bottom: 1rem;
          font-size: 0.75rem;
          color: #6b7280;
        }
        .simulator-profit-amount {
          margin-bottom: 0.5rem;
          font-size: clamp(2rem, 7vw, 2.75rem); /* Ukuran font responsif */
          font-weight: 700;
          color: #4ade80;
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .simulator-profit-glow {
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          background-color: rgba(74, 222, 128, 0.1);
          filter: blur(1.5rem);
        }
        .simulator-realtime-badge {
          margin-top: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .simulator-live-bounce-green {
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 50%;
          background-color: #4ade80;
          animation: bounce 1s infinite;
        }
        .simulator-cta-button {
          position: relative;
          width: 100%;
          transform: scale(1);
          border-radius: 0.75rem;
          background-image: linear-gradient(to right, #f59e0b, #facc15, #f59e0b);
          padding: 1rem 1.5rem;
          font-size: 1.125rem;
          font-weight: 700;
          color: #1a2533;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .simulator-cta-button:hover {
          transform: scale(1.05);
          background-image: linear-gradient(to right, #d97706, #f59e0b, #d97706);
          box-shadow: 0 0 30px rgba(251, 191, 36, 0.4);
        }
        .simulator-cta-button:active { transform: scale(0.98); }
        .simulator-cta-text {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .simulator-cta-hover-glow {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          background-image: linear-gradient(to right, rgba(252, 211, 77, 0.5), rgba(217, 119, 6, 0.5));
          opacity: 0;
          filter: blur(1rem);
          transition: opacity 0.3s ease;
        }
        .simulator-cta-button:hover .simulator-cta-hover-glow { opacity: 1; }

        @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.1); } }
        @keyframes bounce {
          0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }

        /* =============================================================== */
        /* CSS BAGIAN 2: LANDING PAGE CLEANOZ (DI-UPDATE & LEBIH RESPONSIF) */
        /* =============================================================== */
        html { scroll-behavior: smooth; }
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Anton&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .cleanoz-body {
          font-family: 'Montserrat', sans-serif;
          background-color: #f4f4f4;
          color: #333;
          line-height: 1.7; /* Meningkatkan keterbacaan */
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem; }
        .text-center { text-align: center; }
        .section-title {
          font-family: 'Anton', sans-serif;
          font-size: clamp(2.2rem, 6vw, 3rem); /* Ukuran font responsif */
          margin-bottom: 2rem;
          color: #2c3e50;
          line-height: 1.2;
        }
        .highlight-orange { color: #FF9800; }
        .highlight-green { color: #4CAF50; }
        .strong-text { font-weight: 700; }
        .cta-button {
          background: linear-gradient(90deg, #FF9800, #f57c00);
          color: #fff;
          border: none;
          padding: 15px 35px;
          font-size: 1.2rem;
          font-weight: 700;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(255, 152, 0, 0.4);
          text-transform: uppercase;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(255, 152, 0, 0.6);
        }
        .hero-section {
          background: #2c3e50;
          color: #fff;
          padding: 60px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
        @media (min-width: 768px) { .hero-section { padding: 80px 0; } }
        .hero-content { flex: 1; min-width: 300px; max-width: 600px; text-align: center; }
        @media (min-width: 992px) { .hero-content { text-align: left; } }
        .main-headline {
          font-family: 'Anton', sans-serif;
          font-size: clamp(2.5rem, 7vw, 3.8rem);
          line-height: 1.1;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 5px rgba(0,0,0,0.3);
        }
        .sub-headline { font-size: 1.2rem; margin-bottom: 2rem; max-width: 500px; margin-left: auto; margin-right: auto; }
        @media (min-width: 992px) { .sub-headline { margin-left: 0; margin-right: 0; } }
        .hero-image-container { flex: 1; max-width: 500px; min-width: 300px; }
        .hero-image { width: 100%; border-radius: 20px; }
        .provocative-section { padding: 80px 0; background: #fff; }
        .provocative-grid { display: flex; align-items: center; gap: 3rem; flex-wrap: wrap; }
        .provocative-text { flex: 1.5; font-size: 1.1rem; }
        .provocative-text p { margin-bottom: 1rem; }
        .provocative-image { flex: 1; min-width: 280px; }
        .provocative-image img { width: 100%; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .problem-section { padding: 80px 0; }
        .problem-content { display: flex; align-items: center; gap: 3rem; flex-wrap: wrap-reverse; }
        .problem-image { flex: 1; }
        .problem-image img { width: 100%; }
        .problem-list { flex: 1.2; }
        .list-title {
          font-family: 'Anton', sans-serif;
          font-size: 2.2rem;
          color: #4CAF50;
          margin-bottom: 0.5rem;
        }
        .list-subtitle { margin-bottom: 1.5rem; font-style: italic; color: #555; }
        .problem-list ul { list-style: none; }
        .problem-list li { font-size: 1.1rem; margin-bottom: 1rem; display: flex; align-items: center; }
        .problem-list li span { margin-right: 10px; font-size: 1.5rem; }
        .solution-section { padding: 80px 0; background: #fff; }
        .solution-subtitle { font-size: 1.5rem; margin-bottom: 1.5rem; }
        .solution-flow {
          background: #e8f5e9;
          border-left: 5px solid #4CAF50;
          padding: 20px;
          margin: 2rem auto;
          border-radius: 8px;
          font-weight: 700;
          max-width: 800px;
        }
        .solution-images { display: flex; justify-content: center; align-items: center; gap: 1.5rem; margin-top: 2rem; flex-wrap: wrap; }
        .solution-images img { max-width: 250px; width: 100%; border-radius: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        .benefits-section { padding: 80px 0; }
        .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .benefit-item { background: #fff; padding: 30px; border-radius: 15px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.07); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .benefit-item:hover { transform: translateY(-8px); box-shadow: 0 12px 30px rgba(0,0,0,0.1); }
        .benefit-item img { width: 80px; margin-bottom: 1rem; }
        .benefit-item h3 { font-size: 1.3rem; color: #4CAF50; margin-bottom: 0.5rem; }
        .testimonial-section { padding: 80px 0; background: #fff; }
        .testimonial-subtitle { text-align: center; max-width: 600px; margin: 0 auto 2rem auto; font-size: 1.1rem; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
        .testimonial-grid img { width: 100%; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
        .testimonial-grid img:hover { transform: scale(1.05); }
        .influencer-testimonial { display: flex; align-items: center; gap: 2rem; background: #f4f4f4; padding: 30px; border-radius: 15px; margin-top: 3rem; flex-wrap: wrap; }
        .influencer-testimonial img { max-width: 200px; border-radius: 10px; }
        .influencer-testimonial h3 { font-size: 1.5rem; color: #FF9800; margin-bottom: 1rem; }
        .yt-thumbnail { margin-top: 1rem; max-width: 300px !important; border-radius: 10px; }
        .offer-section { padding: 80px 0; background: #2c3e50; color: #fff; }
        .promo-button-image { display: block; margin: 0 auto 2rem auto; max-width: 500px; width: 100%; transition: transform 0.3s ease; }
        .promo-button-image:hover { transform: scale(1.05); }
        .offer-content { display: flex; align-items: center; gap: 3rem; background: rgba(255,255,255,0.05); padding: 40px; border-radius: 20px; flex-wrap: wrap; }
        .offer-product { flex: 1; min-width: 280px; }
        .offer-product img { width: 100%; }
        .offer-details { flex: 1.5; min-width: 300px; }
        .offer-title { font-family: 'Anton', sans-serif; font-size: 2.5rem; margin-bottom: 1.5rem; }
        .offer-details ul { list-style: none; margin-bottom: 2rem; }
        .offer-details li { font-size: 1.1rem; margin-bottom: 1rem; display: flex; align-items: center; }
        .bonus-item { background: rgba(255, 152, 0, 0.1); padding: 10px; border-radius: 8px; }
        .bonus-item img { width: 50px; margin-right: 15px; }
        .final-cta { width: 100%; padding: 20px; font-size: 1.5rem; }
        .quality-badge { display: block; margin: 1.5rem auto 0 auto; max-width: 200px; }
        .footer-section { padding: 50px 0; background: #1a2533; color: #ccc; }
        .footer-section h2 { font-family: 'Anton', sans-serif; font-size: 2rem; line-height: 1.3; margin-bottom: 1rem; }
        .footer-section p { font-size: 1.1rem; margin-bottom: 0.5rem; }
        .footer-closing { margin-top: 1.5rem; margin-bottom: 2rem !important; }
        @media (max-width: 768px) {
          .section-title, .main-headline, .list-title, .offer-title { text-align: center; }
          .hero-content, .provocative-text, .problem-list, .offer-details { text-align: center; }
          .sub-headline { margin-left: auto; margin-right: auto; }
          .hero-section { padding: 40px 20px; }
        }
      `}</style>
    </>
  );
}

export default App;
