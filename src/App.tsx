import React, { useState, useEffect } from "react";

// --- KOMPONEN-KOMPONEN ---

// Komponen Countdown Timer (Sudah Responsif)
const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <div className="flex h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 shadow-xl">
        <span className="font-black text-xl sm:text-2xl md:text-3xl text-white">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 opacity-40 blur-sm"></div>
    </div>
    <span className="mt-3 text-xs sm:text-sm font-bold uppercase text-gray-300 tracking-wider">
      {label}
    </span>
  </div>
);

const CountdownTimer = () => {
  const calculateTargetDate = () => {
    const target = new Date();
    target.setDate(target.getDate() + 1);
    target.setHours(23, 59, 59, 0);
    return target;
  };
  const [targetDate] = useState(calculateTargetDate());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
      <TimeUnit value={timeLeft.days} label="HARI" />
      <span className="text-2xl md:text-3xl font-black text-orange-400 animate-pulse">
        :
      </span>
      <TimeUnit value={timeLeft.hours} label="JAM" />
      <span className="text-2xl md:text-3xl font-black text-orange-400 animate-pulse">
        :
      </span>
      <TimeUnit value={timeLeft.minutes} label="MENIT" />
      <span className="text-2xl md:text-3xl font-black text-orange-400 animate-pulse">
        :
      </span>
      <TimeUnit value={timeLeft.seconds} label="DETIK" />
    </div>
  );
};

// Komponen Tombol CTA
const CTAButton = ({
  text,
  subtext,
  size = "normal",
  onClick,
}: {
  text: string;
  subtext?: string;
  size?: "normal" | "large";
  onClick?: () => void;
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(
        "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20CleanOZ!",
        "_blank"
      );
    }
  };
  return (
    <button
      onClick={handleClick}
      className={`group relative w-full ${
        size === "large" ? "max-w-2xl" : "max-w-md"
      } transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 rounded-2xl ${
        size === "large" ? "px-12 py-6" : "px-8 py-4"
      } text-white font-bold`}
    >
      <div className="relative z-10">
        <span
          className={`block ${
            size === "large" ? "text-xl md:text-2xl" : "text-lg md:text-xl"
          } font-black uppercase tracking-wide`}
        >
          {text}
        </span>
        {subtext && (
          <span
            className={`block ${
              size === "large" ? "text-base" : "text-sm"
            } font-semibold opacity-90 mt-1`}
          >
            {subtext}
          </span>
        )}
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
    </button>
  );
};

// Komponen Kartu Manfaat
const BenefitItem = ({
  icon,
  title,
  description,
  image,
}: {
  icon: string;
  title: string;
  description: string;
  image?: string;
}) => (
  <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="relative z-10 flex flex-col items-center text-center flex-grow">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-24 h-24 mb-6 group-hover:scale-110 transition-transform"
        />
      ) : (
        <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <span className="text-4xl">{icon}</span>
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>
    </div>
  </div>
);

// Komponen Kartu Testimoni
const TestimonialCard = ({
  name,
  role,
  testimonial,
  avatar,
}: {
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
}) => (
  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
    <div className="flex items-center gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-xl">
          ⭐
        </span>
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic flex-grow">"{testimonial}"</p>
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div>
        <div className="font-bold text-gray-800">{name}</div>
        <div className="text-sm text-gray-500">{role}</div>
      </div>
    </div>
  </div>
);

// --- KOMPONEN UTAMA APLIKASI ---

