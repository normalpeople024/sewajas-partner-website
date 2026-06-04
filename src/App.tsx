import { Header } from "@/components/landing/Header";
import { LandingPage } from "@/components/landing/LandingPage";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <LandingPage />
      <WhatsAppFloat />
    </main>
  );
}

export default App;
