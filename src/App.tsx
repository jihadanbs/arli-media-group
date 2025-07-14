import React, { useState } from "react";

function App() {
  const [modalAmount, setModalAmount] = useState(500000);
  const [showNextSection, setShowNextSection] = useState(false);
  const minAmount = 100000;
  const maxAmount = 10000000;

  const calculateProfit = (amount: number) => {
    return Math.floor(amount * 102.1);
  };

  const formatRupiah = (amount: number) => {
    return new Intl.NumberFormat("id-ID").format(amount);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalAmount(parseInt(e.target.value));
  };

  const handleCTAClick = () => {
    setShowNextSection(true);
    setTimeout(() => {
      document.getElementById("next-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <>
      <div className="pageWrapper">
        {/* Main Card Section */}
        <div className="container">
          <div className="mainCard">
            {/* Header Section */}
            <div className="header">
              <div className="headerText">
                <h1 className="headerTitle">
                  Berapa Juta yang
                  <br />
                  Bisa Dihasilkan dari
                  <br />
                  Modal Anda?
                </h1>

                <div className="headerDescription">
                  <p className="descriptionHighlight">
                    <span className="mr-2">⚡</span>
                    Geser & Lihat Sendiri.
                  </p>
                  <p className="descriptionSubtext">
                    Simulasikan kekuatan efek bola
                    <br />
                    salju pada modal awal Anda.
                  </p>
                </div>
              </div>

              {/* Profile Image */}
              <div className="profileImageWrapper">
                <div className="profileImageCard">
                  <div className="profileImageGradient"></div>
                  <div className="profileImageContent">
                    <div className="iconWrapper">
                      <span className="text-2xl">💰</span>
                    </div>
                    <div className="lineArt">
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </div>
                  <div className="liveIndicator"></div>
                </div>
              </div>
            </div>

            {/* Slider Section */}
            <div className="mb-8">
              <div className="sliderHeader">
                <p className="sliderTitle">Mulai dengan Modal Awal:</p>
                <div className="liveBadge">
                  <div className="livePulseYellow"></div>
                  <span className="text-xs text-gray-400">Live</span>
                </div>
              </div>

              {/* Custom Slider */}
              <div className="relative mb-6">
                <input
                  type="range"
                  min={minAmount}
                  max={maxAmount}
                  value={modalAmount}
                  onChange={handleSliderChange}
                  className="slider"
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
                <div className="sliderLabels">
                  <span>Rp {formatRupiah(minAmount)}</span>
                  <span>Rp {formatRupiah(maxAmount)}</span>
                </div>
              </div>

              {/* Amount Display */}
              <div className="amountDisplay">
                <span className="amountText">
                  Rp {formatRupiah(modalAmount)}
                </span>
              </div>
            </div>

            {/* Profit Potential Section */}
            <div className="profitSection">
              <div className="text-center">
                <p className="profitTitle">POTENSI KEUNTUNGAN BERSIH ANDA</p>
                <p className="profitSubtitle">(setelah 5x putaran)</p>
                <div className="relative">
                  <p className="profitAmount">
                    Rp {formatRupiah(calculateProfit(modalAmount))}
                  </p>
                  <div className="profitGlow"></div>
                </div>
                <div className="realtimeBadge">
                  <div className="liveBounceGreen"></div>
                  <span className="text-xs text-green-400">
                    Estimasi Real-time
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button onClick={handleCTAClick} className="ctaButton">
              <span className="ctaText">
                <span className="mr-2">🚀</span>
                Jadiin Kenyataan, Praktek Sekarang!
              </span>
              <div className="ctaHoverGlow"></div>
            </button>

            {/* Trust indicators */}
            <div className="trustIndicators">
              <div className="indicatorItem">
                <div className="indicatorDotGreen"></div>
                <span>Aman & Terpercaya</span>
              </div>
              <div className="indicatorSeparator"></div>
              <div className="indicatorItem">
                <div className="indicatorDotBlue"></div>
                <span>Hasil Real-time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Next Section - Muncul setelah klik CTA */}
        {showNextSection && (
          <div id="next-section" className="nextSection">
            <div className="container">
              <div className="nextSectionContent">
                {/* Problem Section */}
                <div className="mb-12 text-center">
                  <h2 className="problemTitle">
                    Apakah Ini yang Sedang Anda Rasakan?
                  </h2>
                  <div className="problemList">
                    <div className="problemItem">
                      <span className="text-xl text-red-400">❌</span>
                      <p className="text-gray-300">
                        Punya keinginan kuat buka usaha, tapi selalu mentok,
                        "Harus mulai dari mana, ya?"
                      </p>
                    </div>
                    <div className="problemItem">
                      <span className="text-xl text-red-400">❌</span>
                      <p className="text-gray-300">
                        Sudah nonton banyak video, tapi bukannya jelas, malah
                        makin bingung dan kewalahan.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution Section */}
                <div className="mb-12 text-center">
                  <h2 className="solutionTitle">
                    Ini Bukan Kelas Teori, Ini BENGKEL PRAKTIK.
                  </h2>
                  <p className="solutionDescription">
                    Di Minicourse Produk Solusi, kita akan bongkar kebingungan
                    Anda menjadi aksi nyata. Ini yang akan kita praktikkan
                    bersama:
                  </p>
                </div>

                {/* Features Grid */}
                <div className="featuresGrid">
                  <div className="featureCard">
                    <div className="featureHeader">
                      <span className="mr-3 text-2xl">💡</span>
                      <h3 className="featureTitle">
                        Praktik Mencari Ide Produk
                      </h3>
                    </div>
                    <p className="text-gray-300">
                      Kita akan praktik cara menemukan ide produk yang dicari
                      banyak orang dari masalah di sekitar kita. Anda akan
                      belajar melihat peluang di setiap keluhan.
                    </p>
                  </div>
                  <div className="featureCard">
                    <div className="featureHeader">
                      <span className="mr-3 text-2xl">🎯</span>
                      <h3 className="featureTitle">
                        Praktik Memfilter Ide (Anti Bingung)
                      </h3>
                    </div>
                    <p className="text-gray-300">
                      Khusus untuk Anda yang punya terlalu banyak ide, kita akan
                      praktik cara memfilternya. Anda akan bisa memilih satu ide
                      terbaik yang paling mudah dieksekusi.
                    </p>
                  </div>
                  <div className="featureCard">
                    <div className="featureHeader">
                      <span className="mr-3 text-2xl">🔓</span>
                      <h3 className="featureTitle">
                        Bocoran Tempat Cari Formula Ampuh & Gratis
                      </h3>
                    </div>
                    <p className="text-gray-300">
                      Saya akan tunjukkan di mana dan bagaimana cara mencari
                      formula produk yang gratis, legal, tapi sangat ampuh. Anda
                      tidak perlu riset dari nol.
                    </p>
                  </div>
                  <div className="featureCard">
                    <div className="featureHeader">
                      <span className="mr-3 text-2xl">📋</span>
                      <h3 className="featureTitle">
                        Dapatkan Action Plan yang Terbukti
                      </h3>
                    </div>
                    <p className="text-gray-300">
                      Anda akan mendapatkan checklist action plan yang sama
                      persis seperti yang saya gunakan untuk memutar modal kecil
                      hingga tembus miliaran.
                    </p>
                  </div>
                </div>

                {/* Testimonial Section */}
                <div className="testimonialSection">
                  <h3 className="testimonialMainTitle">
                    Ini Bukan Teori, Ini Pengalaman Pribadi Saya.
                  </h3>
                  <div className="text-center">
                    <div className="testimonialCard">
                      <p className="testimonialText">
                        "Metode yang akan saya bagikan ini bukan sekadar teori
                        yang saya baca dari buku. Ini adalah pengalaman nyata
                        saya sejak tahun 2012.
                      </p>
                      <p className="testimonialText">
                        Saya memulai dengan modal hanya Rp 900.000, dan dengan
                        menerapkan prinsip 'Produk Solusi' dan 'Efek Bola
                        Salju', modal tersebut berhasil saya putar hingga
                        menjadi Rp 1,4 Miliar.
                      </p>
                      <p className="testimonialTextNoMargin">
                        Perjalanan ini tidak instan, tapi metodenya terbukti
                        berhasil. Dan karena keberhasilan ini, kisah saya
                        diliput oleh berbagai media nasional sebagai bukti bahwa
                        cara ini nyata."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="pricingSection">
                  <h3 className="pricingTitle">
                    Penawaran Spesial Ini Akan Berakhir!
                  </h3>
                  <div className="mb-6">
                    <p className="originalPrice">Harga Normal: Rp 400.000</p>
                    <p className="specialPrice">
                      HARGA SPESIAL SAAT INI: Rp 90.000
                    </p>
                  </div>
                  <button className="finalCtaButton">
                    Daftar dengan Harga Spesial Sekarang!
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* --- BLOK CSS DIMULAI DI SINI --- */}
      <style>{`
        /* General Setup */
        .pageWrapper {
          min-height: 100vh;
          background-color: #0f172a; /* bg-slate-900 */
          font-family: sans-serif;
          color: #ffffff;
        }

        .container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 2rem; /* py-8 */
          padding-bottom: 2rem;
        }

        @media (min-width: 1024px) {
          .container {
            padding-top: 4rem; /* lg:py-16 */
            padding-bottom: 4rem;
          }
        }

        .mainCard {
          max-width: 56rem; /* max-w-4xl */
          margin-left: auto;
          margin-right: auto;
          border-radius: 1rem; /* rounded-2xl */
          border: 1px solid #334155; /* border-slate-700 */
          background-image: linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a); /* from-slate-900 via-slate-800 to-slate-900 */
          padding: 1rem; /* p-4 */
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* shadow-2xl */
        }

        @media (min-width: 640px) {
          .mainCard {
            padding: 1.5rem; /* sm:p-6 */
          }
        }
        @media (min-width: 1024px) {
          .mainCard {
            padding: 2rem; /* lg:p-8 */
          }
        }

        /* Header Section */
        .header {
          margin-bottom: 2rem; /* mb-8 */
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1.5rem; /* gap-6 */
        }
        @media (min-width: 1024px) {
          .header {
            flex-direction: row;
          }
        }

        .headerText {
          flex: 1 1 0%;
        }

        .headerTitle {
          margin-bottom: 1rem; /* mb-4 */
          font-size: 1.25rem; /* text-xl */
          line-height: 1.25; /* leading-tight */
          font-weight: 700; /* font-bold */
          background-image: linear-gradient(to right, #ffffff, #d1d5db); /* from-white to-gray-300 */
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        @media (min-width: 640px) {
          .headerTitle {
            font-size: 1.5rem; /* sm:text-2xl */
          }
        }
        @media (min-width: 1024px) {
          .headerTitle {
            font-size: 1.875rem; /* lg:text-3xl */
          }
        }

        .headerDescription {
          margin-bottom: 1rem;
        }

        .descriptionHighlight {
          margin-bottom: 0.5rem; /* mb-2 */
          display: flex;
          align-items: center;
          font-size: 1rem; /* text-base */
          font-weight: 600; /* font-semibold */
          color: #facc15; /* text-yellow-400 */
        }

        @media (min-width: 640px) {
          .descriptionHighlight {
            font-size: 1.125rem; /* sm:text-lg */
          }
        }

        .descriptionSubtext {
          font-size: 0.875rem; /* text-sm */
          line-height: 1.625; /* leading-relaxed */
          color: #9ca3af; /* text-gray-400 */
        }

        /* Profile Image Section */
        .profileImageWrapper {
          display: flex;
          width: 100%;
          justify-content: center;
        }
        @media (min-width: 1024px) {
          .profileImageWrapper {
            width: auto;
            justify-content: flex-end;
          }
        }

        .profileImageCard {
          position: relative;
          height: 10rem;   /* h-40 */
          width: 8rem;   /* w-32 */
          transform: scale(1); /* base transform */
          overflow: hidden;
          border-radius: 1rem; /* rounded-2xl */
          background-image: linear-gradient(to bottom right, #f59e0b, #d97706, #b45309);
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
          transition: transform 0.3s ease-in-out;
        }
        .profileImageCard:hover {
          transform: scale(1.05);
        }

        @media (min-width: 640px) {
          .profileImageCard {
            height: 11rem;
            width: 9rem;
          }
        }
        @media (min-width: 1024px) {
          .profileImageCard {
            height: 10rem;
            width: 8rem;
          }
        }

        .profileImageGradient {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(to top, rgba(0,0,0,0.2), transparent);
        }

        .profileImageContent {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          text-align: center;
        }

        .iconWrapper {
          margin-bottom: 0.75rem;
          display: flex;
          height: 4rem;
          width: 4rem;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          backdrop-filter: blur(4px);
        }

        .lineArt {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .line1, .line2, .line3 {
          height: 0.25rem;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.4);
          margin-left: auto;
          margin-right: auto;
        }
        .line1 { width: 3rem; }
        .line2 { width: 2rem; }
        .line3 { width: 2.5rem; }


        .liveIndicator {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
          height: 1.5rem;
          width: 1.5rem;
          border-radius: 9999px;
          border: 2px solid #1e293b;
          background-color: #22c55e;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        .sliderHeader {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          gap: 0.5rem;
        }
        @media (min-width: 640px) {
          .sliderHeader {
            flex-direction: row;
            align-items: center;
          }
        }

        .sliderTitle {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
        }
        @media (min-width: 1024px) {
          .sliderTitle {
            font-size: 1.125rem;
          }
        }

        .liveBadge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .livePulseYellow {
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 9999px;
          background-color: #facc15;
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .slider {
          -webkit-appearance: none;
          appearance: none;
          width: 100%;
          height: 0.75rem;
          cursor: pointer;
          border-radius: 9999px;
          background-color: #334155;
        }

        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
          border: 2px solid #1e293b;
          transition: all 0.2s ease;
        }

        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(251, 191, 36, 0.6);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);
          border: 2px solid #1e293b;
          transition: all 0.2s ease;
        }

        @media (max-width: 640px) {
          .slider::-webkit-slider-thumb {
            width: 20px;
            height: 20px;
          }
          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
          }
        }

        .sliderLabels {
          margin-top: 0.5rem;
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          color: #6b7280;
        }

        .amountDisplay {
          border-radius: 0.75rem;
          border: 1px solid #334155;
          background-color: rgba(30, 41, 59, 0.5);
          padding: 1rem;
          text-align: center;
          backdrop-filter: blur(4px);
        }
        .amountText {
          font-size: 1.5rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #facc15;
        }
        @media (min-width: 640px) {
          .amountText {
            font-size: 1.875rem;
          }
        }

        .profitSection {
          margin-bottom: 2rem;
          border-radius: 0.75rem;
          border: 1px solid #334155;
          background-image: linear-gradient(to right, #0f172a, #1e293b, #0f172a);
          padding: 1rem;
          box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06);
        }
        @media (min-width: 640px) {
          .profitSection {
            padding: 1.5rem;
          }
        }
        .profitTitle {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #9ca3af;
          text-transform: uppercase;
        }
        .profitSubtitle {
          margin-bottom: 1rem;
          font-size: 0.75rem;
          color: #6b7280;
        }
        .profitAmount {
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #4ade80;
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @media (min-width: 640px) { .profitAmount { font-size: 1.875rem; } }
        @media (min-width: 1024px) { .profitAmount { font-size: 2.25rem; } }

        .profitGlow {
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          background-color: rgba(74, 222, 128, 0.1);
          filter: blur(1.5rem);
        }

        .realtimeBadge {
          margin-top: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .liveBounceGreen {
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 9999px;
          background-color: #4ade80;
          animation: bounce 1s infinite;
        }

        .ctaButton {
          position: relative;
          width: 100%;
          transform: scale(1);
          border-radius: 0.75rem;
          background-image: linear-gradient(to right, #f59e0b, #facc15, #f59e0b);
          padding: 1rem 1.5rem;
          font-size: 1rem;
          font-weight: 700;
          color: #000000;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .ctaButton:hover {
          transform: scale(1.05);
          background-image: linear-gradient(to right, #d97706, #f59e0b, #d97706);
          box-shadow: 0 0 25px rgba(251, 191, 36, 0.25);
        }
        .ctaButton:active {
          transform: scale(0.95);
        }

        .ctaText {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ctaHoverGlow {
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          background-image: linear-gradient(to right, rgba(252, 211, 77, 0.5), rgba(217, 119, 6, 0.5));
          opacity: 0;
          filter: blur(1rem);
          transition: opacity 0.3s ease;
        }
        .ctaButton:hover .ctaHoverGlow {
          opacity: 1;
        }

        .trustIndicators {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          color: #6b7280;
        }
        @media (min-width: 640px) {
          .trustIndicators {
            flex-direction: row;
            gap: 1rem;
          }
        }
        .indicatorItem {
          display: flex;
          align-items: center;
        }
        .indicatorDotGreen {
          margin-right: 0.25rem;
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 9999px;
          background-color: #22c55e;
        }
        .indicatorDotBlue {
          margin-right: 0.25rem;
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 9999px;
          background-color: #3b82f6;
        }
        .indicatorSeparator {
          display: none;
        }
        @media (min-width: 640px) {
          .indicatorSeparator {
            display: block;
            height: 0.25rem;
            width: 0.25rem;
            border-radius: 9999px;
            background-color: #4b5563;
          }
        }

        .nextSection {
          background-color: #1e293b;
          padding-top: 3rem;
          padding-bottom: 3rem;
          transition: all 1s ease-in-out;
        }
        @media (min-width: 1024px) {
          .nextSection {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }

        .nextSectionContent {
          max-width: 56rem;
          margin-left: auto;
          margin-right: auto;
          color: #ffffff;
        }

        .problemTitle {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          background-image: linear-gradient(to right, #f87171, #dc2626);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        @media (min-width: 640px) { .problemTitle { font-size: 1.875rem; } }
        @media (min-width: 1024px) { .problemTitle { font-size: 2.25rem; } }

        .problemList {
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }

        .problemItem {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          border-radius: 0.75rem;
          background-color: #0f172a;
          padding: 1rem;
        }

        .solutionTitle {
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
          font-weight: 700;
          background-image: linear-gradient(to right, #4ade80, #16a34a);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        @media (min-width: 640px) { .solutionTitle { font-size: 1.875rem; } }
        @media (min-width: 1024px) { .solutionTitle { font-size: 2.25rem; } }

        .solutionDescription {
          margin-bottom: 2rem;
          font-size: 1.125rem;
          color: #d1d5db;
        }

        .featuresGrid {
          margin-bottom: 3rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .featuresGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .featureCard {
          border-radius: 0.75rem;
          border: 1px solid #334155;
          background-color: #0f172a;
          padding: 1.5rem;
        }
        .featureHeader {
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .featureTitle {
          font-size: 1.25rem;
          font-weight: 700;
          color: #facc15;
        }

        .testimonialSection {
          margin-bottom: 3rem;
          border-radius: 0.75rem;
          border: 1px solid #334155;
          background-image: linear-gradient(to right, #0f172a, #1e293b);
          padding: 1.5rem;
        }
        @media (min-width: 1024px) {
          .testimonialSection {
            padding: 2rem;
          }
        }

        .testimonialMainTitle {
          margin-bottom: 1.5rem;
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #facc15;
        }

        .testimonialCard {
          border-radius: 0.75rem;
          border: 1px solid #4b5563;
          background-color: #1e293b;
          padding: 1.5rem;
        }

        .testimonialText {
          margin-bottom: 1rem;
          font-size: 1.125rem;
          line-height: 1.625;
          color: #d1d5db;
          font-style: italic;
        }
        .testimonialTextNoMargin {
          font-size: 1.125rem;
          line-height: 1.625;
          color: #d1d5db;
          font-style: italic;
        }

        .pricingSection {
          border-radius: 0.75rem;
          border: 1px solid rgba(245, 158, 11, 0.2);
          background-image: linear-gradient(to right, rgba(245, 158, 11, 0.1), rgba(217, 119, 6, 0.1));
          padding: 2rem;
          text-align: center;
        }
        .pricingTitle {
          margin-bottom: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
          color: #facc15;
        }
        .originalPrice {
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          color: #9ca3af;
          text-decoration-line: line-through;
        }
        .specialPrice {
          margin-bottom: 1rem;
          font-size: 1.875rem;
          font-weight: 700;
          color: #4ade80;
        }
        .finalCtaButton {
          transform: scale(1);
          border-radius: 0.75rem;
          background-image: linear-gradient(to right, #22c55e, #16a34a);
          padding: 1rem 2rem;
          font-size: 1.125rem;
          font-weight: 700;
          color: #ffffff;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }
        .finalCtaButton:hover {
          transform: scale(1.05);
          background-image: linear-gradient(to right, #16a34a, #15803d);
        }
      `}</style>
    </>
  );
}

export default App;