function App() {
  const [modalAmount, setModalAmount] = useState(1000000);
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [simulatorMode, setSimulatorMode] = useState("hemat"); // 'hemat' or 'bisnis'

  // State untuk simulator bisnis
  const [modalBisnis, setModalBisnis] = useState(2400000);
  const minModalBisnis = 1200000;
  const maxModalBisnis = 10000000;

  // Fungsi kalkulasi profit bisnis
  const calculateBusinessProfit = (modal: number) => {
    const HARGA_MODAL_PER_BOX = 120000; // Asumsi harga modal per box
    const HARGA_JUAL_PER_BOX = 150000; // Asumsi harga jual ecer per box

    const jumlahBox = Math.floor(modal / HARGA_MODAL_PER_BOX);
    const modalDikeluarkan = jumlahBox * HARGA_MODAL_PER_BOX;
    const potensiOmzet = jumlahBox * HARGA_JUAL_PER_BOX;
    const potensiProfit = potensiOmzet - modalDikeluarkan;

    return {
      jumlahBox,
      potensiProfit,
    };
  };

  const businessProfit = calculateBusinessProfit(modalBisnis);
  const businessSliderPercentage =
    ((modalBisnis - minModalBisnis) / (maxModalBisnis - minModalBisnis)) * 100;

  const minAmount = 100000;
  const maxAmount = 10000000;

  const calculateSavings = (amount: number) => {
    const savingsPercentage = 30;
    const monthlySavings = (amount * savingsPercentage) / 100;
    const yearlySavings = monthlySavings * 12;
    const investment = 250000;
    const roi = Math.floor((yearlySavings / investment) * 100);
    return { monthly: monthlySavings, yearly: yearlySavings, roi: roi };
  };

  const formatRupiah = (amount: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(amount);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setModalAmount(parseInt(e.target.value));
  const handleShowMainContent = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsMainContentVisible(true);
      setTimeout(() => {
        document
          .getElementById("main-content-section")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }, 1500);
  };

  const sliderPercentage =
    ((modalAmount - minAmount) / (maxAmount - minAmount)) * 100;
  const savings = calculateSavings(modalAmount);

  // --- DATA KONTEN ---

  const benefits = [
    {
      icon: "⛽",
      title: "Bensin Jauh Lebih Irit",
      description:
        "Hemat BBM hingga 20-40%, cocok untuk penggunaan pribadi, usaha, hingga mesin kapal.",
    },
    {
      icon: "🚀",
      title: "Tarikan Mesin Enteng",
      description:
        "Akselerasi lebih ringan dan responsif, nyaman di tanjakan atau saat membawa beban berat.",
    },
    {
      icon: "🤫",
      title: "Suara Mesin Lebih Halus",
      description:
        "Mengurangi getaran dan suara kasar, membuat perjalanan lebih tenang dan nyaman.",
    },
    {
      icon: "🛡️",
      title: "Mencegah Kerusakan Mesin",
      description:
        "Membersihkan kerak karbon di piston dan ruang bakar untuk mencegah kerusakan jangka panjang.",
      image:
        "https://cdn.scalev.id/Image/JUtBttAUoiW87a5FtXQkrp4Vh50Av4WGh6aq6qt_gzw/save.gif",
    },
    {
      icon: "⚡",
      title: "Hasil Terasa Langsung",
      description:
        "Rasakan perbedaannya sejak pemakaian pertama. Mesin langsung lebih enteng dan irit.",
    },
    {
      icon: "✨",
      title: "Oli Jadi 2x Lebih Awet",
      description:
        "Ruang bakar yang bersih membuat oli tidak cepat kotor, memperpanjang umurnya hingga 2x lipat.",
    },
  ];

  const testimonials = [
    {
      name: "Mas Kurir",
      role: "Driver Ojek Online",
      testimonial:
        "Sejak pake Cleanoz, orderan jadi makin cuan! Biasanya sehari isi bensin bisa 2x, sekarang cukup sekali. Tarikan enteng, kejar orderan jadi sat set!",
      avatar:
        "https://cdn.scalev.id/Image/WjYbTMfsRQ5_95XzAAe9aI8H88dv77H0suUWZm2CRds/1740110069436-images_3499951710837471855.webp",
    },
    {
      name: "Mbak Karyawan",
      role: "Pengguna Mobil Harian",
      testimonial:
        "Dulu pusing banget liat pengeluaran bensin, sekarang bisa nabung buat self-reward. Mesin mobil juga jadi alus banget, bawaannya jadi happy terus.",
      avatar:
        "https://cdn.scalev.id/Image/QQQNvdOkiaZRyltWjQn4EnaN9xHGy0XeigGPFxCA0M4/1740105013385-images_1065611710837501574.webp",
    },
    {
      name: "Pak Sopir",
      role: "Pengemudi Truk Logistik",
      testimonial:
        "Buat kami yang hidup di jalan, Cleanoz ini penolong banget. Biaya operasional jadi lebih enteng, mesin juga gak gampang rewel. Recommended!",
      avatar:
        "https://cdn.scalev.id/Image/d6J120s-MAiouxwubFFk9xShj-AJvDmWrm-jYqFC0Fg/1740105489408-images_8188821710837559593.webp",
    },
  ];

  const problems = [
    {
      text: "Bensin makin mahal, tapi kerja nggak bisa berhenti. Dompet makin sesak nafas.",
    },
    {
      text: "Mesin makin berat, keluar biaya servis makin mahal. Belum lagi drama mogok.",
    },
    {
      text: "Udah irit-irit, tetap habis. Hidup rasanya diem di tempat, gaji numpang lewat.",
    },
    {
      text: "Mau nabung, susah. Semua habis buat BBM dan kebutuhan yang makin mahal.",
    },
  ];

  const solutions = [
    { text: "BBM jadi irit hingga 40%, uang bensin bisa jadi tabungan." },
    { text: "Tarikan mesin jadi enteng, suara halus, dan perjalanan nyaman." },
    { text: "Mesin bersih dari kerak, biaya servis mahal bisa dihindari." },
    { text: "Oli jadi 2x lebih awet, mengurangi pengeluaran rutin." },
  ];

  const collageImages = [
    {
      src: "https://cdn.scalev.id/Image/yvVYvCfNskdCJpCCYr7hl_20JVaQc4NsSuwUC7paH6g/1740106471143-images_8242131732162002708.webp",
      alt: "Testimoni chat panjang",
      className: "lg:row-span-2",
    },
    {
      src: "https://i.ytimg.com/vi/bemupKqha2M/hqdefault.jpg",
      alt: "Review Ridwan Hanif",
    },
    {
      src: "https://cdn.scalev.id/Image/sEtUpeuCGwYjDRYSWOYN4nzW03p7sXTvy6KJUuReRTE/1740106560493-images_5368361732162116127_1.webp",
      alt: "Testimoni chat dari pelanggan",
    },
    {
      src: "https://i.ytimg.com/vi/VS77po73Ylo/hqdefault.jpg",
      alt: "Video Youtube Pak Arli",
      className: "lg:col-span-2",
    },
    {
      src: "https://i.ytimg.com/vi/BJ172CrlpfE/hqdefault.jpg",
      alt: "Testimoni video dari pengguna",
    },
    {
      src: "https://i.ytimg.com/vi/vgjzF0JqfoM/hqdefault.jpg",
      alt: "Testimoni video dari pengguna",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-sans text-white">
      {/* --- HERO SECTION REVISED --- */}
      {!isMainContentVisible && (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Dinamis */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"></div>

          {/* Background Animasi Geometris - Responsif */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 sm:top-10 sm:left-10 lg:top-20 lg:left-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-orange-500/20 rotate-45 animate-spin-slow"></div>
              <div className="absolute bottom-8 right-8 sm:bottom-16 sm:right-16 lg:bottom-32 lg:right-32 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-red-500/20 rotate-12 animate-bounce-slow"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-yellow-500/20 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/2 w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-purple-500/20 rotate-45 animate-spin-slow"></div>
            </div>
          </div>

          {/* Layout Desktop - Split Screen */}
          <div className="hidden lg:flex relative z-10 w-full h-screen">
            {/* Panel Kiri - Konten Hero */}
            <div className="w-1/2 flex flex-col justify-center items-center p-12 text-center lg:text-left">
              <div className="max-w-xl">
                {/* Badge */}
                <div className="inline-flex items-center bg-orange-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-500/20 mb-6">
                  <span className="text-orange-400 text-sm font-bold uppercase tracking-wider">
                    ✨ Solusi Hemat BBM #1 di Indonesia
                  </span>
                </div>

                {/* Judul Hero */}
                <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight mb-6">
                  <span className="text-white">Hemat</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                    {" "}
                    BBM
                  </span>
                  <br />
                  <span className="text-white">Atau</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                    {" "}
                    Bisnis
                  </span>
                  <span className="text-white">?</span>
                </h1>

                <p className="text-lg xl:text-xl text-gray-300 mb-6 leading-relaxed">
                  Pilih jalur Anda menuju kesuksesan finansial dengan CleanOZ
                </p>

                {/* Foto Owner dan Motivasi */}
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-white/10 mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src="https://cdn.scalev.id/Image/BVB_8lpzBsiMyltdO8DuBpv6vJusuAg676TI1RzyfIM/1749889052787-freepik__arli-an-indone_iOoyP0I.webp"
                      alt="Founder CleanOZ"
                      className="w-16 h-16 rounded-full object-cover border-2 border-orange-500/50"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        Arlianto Kurniawan
                      </h3>
                      <p className="text-sm text-orange-400">Founder CleanOZ</p>
                    </div>
                  </div>
                  <blockquote className="text-sm text-gray-300 italic leading-relaxed">
                    "Sukses bukan tentang seberapa banyak yang kita miliki, tapi
                    seberapa banyak yang kita berikan kepada orang lain. CleanOZ
                    hadir untuk membantu Anda mencapai kemerdekaan finansial
                    sambil berkontribusi pada lingkungan yang lebih bersih."
                  </blockquote>
                </div>

                {/* Statistik Cepat */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <div className="text-xl xl:text-2xl font-bold text-orange-400">
                      30%
                    </div>
                    <div className="text-sm text-gray-400">Hemat BBM</div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <div className="text-xl xl:text-2xl font-bold text-green-400">
                      25%
                    </div>
                    <div className="text-sm text-gray-400">Margin Bisnis</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Kanan - Simulator Interaktif */}
            <div className="w-1/2 flex flex-col justify-center items-center p-8 xl:p-12">
              <div className="w-full max-w-lg">
                {/* Toggle Mode */}
                <div className="flex bg-slate-800/60 backdrop-blur-sm p-1 rounded-2xl border border-white/10 mb-8">
                  <button
                    onClick={() => setSimulatorMode("hemat")}
                    className={`flex-1 py-3 xl:py-4 px-4 xl:px-6 rounded-xl font-bold transition-all duration-300 ${
                      simulatorMode === "hemat"
                        ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className="text-xl xl:text-2xl mb-1">🚀</div>
                    <div className="text-xs xl:text-sm">Mode Hemat</div>
                  </button>
                  <button
                    onClick={() => setSimulatorMode("bisnis")}
                    className={`flex-1 py-3 xl:py-4 px-4 xl:px-6 rounded-xl font-bold transition-all duration-300 ${
                      simulatorMode === "bisnis"
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className="text-xl xl:text-2xl mb-1">💰</div>
                    <div className="text-xs xl:text-sm">Mode Bisnis</div>
                  </button>
                </div>

                {/* Konten Simulator */}
                <div className="bg-slate-900/80 backdrop-blur-sm p-6 xl:p-8 rounded-3xl border border-white/10 shadow-2xl">
                  {simulatorMode === "hemat" ? (
                    <>
                      <div className="text-center mb-6">
                        <div className="text-4xl xl:text-6xl mb-4">⛽</div>
                        <h3 className="text-lg xl:text-xl font-bold text-white mb-2">
                          Kalkulator Hemat BBM
                        </h3>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Pengeluaran BBM Bulanan:{" "}
                          <span className="text-orange-400 font-bold">
                            {formatRupiah(modalAmount)}
                          </span>
                        </label>
                        <input
                          type="range"
                          min={minAmount}
                          max={maxAmount}
                          value={modalAmount}
                          onChange={handleSliderChange}
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #f97316 ${sliderPercentage}%, #374151 ${sliderPercentage}%)`,
                          }}
                        />
                      </div>

                      <div className="text-center bg-gradient-to-r from-orange-500/20 to-red-600/20 p-4 xl:p-6 rounded-2xl border border-orange-500/30">
                        <div className="text-sm text-gray-300 mb-2">
                          Potensi Hemat Per Bulan
                        </div>
                        <div className="text-2xl xl:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 mb-2">
                          {formatRupiah(savings.monthly)}
                        </div>
                        <div className="text-xs text-gray-400">
                          Setara dengan {savings.roi}% ROI
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-center mb-6">
                        <div className="text-4xl xl:text-6xl mb-4">📈</div>
                        <h3 className="text-lg xl:text-xl font-bold text-white mb-2">
                          Kalkulator Profit Bisnis
                        </h3>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-3">
                          Modal Stok Awal:{" "}
                          <span className="text-green-400 font-bold">
                            {formatRupiah(modalBisnis)}
                          </span>
                        </label>
                        <input
                          type="range"
                          min={minModalBisnis}
                          max={maxModalBisnis}
                          value={modalBisnis}
                          onChange={(e) =>
                            setModalBisnis(parseInt(e.target.value))
                          }
                          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #10b981 ${businessSliderPercentage}%, #374151 ${businessSliderPercentage}%)`,
                          }}
                        />
                      </div>

                      <div className="text-center bg-gradient-to-r from-green-500/20 to-emerald-600/20 p-4 xl:p-6 rounded-2xl border border-green-500/30">
                        <div className="text-sm text-gray-300 mb-2">
                          Potensi Profit ({businessProfit.jumlahBox} box)
                        </div>
                        <div className="text-2xl xl:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-2">
                          {formatRupiah(businessProfit.potensiProfit)}
                        </div>
                        <div className="text-xs text-gray-400">
                          Margin keuntungan 25%
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Layout Mobile & Tablet - Versi Stacked */}
          <div className="lg:hidden absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 text-center">
            <div className="w-full max-w-md mx-auto">
              {/* Hero Mobile */}
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center bg-orange-500/10 backdrop-blur-sm px-3 py-1 rounded-full border border-orange-500/20 mb-4">
                  <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">
                    ✨ Solusi #1 Indonesia
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-4">
                  <span className="text-white">Hemat</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                    {" "}
                    BBM{" "}
                  </span>
                  <span className="text-white">Atau</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                    {" "}
                    Bisnis
                  </span>
                  <span className="text-white">?</span>
                </h1>

                <p className="text-base sm:text-lg text-gray-300 mb-4">
                  Pilih jalur sukses finansial Anda
                </p>

                {/* Foto Owner dan Motivasi - Mobile */}
                <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-white/10 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="https://cdn.scalev.id/Image/BVB_8lpzBsiMyltdO8DuBpv6vJusuAg676TI1RzyfIM/1749889052787-freepik__arli-an-indone_iOoyP0I.webp"
                      alt="Founder CleanOZ"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-orange-500/50"
                    />
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        Alianto Kurniawan
                      </h3>
                      <p className="text-xs text-left sm:text-sm text-orange-400">
                        Founder CleanOZ
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                    "Sukses bukan tentang seberapa banyak yang kita miliki, tapi
                    seberapa banyak yang kita berikan kepada orang lain."
                  </blockquote>
                </div>

                {/* Stats Mobile */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <div className="bg-slate-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10">
                    <div className="text-xl sm:text-2xl font-bold text-orange-400">
                      30%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Hemat BBM
                    </div>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-xl border border-white/10">
                    <div className="text-xl sm:text-2xl font-bold text-green-400">
                      25%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Margin Bisnis
                    </div>
                  </div>
                </div>
              </div>

              {/* Simulator Mobile */}
              <div className="bg-slate-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-3xl border border-white/10 shadow-2xl mb-6">
                {/* Toggle Mobile */}
                <div className="flex bg-slate-800/60 p-1 rounded-xl mb-4 sm:mb-6">
                  <button
                    onClick={() => setSimulatorMode("hemat")}
                    className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 ${
                      simulatorMode === "hemat"
                        ? "bg-gradient-to-r from-orange-500 to-red-600 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    🚀 Hemat
                  </button>
                  <button
                    onClick={() => setSimulatorMode("bisnis")}
                    className={`flex-1 py-2 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 ${
                      simulatorMode === "bisnis"
                        ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                        : "text-gray-400"
                    }`}
                  >
                    💰 Bisnis
                  </button>
                </div>

                {/* Konten Simulator Mobile */}
                {simulatorMode === "hemat" ? (
                  <>
                    <div className="text-center mb-4">
                      <div className="text-3xl sm:text-4xl mb-2">⛽</div>
                      <div className="text-sm text-gray-300">
                        Pengeluaran BBM: {formatRupiah(modalAmount)}
                      </div>
                    </div>
                    <input
                      type="range"
                      min={minAmount}
                      max={maxAmount}
                      value={modalAmount}
                      onChange={handleSliderChange}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-4"
                      style={{
                        background: `linear-gradient(to right, #f97316 ${sliderPercentage}%, #374151 ${sliderPercentage}%)`,
                      }}
                    />
                    <div className="text-center bg-gradient-to-r from-orange-500/20 to-red-600/20 p-4 rounded-xl">
                      <div className="text-xs text-gray-300">
                        Hemat Per Bulan
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
                        {formatRupiah(savings.monthly)}
                      </div>
                      <div className="text-xs text-gray-400">
                        ROI: {savings.roi}%
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center mb-4">
                      <div className="text-3xl sm:text-4xl mb-2">📈</div>
                      <div className="text-sm text-gray-300">
                        Modal Stok: {formatRupiah(modalBisnis)}
                      </div>
                    </div>
                    <input
                      type="range"
                      min={minModalBisnis}
                      max={maxModalBisnis}
                      value={modalBisnis}
                      onChange={(e) => setModalBisnis(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer mb-4"
                      style={{
                        background: `linear-gradient(to right, #10b981 ${businessSliderPercentage}%, #374151 ${businessSliderPercentage}%)`,
                      }}
                    />
                    <div className="text-center bg-gradient-to-r from-green-500/20 to-emerald-600/20 p-4 rounded-xl">
                      <div className="text-xs text-gray-300">
                        Potensi Profit ({businessProfit.jumlahBox} box)
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                        {formatRupiah(businessProfit.potensiProfit)}
                      </div>
                      <div className="text-xs text-gray-400">Margin: 25%</div>
                    </div>
                  </>
                )}
              </div>

              {/* Tombol CTA - Mobile */}
              <div className="w-full">
                <button
                  onClick={handleShowMainContent}
                  disabled={isLoading}
                  className="w-full group relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span className="text-sm">Loading...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg">🎯</span>
                      <span className="text-sm font-black">MULAI SEKARANG</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Tombol CTA - Desktop */}
          <div className="hidden lg:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <button
              onClick={handleShowMainContent}
              disabled={isLoading}
              className="group relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-full shadow-2xl shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  <span className="text-sm">Loading...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎯</span>
                  <span className="text-sm font-black">MULAI SEKARANG</span>
                </div>
              )}
            </button>
          </div>
        </section>
      )}

      {/* --- MAIN CONTENT (AFTER CLICK) --- */}
      {isMainContentVisible && (
        <main id="main-content-section">
          {/* Section: Countdown */}
          <section className="py-20 lg:py-24 bg-slate-900">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8 text-center">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Penawaran Spesial Terbatas!
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                Jangan lewatkan kesempatan ini! Promo akan berakhir dalam:
              </p>
              <CountdownTimer />
            </div>
          </section>

          {/* Section: Founder */}
          <section className="py-20 lg:py-24">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                <div className="flex-shrink-0 relative">
                  <img
                    src="https://cdn.scalev.id/Image/BVB_8lpzBsiMyltdO8DuBpv6vJusuAg676TI1RzyfIM/1749889052787-freepik__arli-an-indone_iOoyP0I.webp"
                    alt="Owner CleanOZ"
                    className="w-64 h-64 rounded-full object-cover border-8 border-slate-700 shadow-2xl"
                  />
                  <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center border-4 border-slate-800">
                    <span className="text-white text-3xl">✓</span>
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-4xl lg:text-5xl font-black text-white">
                    Pak Arli,
                  </h3>
                  <p className="text-2xl lg:text-3xl font-bold text-orange-400 mb-4">
                    Founder CleanOZ
                  </p>
                  <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed italic">
                    "Sejak 2012, misi saya sederhana: membantu sebanyak mungkin
                    rakyat Indonesia agar tidak pusing lagi karena urusan
                    bensin. CleanOZ adalah jawaban dari riset bertahun-tahun
                    untuk menciptakan solusi hemat yang aman, efektif, dan
                    terjangkau bagi semua."
                  </p>
                  <div className="flex justify-center lg:justify-start">
                    <div className="inline-block bg-slate-800 rounded-2xl p-4">
                      <p className="text-2xl font-bold text-green-400">
                        137.000+ Kendaraan
                      </p>
                      <p className="text-sm text-gray-400">
                        Telah Merasakan Manfaatnya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Simulator */}
          <section className="py-20 lg:py-24 bg-slate-800/50">
            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  Hitung Sendiri Potensi{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    Hemat Anda!
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Gunakan simulator interaktif ini untuk melihat proyeksi
                  penghematan Anda.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-slate-900/50 p-8 rounded-3xl">
                  <label className="block text-xl font-semibold text-white mb-4">
                    💰 Geser Pengeluaran BBM Bulanan Anda:
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min={minAmount}
                      max={maxAmount}
                      value={modalAmount}
                      onChange={handleSliderChange}
                      className="w-full h-4 bg-gray-700 rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #f97316 ${sliderPercentage}%, #374151 ${sliderPercentage}%)`,
                      }}
                    />
                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                      <span>{formatRupiah(minAmount)}</span>
                      <span>{formatRupiah(maxAmount)}</span>
                    </div>
                  </div>
                  <div className="mt-8 text-center bg-slate-800 p-6 rounded-2xl">
                    <p className="text-base text-gray-400 mb-1">
                      Pengeluaran Anda Saat Ini:
                    </p>
                    <div className="text-5xl font-black text-white">
                      {formatRupiah(modalAmount)}
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-8 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-3xl border-2 border-green-500/30 text-center">
                    <p className="text-lg font-semibold uppercase tracking-wider text-green-300 mb-2">
                      💰 Penghematan Bulanan
                    </p>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500">
                      {formatRupiah(savings.monthly)}
                    </div>
                  </div>
                  <div className="p-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl border-2 border-blue-500/30 text-center">
                    <p className="text-lg font-semibold uppercase tracking-wider text-blue-300 mb-2">
                      🚀 Penghematan Tahunan
                    </p>
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-500">
                      {formatRupiah(savings.yearly)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Problem vs Solution */}
          <section className="py-20 lg:py-32 bg-white text-gray-800">
            <div className="container mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Dari{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                    Masalah
                  </span>
                  , Menjadi{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                    Solusi
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Lihat bagaimana CleanOZ mengubah keluhan sehari-hari menjadi
                  keuntungan nyata.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-center text-red-600">
                    TANPA CleanOZ...
                  </h3>
                  {problems.map((problem, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-red-500 text-3xl mt-1">❌</span>
                      <p className="text-gray-700">{problem.text}</p>
                    </div>
                  ))}
                </div>
                <div className="px-8 hidden lg:block">
                  <img
                    src="https://cdn.scalev.id/Image/oiiCjAT8xHQxQgLuPn4ctVEv706whauBQh45YvrmG20/1740105134573-images_5337321732158161632.webp"
                    alt="Mobil dan motor di jalan"
                    className="rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-6 mt-12 lg:mt-0">
                  <h3 className="text-2xl font-bold text-center text-green-600">
                    DENGAN CleanOZ!
                  </h3>
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-green-500 text-3xl mt-1">✅</span>
                      <p className="text-gray-700">{solution.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Benefits */}
          <section className="py-20 lg:py-32 bg-gray-50 text-gray-800">
            <div className="container mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Bukan Cuma Irit, Ini{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                    6 Manfaat Utama
                  </span>{" "}
                  CleanOZ
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Setiap tetes CleanOZ memberikan keuntungan lebih untuk mesin
                  dan dompet Anda.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index} {...benefit} />
                ))}
              </div>
              <div className="mt-12 md:mt-20 text-center">
                <img
                  src="https://cdn.scalev.id/Image/MZGHOcb98E9E4mUDGEbmI30LUn8nFqbPhcAfIl_xvMM/1740125254719-icon_benefit.webp"
                  alt="Ringkasan Manfaat Cleanoz"
                  className="w-full max-w-4xl mx-auto h-auto"
                />
              </div>
            </div>
          </section>

          {/* Section: Testimonials */}
          <section className="py-20 lg:py-32 bg-white text-gray-800">
            <div className="container mx-auto max-w-7xl px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Sudah{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
                    137.000+ Orang
                  </span>{" "}
                  Membuktikan!
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Mereka bukan cuma hemat, tapi hidupnya jadi lebih tenang.
                  Giliran Anda kapan?
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </div>

              <div className="mb-16">
                <div className="bg-slate-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8">
                  <img
                    src="https://cdn.scalev.id/Image/Nn3jQwBzPY2gMVipmGZM6qAjIIwf-_fz7pZjVfK_qaw/1740106851040-images_1863501731913227260.webp"
                    alt="Ridwan Hanif"
                    className="w-60 h-40 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0"
                  />
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold">
                      "Bikin tarikan lebih enteng!"
                    </h3>
                    <p className="text-lg text-gray-600 mt-2">
                      Menurut{" "}
                      <span className="font-bold text-orange-500">
                        Ridwan Hanif
                      </span>
                      , salah satu reviewer otomotif terpercaya di Indonesia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center text-gray-700 font-semibold mb-8 text-2xl">
                Galeri Testimoni Asli dari Pengguna
              </div>
              <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-4">
                {collageImages.map((img, index) => (
                  <div
                    key={index}
                    className={`rounded-xl shadow-lg hover:shadow-2xl overflow-hidden group transition-all duration-300 ${
                      img.className || ""
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Final Offer */}
          <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="container mx-auto max-w-7xl px-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden p-8 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6">
                      Apa yang Akan Anda{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        Dapatkan?
                      </span>
                    </h2>
                    <ul className="space-y-4 text-lg text-gray-300 mb-8">
                      <li className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                        <span className="text-2xl">📦</span>
                        <span>
                          <b>1 Kotak CleanOZ</b> (isi 4 botol @12ml).
                        </span>
                      </li>
                      <li className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                        <span className="text-2xl">💸</span>
                        <span>
                          <b>Hemat BBM hingga 40%</b>, mesin enteng & awet.
                        </span>
                      </li>
                      <li className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                        <span className="text-2xl">🌟</span>
                        <span>
                          <b>BONUS SPESIAL: Emas 24K</b> tanpa diundi!
                        </span>
                      </li>
                      <li className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                        <span className="text-2xl">🛡️</span>
                        <span>
                          <b>Garansi 30 Hari Uang Kembali</b> jika tidak ada
                          hasil.
                        </span>
                      </li>
                    </ul>
                    <CTAButton
                      text="KIRIM SAYA CLEANOZ + BONUS EMAS!"
                      size="large"
                    />
                  </div>
                  <div className="text-center">
                    <img
                      src="https://cdn.scalev.id/Image/Rp5bncNEKTSLhA5K_xPNamJBuH7xu4s3sST2R3zxgQg/1740105550114-images_7642981710837559675_1.webp"
                      alt="Paket CleanOZ"
                      className="w-full max-w-md mx-auto mb-6 transform hover:scale-105 transition-transform duration-300"
                    />
                    <img
                      src="https://cdn.scalev.id/Image/eMITD5lVVjei4y2QcFcPT7ahFvyk7t55HpPv94fx_qA/1740108102829-images_7016781731659141551.webp"
                      alt="Bonus Emas 24K"
                      className="w-full max-w-xs mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Guarantee */}
          <section className="bg-white py-20 text-gray-800">
            <div className="container mx-auto max-w-4xl px-6 text-center">
              <img
                src="https://cdn.scalev.id/Image/iuQDv_XWTq5qzugAqf9OhYuiRj8VdnmpwZ0f8KAmOXg/1740108823242-images_3171531710837787904.webp"
                alt="Jaminan Kualitas"
                className="w-24 h-24 mx-auto mb-6"
              />
              <h3 className="text-3xl font-bold mb-4">
                Jaminan 100% Aman & Terpercaya
              </h3>
              <p className="text-gray-600 mb-8">
                Kami berkomitmen pada kualitas dan kepuasan Anda. CleanOZ
                dijamin aman karena:
              </p>
              <div className="text-left space-y-3 max-w-md mx-auto">
                <p className="flex items-center gap-3">
                  <span className="text-green-500">✔️</span>
                  <span>
                    Telah lolos uji laboratorium dan terbukti tidak merusak
                    mesin.
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-green-500">✔️</span>
                  <span>
                    Digunakan lebih dari 137.000 kendaraan tanpa efek samping.
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-green-500">✔️</span>
                  <span>
                    Dibuat dari bahan-bahan organik yang aman untuk lingkungan.
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Section: Footer */}
          <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="container mx-auto max-w-4xl px-6 text-center py-20">
              <h2 className="text-4xl font-black mb-6">
                Hidup Memang Berat. Tapi Rakyat Kecil Nggak Boleh Kalah.
              </h2>
              <p className="text-xl text-orange-400 mb-8">
                Cleanoz bukan cuma cairan irit bensin. Cleanoz adalah gerakan
                #AntiKrisis.
              </p>
              <p className="text-gray-300 text-lg mb-12">
                Karena setiap tetes Cleanoz adalah tenaga buat hidup tetap
                jalan.
              </p>
              <div className="flex justify-center">
                <CTAButton
                  text="SAYA MAU GABUNG GERAKAN #ANTIKRISIS!"
                  subtext="Pesan Sekarang & Dapatkan Semua Bonusnya!"
                  size="large"
                />
              </div>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
}

export default App;
