import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Users,
  Building2,
  Sparkles,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Star,
  Briefcase,
  School,
  UserCheck,
  CalendarHeart,
  Shield,
  TrendingUp,
  Clock,
  ChevronDown,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "./WhatsAppFloat";
import heroImg from "@/assets/hero-graduation.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import partnership from "@/assets/partnership.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  light,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="text-center max-w-3xl mx-auto mb-14"
    >
      <span
        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] ${light ? "text-gold" : "text-[var(--navy)]"}`}
      >
        <span className="h-px w-8 bg-gold" /> {eyebrow}{" "}
        <span className="h-px w-8 bg-gold" />
      </span>
      <h2
        className={`mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${light ? "text-white" : "text-[var(--ink)]"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg ${light ? "text-white/75" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const points = [
    "Sistem kerja sama saling menguntungkan",
    "Harga khusus mitra institusi",
    "Support event skala besar",
    "Bisa custom kebutuhan kampus",
    "Pendampingan penuh sebelum & saat acara",
  ];
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-navy-gradient"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Mahasiswa wisuda mengenakan jas formal premium"
          className="w-full h-full object-cover opacity-25"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)] via-[var(--navy-deep)]/80 to-transparent" />
      </div>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[var(--gold)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-medium text-gold backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" /> Program Kemitraan Nasional 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]"
          >
            Program Kemitraan{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[var(--gold-soft)] via-[var(--gold)] to-[var(--gold-soft)] bg-clip-text text-transparent">
                Jas Wisuda
              </span>
            </span>{" "}
            untuk Sekolah & Universitas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl"
          >
            Solusi penyedia jas wisuda profesional untuk kampus, sekolah,
            organisasi mahasiswa, dan panitia acara formal di seluruh Indonesia.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 grid sm:grid-cols-2 gap-3"
          >
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-sm text-white/85"
              >
                <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span>{p}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-gold-gradient px-7 py-4 text-sm font-bold text-[var(--navy-deep)] shadow-gold-glow hover:scale-[1.02] transition"
            >
              Ajukan Kerja Sama
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition"
            >
              <MessageCircle className="h-4 w-4" /> Konsultasi Program Mitra
            </a>
          </motion.div>

          <div className="mt-12 flex flex-wrap items-center gap-8 text-white/60 text-xs uppercase tracking-widest">
            <div>
              <span className="text-2xl font-bold text-gold font-display">
                500+
              </span>
              <br />
              Event Tertangani
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <span className="text-2xl font-bold text-gold font-display">
                120+
              </span>
              <br />
              Kampus Mitra
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div>
              <span className="text-2xl font-bold text-gold font-display">
                25K+
              </span>
              <br />
              Wisudawan Dilayani
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-luxe">
              <img
                src={heroImg}
                alt="Wisudawan kampus"
                className="w-full h-[560px] object-cover"
                width={1920}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-gold-gradient border-2 border-white"
                      />
                    ))}
                  </div>
                  <div className="text-white">
                    <p className="text-sm font-semibold">
                      Trusted by 120+ Institutions
                    </p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-3 w-3 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- TENTANG ---------- */
