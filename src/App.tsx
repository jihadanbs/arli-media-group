import React, { useState } from "react";

// For better organization, you could split these into separate components
// e.g., <SimulatorCard /> and <CleanozLandingPage />
function App() {
  const [modalAmount, setModalAmount] = useState(500000);
  const minAmount = 100000;
  const maxAmount = 10000000;
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);

  const calculateProfit = (amount: number) => Math.floor(amount * 102.1);
  const formatRupiah = (amount: number) =>
    new Intl.NumberFormat("id-ID").format(amount);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalAmount(parseInt(e.target.value));
  };

  const handleShowMainContent = () => {
    setIsMainContentVisible(true);
    setTimeout(() => {
      document.getElementById("main-content-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100); // Small delay for rendering
  };

  const handleFinalCTAClick = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Cleanoz!",
      "_blank"
    );
  };

  const sliderPercentage =
    ((modalAmount - minAmount) / (maxAmount - minAmount)) * 100;

  return (
    <>
      {/* ================================================================== */}
      {/* PART 1: SIMULATOR CARD                                           */}
      {/* ================================================================== */}
      <div className="flex min-h-screen items-center justify-center bg-brand-dark-blue p-4 font-montserrat text-brand-text-primary">
        <div className="w-full max-w-6xl">
          <div className="rounded-3xl border border-brand-slate-border bg-gradient-to-br from-brand-slate via-brand-dark-blue to-brand-slate p-6 shadow-2xl md:p-10">
            {/* Header Section */}
            <header className="mb-8 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
              <div className="flex-1">
                <h1 className="mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text font-anton text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl">
                  Berapa Juta yang <br /> Bisa Dihasilkan dari <br /> Modal
                  Anda?
                </h1>
                <div>
                  <p className="mb-2 inline-flex items-center text-lg font-bold text-brand-yellow">
                    <span className="mr-2">⚡</span> Geser & Lihat Sendiri.
                  </p>
                  <p className="text-sm leading-relaxed text-brand-text-secondary">
                    Simulasikan kekuatan efek bola <br /> salju pada modal awal
                    Anda.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="group relative h-48 w-36 transform cursor-pointer overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-3">
                  <img
                    src="https://cdn.scalev.id/Image/BVB_8lpzBsiMyltdO8DuBpv6vJusuAg676TI1RzyfIM/1749889052787-freepik__arli-an-indone_iOoyP0I.webp"
                    alt="Arli Kurnia dengan produk Cleanoz"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute right-2 top-2 h-4 w-4 animate-pulse rounded-full border-2 border-white bg-brand-green-light"></div>
                </div>
              </div>
            </header>

            {/* Slider Section */}
            <div className="mb-8">
              <div className="mb-4 flex flex-row items-center justify-between">
                <p className="text-lg font-semibold text-white">
                  Mulai dengan Modal Awal:
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-brand-yellow"></div>
                  <span className="text-xs text-brand-text-secondary">
                    Live
                  </span>
                </div>
              </div>
              <div className="relative mb-6">
                <input
                  type="range"
                  min={minAmount}
                  max={maxAmount}
                  value={modalAmount}
                  onChange={handleSliderChange}
                  className="slider-thumb h-3 w-full cursor-pointer appearance-none rounded-full bg-brand-slate-border"
                  style={{
                    background: `linear-gradient(to right, #fbbf24 ${sliderPercentage}%, #374151 ${sliderPercentage}%)`,
                  }}
                />
                <div className="mt-2 flex justify-between text-xs font-semibold text-brand-text-tertiary">
                  <span>Rp {formatRupiah(minAmount)}</span>
                  <span>Rp {formatRupiah(maxAmount)}</span>
                </div>
              </div>
              <div className="rounded-xl border border-brand-slate-border bg-brand-slate/50 p-4 text-center backdrop-blur-sm">
                <span className="text-3xl font-bold tracking-wider text-brand-yellow sm:text-4xl">
                  Rp {formatRupiah(modalAmount)}
                </span>
              </div>
            </div>

            {/* Profit Potential Section */}
            <div className="mb-8 rounded-xl border border-brand-slate-border bg-gradient-to-r from-brand-dark-blue via-brand-slate to-brand-dark-blue p-6 text-center shadow-inner">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-brand-text-secondary">
                POTENSI KEUNTUNGAN BERSIH ANDA
              </p>
              <p className="mb-4 text-xs text-brand-text-tertiary">
                (setelah 5x putaran)
              </p>
              <div className="relative">
                <p className="animate-pulse-slow mb-2 text-4xl font-bold text-brand-green-light sm:text-5xl">
                  Rp {formatRupiah(calculateProfit(modalAmount))}
                </p>
                <div className="absolute inset-0 rounded-lg bg-brand-green-light/10 blur-xl"></div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="h-2 w-2 animate-bounce rounded-full bg-brand-green-light"></div>
                <span className="text-xs text-brand-green-light">
                  Estimasi Real-time
                </span>
              </div>
            </div>

            {/* Main CTA Button */}
            <button
              onClick={handleShowMainContent}
              className="group relative w-full transform rounded-xl bg-gradient-to-r from-brand-orange-dark via-brand-yellow to-brand-orange-dark px-6 py-4 text-lg font-bold text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-brand-yellow/40 active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2">🚀</span> Jadiin Kenyataan, Praktek
                Sekarang!
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/50 to-orange-600/50 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"></div>
            </button>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* PART 2: CLEANOZ LANDING PAGE (Conditionally Rendered)            */}
      {/* ================================================================== */}
      {isMainContentVisible && (
        <div className="animate-fadeIn bg-[#f4f4f4] font-montserrat text-[#333]">
          <header
            id="main-content-section"
            className="flex flex-wrap items-center justify-center gap-8 bg-[#2c3e50] p-10 py-16 text-white md:py-20"
          >
            <div
              className="flex-1 text-center md:text-left"
              style={{ maxWidth: "600px" }}
            >
              <h1 className="mb-4 font-anton text-4xl leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                Boros Bensin Bikin Dompet Tipis? <br />
                <span className="text-brand-orange">
                  Gas Tipis Pakai Cleanoz!
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-md text-lg md:mx-0">
                Tiga Tetes Bukan Cuma Irit, Tapi Bikin Mesin Enteng, Suara
                Halus, Dan Hemat Biaya Servis!
              </p>
              <button
                onClick={handleFinalCTAClick}
                className="transform rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-darker px-8 py-4 text-lg font-bold uppercase text-white shadow-lg shadow-brand-orange/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-orange/60"
              >
                KIRIM SAYA CLEANOZ SEKARANG
              </button>
            </div>
            <div className="flex-1" style={{ maxWidth: "500px" }}>
              <img
                src="https://cdn.scalev.id/Image/_80DHjOh15B-7JCgbxr9fvoGNEeow1etLsnhm-ELi7s/1740124810449-headline_LP_scalev.webp"
                alt="Produk Cleanoz"
                className="w-full rounded-2xl"
              />
            </div>
          </header>

          <main>
            {/* Provocative Opening Section */}
            <section className="bg-white py-20">
              <div className="container mx-auto max-w-6xl px-6">
                <h2 className="text-center font-anton text-4xl text-[#2c3e50] md:text-5xl">
                  Pernah Ngerasa{" "}
                  <span className="text-brand-orange">Gaji Habis</span> Cuma
                  Buat Isi Bensin?
                </h2>
                <div className="mt-12 flex flex-wrap items-center gap-12">
                  <div className="flex-1 space-y-4 text-lg leading-relaxed">
                    <p>
                      Tarikan motor makin berat. Dompet makin sesak. Hidup
                      rasanya diem di tempat.
                    </p>
                    <p>
                      Padahal setiap hari harus ngerit di jalanan. Cari nafkah.
                      Kirim barang. Jemput anak.
                    </p>
                    <p className="font-bold">
                      Apa nggak capek kalau semua tenaga habis cuma buat bayar
                      bensin?
                    </p>
                    <p className="font-bold text-brand-green">
                      Rakyat kecil kayak kita nggak boleh kalah sama krisis.
                      Karena hemat BBM itu bukan cuma soal bensin. Tapi soal
                      bisa bertahan hidup.
                    </p>
                  </div>
                  <div className="flex-1" style={{ minWidth: "280px" }}>
                    <img
                      src="https://cdn.scalev.id/Image/WjYbTMfsRQ5_95XzAAe9aI8H88dv77H0suUWZm2CRds/1740110069436-images_3499951710837471855.webp"
                      alt="Pria lelah memegang helm"
                      className="w-full rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Problem Section */}
            <section className="py-20">
              <div className="container mx-auto max-w-6xl px-6">
                <div className="flex flex-wrap-reverse items-center gap-12">
                  <div className="w-full lg:w-5/12">
                    <img
                      src="https://cdn.scalev.id/Image/sfeKLm-8W4HKyeFU-Xyiisf50OPX1ygZwsxotFeCTfI/1740105354536-images_5739451732158302543.webp"
                      alt="Ilustrasi bensin dan servis mahal"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full lg:w-7/12">
                    <h3 className="font-anton text-4xl text-brand-green">
                      "Gas Tipis, Anti Krisis.”
                    </h3>
                    <p className="mb-6 mt-2 text-lg italic text-gray-600">
                      Kalau masih ngandelin cara lama, ya bakal ngerasa capek
                      terus.
                    </p>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-start">
                        <span className="mr-3 mt-1">❌</span> Bensin makin
                        mahal, tapi kerja nggak bisa berhenti.
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-1">❌</span> Mesin motor/mobil
                        makin berat, keluar biaya servis makin mahal.
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-1">❌</span> Udah irit-irit,
                        tetap habis cuma buat beli bensin.
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-1">❌</span> Mau nabung, susah.
                        Habis buat jalan terus.
                      </li>
                      <li className="flex items-start">
                        <span className="mr-3 mt-1">❌</span> Capek rasanya,
                        kayak kerja nggak pernah cukup.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Solution Section */}
            <section className="bg-white py-20 text-center">
              <div className="container mx-auto max-w-6xl px-6">
                <h2 className="font-anton text-4xl text-[#2c3e50] md:text-5xl">
                  Cleanoz Hadir Bukan Cuma Buat{" "}
                  <span className="text-brand-orange">Irit Bensin.</span>
                </h2>
                <p className="mt-4 text-xl">
                  Cleanoz adalah cara rakyat kecil{" "}
                  <span className="font-bold text-brand-green">
                    ngelawan krisis.
                  </span>
                </p>
                <div className="mx-auto my-8 max-w-3xl rounded-lg border-l-4 border-brand-green bg-green-50 p-5 font-bold">
                  <p>
                    Tetesin Cleanoz ke tangki bensin ➡️ Mesin bersih ➡️ BBM
                    lebih irit ➡️ Tarikan enteng ➡️ Dompet lebih aman.
                  </p>
                </div>
                <p className="text-lg font-bold">
                  Ini bukan sulap. Ini solusi.
                </p>
                <p className="text-lg">
                  Karena setiap tetes Cleanoz nyimpen tenaga besar buat bikin
                  hidup tetap jalan.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                  <img
                    src="https://cdn.scalev.id/Image/d6J120s-MAiouxwubFFk9xShj-AJvDmWrm-jYqFC0Fg/1740105489408-images_8188821710837559593.webp"
                    alt="Pria acungkan jempol di samping mobil"
                    className="h-auto w-full max-w-[250px] rounded-lg shadow-lg"
                  />
                  <img
                    src="https://cdn.scalev.id/Image/JUtBttAUoiW87a5FtXQkrp4Vh50Av4WGh6aq6qt_gzw/save.gif"
                    alt="Animasi mesin bekerja"
                    className="h-auto w-full max-w-[250px] rounded-lg shadow-lg"
                  />
                  <img
                    src="https://cdn.scalev.id/Image/Rp5bncNEKTSLhA5K_xPNamJBuH7xu4s3sST2R3zxgQg/1740105550114-images_7642981710837559675_1.webp"
                    alt="Produk Cleanoz"
                    className="h-auto w-full max-w-[250px] rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20">
              <div className="container mx-auto max-w-6xl px-6">
                <h2 className="text-center font-anton text-4xl text-[#2c3e50] md:text-5xl">
                  Setiap Tetesnya Memberi{" "}
                  <span className="text-brand-orange">Banyak Keuntungan</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      icon: "https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp",
                      title: "Bensin Jadi Jauh Lebih Irit",
                      desc: "Penghematan BBM hingga 20-40%, cocok untuk kendaraan pribadi, usaha, hingga mesin kapal.",
                    },
                    {
                      icon: "https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp",
                      title: "Tarikan Mesin Enteng & Responsif",
                      desc: "Mesin lebih ringan saat akselerasi, tenaga lebih maksimal, nyaman saat bawa beban berat atau tanjakan.",
                    },
                    {
                      icon: "https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp",
                      title: "Suara Mesin Lebih Halus & Senyap",
                      desc: "Mengurangi suara kasar, bikin mesin lebih halus dan tenang saat dipacu.",
                    },
                    {
                      icon: "https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp",
                      title: "Mencegah Kerusakan Mesin",
                      desc: "Membersihkan sisa pembakaran dan mencegah kerak karbon yang menempel di piston.",
                    },
                    {
                      icon: "https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp",
                      title: "Nggak Perlu Nunggu Lama",
                      desc: "Hasil bisa langsung dirasakan sejak pemakaian pertama, mesin lebih enteng dan irit BBM.",
                    },
                    {
                      icon: "https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp",
                      title: "Oli Jadi Lebih Awet",
                      desc: "Oli 2x lipat lebih bersih dan tahan lama karena ruang bakar lebih bersih.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="transform rounded-xl bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >
                      <img
                        src={item.icon}
                        alt={`Ikon ${item.title}`}
                        className="mx-auto mb-4 w-20"
                      />
                      <h3 className="mb-2 text-xl font-bold text-brand-green">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonial Section */}
            <section className="bg-white py-20">
              <div className="container mx-auto max-w-6xl px-6">
                <h2 className="text-center font-anton text-4xl text-[#2c3e50] md:text-5xl">
                  Sudah Teruji di Lebih Dari{" "}
                  <span className="text-brand-orange">137.000 Kendaraan</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-600">
                  Banyak testimoni asli pengguna di media sosial, chat WhatsApp,
                  Telegram, dan video YouTube.
                </p>
                <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                  {[
                    "https://cdn.scalev.id/Image/yvVYvCfNskdCJpCCYr7hl_20JVaQc4NsSuwUC7paH6g/1740106471143-images_8242131732162002708.webp",
                    "https://cdn.scalev.id/Image/sEtUpeuCGwYjDRYSWOYN4nzW03p7sXTvy6KJUuReRTE/1740106560493-images_5368361732162116127_1.webp",
                    "https://cdn.scalev.id/Image/RrNcD8TLCq5Y_KFbNpi7M_PFcMri4MUNGoqFqG--h84/1740106664357-images_9440881732162370426.webp",
                    "https://i.ytimg.com/vi/vgjzF0JqfoM/hqdefault.jpg",
                    "https://i.ytimg.com/vi/BJ172CrlpfE/hqdefault.jpg",
                    "https://i.ytimg.com/vi/O_2V0sJOuGc/hqdefault.jpg",
                  ].map((testi, index) => (
                    <img
                      key={index}
                      src={testi}
                      alt={`Testimoni ${index + 1}`}
                      className="w-full rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                    />
                  ))}
                </div>
                <div className="mt-12 flex flex-col items-center gap-8 rounded-2xl bg-gray-100 p-8 md:flex-row">
                  <img
                    src="https://cdn.scalev.id/Image/Nn3jQwBzPY2gMVipmGZM6qAjIIwf-_fz7pZjVfK_qaw/1740106851040-images_1863501731913227260.webp"
                    alt="Ridwan Hanif"
                    className="w-48 rounded-lg"
                  />
                  <div>
                    <h3 className="mb-2 font-anton text-3xl text-brand-orange">
                      Direview oleh Ahlinya
                    </h3>
                    <p className="mb-4 text-lg italic">
                      "Cairan ini beneran bisa bantu bersihin kerak di mesin,
                      bikin pembakaran lebih sempurna. Efeknya, bensin jadi
                      lebih irit. Cocok buat yang kendaraannya dipakai harian."
                      -{" "}
                      <strong className="not-italic">
                        Ridwan Hanif, Otomotif Influencer
                      </strong>
                    </p>
                    <img
                      src="https://i.ytimg.com/vi/bemupKqha2M/hqdefault.jpg"
                      alt="Thumbnail YouTube Ridwan Hanif"
                      className="w-full max-w-xs rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Offer Section */}
            <section className="bg-[#2c3e50] py-20 text-white">
              <div className="container mx-auto max-w-6xl px-6">
                <img
                  src="https://cdn.scalev.id/Image/PDu4pBDZ1P69C58iKpyUauDJ6isztnAofWHyt0EuY1U/1740108079282-images_9704621732158234215.webp"
                  alt="Promo Spesial Hari Ini"
                  className="mx-auto mb-8 block w-full max-w-lg transition-transform hover:scale-105"
                />
                <div className="flex flex-col items-center gap-12 rounded-2xl bg-white/5 p-6 md:p-10 lg:flex-row">
                  <div className="flex-1">
                    <img
                      src="https://cdn.scalev.id/Image/qUNt4WgjgZop88jSw8Ssyte5ITCd2Fx0Sj09fzWT6Rw/1740105611249-images_7436651710837578894.webp"
                      alt="Satu kotak Cleanoz isi 4 botol"
                      className="w-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-anton text-4xl">
                      Apa yang Akan Anda Dapatkan?
                    </h3>
                    <ul className="my-6 space-y-3 text-lg">
                      <li className="flex items-center gap-3">
                        ✅ Cairan aditif pembersih ruang bakar mesin
                      </li>
                      <li className="flex items-center gap-3">
                        ✅ Hemat BBM hingga 20-40%
                      </li>
                      <li className="flex items-center gap-3">
                        ✅ Mesin lebih enteng, performa terjaga
                      </li>
                      <li className="flex items-center gap-3">
                        ✅ Suara mesin lebih halus
                      </li>
                      <li className="flex items-center gap-3">
                        ✅ Penggunaan super praktis — tinggal tetes
                      </li>
                      <li className="mt-4 flex items-center gap-4 rounded-lg bg-brand-orange/10 p-4">
                        <img
                          src="https://cdn.scalev.id/Image/eMITD5lVVjei4y2QcFcPT7ahFvyk7t55HpPv94fx_qA/1740108102829-images_7016781731659141551.webp"
                          alt="Bonus Emas 24K"
                          className="w-14"
                        />
                        <span>
                          <span className="font-bold text-brand-orange">
                            BONUS EMAS 24K
                          </span>{" "}
                          setiap pembelian 1 kotak (isi 4 botol)
                        </span>
                      </li>
                    </ul>
                    <button
                      onClick={handleFinalCTAClick}
                      className="w-full transform rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-darker px-8 py-5 text-xl font-bold uppercase text-white shadow-lg shadow-brand-orange/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-orange/60"
                    >
                      KIRIM SAYA CLEANOZ + BONUS EMASNYA!
                    </button>
                    <img
                      src="https://cdn.scalev.id/Image/iuQDv_XWTq5qzugAqf9OhYuiRj8VdnmpwZ0f8KAmOXg/1740108823242-images_3171531710837787904.webp"
                      alt="Jaminan kualitas terbaik"
                      className="mx-auto mt-6 block w-full max-w-[200px]"
                    />
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="bg-[#1a2533] py-12 text-center text-gray-300">
            <div className="container mx-auto max-w-4xl px-6">
              <h2 className="font-anton text-3xl leading-tight text-white">
                Hidup memang berat.
              </h2>
              <h2 className="font-anton text-3xl leading-tight text-brand-green">
                Tapi rakyat kecil nggak boleh kalah.
              </h2>
              <p className="mt-6 text-lg">
                Cleanoz bukan cuma cairan irit bensin.
              </p>
              <p className="mt-2 text-lg font-bold">
                Cleanoz adalah gerakan{" "}
                <span className="text-brand-orange">#AntiKrisis.</span>
              </p>
              <p className="mt-8 mb-8 text-base">
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
    </>
  );
}

export default App;
