import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Events } from "./components/Events";
import { CultureSection } from "./components/CultureSection";
import { Identity } from "./components/Identity";
import { Gallery } from "./components/Gallery";
import { JoinSection } from "./components/JoinSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#080400", minHeight: "100vh" }}>
      <Nav />
      <Hero />
      <Events />
      <CultureSection />
      <Identity />
      <Gallery />
      <JoinSection />
      <Footer />
    </div>
  );
}
