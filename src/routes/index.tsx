import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { LandingPage } from "@/components/landing/LandingPage";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Program Kemitraan Jas Wisuda Kampus & Sekolah — sewajas.net" },
      { name: "description", content: "Vendor jas wisuda profesional untuk universitas, SMA/SMK, organisasi mahasiswa, dan panitia event formal di seluruh Indonesia. Sistem mitra menguntungkan, harga khusus institusi." },
      { name: "keywords", content: "kerja sama jas wisuda, vendor jas wisuda kampus, mitra jas wisuda, sewa jas wisuda universitas, vendor wisuda sekolah, jasa jas wisuda indonesia" },
      { property: "og:title", content: "Program Kemitraan Jas Wisuda — sewajas.net" },
      { property: "og:description", content: "Solusi penyedia jas wisuda profesional untuk kampus, sekolah, organisasi mahasiswa, dan panitia acara formal." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "sewajas.net",
        url: "https://sewajas.net",
        description: "Vendor jas wisuda profesional untuk kemitraan sekolah, kampus, dan event formal di Indonesia.",
        telephone: "+6285330000029",
        areaServed: "ID",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LandingPage />
      <WhatsAppFloat />
    </main>
  );
}