function Tentang() {
  const features = [
    { icon: UserCheck, label: "Tim Profesional" },
    { icon: Award, label: "Pengalaman Event Besar" },
    { icon: Clock, label: "Fast Response 24/7" },
    { icon: Sparkles, label: "Sistem Fleksibel" },
    { icon: TrendingUp, label: "Harga Kompetitif" },
    { icon: Shield, label: "Kualitas Premium" },
  ];
  return (
    <section id="tentang" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxe">
              <img
                src={partnership}
                alt="Kemitraan profesional sewajas.net"
                loading="lazy"
                width={1280}
                height={896}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy-gradient p-6">
                <p className="text-white font-display text-2xl">15+ Tahun</p>
                <p className="text-gold text-sm">
                  Mendampingi Acara Wisuda Nasional
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--navy)]">
              Tentang Kami
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--ink)]">
              Kenapa Banyak Institusi Memilih{" "}
              <span className="gold-underline">sewajas.net</span>?
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Kami membantu sekolah dan universitas menyediakan jas wisuda dan
              kebutuhan formal dengan sistem yang praktis, profesional, dan
              menguntungkan kedua belah pihak. Kami siap menjadi{" "}
              <strong className="text-[var(--navy)]">
                partner jangka panjang{" "}
              </strong>
              untuk mendukung acara wisuda, seminar, sidang, hingga event resmi
              kampus.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 hover:border-gold transition"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-gradient text-gold">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-[var(--ink)]">
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- KEUNTUNGAN ---------- */
function Keuntungan() {
  const items = [
    {
      icon: TrendingUp,
      title: "Komisi Menguntungkan",
      desc: "Institusi atau panitia bisa mendapatkan keuntungan dari setiap kerja sama.",
    },
    {
      icon: Award,
      title: "Harga Khusus Mitra",
      desc: "Dapatkan harga spesial untuk pemesanan massal.",
    },
    {
      icon: Users,
      title: "Support Event Besar",
      desc: "Melayani kebutuhan wisuda skala kecil hingga ribuan peserta.",
    },
    {
      icon: Sparkles,
      title: "Branding Profesional",
      desc: "Membantu acara terlihat lebih elegan dan premium.",
    },
    {
      icon: CheckCircle2,
      title: "Sistem Mudah",
      desc: "Proses cepat, praktis, dan didampingi tim kami.",
    },
    {
      icon: Handshake,
      title: "Kerja Sama Jangka Panjang",
      desc: "Cocok untuk agenda wisuda rutin tiap tahun.",
    },
  ];
  return (
    <section
      id="keuntungan"
      className="py-24 bg-secondary relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Keuntungan Mitra"
          title="6 Alasan Institusi Bergabung dengan Kami"
          subtitle="Bangun kemitraan jangka panjang dengan keuntungan yang nyata untuk institusi & panitia Anda."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl bg-card p-7 shadow-sm hover:shadow-luxe transition-all border border-border hover:border-gold/50 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-[100px] group-hover:bg-gold/15 transition" />
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy-gradient text-gold shadow-luxe">
                <it.icon className="h-7 w-7" />
              </span>
              <h3 className="relative mt-5 text-xl font-bold text-[var(--ink)]">
                {it.title}
              </h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TARGET MITRA ---------- */
function TargetMitra() {
  const targets = [
    { icon: Building2, label: "Universitas" },
    { icon: School, label: "Kampus Swasta" },
    { icon: GraduationCap, label: "SMA / SMK" },
    { icon: Users, label: "Organisasi Mahasiswa" },
    { icon: Briefcase, label: "BEM" },
    { icon: CalendarHeart, label: "Event Organizer" },
    { icon: UserCheck, label: "Panitia Wisuda" },
    { icon: Handshake, label: "Komunitas Formal" },
  ];
  return (
    <section
      id="program"
      className="py-24 bg-navy-gradient relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          light
          eyebrow="Program Mitra"
          title="Untuk Siapa Program Ini?"
          subtitle="Kami terbuka untuk berbagai institusi pendidikan & organisasi formal di seluruh Indonesia."
        />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {targets.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center hover:bg-white/10 hover:border-gold/50 transition"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-[var(--navy-deep)] mb-4 group-hover:scale-110 transition">
                <t.icon className="h-7 w-7" />
              </span>
              <p className="text-white font-semibold text-sm sm:text-base">
                {t.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CARA KERJA ---------- */
function CaraKerja() {
  const steps = [
    {
      n: "01",
      title: "Hubungi Tim sewajas.net",
      desc: "Kontak via WhatsApp atau form pengajuan kerja sama.",
    },
    {
      n: "02",
      title: "Diskusi Kebutuhan Acara",
      desc: "Konsultasi spesifikasi, jumlah, dan timeline acara Anda.",
    },
    {
      n: "03",
      title: "Penawaran Kerja Sama",
      desc: "Kami berikan proposal & skema keuntungan mitra.",
    },
    {
      n: "04",
      title: "Persiapan Jas",
      desc: "Produksi & quality control jas wisuda premium.",
    },
    {
      n: "05",
      title: "Distribusi & Support Event",
      desc: "Pengiriman tepat waktu dan tim siap di lokasi.",
    },
    {
      n: "06",
      title: "Acara Berjalan Lancar",
      desc: "Wisudawan tampil percaya diri dan elegan.",
    },
  ];
  return (
    <section id="cara-kerja" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cara Kerja"
          title="6 Langkah Mudah Memulai Kemitraan"
          subtitle="Proses yang transparan, profesional, dan cepat dari awal hingga acara selesai."
        />
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl bg-gradient-to-br from-card to-secondary p-7 border border-border hover:border-gold transition group"
            >
              <span className="font-display text-6xl font-bold bg-gradient-to-br from-[var(--gold)] to-[var(--navy)] bg-clip-text text-transparent">
                {s.n}
              </span>
              <h3 className="mt-3 text-xl font-bold text-[var(--ink)]">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 h-px bg-gradient-to-r from-gold via-transparent to-transparent group-hover:from-[var(--navy)] transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTOFOLIO ---------- */
function Portofolio() {
  const items = [
    {
      img: p1,
      title: "Wisuda Universitas Nasional",
      cap: "Pelayanan 1.200+ wisudawan dalam satu hari",
    },
    {
      img: p4,
      title: "Event Formal Kampus Swasta",
      cap: "Dokumentasi acara akhir tahun akademik",
    },
    {
      img: p2,
      title: "Jas Premium Pilihan",
      cap: "Kualitas bahan & jahitan kelas atas",
    },
    {
      img: p3,
      title: "Tim Fitting Profesional",
      cap: "Pendampingan langsung di lokasi acara",
    },
  ];
  return (
    <section id="portofolio" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portofolio"
          title="Dokumentasi Event Resmi & Kampus"
          subtitle="Beberapa momen terbaik dari kemitraan kami bersama institusi di seluruh Indonesia."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-luxe transition"
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={1280}
                height={896}
                className="w-full h-72 object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <p className="text-gold text-xs uppercase tracking-widest">
                  Event
                </p>
                <h3 className="mt-1 font-display text-lg font-bold">
                  {it.title}
                </h3>
                <p className="text-xs text-white/75 mt-1">{it.cap}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONI ---------- */
function Testimoni() {
  const testimonials = [
    {
      name: "Bapak Rahmat S.",
      role: "Ketua Panitia Wisuda Universitas Brawijaya",
      text: "Profesional dari awal sampai acara selesai. Tim sewajas.net sangat kooperatif, kualitas jas premium dan tepat waktu. Tahun depan kami pasti bekerja sama lagi.",
    },
    {
      name: "Sdri. Nadia P.",
      role: "Ketua BEM Fakultas Ekonomi",
      text: "Sistem kemitraannya transparan dan menguntungkan. Komunikasi cepat, harga kompetitif, dan event kami terlihat jauh lebih elegan.",
    },
    {
      name: "Ibu Dewi A.",
      role: "Wakasek SMK Negeri 5",
      text: "Kami sudah 3 tahun bekerja sama. Konsisten dengan kualitas dan sangat membantu di setiap pelaksanaan wisuda sekolah.",
    },
    {
      name: "Bapak Hendra W.",
      role: "Owner Hendra Event Organizer",
      text: "Sebagai EO, kami butuh vendor yang reliable. Sewajas.net adalah partner terbaik untuk event formal skala besar.",
    },
  ];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => clearInterval(t);
  }, [testimonials.length]);

  return (
    <section id="testimoni" className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimoni"
          title="Apa Kata Mitra Kami"
          subtitle="Cerita nyata dari panitia kampus, organisasi mahasiswa, sekolah, dan event organizer."
        />
        <div className="relative rounded-3xl bg-navy-gradient p-8 sm:p-14 shadow-luxe overflow-hidden">
          <div className="absolute top-6 right-6 font-display text-9xl text-gold/20 leading-none">
            "
          </div>
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-1 mb-5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-white text-lg sm:text-2xl font-display leading-relaxed">
              "{testimonials[idx].text}"
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-gold-gradient flex items-center justify-center text-[var(--navy-deep)] font-bold text-lg">
                {testimonials[idx].name.charAt(0)}
              </div>
              <div>
                <p className="text-white font-bold">{testimonials[idx].name}</p>
                <p className="text-gold text-sm">{testimonials[idx].role}</p>
              </div>
            </div>
          </motion.div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Testimoni ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === idx ? "bg-gold w-8" : "bg-white/30 w-2"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() =>
                  setIdx((idx - 1 + testimonials.length) % testimonials.length)
                }
                aria-label="Sebelumnya"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-gold hover:text-[var(--navy-deep)] text-white flex items-center justify-center transition"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setIdx((idx + 1) % testimonials.length)}
                aria-label="Berikutnya"
                className="h-10 w-10 rounded-full bg-white/10 hover:bg-gold hover:text-[var(--navy-deep)] text-white flex items-center justify-center transition"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROMO BANNER + COUNTDOWN ---------- */
function PromoBanner() {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 14);
    const tick = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setTime({ d, h, m, s });
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);
  const box = (val: number, label: string) => (
    <div className="flex flex-col items-center">
      <span className="font-display text-3xl sm:text-5xl font-bold text-gold">
        {String(val).padStart(2, "0")}
      </span>
      <span className="text-xs uppercase tracking-widest text-white/60 mt-1">
        {label}
      </span>
    </div>
  );
  return (
    <section className="py-20 bg-[var(--ink)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/5" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[var(--navy)]/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-gold/15 border border-gold/30 px-4 py-1.5 text-xs font-semibold text-gold uppercase tracking-widest">
          Penawaran Khusus Periode Wisuda
        </span>
        <h2 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-bold text-white">
          Buka Kerja Sama Sekarang & Dapatkan <br />
          <span className="bg-gradient-to-r from-[var(--gold-soft)] to-[var(--gold)] bg-clip-text text-transparent">
            Harga Khusus Mitra
          </span>
        </h2>
        <p className="mt-5 text-white/70 max-w-2xl mx-auto">
          Slot kerja sama terbatas. Prioritas wilayah tertentu. Promo khusus
          periode wisuda berakhir dalam:
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 sm:gap-8">
          {box(time.d, "Hari")}
          <span className="text-gold text-4xl font-display">:</span>
          {box(time.h, "Jam")}
          <span className="text-gold text-4xl font-display">:</span>
          {box(time.m, "Menit")}
          <span className="text-gold text-4xl font-display">:</span>
          {box(time.s, "Detik")}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-md bg-gold-gradient px-10 py-5 text-base font-bold text-[var(--navy-deep)] shadow-gold-glow hover:scale-[1.03] transition"
        >
          Daftar Menjadi Mitra <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "Apakah bisa kerja sama luar kota?",
      a: "Tentu. Kami melayani kerja sama dengan institusi di seluruh Indonesia, termasuk pengiriman dan tim pendampingan ke lokasi acara.",
    },
    {
      q: "Minimal order berapa?",
      a: "Untuk skema kemitraan institusi, minimal order fleksibel sesuai jumlah peserta. Tim kami akan menyesuaikan dengan skala acara.",
    },
    {
      q: "Apakah bisa custom kebutuhan kampus?",
      a: "Bisa. Kami menyediakan kustomisasi warna, logo kampus, slempang, hingga aksesoris formal sesuai identitas institusi.",
    },
    {
      q: "Bagaimana sistem keuntungan mitra?",
      a: "Kami menawarkan skema komisi & harga khusus mitra. Detail akan kami sampaikan saat penawaran kerja sama.",
    },
    {
      q: "Apakah ada pendampingan event?",
      a: "Ya, tim kami siap mendampingi proses fitting hingga pelaksanaan acara untuk memastikan semua berjalan lancar.",
    },
    {
      q: "Bisa kerja sama tahunan?",
      a: "Sangat bisa. Justru ini yang kami rekomendasikan untuk efisiensi biaya dan kemudahan koordinasi acara rutin.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-secondary">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="FAQ" title="Pertanyaan yang Sering Diajukan" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="rounded-xl bg-card border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary transition"
              >
                <span className="font-semibold text-[var(--ink)]">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 text-[var(--navy)] transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed"
                >
                  {f.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST ---------- */
function TrustStats() {
  const stats = [
    { n: "500+", l: "Event Tertangani" },
    { n: "15K+", l: "Wisudawan Dilayani" },
    { n: "120+", l: "Kampus Partner" },
    { n: "98%", l: "Kepuasan Mitra" },
  ];
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-5xl sm:text-6xl font-bold bg-navy-gradient bg-clip-text text-transparent">
                {s.n}
              </p>
              <div className="gold-divider w-16 mx-auto my-3" />
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                {s.l}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FORM ---------- */
function PartnerForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Halo sewajas.net, saya ingin mengajukan kerja sama:%0A%0ANama Institusi: ${f.get("inst")}%0ANama PIC: ${f.get("nama")}%0AKontak: ${f.get("kontak")}%0AKota: ${f.get("kota")}%0AJumlah Peserta: ${f.get("jumlah")}%0ACatatan: ${f.get("catatan")}`;
    window.open(`${WHATSAPP_URL}?text=${msg}`, "_blank");
    setSubmitted(true);
  };
  return (
    <section
      id="kontak"
      className="py-24 bg-navy-gradient relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 blur-3xl rounded-full" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="text-gold text-xs uppercase tracking-[0.25em] font-semibold">
            Form Pengajuan
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold">
            Mulai Kemitraan Anda Hari Ini
          </h2>
          <p className="mt-4 text-white/75">
            Isi form singkat di samping, atau hubungi langsung tim kami via
            WhatsApp untuk respons lebih cepat.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-white hover:text-gold transition"
            >
              <span className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest">
                  WhatsApp
                </p>
                <p className="font-semibold">0853-3000-0029</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-white">
              <span className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest">
                  Email Bisnis
                </p>
                <p className="font-semibold">mitra@sewajas.net</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white">
              <span className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest">
                  Lokasi
                </p>
                <p className="font-semibold">Melayani Seluruh Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-luxe"
        >
          <h3 className="font-display text-2xl font-bold text-[var(--ink)]">
            Form Pengajuan Kerja Sama
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Tim kami akan menghubungi Anda dalam 1x24 jam.
          </p>
          <div className="mt-6 space-y-4">
            {[
              {
                name: "inst",
                label: "Nama Institusi",
                type: "text",
                ph: "Universitas / SMA / Organisasi",
              },
              {
                name: "nama",
                label: "Nama PIC",
                type: "text",
                ph: "Nama lengkap penanggung jawab",
              },
              {
                name: "kontak",
                label: "No. WhatsApp",
                type: "tel",
                ph: "08xx",
              },
              {
                name: "kota",
                label: "Kota / Provinsi",
                type: "text",
                ph: "Lokasi acara",
              },
              {
                name: "jumlah",
                label: "Estimasi Jumlah Peserta",
                type: "text",
                ph: "Misal: 200 orang",
              },
            ].map((f) => (
              <div key={f.name}>
                <label className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                  {f.label}
                </label>
                <input
                  required
                  name={f.name}
                  type={f.type}
                  placeholder={f.ph}
                  className="mt-1.5 w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition"
                />
              </div>
            ))}
            <div>
              <label className="text-xs font-semibold text-[var(--ink)] uppercase tracking-wider">
                Catatan / Kebutuhan
              </label>
              <textarea
                name="catatan"
                rows={3}
                placeholder="Ceritakan kebutuhan acara Anda..."
                className="mt-1.5 w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm focus:outline-none focus:border-gold focus:bg-white transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-navy-gradient text-white font-bold py-4 hover:opacity-95 transition shadow-luxe"
            >
              {submitted
                ? "Terkirim — Cek WhatsApp"
                : "Kirim Pengajuan via WhatsApp"}{" "}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white/70 pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gold-gradient">
                <GraduationCap className="h-6 w-6 text-[var(--navy-deep)]" />
              </span>
              <span className="font-display text-xl font-bold">
                sewajas<span className="text-gold">.net</span>
              </span>
            </a>
            <p className="mt-4 text-sm">
              Partner resmi penyedia jas wisuda untuk sekolah, kampus, dan
              organisasi formal di seluruh Indonesia.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Tentang Kami",
                "Program Mitra",
                "Keuntungan",
                "Cara Kerja",
                "Portofolio",
                "Testimoni",
              ].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                    className="hover:text-gold transition"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gold mt-0.5" /> 0853-3000-0029
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-gold mt-0.5" /> mitra@sewajas.net
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-4 w-4 text-gold mt-0.5" /> @sewajas.net
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5" /> Melayani Seluruh
                Indonesia
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Link Kerja Sama</h4>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-gold-gradient px-5 py-3 text-sm font-bold text-[var(--navy-deep)] hover:scale-[1.02] transition"
            >
              Ajukan Kerja Sama
            </a>
            <p className="mt-4 text-xs">
              Buka 7 hari · Respons cepat via WhatsApp
            </p>
          </div>
        </div>
        <div className="gold-divider mt-12 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} sewajas.net. All rights reserved.</p>
          <p>Vendor Jas Wisuda Kampus & Sekolah Indonesia</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- STICKY MOBILE CTA ---------- */
function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 p-3 bg-[var(--navy-deep)]/95 backdrop-blur border-t border-gold/30">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full rounded-md bg-gold-gradient py-3 text-sm font-bold text-[var(--navy-deep)]"
      >
        <MessageCircle className="h-4 w-4" /> Ajukan Kerja Sama Sekarang
      </a>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Tentang />
      <Keuntungan />
      <TargetMitra />
      <CaraKerja />
      <Portofolio />
      <Testimoni />
      <PromoBanner />
      <FAQ />
      <TrustStats />
      <PartnerForm />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
